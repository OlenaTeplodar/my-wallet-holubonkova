import { fetchTransaction } from "./api.js";
import { refs } from "./refs.js";
import {
  creatTransactionArrayObj,
  arrayOfTransactions,
  lengthOfTransaction,
} from "./transaction-obj.js";

import { onTableBuild } from './filling-table-desctop.js';
import { closeModal, onEscClick } from "./close-modal.js";
import openModalSingUp from "./op-mod-sing-up.js";
import openModalSingIn from "./op-mod-sing-in.js";

import { onSaldo, saldoArray } from "./barchart-data.js";
import { vieArrayTypeAll, lengthArray } from "./donchart-data.js";
import { addBarChart, addBarChartM } from "./barchart-add.js";
import { addDonChart, addDonChartM } from './donchart-add.js';

import { checkingSingUpForm } from "./sing-up-checking.js";

import { onSingUpSubmit } from './entrance-user.js';
import { checkUserNameLocalStorage } from "./local-storage.js";

import { onShowMainWindow} from './entrance-user.js'
import {onSingInSubmit} from './entrance-user.js'



refs.formSingUp.addEventListener("submit", onSingUpSubmit);

refs.formSingIn.addEventListener("submit", onSingInSubmit);







// function mainWindowShow() {
//   refs.aboutWallet.classList.add('not-show');
//   console.log("функція показу главного вікна");
// }
// //  работа с именем - конец

// // Кнопка ВИХІД
refs.goOut.addEventListener("click", () => {
  document.location.reload();
  
});
// // кнопка ВИХІД Кінець





