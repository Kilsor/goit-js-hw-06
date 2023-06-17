const selectors = {
  form: document.querySelector(".login-form"), //знаходимо форму
};

selectors.form.addEventListener("submit", handleSubmit); //додаємо прослуховувача подій форми

//створюємо подію
function handleSubmit(evt) {
  evt.preventDefault(); // Забороняємо перезавантаження сторінки

  const emailValue = selectors.form.elements.email.value; //присвоюємо email значення з інпуту
  const passwordValue = selectors.form.elements.password.value; //присвоюємо пароль значення з інпуту

  //Якщо якесь поле не заповнене виводе alert
  if (emailValue === "" || passwordValue === "") {
    alert("Будь ласка, заповніть усі поля форми.");
    return;
  }
  // Збираємо значення полів в об'єкт, де ім'я поля буде ім'ям властивості, а значення поля - значенням властивост

  const formData = new FormData(evt.currentTarget);
  const data = {};
  formData.forEach((value, key) => {
    data[key] = value;
  });

  console.log(data);
  selectors.form.reset();
}
