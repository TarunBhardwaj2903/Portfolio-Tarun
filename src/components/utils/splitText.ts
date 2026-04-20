import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function setSplitText() {
  ScrollTrigger.config({ ignoreMobileResize: true });
  if (window.innerWidth < 900) return;

  const paras = document.querySelectorAll<HTMLElement>(".para");
  const titles = document.querySelectorAll<HTMLElement>(".title");

  const triggerStart = window.innerWidth <= 1024 ? "top 60%" : "20% 60%";
  const toggleActions = "play pause resume reverse";

  paras.forEach((para) => {
    para.classList.add("visible");
    gsap.fromTo(
      para,
      { autoAlpha: 0, y: 60, filter: "blur(4px)" },
      {
        autoAlpha: 1,
        y: 0,
        filter: "blur(0px)",
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: para.parentElement?.parentElement ?? para,
          toggleActions,
          start: triggerStart,
        },
      }
    );
  });

  titles.forEach((title) => {
    gsap.fromTo(
      title,
      { autoAlpha: 0, y: 80, rotate: 6 },
      {
        autoAlpha: 1,
        y: 0,
        rotate: 0,
        duration: 0.9,
        ease: "power2.out",
        scrollTrigger: {
          trigger: title.parentElement?.parentElement ?? title,
          toggleActions,
          start: triggerStart,
        },
      }
    );
  });
}
