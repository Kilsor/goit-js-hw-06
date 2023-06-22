const selectors = {
  form: document.querySelector(".login-form"), // Знаходимо елемент форми за допомогою класу
};

selectors.form.addEventListener("submit", handleSubmit); // Додаємо прослуховувач подій на форму

function handleSubmit(evt) {
  evt.preventDefault(); // Забороняємо перезавантаження сторінки при відправці форми

  const emailValue = selectors.form.elements.email.value.trim(); // Отримуємо значення поля email з форми та використовуємо метод trim() для видалення зайвих пробілів
  const passwordValue = selectors.form.elements.password.value.trim(); // Отримуємо значення поля password з форми та використовуємо метод trim() для видалення зайвих пробілів

  if (emailValue === "" || passwordValue === "") {
    // Перевіряємо, чи якесь з полів не заповнене
    alert("Будь ласка, заповніть усі поля форми.");
    return;
  }

  const formData = new FormData(evt.currentTarget); // Створюємо об'єкт FormData на основі форми
  const data = {};
  formData.forEach((value, key) => {
    // Проходимося по кожному полю форми і додаємо значення до об'єкта data
    data[key] = value;
  });

  console.log(data); // Виводимо об'єкт зі зібраними даними в консоль
  selectors.form.reset(); // Очищуємо форму
}
