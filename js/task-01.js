const categoriesList = document.querySelectorAll(".item"); //знаходимо лішки

console.log(`Number of categories: ${categoriesList.length}`); //консолимо кількість лішок

categoriesList.forEach((category) => {
  //перебираємо лішки
  const categoryName = category.querySelector("h2").textContent; //знаходимо текст заголовку елемента (тегу <h2>)
  const categoryElements = category.querySelectorAll("li"); //знаходимо кількість елементів в категорії (усіх <li>, вкладених в нього).

  console.log(`Category: ${categoryName}`); //консолимо знаходимо текст заголовку елемента (тегу <h2>)
  console.log(`Elements: ${categoryElements.length}`); //консолимо кількість елементів в категорії (усіх <li>, вкладених в нього).
});
