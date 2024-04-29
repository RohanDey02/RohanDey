import { useEffect, useRef } from "react";
import LeftHeading from "../components/LeftHeading"
import Contact from "../components/Contact"
import Navbar from "../components/Navbar"
import Experience from "../components/Experience";
import OpenSource from "../components/OpenSource";
import Projects from "../components/Projects";

export default function Home() {
  const homeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateMousePos = (event: MouseEvent) => {
      if (!homeRef.current) return;

      const { clientX, clientY } = event;
      homeRef.current.style.setProperty("--x", `${clientX}px`);
      homeRef.current.style.setProperty("--y", `${clientY}px`);
    };

    window.addEventListener("mousemove", updateMousePos);

    return () => {
      window.removeEventListener("mousemove", updateMousePos);
    }
  }, []);

  return (<>
    <style>{`
      .mouse-radial-gradient {
        height: 100%;
        width: 100%;
        background-image: radial-gradient(
          circle 450px at var(--x) var(--y),
          rgba(29, 78, 216, 0.15),
          transparent 80%
        );
      }
    `}</style>

    <div ref={homeRef} className="mouse-radial-gradient">
      <div className="lg:flex">
        <div>
          <LeftHeading />
          <Navbar />
        </div>
        <div className="main-div-right">
          <Contact />
          <Experience />
          <OpenSource />
          <Projects />
        </div>
      </div>
    </div>
  </>);
}
