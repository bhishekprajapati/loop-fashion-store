import "../locomotive.css";
import LocomotiveScroll from "locomotive-scroll";

const locomotiveScroll = new LocomotiveScroll({
  lenisOptions: {
    wrapper: window,
    content: document.documentElement,
    duration: 2,
    orientation: "vertical",
    gestureOrientation: "vertical",
    smoothWheel: true,
    wheelMultiplier: 0.5,
    touchMultiplier: 2,
    normalizeWheel: true,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  },
});

window.addEventListener("horizontalParallaxEvent", (e) => {
  const { target, progress } = e.detail;
  const translate = (1 - progress) * 150;
  target.style.transform = `translateX(${translate}px)`;
});
