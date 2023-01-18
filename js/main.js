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


import { checkingSingUpForm } from "./sing-up-checking.js";
import {checkingSingInForm} from './login-checking.js'
checkingSingUpForm();

checkingSingInForm();
const ctx = document.getElementById("myChart");

// onTableBuild();

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

const data = [
  { year: 2010, count: 10 },
  { year: 2011, count: 20 },
  { year: 2012, count: 15 },
  { year: 2013, count: 25 },
  { year: 2014, count: 22 },
  { year: 2015, count: 30 },
  { year: 2016, count: 28 },
];
// // будуємо діаграму
new Chart(document.getElementById("acquisitions"), {
  type: "bar",
  options: {
    animation: false,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: false,
      },
    },
  },
  data: {
    labels: data.map((row) => row.year),
    datasets: [
      {
        label: "Acquisitions by year",
        data: data.map((row) => row.count),
      },
    ],
  },
});
// function addBarChart() {
//   onSaldo();
//   new Chart(ctx, {
//     type: "bar",
//     data: {
//       labels: "uniqueDate",
//       datasets: [
//         {
//           label: "# of Votes",
//           data: [20, 40,50],
//           borderWidth: 1,
//         },
//       ],
//     },
//   });
// }
// addBarChart();
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

//  
  


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




// refs.formSingUp.addEventListener("submit", (e) => {
//   e.preventDefault();
  




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

// 
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



