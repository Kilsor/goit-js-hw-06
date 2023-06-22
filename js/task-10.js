const selectors = {
  input: document.querySelector("#controls input"), // Знаходимо елемент input за допомогою селектора
  createButton: document.querySelector("[data-create]"), // Знаходимо кнопку створення за допомогою селектора
  destroyButton: document.querySelector("[data-destroy]"), // Знаходимо кнопку видалення за допомогою селектора
  boxesContainer: document.querySelector("#boxes"), // Знаходимо контейнер за допомогою селектора
};

selectors.createButton.addEventListener("click", createBoxes); // Додаємо прослуховувач подій на кнопку створення
selectors.destroyButton.addEventListener("click", destroyBoxes); // Додаємо прослуховувач подій на кнопку видалення

// Функція createBoxes(amount) створює вказану кількість <div> елементів залежно від введеного значення amount і додає їх до контейнера div#boxes.
let lastSize = 30; // Зберігаємо останній розмір

function createBoxes() {
  const amount = selectors.input.value; // Отримуємо значення введене в input
  const boxes = Array.from({ length: amount }).map(() => {
    const size = lastSize + 10; // Оновлюємо розмір, додаючи 10 до останнього розміру
    lastSize = size; // Зберігаємо новий розмір для наступного елемента
    const box = createBox(size); // Створюємо <div> елемент з вказаним розміром
    return box;
  });

  selectors.boxesContainer.append(...boxes); // Додаємо створені <div> елементи до контейнера
}

function destroyBoxes() {
  selectors.boxesContainer.innerHTML = ""; // Очищуємо вміст контейнера
  lastSize = 30; // Скидаємо останній розмір, щоб розпочати з початкового розміру
}

function createBox(size) {
  const box = document.createElement("div"); // Створюємо новий <div> елемент
  box.style.width = `${size}px`; // Задаємо ширину елемента вказаним розміром
  box.style.height = `${size}px`; // Задаємо висоту елемента вказаним розміром
  box.style.backgroundColor = getRandomHexColor(); // Задаємо випадковий колір фону елемента
  return box; // Повертаємо створений <div> елемент
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`; // Генеруємо випадковий колір у форматі HEX
}
