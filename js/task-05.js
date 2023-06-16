//Створюємо об'єкт селекторів для зручності
const selectors = {
  input: document.querySelector("#name-input"), //знаходимо input
  output: document.querySelector("#name-output"), //знаходимо output
};

selectors.input.addEventListener("input", handlerQuery); //додаємо прослуховувача подій інпуту

//створюємо подію для аутпуту
function handlerQuery(evt) {
  selectors.output.textContent = evt.currentTarget.value; //присвоюємо текстове значення з інпуту
}
