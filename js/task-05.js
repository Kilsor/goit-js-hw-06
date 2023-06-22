//Створюємо об'єкт селекторів для зручності
const selectors = {
  input: document.querySelector("#name-input"), //знаходимо input
  output: document.querySelector("#name-output"), //знаходимо output
};

selectors.input.addEventListener("input", handlerQuery); //додаємо прослуховувача подій інпуту

//створюємо подію для аутпуту

function handlerQuery(evt) {
  const name = evt.currentTarget.value; // Отримуємо значення з інпуту
  selectors.output.textContent = name ? name : "Anonymous"; // Встановлюємо значення відповідно до умови
}
