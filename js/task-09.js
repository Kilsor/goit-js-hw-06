const selectors = {
  colorSpan: document.querySelector(".color"), //знаходимо спан
  changeColorButton: document.querySelector(".change-color"), //знаходимо кнопку
};

//створюємо подію
selectors.changeColorButton.addEventListener("click", () => {
  document.body.style.backgroundColor = getRandomHexColor(); //змінюємо кольори фону елемента <body>
  selectors.colorSpan.textContent = getRandomHexColor(); //виводимо значення кольору в span.color.
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
