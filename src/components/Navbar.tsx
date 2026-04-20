import { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import HoverLinks from "./HoverLinks";
import { gsap } from "gsap";
import Lenis from "lenis";
import "./styles/Navbar.css";

gsap.registerPlugin(ScrollTrigger);
export let smoother: Lenis;

const Navbar = () => {
  useEffect(() => {
    smoother = new Lenis({
      duration: 1.4,
      smoothWheel: true,
    });
    smoother.stop();
    window.scrollTo(0, 0);

    smoother.on("scroll", ScrollTrigger.update);
    const rafUpdate = (time: number) => smoother.raf(time * 1000);
    gsap.ticker.add(rafUpdate);
    gsap.ticker.lagSmoothing(0);

    let links = document.querySelectorAll(".header ul a");
    links.forEach((elem) => {
      let element = elem as HTMLAnchorElement;
      element.addEventListener("click", (e) => {
        if (window.innerWidth > 1024) {
          e.preventDefault();
          let target = (e.currentTarget as HTMLAnchorElement).getAttribute("data-href");
          if (target) smoother.scrollTo(target);
        }
      });
    });
    const onResize = () => ScrollTrigger.refresh();
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("resize", onResize);
      gsap.ticker.remove(rafUpdate);
      smoother.destroy();
    };
  }, []);
  return (
    <>
      <div className="header">
        <a href="/#" className="navbar-title" data-cursor="disable">
          TB
        </a>
        <a
          href="mailto:tarunbhardwaj2903@gmail.com"
          className="navbar-connect"
          data-cursor="disable"
        >
          tarunbhardwaj2903@gmail.com
        </a>
        <ul>
          <li>
            <a data-href="#about" href="#about">
              <HoverLinks text="ABOUT" />
            </a>
          </li>
          <li>
            <a data-href="#work" href="#work">
              <HoverLinks text="WORK" />
            </a>
          </li>
          <li>
            <a data-href="#contact" href="#contact">
              <HoverLinks text="CONTACT" />
            </a>
          </li>
        </ul>
      </div>

      <div className="landing-circle1"></div>
      <div className="landing-circle2"></div>
      <div className="nav-fade"></div>
    </>
  );
};

export default Navbar;
