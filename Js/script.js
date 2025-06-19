const buttons = document.querySelectorAll("button:not([id])");
const equalButton = document.querySelector("button[id='equal']");
const inputDisplay = document.querySelector("input");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    let currentExpression = inputDisplay.value;

    if (currentExpression === "0") {
      currentExpression = "";
      inputDisplay.value = currentExpression;
    }

    currentExpression += button.innerHTML !== "x" ? button.innerHTML : "*";

    inputDisplay.value = currentExpression;
  });
});

equalButton.addEventListener("click", () => {
  inputDisplay.value = eval(inputDisplay.value);
});
