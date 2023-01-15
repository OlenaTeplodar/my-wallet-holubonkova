import { fetchTransaction } from "./api.js";
import { refs } from "./refs.js";
// import { creatTransactionArrayObj } from "./transaction-obj.js";
// import onSaldo from "./saldo.js";
import { onTableBuild} from './filling-table-desctop.js';


const ctx = document.getElementById("myChart");

// -------Слухаємо розмір вікна
// refs.slider.style.overflow = 'hidden';
// const windowWidth = window.innerWidth;
// console.log(windowWidth);
// window.addEventListener('resize', controlWindow);

// function controlWindow() {
//   if (windowWidth < 768) {
//     refs.noShowBothCharts.classList.toggle('not-show');

//   }
//   refs.noShowSlider.classList.toggle('not-show');
// }

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



// получаем данніе для построения гистограм

const saldoArray = [];

 async function onSaldo() {
  //  const transactionObj = await fetchTransaction();
  //  const items = transactionObj.transactions;
   const items = await creatTransactionArrayObj();
   console.log(items);
  const uniqueDate = [...items]
    .map((items) => items.date)
    .filter((dates, index, array) => array.indexOf(dates) === index);
  console.log(uniqueDate);
let sum = 0;
  
  for (let k = 0; k < uniqueDate.length; k += 1) {
      for (let i = 0; i < items.length; i += 1) {
        if (uniqueDate[k] === items[i].date) {
          sum = sum + items[i].amount;
        }
      }
    saldoArray.push(sum);
    sum = 0;
    }
console.log(saldoArray);
    // return uniqueDate;
};

onSaldo();


// будуємо діаграму

function addBarChart() {
  onSaldo();
  new Chart(ctx, {
    type: "bar",
    data: {
      labels: uniqueDate,
      datasets: [
        {
          label: "# of Votes",
          data: saldoArray,
          borderWidth: 1,
        },
      ],
    },
  });
}

// document.querySelector(".about-wallet").addEventListener("click", addBarChart);



// работа с именем и кнопкой вихода- сначала - невидимое, потом - при сабмите - видим, плюс показываем главный екран
refs.userName.classList.add("not-show");
refs.goOut.classList.add("not-show");

//слушаем сабмит на модалках
refs.singUpSubmit.addEventListener("click", onShowMainWindow);
refs.singInSubmit.addEventListener("click", onShowMainWindow);
refs.singInSubmit.addEventListener("click", onTableBuild);
refs.singUpSubmit.addEventListener("click", onTableBuild);

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
  refs.aboutWallet.classList.add('not-show');
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

// function validateAllFofm() {

// }

// function is ValidPa

async function vieArray() {
  try {
    const transactionObj = await fetchTransaction();
    const arrayNew = transactionObj.transactions;
    const transactionAll = arrayNew.map((transaction) => transaction.type);
    console.log(transactionObj);
    console.log(arrayNew);
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

export async function creatTransactionArrayObj() {
  const transactionObj = await fetchTransaction();
  const arrayNew = transactionObj.transactions;
  console.log(arrayNew);
  return arrayNew;
}

// async function onTableBuild() {
//   const transactionObjAll = await creatTransactionArrayObj();
//   // const transactionArray = transactionObjAll.map(
//   //   (transaction) => transaction.transactions
//   // );
//   // const b = transactionArray.lenght;
//   // console.log(b);
//   //проблема - не виходить спіймати довжину масиву - кількість транзакцій!!!!!!!!!!!!----------
//   for (let i = 0; i < 7; i += 1) {
//     const a = transactionObjAll[i];
//     console.log(a);
//     tableAdd(a);
//   }
//   // return a;
// }

// function tableAdd({ date, type, amount, balance, description}) {
//   if (type == 1) {
// const tr = `<tr>
//             <td class="data">"${date}"</td>
//             <td class="type-transaction"><svg
//   class="type-icon receipts"
//   width="40"
//   height="40"
//   aria-label="type of transaction"
// >
//   <use href="./image/symbol-defs.svg#icon-one"></use>
// </svg></td>
//             <td class="descr-transaction">${description}<br><span class="desc-type-table">Wpływy - inne</span></td>
//             <td class="amount">${amount}</td>
//             <td class="balance">${balance}</td>
//             </tr>`;
//     refs.tableStatistic.insertAdjacentHTML("beforeend", tr);
//   }  
//   if (type == 2) {
//     const tr = `<tr>
//             <td class="data">"${date}"</td>
//             <td class="type-transaction"><svg
//   class="type-icon spending"
//   width="40"
//   height="40"
//   aria-label="type of transaction"
// >
//   <use href="./image/symbol-defs.svg#icon-two"></use>
// </svg></td>
//             <td class="descr-transaction">${description}<br><span class="desc-type-table">Wydatki - zakupy</span></td>
//             <td class="amount">${amount}</td>
//             <td class="balance">${balance}</td>
//             </tr>`;
//     refs.tableStatistic.insertAdjacentHTML("beforeend", tr);
//   }  
//   if (type == 3) {
//     const tr = `<tr>
//             <td class="data">"${date}"</td>
//             <td class="type-transaction"><svg
//   class="type-icon receipts"
//   width="40"
//   height="40"
//   aria-label="type of transaction"
// >
//   <use href="./image/symbol-defs.svg#icon-three"></use>
// </svg></td>
//             <td class="descr-transaction">${description}<br><span class="desc-type-table">Wpływy - wynagrodzenie</span></td>
//             <td class="amount">${amount}</td>
//             <td class="balance">${balance}</td>
//             </tr>`;
//     refs.tableStatistic.insertAdjacentHTML("beforeend", tr);
//   }  
//   if (type == 4) {
//     const tr = `<tr>
//             <td class="data">"${date}"</td>
//             <td class="type-transaction"><svg
//   class="type-icon spending"
//   width="40"
//   height="40"
//   aria-label="type of transaction"
// >
//   <use href="./image/symbol-defs.svg#icon-four"></use>
// </svg></td>
//             <td class="descr-transaction">${description}<br><span class="desc-type-table">Wydatki - inne</span></td>
//             <td class="amount">${amount}</td>
//             <td class="balance">${balance}</td>
//             </tr>`;
//     refs.tableStatistic.insertAdjacentHTML("beforeend", tr);
//   }  
// };
// 1":"Wpływy - inne","2":"Wydatki - zakupy","3":"Wpływy - wynagrodzenie","4":"Wydatki - inne"


//   for (let i = 0; i < transactionArray.lenght; i += 1) {
//     const transactionInfo = ({ date, type, amount, balance, description }) => {
//       const tr = `<tr>
//             <td class="data">"${date}"</td>
//             <td class="type-transaction">${type}</td>
//             <td class="descr-transaction">${description}</td>
//             <td class="amount">${amount}</td>
//             <td class="balance">${balance}</td>
//             </tr>`;
//       refs.tableStatistic.insertAdjacentHTML("beforeend", tr);
//     };
//   }
//   console.log(transactionInfo);
//   return transactionInfo;
// }
// onTableBuild();

