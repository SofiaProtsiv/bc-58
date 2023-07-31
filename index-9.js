const buttons = [...document.querySelectorAll("[data-action")];

buttons.forEach((button) => {
  switch (button.dataset.action) {
    case "plus":
      button.addEventListener("click", () => console.log("PLUS"));
      break;
    case "minus":
      button.addEventListener("click", () => console.log("MINUS"));
      break;
    case "multiply":
      button.addEventListener("click", () => console.log("multiply"));
      break;
    case "devide":
      button.addEventListener("click", () => console.log("devide"));
      break;
    default:
      break;
  }
});

console.log(buttons);
