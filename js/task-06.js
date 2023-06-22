//Створюємо об'єкт селекторів для зручності
const selectors = {
  input: document.querySelector("#validation-input"), //знаходимо input
};

selectors.input.addEventListener("blur", handlerQuery); //додаємо прослуховувача подій інпуту

//створюємо подію
function handlerQuery() {
  const inputValidEl = Number(selectors.input.dataset.length); // Отримуємо значення атрибута data-length та перетворюємо його в число
  const inputInvalidEl = selectors.input.value.length; // Отримуємо довжину тексту, введеного в елемент input

  const bool = inputValidEl === inputInvalidEl; // Перевіряємо, чи відповідає довжина введеного тексту значенню data-length
  selectors.input.classList.toggle("valid", bool); // Додаємо або видаляємо клас "valid" в залежності від значення bool
  selectors.input.classList.toggle("invalid", !bool); // Додаємо або видаляємо клас "invalid" в залежності від значення bool (інвертуємо його)
}

//створюємо подію
// function handlerQuery() {
//   if (
//     selectors.input.value.length ===
//     Number(selectors.input.getAttribute("data-length"))
//   ) {
//     selectors.input.classList.remove("invalid");
//     selectors.input.classList.add("valid");
//   } else {
//     selectors.input.classList.remove("valid");
//     selectors.input.classList.add("invalid");
//   }
// }
