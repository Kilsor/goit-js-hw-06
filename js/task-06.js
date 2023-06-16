//Створюємо об'єкт селекторів для зручності
const selectors = {
  input: document.querySelector("#validation-input"), //знаходимо input
};

selectors.input.addEventListener("blur", handlerQuery); //додаємо прослуховувача подій інпуту

//створюємо подію
function handlerQuery() {
  if (
    selectors.input.value.length ===
    Number(selectors.input.getAttribute("data-length"))
  ) {
    selectors.input.classList.remove("invalid");
    selectors.input.classList.add("valid");
  } else {
    selectors.input.classList.remove("valid");
    selectors.input.classList.add("invalid");
  }
}
