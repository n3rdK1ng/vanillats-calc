const setupNumberButton = (element: HTMLButtonElement, digit: number) => {
  element.innerHTML = digit.toString();
  element.addEventListener(
    "click",
    () =>
      (document.querySelector<HTMLDivElement>("#result")!.innerHTML +=
        digit.toString())
  );
};

const setupNumberButtons = () => {
  for (let i = 0; i < 10; i++) {
    const button = document.createElement("button");
    button.innerHTML = i.toString();
    document
      .querySelector<HTMLDivElement>("#number-buttons")!
      .appendChild(button);
    setupNumberButton(button, i);
  }
};

const setupClearButton = () => {
  const button = document.createElement("button");
  button.innerHTML = "AC";
  document.querySelector<HTMLDivElement>("#other-buttons")!.appendChild(button);
  button.addEventListener("click", () => {
    document.querySelector<HTMLDivElement>("#result")!.innerHTML = "";
  });
};

const setupBackspaceButton = () => {
  const button = document.createElement("button");
  button.innerHTML = "C";
  document.querySelector<HTMLDivElement>("#other-buttons")!.appendChild(button);
  button.addEventListener("click", () => {
    const result = document.querySelector<HTMLDivElement>("#result")!;
    result.innerHTML = result.innerHTML.slice(0, -1);
  });
};

const setupOperatorButton = (element: HTMLButtonElement, operator: string) => {
  element.innerHTML = operator;
  element.addEventListener("click", () => {
    document.querySelector<HTMLDivElement>("#result")!.innerHTML += operator;
  });
};

const setupOperatorButtons = () => {
  const operators = ["+", "-", "*", "/"];
  for (let i = 0; i < operators.length; i++) {
    const button = document.createElement("button");
    button.innerHTML = operators[i];
    document
      .querySelector<HTMLDivElement>("#operator-buttons")!
      .appendChild(button);
    setupOperatorButton(button, operators[i]);
  }
};

const setupEqualButton = () => {
  const button = document.createElement("button");
  button.innerHTML = "=";
  document.querySelector<HTMLDivElement>("#other-buttons")!.appendChild(button);
  button.addEventListener("click", () => {
    const result = document.querySelector<HTMLDivElement>("#result")!.innerHTML;
    document.querySelector<HTMLDivElement>("#result")!.innerHTML = eval(result);
  });
};

const setupDotButton = () => {
  const button = document.createElement("button");
  button.innerHTML = ".";
  document.querySelector<HTMLDivElement>("#other-buttons")!.appendChild(button);
  button.addEventListener("click", () => {
    document.querySelector<HTMLDivElement>("#result")!.innerHTML += ".";
  });
};

const setupButtons = () => {
  setupNumberButtons();
  setupClearButton();
  setupOperatorButtons();
  setupBackspaceButton();
  setupDotButton();
  setupEqualButton();
};

export default setupButtons;