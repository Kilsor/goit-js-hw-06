const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatoes",
  "Herbs",
  "Condiments",
];

const list = document.querySelector("#ingredients"); //Знаходимо елемент за ID

const items = ingredients.map((name) => {
  //перебираємо масив інгредієнтів і створюємо масив лішок
  const li = document.createElement("li"); //створюємо лішку
  li.classList.add("item"); //додаємо клас
  li.textContent = name; //додаємо текстовий контент
  return li; // повертаємо готову лішку
});

list.append(...items); //поміщаємо список наших елементів в DOM, розпиливши масив лішок. Тому, що метод append приймає все в якості списку
