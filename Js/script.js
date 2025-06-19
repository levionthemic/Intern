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
  try {
    inputDisplay.value = eval(inputDisplay.value);
    if (inputDisplay.value === 'Infinity')
      throw new Error('Divided by 0!')
  } catch (error) {
    alert(error)
    inputDisplay.value = 0
  }
});
