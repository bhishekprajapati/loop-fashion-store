import "../locomotive.css";
import LocomotiveScroll from "locomotive-scroll";
import Home from "./Home";

function round(number, places = 2) {
  const multiplier = Math.pow(10, places);
  number *= multiplier;
  return Math.floor(number) / multiplier;
}

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

window.addEventListener("rotateEvent", (e) => {
  const { target, progress } = e.detail;
  target.style.transform = `rotate(${
    progress * target.dataset.scrollRotateMax
  }deg)`;
});

window.addEventListener("gradientFillEvent", (e) => {
  const { target, progress } = e.detail;
  const targetPropName = target.dataset.scrollTargetProp;
  const targetPropValue = round(progress * 100 * 4);
  target.style.setProperty(`--${targetPropName}`, `${targetPropValue}%`);
});

document
  .getElementById("scroll-to-top")
  .addEventListener("click", (e) => locomotiveScroll.scrollTo("body"));

const { createApp, ref } = Vue;
const app = createApp(Home);
app.mount("#app");
