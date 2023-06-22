const selectors = {
  form: document.querySelector(".login-form"), // Знаходимо форму
};

selectors.form.addEventListener("submit", handleSubmit); // Додаємо прослуховувача подій форми

// Створюємо подію
function handleSubmit(evt) {
  evt.preventDefault(); // Забороняємо перезавантаження сторінки

  const emailValue = selectors.form.elements.email.value.trim(); // Присвоюємо email значення з інпуту та використовуємо метод trim()
  const passwordValue = selectors.form.elements.password.value.trim(); // Присвоюємо пароль значення з інпуту та використовуємо метод trim()

  // Якщо якесь поле не заповнене, виводимо alert
  if (emailValue === "" || passwordValue === "") {
    alert("Будь ласка, заповніть усі поля форми.");
    return;
  }

  // Збираємо значення полів в об'єкт, де ім'я поля буде ім'ям властивості, а значення поля - значенням властивості
  const formData = new FormData(evt.currentTarget);
  const data = {};
  formData.forEach((value, key) => {
    data[key] = value;
  });

  console.log(data);
  selectors.form.reset();
}
