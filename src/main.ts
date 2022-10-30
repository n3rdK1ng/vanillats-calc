import "./style.css";
import setupButtons from "./buttons";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div>
    <h1 id="result"></h1>
    <div class=card>
      <div id="operator-buttons"></div>
      <div id="number-buttons"></div>
      <div id="other-buttons"></div>
    </div>
  </div>
`;

setupButtons();



