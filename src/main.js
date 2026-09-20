import "./style.css";
import heroImg from "./assets/hero.png";
import javascriptLogo from "./assets/javascript.svg";
import viteLogo from "./assets/vite.svg";
import { setupCounter } from "./counter.js";

document.querySelector("#app").innerHTML = '<div id="app"></div>';
setupCounter(document.querySelector("#counter"));
