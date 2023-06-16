//Створюємо об'єкт селекторів для зручності
const selectors = {
  box: document.querySelector("#value"), //знаходимо span
  incrementBtn: document.querySelector('[data-action="increment"]'), //знаходимо кнопку зменшення
  decrementBtn: document.querySelector('[data-action="decrement"]'), //знаходимо кнопку збільшення
};

selectors.incrementBtn.addEventListener("click", hendlerIncrement); //додаємо прослуховувача подій кнопки зменшення
selectors.decrementBtn.addEventListener("click", hendlerDecrement); //додаємо прослуховувача подій кнопки збільшення

let counterValue = 0; //Створи змінну counterValue, в якій буде зберігатися поточне значення лічильника та ініціалізуй її значенням 0.

//створюємо подію для кнопки зменшення
function hendlerIncrement() {
  counterValue += 1;
  value.textContent = counterValue;
}

//створюємо подію для кнопки збільшення
function hendlerDecrement() {
  counterValue -= 1;
  value.textContent = counterValue;
}
