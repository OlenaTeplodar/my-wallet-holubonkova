// работа с именем и кнопкой вихода- сначала - невидимое, потом - при сабмите - видим, плюс показываем главный екран
// refs.userName.classList.add("not-show");
// refs.goOut.classList.add("not-show");

// //слушаем сабмит на модалках
// // refs.formSingUp.addEventListener("submit", onFormSingUpSubmit);
// refs.formSingUp.addEventListener("submit", (e) => {
//   e.preventDefault();
//   console.log("yes is submit");
// });
// // refs.singUpSubmit.addEventListener("click", onShowMainWindow);
// refs.singInSubmit.addEventListener("click", onShowMainWindow);
// refs.singInSubmit.addEventListener("click", onTableBuild);
// refs.singUpSubmit.addEventListener("click", onTableBuild);

//функция показа основного экрана (4 окно)
// function onShowMainWindow(e) {
//   e.preventDefault();
//   refs.userName.classList.remove("not-show");
//   refs.goOut.classList.remove("not-show");
//   refs.openModalBtnSingIn.classList.add("is-hidden");
//   refs.openModalBtnSingUp.classList.add("is-hidden");
//   refs.backdrop.classList.add("is-hidden");
//   refs.modalSingIn.classList.add("is-hidden");
//   // closeModal();
//   mainWindowShow();
//   // statisticRender();
//   console.log("функція onShowMainWindow");
//   onFormSingUpSubmit(e);
// }

// function mainWindowShow() {
//   refs.aboutWallet.classList.add("not-show");
//   console.log("функція показу главного вікна");
// }
// //  работа с именем - конец

// // Кнопка ВИХІД
// refs.goOut.addEventListener("click", (e) => {
//   document.location.reload();
// });
// // кнопка ВИХІД Кінець

// працюємо з локал сторидж

// const STORAGE_NAME = "user-name";
// const STORAGE_EMAIL = "user-email";
// const STORAGE_PASSWORD = "user-password";
// // Register Form
// const formRegisterData = {};

// function getRegisterData() {
//   try {

//   } catch (error) {

//   }
// }

// function onFormSingUpSubmit() {
//   // event.preventDefault();
//   console.log("submit");
  // const formElements = event.currentTarget.elements;
  // const name = formElements.userName.value;
  // const password = formElements.userPassword.value;
  // const email = formElements.userEmail.value;
  // const emailControl = formElements.userEmailControl.value;
  // const truName = userNameValidation(name);
  // const truPassword = userPasswordValidation(password);
  // const truEmail = userEmailValidation(email);
  // const truEmailControl = userEmailControl(emailControl, email);
  // console.log(name, password, email, emailControl);
  // // console.log(truEmail, truEmailControl,truName, truPassword);
  // if ( !truName || !truPassword || !truEmail || !truEmailControl) {
  //   return
  // } else {
//   refs.modalSingUp.disabled = !true;
// }
// }

// ----opt

// function userNameValidation(name)
// {
//   const aName = name.trim();
// const nameLen = aName.length;
// const mx = 16;
// const my = 6;
//   if (nameLen == 0 || nameLen >= mx || nameLen < my) {
//     refs.nameError.textContent = `Długość nazwy użytkownika musi wynosić co najmniej ${my} znaków i nie więcej niż ${mx} `;
//     alert("Długość nazwy użytkownika musi wynosić co najmniej 6 znaków i nie więcej niż 16 " + mx + " to " + my);
//     refs.nameError.className = "error active";
//     refs.userName.textContent = aName.value;
//     return false;
//   } else {
//     const letters = /^[A-Za-z0-9]+$/;
//     if (aName.match(letters)) {
//       refs.nameError.textContent = "";
//       refs.nameError.className = "error";
//       return true;
//   } else {
//     refs.nameError.textContent = 'Nazwa użytkownika może zawierać tylko litery i cyfry';
//     alert("Nazwa użytkownika może zawierać tylko litery i cyfry");
//     refs.nameError.className = "error active";
//     return false;
//   };
// };
// }

// function userPasswordValidation(password)
// {
//   const aPassword = password.trim();
// const passwordLen = aPassword.length;
// const px = 6;
//   if (passwordLen == 0 || passwordLen < px) {
//     refs.passwordError.textContent = `Długość hasło musi wynosić co najmniej ${px} znaków`;
//     alert("Długość Hasło musi wynosić co najmniej 6 znaków ");
//     refs.passwordError.className = "error active";
//     return false;
//   } else {
//       refs.passwordError.textContent = "";
//       refs.passwordError.className = "error";
//       return true;
//   }
// };

// function userEmailValidation(email) {
//   const validRegex =
//     /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?: \.[a-zA-Z0-9-]+)*$/;
//   if (email.match(validRegex)) {
//       // In case there is an error message visible, if the field
//       // is valid, we remove the error message.
//       refs.emailError.textContent = ""; // Reset the content of the message
//       refs.emailError.className = "error";
//       return true; // Reset the visual state of the message
//     } else {
//       refs.passwordError.textContent = `Wprowadź swój email`;
//       alert("Email!! ");
//       refs.passwordError.className = "error active";
//       return false;
//     }
// }

// function userEmailControl(emailControl, email) {
//   if (emailControl == email) {
//     // In case there is an error message visible, if the field
//     // is valid, we remove the error message.
//     refs.emailError.textContent = ""; // Reset the content of the message
//     refs.emailError.className = "error";
//     return true; // Reset the visual state of the message
//   } else {
//     refs.passwordError.textContent = `Ten adres e-mail nie pasuje, zwróć uwagę na szczegóły.`;
//     alert("Email!! ");
//     refs.passwordError.className = "error active";
//     return false;
//   }
// }
