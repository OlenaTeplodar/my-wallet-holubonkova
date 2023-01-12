import { fetchTransaction } from "./api.js";

const ctx = document.getElementById("myChart");
// document.querySelector(".about-wallet").addEventListener("click", addChart);
function addChart() {
  new Chart(ctx, {
    type: "bar",
    data: {
      labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
      datasets: [
        {
          label: "# of Votes",
          data: [12, 19, 3, 5, 2, 3],
          borderWidth: 1,
        },
      ],
    },
    options: {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  });
}

document.querySelector(".about-wallet").addEventListener("click", addChart);
const refs = {
  body: document.querySelector("body"),

  userName: document.querySelector(".user-name"),

  openModalBtnSingUp: document.querySelector(".modal-sing-up-open"),
  openModalBtnSingIn: document.querySelector(".modal-sing-in-open"),
  closeModalBtn: document.querySelector(".close-btn"),
  closeModalBtnIn: document.querySelector(".stop-btn-in"),
  backdrop: document.querySelector(".backdrop"),

  goOut: document.querySelector(".close-out"),

  modalSingIn: document.querySelector(".modal-in-open"),
  modalSingUp: document.querySelector(".modal-up-open"),
  singInSubmit: document.querySelector(".js-sing-in"),
  singUpSubmit: document.querySelector(".js-sing-up"),

  singUpName: document.querySelector(".js-data-sing-up-name"),
  singUpPassword: document.querySelector(".js-data-sing-up-password"),
  singUpEmail: document.querySelector(".js-data-sing-up-email"),
  singUpEmailControl: document.querySelector(".js-data-sing-up-email-control"),

  singInData: document.querySelector(".js-data-sing-in"),
  singInPassword: document.querySelector(".js-data-sing-in-password"),

  tableStatistic: document.querySelector(".js-table-statistic > tbody"),

  aboutWallet: document.querySelector(".about-wallet"),
};

// работа с именем и кнопкой вихода- сначала - невидимое, потом - при сабмите - видим, плюс показываем главный екран
refs.userName.classList.add("not-show");
refs.goOut.classList.add("not-show");

//слушаем сабмит на модалках
refs.singUpSubmit.addEventListener("click", onShowMainWindow);
refs.singInSubmit.addEventListener("click", onShowMainWindow);

//функция показа основного экрана (4 окно)
function onShowMainWindow(e) {
  e.preventDefault();
  refs.userName.classList.remove("not-show");
  refs.goOut.classList.remove("not-show");
  refs.openModalBtnSingIn.classList.add("is-hidden");
  refs.openModalBtnSingUp.classList.add("is-hidden");
  refs.backdrop.classList.add("is-hidden");
  refs.modalSingIn.classList.add("is-hidden");
  // closeModal();
  mainWindowShow();
  // statisticRender();
  console.log("функція onShowMainWindow");
}

function mainWindowShow() {
  refs.aboutWallet.innerHTML = "";
  console.log("функція показу главного вікна");
}
//  работа с именем - конец

// Кнопка ВИХІД
refs.goOut.addEventListener("click", (e) => {
  document.location.reload();
});
// кнопка ВИХІД Кінець

//  Открытие модалки логования и скрытия кнопки
refs.openModalBtnSingIn.addEventListener("click", openModalSingIn);

function openModalSingIn() {
  refs.modalSingIn.classList.remove("is-hidden"); //видна модалка
  window.addEventListener("keydown", onEscClick); // слушаем клик по Esc
  refs.openModalBtnSingIn.classList.add("is-hidden"); // скрываем кнопку открытия
  refs.openModalBtnSingUp.classList.add("center-position");
}

//Открытие модалки Регистрации и скрытия кнопки
refs.openModalBtnSingUp.addEventListener("click", openModalSingUp);

function openModalSingUp() {
  refs.modalSingUp.classList.remove("is-hidden"); //видна модалка
  window.addEventListener("keydown", onEscClick); // слушаем клик по Esc
  refs.openModalBtnSingUp.classList.add("is-hidden"); // скрываем кнопку открытия
  refs.openModalBtnSingIn.classList.add("center-position");
}

// Закрытие модалок

refs.closeModalBtn.addEventListener("click", closeModal);

function onEscClick(evt) {
  if (evt.code === "Escape") {
    closeModal();
    window.removeEventListener("keydown", onEscClick);
    refs.openModalBtnSingIn.classList.remove("focus");
    refs.openModalBtnSingUp.classList.remove("focus");
    // refs.openModalBtnSingIn.classList.add("close-btn");
    // refs.openModalBtnSingUp.classList.add("close-btn");
    console.log("ескейп");
  }
}
refs.closeModalBtnIn.addEventListener("click", closeModal);

refs.closeModalBtn.addEventListener("click", () => {
  console.log("yes! слухач спрацював");
});

function closeModal() {
  if (refs.modalSingIn.classList.contains("is-hidden")) {
    refs.modalSingUp.classList.add("is-hidden");
    refs.openModalBtnSingUp.classList.remove("is-hidden");
    refs.openModalBtnSingIn.classList.remove("center-position");
    console.log("закриваємо модалку реєстрації");
  } else {
    refs.modalSingIn.classList.add("is-hidden");
    refs.openModalBtnSingIn.classList.remove("is-hidden");
    refs.openModalBtnSingUp.classList.remove("center-position");

    console.log("закриваємо модалку логования");
  }

  console.log("Закриття ");
}

async function vieArray() {
  try {
    const transactionArray = await fetchTransaction();
    const arrayNew = transactionArray.transactions;
    const transactionAll = arrayNew.map((transaction) => transaction.type);
    return transactionAll;
  } catch (error) {
    console.log(error);
  }
}

async function lengthArray() {
  const long = await vieArray();
  const sum = long.length;
  console.log(sum);
  let receiptsCount = 0;
  let spendingCount = 0;
  for (let i = 0; i < sum; i += 1) {
    if (long[i] === 1 || long[i] === 3) {
      receiptsCount += 1;
    } else {
      spendingCount += 1;
    }
  }
  console.log(receiptsCount);
  console.log(spendingCount);
}
lengthArray();
