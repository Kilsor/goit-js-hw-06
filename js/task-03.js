const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const list = document.querySelector(".gallery"); //Знаходимо елемент за класом
const markup = images //перебираємо масив та деструктуризуємо потрібні властивості
  .map(
    //створюємо приклад шаблонної розмітки в HTML (зручно прописати в самому HTML та скопіпастити в JS)
    ({ url, alt }) => `
    <li class="gallery-item">
    <img src="${url}" alt="${alt}" class="gallery-image">
  </li>
`
  )
  .join(""); //перетворюємо масив в рядок

list.insertAdjacentHTML("beforeend", markup); //додаємо в контейнер розмітку
console.log(markup);
