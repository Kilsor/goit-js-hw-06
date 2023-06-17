const selectors = {
  input: document.querySelector("#controls input"), //знаходимо інпут
  createButton: document.querySelector("[data-create]"), //знаходимо кнопку створення
  destroyButton: document.querySelector("[data-destroy]"), //знаходимо кнопку видалення
  boxesContainer: document.querySelector("#boxes"), //знаходимо контейнер
};

selectors.createButton.addEventListener("click", createBoxes); //додаємо прослуховувача подій кнопки створення
selectors.destroyButton.addEventListener("click", destroyBoxes); //додаємо прослуховувача подій кнопки видалення

//Створюємо функцію createBoxes(amount), яка приймає один параметр - число. Функція створює стільки <div>, скільки вказано в amount і додає їх у div#boxes.
let lastSize = 30; // Зберігаємо останній розмір

function createBoxes() {
  const amount = selectors.input.value;
  const boxes = Array.from({ length: amount }).map(() => {
    const size = lastSize + 10; // Оновлюємо розмір на основі останнього розміру
    lastSize = size; // Зберігаємо новий розмір для наступного елемента
    const box = createBox(size);
    return box;
  });

  selectors.boxesContainer.append(...boxes);
}

function destroyBoxes() {
  selectors.boxesContainer.innerHTML = "";
  lastSize = 30; // Скидаємо останній розмір при очищенні
}

function createBox(size) {
  const box = document.createElement("div");
  box.style.width = `${size}px`;
  box.style.height = `${size}px`;
  box.style.backgroundColor = getRandomHexColor();
  return box;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
