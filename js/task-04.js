//Створюємо об'єкт селекторів для зручності
const selectors = {
  box: document.querySelector("#value"), // Знаходимо елемент span за допомогою селектора
  incrementBtn: document.querySelector('[data-action="increment"]'), // Знаходимо кнопку збільшення за допомогою селектора
  decrementBtn: document.querySelector('[data-action="decrement"]'), // Знаходимо кнопку зменшення за допомогою селектора
};

selectors.incrementBtn.addEventListener("click", hendlerIncrement); // Додаємо прослуховувач подій на кнопку збільшення
selectors.decrementBtn.addEventListener("click", hendlerDecrement); // Додаємо прослуховувач подій на кнопку зменшення

let counterValue = 0; // Ініціалізуємо змінну counterValue значенням 0, в якій буде зберігатися поточне значення лічильника

function hendlerIncrement() {
  counterValue += 1; // Збільшуємо значення лічильника на 1
  value.textContent = counterValue; // Задаємо нове значення лічильника елементу span
}

function hendlerDecrement() {
  counterValue -= 1; // Зменшуємо значення лічильника на 1
  value.textContent = counterValue; // Задаємо нове значення лічильника елементу span
}
