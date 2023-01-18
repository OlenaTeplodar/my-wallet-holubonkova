import { fetchTransaction } from "./api.js";
import { refs } from "./refs.js";
import {
  creatTransactionArrayObj,
  arrayOfTransactions,
  lengthOfTransaction,
} from "./transaction-obj.js";
// import onSaldo from "./saldo.js";
import { onTableBuild } from './filling-table-desctop.js';
import { closeModal, onEscClick } from "./close-modal.js";
import openModalSingUp from "./op-mod-sing-up.js";
import openModalSingIn from "./op-mod-sing-in.js";

import { onSaldo } from "./barchart-data.js";
import { vieArrayTypeAll, lengthArray } from "./donchart-data.js";


import { checkingSingUpForm } from "./saving-checking.js";

checkingSingUpForm();
// const ctx = document.getElementById("myChart");



// let selectedTr;

// refs.tableStatistic.onclick = function (event) {
//   let target = event.target; // где был клик?

//   if (target.tagName != "TD") return; // не на TD? тогда не интересует

//   highlight(target); // подсветить TD
// };

// function highlight(tr) {
//   if (selectedTr) {
//     // убрать существующую подсветку, если есть
//     selectedTr.classList.remove("desktop");
//     console.log('cnjxrf!!!')
//   }
//   selectedTr = tr;
//   // selectedTr.classList.add("desktop"); // подсветить новый td
// }

// lengthOfTransaction();

// получаем данніе для построения гистограм



// onSaldo();


// // будуємо діаграму

// function addBarChart() {
//   onSaldo();
//   new Chart(ctx, {
//     type: "bar",
//     data: {
//       labels: uniqueDate,
//       datasets: [
//         {
//           label: "# of Votes",
//           data: saldoArray,
//           borderWidth: 1,
//         },
//       ],
//     },
//   });
// }

// document.querySelector(".about-wallet").addEventListener("click", addBarChart);



// работа с именем и кнопкой вихода- сначала - невидимое, потом - при сабмите - видим, плюс показываем главный екран
refs.userName.classList.add("not-show");
refs.goOut.classList.add("not-show");

//слушаем сабмит на модалках



// refs.formSingUp.addEventListener("submit", (e) => {
//   e.preventDefault();
//   const formData = new FormData(e.currentTarget);
//   formData.forEach((userName, userEmail, userPassword, userEmailControl) => {
//     console.log(userName, userEmail, userPassword, userEmailControl);
//   });
//   const usersname = userName.value;
//   console.log("yes is submit", usersname);
// });

  // today
// let userArray = [];
// const LOCALSTORAGE_KEY = 'registrUser';
// refs.formSingUp.addEventListener("submit", (e) => {
//   console.log("submit yes");
//   e.preventDefault();
  
//   const uName = e.target.userName.value.trim();
//   const uPassword = e.target.userPassword.value.trim();
//   const uEmail = e.target.userEmail.value.trim();
//   const uEmailControl = e.target.userEmailControl.value.trim();

//   const data = createDataObj(uName, uPassword, uEmail, uEmailControl);

//   console.log(data);
//   userArray.push(data);
//   console.log(userArray);

//   // saveData(userArray);

//   checkUserNameLocalStorage(uName);

//   if (!validateNameLength(uName)) {
//     //false
//     console.log("norm bukv");
//   } else {
//     console.log(" malo bukv");
//   }

//   if (validateNameContent(uName)) {
//     //false
//     console.log("litera!!valid");
//   } else {
//     console.log("ok");
//   }

// if (!validatePasswordLength(uPassword)) {
//   //false
//   console.log("norm bukv pass");
// } else {
//   console.log(" malo bukv pass");
// }

//   // if (isEmail(uEmail)) {
//   //   //false
//   //   console.log("Email valid");
//   // } else {
//   //   console.log("ok");
//   // }
  
//   // function validateEmail(uEmail) {
    
//     // email valid
//   //   const isEmail = ([...uEmail]) =>
//   //     // проверяем, что в массиве есть символ `@`, он находится, как минимум, на второй позиции
//   //     uEmail.indexOf("@") > 0 &&
//   //     // и является единственным
//   //     uEmail.indexOf("@") === uEmail.lastIndexOf("@") &&
//   //     // проверяем, что в массиве есть точка,
//   //     uEmail.indexOf(".") > 0 &&
//   //     // она стоит после символа `@`
//   //     uEmail.indexOf("@") < uEmail.indexOf(".") &&
//   //     // и не является последним символом
//   //     uEmail.indexOf(".") < uEmail.length - 1;
//   //   console.log(isEmail);
//   // // }
// // ---end mail valid
  
  


//   console.log(uName, uPassword, uEmail, uEmailControl);
//   let formData = {};
//   // formData[e.target.name] = e.target.value;

//   // new FormData(e.currentTarget);
//   // formData.forEach((userName, userPassword, userEmail, userEmailControl) => {
//   //   if (userName.value == '') {
//   //     console.log('dlina');
//   //   }
//   // console.log(userName, userPassword, userEmail, userEmailControl);

//   const formElements = e.currentTarget.elements.value;
//   console.log("data set");
//   console.log(formData);
//   console.log(formElements);
//   localStorage.setItem("formData", JSON.stringify(formData));
//   formData = JSON.parse(localStorage.getItem("formData"));
//   console.log(formData);
//   for (let key in formData) {
//     console.log("for data");
//     refs.formSingUp.elements[key].value = formData[key];
//     console.log(form.elements[key].value);
//   }

//   e.currentTarget.reset(); 
// });

// function saveData(data) {
//   const userList = getData();
//   userList.push(data)
//   localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(userList));
//   console.log("saved in local");
// }

// function getData() {
//   try {
//     const dataJson = localStorage.getItem(LOCALSTORAGE_KEY);
//     if (!dataJson) return [];
//     return JSON.parse(dataJson);
//     } catch (error) {
//     console.log(error.message);
//   }
// }

// function checkUserNameLocalStorage(uName) {
//   const userList = getData();
//   const currentUser = userList.includes(uName);
//   if (!currentUser) {
// saveData();
//     console.log("New user");
//   } 

//   console.log(currentUser, "User not new надо запустить откр главного окна");
// }

// function checkWatchedLocalStorageMovies(btn, filmId, key) {
//   const filmsArray = loadFromLocalStorage(key);
//   const currentFilm = filmsArray.includes(filmId);

//   if (filmsArray.length > 0) {
//     if (currentFilm) {
//       btn.textContent = "ADD TO WATCHED";
//       btn.classList.add("modal-active");
//       const newArrayFilm = filmsArray.filter((film) => film !== filmId);
//       localStorage.removeItem(key);
//       localStorage.setItem(key, JSON.stringify(newArrayFilm));
//     } else {
//       btn.textContent = "REMOVE FROM WATCHED";
//       saveToLocalStorage(key, filmId);
//       btn.classList.remove("modal-active");
//     }
//   } else {
//     btn.textContent = "REMOVE FROM WATCHED";
//     saveToLocalStorage(key, filmId);
//     btn.classList.remove("modal-active");
//   }
// }






// function validateNameLength(uname) {
//   const nameLen = uname.length;
//   const mx = 16;
//   const my = 6;
//   if (nameLen > mx || nameLen < my) {
    
//     // refs.nameError.textContent = `Długość nazwy użytkownika musi wynosić co najmniej ${my} znaków i nie więcej niż ${mx} `;
//     alert("Długość nazwy użytkownika musi wynosić co najmniej 6 znaków i nie więcej niż 16 " + mx + " to " + my);
//   }
//   return true
// }

// function validatePasswordLength(uPassword) {
//   const passwordLen = uPassword.length;
  
//   const my = 6;
//   if (passwordLen < my) {
//     // refs.nameError.textContent = `Długość nazwy użytkownika musi wynosić co najmniej ${my} znaków i nie więcej niż ${mx} `;
//     alert(
//       "Długość nazwy użytkownika musi wynosić co najmniej 6 znaków" );
//   }
//   return true;
// }









// let formData1 = {};
// const form = document.querySelector(".sing-up");
// const LS = localStorage;
// console.log("formData");
//   // слушаем ввод
// form.addEventListener("input", (e) => {
//   formData[e.target.name] = e.target.value;
// const formElements = e.currentTarget.elements;
// const uname = formElements.userName.value;
// console.log(uname);
// const upassword = formElements.userPassword.value;
// console.log(upassword);

//   LS.setItem("formData", JSON.stringify(formData));
// });
// try {
//   if (LS.getItem("formData")) {
//     formData1 = JSON.parse(LS.getItem("formData"));
//     console.log(formData1);
//     console.log(formData);
//     console.log(form.elements);

//     // form.elements[name]
//     for (let key in formData) {
//       form.elements[key].value = formData[key];
//     }
//   }
// } catch (error) {
//   console.log(error);
// };
// }
// inputListener();





// });

// refs.formSingUp.addEventListener("submit", (e) => {
//   e.preventDefault();
  

// let form = document.querySelector(".sing-up"),
//   formInputs = document.querySelectorAll(".js-input"),
//   inputName = document.querySelector(".js-data-sing-up-name"),
//   inputPassword = document.querySelector(".js-data-sing-up-password");
  // inputEmail = document.querySelector(".js-email"),
  //   inputEmailControl = document.querySelector(
  //     ".js-data-sing-up-email-control"
  //   );
  
// function validateName(uname) {
//   const nameLen = uname.value.length;
//   const mx = 16;
//   const my = 6;
//     if (nameLen >= mx || nameLen < my) {
//       refs.nameError.textContent = `Długość nazwy użytkownika musi wynosić co najmniej ${my} znaków i nie więcej niż ${mx} `;
//       alert("Długość nazwy użytkownika musi wynosić co najmniej 6 znaków i nie więcej niż 16 " + mx + " to " + my);
//   return false; }
// }
// function validatePassword(password) {
//   const passwordLen = password.value.length;
//     const my = 6;
//     if (passwordLen < my) {
//       refs.passwordError.textContent = `Długość nazwy użytkownika musi wynosić co najmniej ${my} znaków `;
//       alert("Długość nazwy użytkownika musi wynosić co najmniej 6 znaków " );
//   return false}
//     }

// // function validateEmail(email) {
// //   let re =
// //     /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
// //   return re.test(String(email).toLowerCase());
// // }


// // function validateEmailControl(email, emailControl) {
// //    return email.value === emailControl.value;
// // }

// form.onsubmit = function () {
//   // let emailVal = inputEmail.value,

//     emptyInputs = Array.from(formInputs).filter((input) => input.value === "");

//   formInputs.forEach(function (input) {
//     if (input.value === "") {
//       input.classList.add("error");
//     } else {
//       input.classList.remove("error");
//     }
//   });

//   if (emptyInputs.length !== 0) {
//     console.log("inputs not filled");
//     return false;
//   }

// if (validateName(uname)) {
//   console.log("Name not valid");
//   inputName.classList.add("error");
//   return false;
// } else {
//   inputName.classList.remove("error");
// }
  
//   if (validatePassword(password)) {
//     console.log("Password not valid");
//     inputPassword.classList.add("error");
//     return false;
//   } else {
//     inputPassword.classList.remove("error");
//   }

//   // if (!validateEmail(emailVal)) {
//   //   console.log("email not valid");
//   //   inputEmail.classList.add("error");
//   //   return false;
//   // } else {
//   //   inputEmail.classList.remove("error");
//   // }

//   // if (validateEmailControl(email, emailControl)) {
//   //   console.log("email not control");
//   //   inputEmailControl.classList.add("error");
//   //   return false;
//   // } else {
//   //   inputEmailControl.classList.remove("error");
//   // }
  
// };
    
// })




//  ничего не получилось((()))
// const form = document.querySelector('.sing-up');
// refs.formSingUp.addEventListener("submit", formSend);


// function formSend(e) {
//   e.preventDefault();
//   console.log("yes is submit");
//   localStorage.setItem("UserRegist", "my data");
// let error = 0;
//   // let error = formValidate(form);
//   let formData = new FormData(form);
//   console.log(formData);
//   localStorage.setItem("UserRegist2", JSON.stringify(formData));
//   if (error === 0) {
//     localStorage.setItem('UserRegist3', JSON.stringify(formData));
//     localStorage.setItem("UserRegist1", 'my second data');
//     console.log('date in local');
//     form.reset();
//   // } else {
//   //   alert("Not empty!!");
// }

// }

// function formValidate(form) {
//   let error = 0;
//   let formReq = document.querySelectorAll('.req');

//   for (let index = 0; index < formReq.length; index++) {
//     const input = formReq[index];
//     formRemoveError(input);
//     console.log(input.value);
//     if (input.classList.contains('.js-data-sing-up-email')) {
//       if (emailTest(input)) {
//         formAddError(input)
//         error++;
//       }
//       } else if (input.classList.contains('.js-data-sing-up-name')) {
//         if (input.value.length < 6 || input.value.length > 16) {
//           formAddError(input);
//           error++;
//         }
//       }
//       else if (input.classList.contains('.js-data-sing-up-password')) {
//         if (input.value.length < 6 ) {
//           formAddError(input);
//           error++;
//         }
//     } else if (input.value === '') {
//       formAddError(input);
//       error++;
//       }
//   }
//   console.log(error);
//   }


// function formAddError(input) {
//   input.classList.add('.active')
// }

// function formRemoveError(input) {
//   input.classList.remove('.active')
// }

// function emailTest(input) {
//   return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
// }
// refs.singUpSubmit.addEventListener("click", onShowMainWindow);
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
// onFormSingUpSubmit(e);

// }

// function mainWindowShow() {
//   refs.aboutWallet.classList.add('not-show');
//   console.log("функція показу главного вікна");
// }
// //  работа с именем - конец

// // Кнопка ВИХІД
// refs.goOut.addEventListener("click", (e) => {
//   document.location.reload();
// });
// // кнопка ВИХІД Кінець


// // працюємо з локал сторидж

// // const STORAGE_NAME = "user-name";
// // const STORAGE_EMAIL = "user-email";
// // const STORAGE_PASSWORD = "user-password";
// // // Register Form
// // const formRegisterData = {};

// // function getRegisterData() {
// //   try {
    
// //   } catch (error) {
    
// //   }
// // }



// function onFormSingUpSubmit() {
//   // event.preventDefault();
//   console.log('submit')
//   // const formElements = event.currentTarget.elements;
//   // const name = formElements.userName.value;
//   // const password = formElements.userPassword.value;
//   // const email = formElements.userEmail.value;
//   // const emailControl = formElements.userEmailControl.value;
// // const truName = userNameValidation(name);
// // const truPassword = userPasswordValidation(password);
// // const truEmail = userEmailValidation(email);
// // const truEmailControl = userEmailControl(emailControl, email);
// // console.log(name, password, email, emailControl);
// // // console.log(truEmail, truEmailControl,truName, truPassword);
// // if ( !truName || !truPassword || !truEmail || !truEmailControl) { 
// //   return 
// // } else {
//   refs.modalSingUp.disabled = !true;
// }
// // }




// // ----opt

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
    

    
    
    
    
    
    
    


//   // nameValidatiounSingUp();
//   //перевіряємо імя (від 6 до 16, літери та цифри) - якщо фолс - повідомлення, якщо ок - тру
//   //перевіряємо пароль (від 6 занків) - якщо фолс - повідомлення, якщо ок - тру
//   //перевіряємо пошту (стандарт для пошти) - якщо фолс - повідомлення, якщо ок - тру
//   //перевіряємо повторення пошти (має збігатися!) - якщо фолс - повідомлення, якщо ок - тру
//   //перевіряємо навяність у локал сторідж (імя та пошта) - якщо не має - додаємо до локал сторедж
//   // - якщо є - нічого не робимо
//   // імя виводимо на екран і відкриваємо гловний екран і даємо запуск на запит до АРІ
// // }



