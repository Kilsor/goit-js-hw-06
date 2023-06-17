const selectors = {
  fontSizeControl: document.querySelector("#font-size-control"), //знаходимо input
  text: document.querySelector("#text"), //знаходимо спан
};

selectors.fontSizeControl.addEventListener("input", handleFontSizeChange); //додаємо прослуховувача подій інпуту

//створюємо подію
function handleFontSizeChange() {
  selectors.text.style.fontSize = selectors.fontSizeControl.value + "px";
}
