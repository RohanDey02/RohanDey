import { useEffect, useState } from "react";
import Hero from "../components/Hero";
import Contact from "../components/Contact";
import Navbar, { SectionId } from "../components/Navbar";
import Experience from "../components/Experience";
import OpenSource from "../components/OpenSource";
import Projects from "../components/Projects";

const sectionIds: SectionId[] = ["experience", "open-source", "projects"];

export default function Home() {
  const [mousePos, setMousePos] = useState({ x: -200, y: -200 });
  const [cursorVisible, setCursorVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState<SectionId>("experience");
  const [isHoveringInteractive, setIsHoveringInteractive] = useState(false);
  const [loaderPhase, setLoaderPhase] = useState<"visible" | "closing" | "hidden">("visible");

  useEffect(() => {
    const closeLoaderTimer = window.setTimeout(() => {
      setLoaderPhase("closing");
    }, 1100);

    const hideLoaderTimer = window.setTimeout(() => {
      setLoaderPhase("hidden");
    }, 1700);

    return () => {
      window.clearTimeout(closeLoaderTimer);
      window.clearTimeout(hideLoaderTimer);
    };
  }, []);

  useEffect(() => {
    const updateMousePos = (event: MouseEvent) => {
      setMousePos({ x: event.clientX, y: event.clientY });
      setCursorVisible(true);
    };

    const hideCursor = () => setCursorVisible(false);

    const updateHoverState = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;
      const interactive = target?.closest("a, button, input, textarea, select, label, [role='button']");
      setIsHoveringInteractive(Boolean(interactive));
    };

    const updateScrollProgress = () => {
      const doc = document.documentElement;
      const scrollable = doc.scrollHeight - doc.clientHeight;
      setScrollProgress(scrollable > 0 ? window.scrollY / scrollable : 0);
    };

    window.addEventListener("mousemove", updateMousePos);
    window.addEventListener("mouseover", updateHoverState);
    document.documentElement.addEventListener("mouseleave", hideCursor);
    window.addEventListener("scroll", updateScrollProgress, { passive: true });
    updateScrollProgress();

    return () => {
      window.removeEventListener("mousemove", updateMousePos);
      window.removeEventListener("mouseover", updateHoverState);
      document.documentElement.removeEventListener("mouseleave", hideCursor);
      window.removeEventListener("scroll", updateScrollProgress);
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible.length > 0) {
          const section = visible[0].target.getAttribute("data-section") as SectionId | null;
          if (section) {
            setActiveSection(section);
          }
        }
      },
      { threshold: [0.2, 0.4, 0.6], rootMargin: "-10% 0px -45% 0px" }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) {
        observer.observe(el);
      }
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div
      className={`site-shell ${loaderPhase !== "hidden" ? "site-shell-loading" : ""}`}
      style={{
        ["--mouse-x" as string]: `${mousePos.x}px`,
        ["--mouse-y" as string]: `${mousePos.y}px`,
      }}
    >
      {loaderPhase !== "hidden" && (
        <div className={`intro-loader ${loaderPhase === "closing" ? "intro-loader-exit" : ""}`} role="status" aria-label="Loading portfolio">
          <div className="intro-loader-content">
            <p className="intro-loader-tag">Initializing Portfolio</p>
            <p className="intro-loader-title">Rohan Dey</p>
            <div className="intro-loader-bars" aria-hidden="true">
              <span className="intro-loader-bar" />
              <span className="intro-loader-bar" />
              <span className="intro-loader-bar" />
            </div>
          </div>
        </div>
      )}

      <div aria-hidden="true" className="scroll-progress" style={{ transform: `scaleX(${Math.min(1, Math.max(0, scrollProgress))})` }} />
      <div className="aurora-layer" aria-hidden="true" />
      <div className="noise-layer" aria-hidden="true" />
      <div className="spotlight-layer" aria-hidden="true" />
      <div
        aria-hidden="true"
        className={`custom-cursor-ring ${isHoveringInteractive ? "custom-cursor-ring-active" : ""}`}
        style={{ left: `${mousePos.x}px`, top: `${mousePos.y}px`, opacity: cursorVisible ? 1 : 0 }}
      />
      <div
        aria-hidden="true"
        className="custom-cursor-dot"
        style={{ left: `${mousePos.x}px`, top: `${mousePos.y}px`, opacity: cursorVisible ? 1 : 0 }}
      />

      <Navbar activeSection={activeSection} onNavigate={setActiveSection} />

      <main>
        <Hero />
        <Contact />
        <Experience sectionId="experience" />
        <OpenSource sectionId="open-source" />
        <Projects sectionId="projects" />
      </main>

      <footer className="wrap pb-12">
        <p className="border-t border-white/[.08] pt-7 text-sm">© {new Date().getFullYear()} Rohan Dey</p>
      </footer>
    </div>
  );
}
