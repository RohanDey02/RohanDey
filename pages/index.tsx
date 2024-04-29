import { useEffect, useRef, useState } from "react";
import LeftHeading from "../components/LeftHeading"
import Contact from "../components/Contact"
import Navbar from "../components/Navbar"
import Experience from "../components/Experience";
import OpenSource from "../components/OpenSource";
import Projects from "../components/Projects";

export default function Home() {
  const homeRef = useRef<HTMLDivElement>(null);
  const experienceRef = useRef<HTMLDivElement>(null);
  const openSourceRef = useRef<HTMLDivElement>(null);
  const projectRef = useRef<HTMLDivElement>(null);

  const [scrollAmt, setScrollAmt] = useState<number>(0);

  const updateMousePos = (event: MouseEvent) => {
    if (!homeRef.current) return;

    const { clientX, clientY } = event;
    homeRef.current.style.setProperty("--x", `${clientX}px`);
    homeRef.current.style.setProperty("--y", `${clientY + scrollAmt}px`);
  };

  const updateMouseWheel = (event: WheelEvent) => {
    if (!homeRef.current) return;
    const { deltaY } = event;
    const { clientHeight } = homeRef.current;
    if (deltaY > 0 && scrollAmt <= clientHeight - window.innerHeight) {
      setScrollAmt(Math.max(scrollAmt + deltaY, 0));
    }

    if (deltaY < 0) {
      setScrollAmt(Math.max(scrollAmt + deltaY, 0));
    }
  }

  useEffect(() => {
    window.addEventListener("mousemove", updateMousePos);
    window.addEventListener("wheel", updateMouseWheel);

    return () => {
      window.removeEventListener("mousemove", updateMousePos);
      window.removeEventListener("wheel", updateMouseWheel);
    }
  }, [scrollAmt]);

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
          <Navbar expRef={experienceRef} osRef={openSourceRef} projRef={projectRef} />
        </div>
        <div className="main-div-right">
          <Contact />
          <Experience refProp={experienceRef} />
          <OpenSource refProp={openSourceRef} />
          <Projects refProp={projectRef} />
        </div>
      </div>
    </div>
  </>);
}
