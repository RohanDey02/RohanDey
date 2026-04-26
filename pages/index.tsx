import { useEffect, useRef, useState } from "react";
import LeftHeading from "../components/LeftHeading"
import Contact from "../components/Contact"
import Navbar from "../components/Navbar"
import Experience from "../components/Experience";
import OpenSource from "../components/OpenSource";
import Projects from "../components/Projects";

type SectionId = "experience" | "open-source" | "projects";

export default function Home() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const experienceRef = useRef<HTMLDivElement>(null);
  const openSourceRef = useRef<HTMLDivElement>(null);
  const projectRef = useRef<HTMLDivElement>(null);

  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState<SectionId>("experience");
  const [isHoveringInteractive, setIsHoveringInteractive] = useState(false);

  const sectionMap: Record<SectionId, React.RefObject<HTMLDivElement | null>> = {
    "experience": experienceRef,
    "open-source": openSourceRef,
    "projects": projectRef,
  };

  const handleNavigate = (id: SectionId) => {
    setActiveSection(id);
    const target = sectionMap[id].current;
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  useEffect(() => {
    const updateMousePos = (event: MouseEvent) => {
      setMousePos({ x: event.clientX, y: event.clientY });
    };

    const updateHoverState = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;
      if (!target) {
        setIsHoveringInteractive(false);
        return;
      }

      const interactive = target.closest("a, button, input, textarea, select, label, [role='button']");
      setIsHoveringInteractive(Boolean(interactive));
    };

    const updateScrollProgress = () => {
      const doc = document.documentElement;
      const scrollable = doc.scrollHeight - doc.clientHeight;
      if (scrollable <= 0) {
        setScrollProgress(0);
        return;
      }
      setScrollProgress(window.scrollY / scrollable);
    };

    window.addEventListener("mousemove", updateMousePos);
    window.addEventListener("mouseover", updateHoverState);
    window.addEventListener("scroll", updateScrollProgress, { passive: true });
    updateScrollProgress();

    return () => {
      window.removeEventListener("mousemove", updateMousePos);
      window.removeEventListener("mouseover", updateHoverState);
      window.removeEventListener("scroll", updateScrollProgress);
    };
  }, []);

  useEffect(() => {
    const refs: { id: SectionId; ref: React.RefObject<HTMLDivElement | null> }[] = [
      { id: "experience", ref: experienceRef },
      { id: "open-source", ref: openSourceRef },
      { id: "projects", ref: projectRef },
    ];

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

    refs.forEach(({ ref }) => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={wrapperRef}
      className="site-shell"
      style={{
        ["--mouse-x" as string]: `${mousePos.x}px`,
        ["--mouse-y" as string]: `${mousePos.y}px`,
      }}
    >
      <div className="scroll-progress" style={{ transform: `scaleX(${Math.min(1, Math.max(0, scrollProgress))})` }} />
      <div className="aurora-layer" aria-hidden="true" />
      <div className="noise-layer" aria-hidden="true" />
      <div className="spotlight-layer" aria-hidden="true" />
      <div
        aria-hidden="true"
        className={`custom-cursor-ring ${isHoveringInteractive ? "custom-cursor-ring-active" : ""}`}
        style={{
          left: `${mousePos.x}px`,
          top: `${mousePos.y}px`,
        }}
      />
      <div
        aria-hidden="true"
        className={`custom-cursor-dot ${isHoveringInteractive ? "custom-cursor-dot-active" : ""}`}
        style={{
          left: `${mousePos.x}px`,
          top: `${mousePos.y}px`,
        }}
      />

      <div className="layout-grid">
        <aside className="left-column">
          <LeftHeading />
          <Navbar activeSection={activeSection} onNavigate={handleNavigate} />
        </aside>

        <main className="main-div-right right-column">
          <Contact />
          <Experience refProp={experienceRef} sectionId="experience" />
          <OpenSource refProp={openSourceRef} sectionId="open-source" />
          <Projects refProp={projectRef} sectionId="projects" />
        </main>
      </div>
    </div>
  );
}
