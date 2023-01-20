import { refs } from "./refs.js";
import { checkingSingUpForm } from "./sing-up-checking.js";
import { checkingSingInForm } from "./sing-in-checking.js";
import {checkUserNameLocalStorage} from './local-storage.js'
import { checkUserInLogin } from "./sing-in-checking.js";
import { addBarChart, addBarChartM } from "./barchart-add.js";
import {addDonChart, addDonChartM} from './donchart-add.js'
import {onTableBuild} from './filling-table-desctop.js'


export function onSingUpSubmit(e) {
  e.preventDefault();
  const upUser = checkingSingUpForm(e);
  console.log(upUser);
    checkUserNameLocalStorage(upUser);
        onShowMainWindow();
    }

export function onSingInSubmit(e) {
  e.preventDefault();
  const inUser = checkingSingInForm(e);
  console.log(inUser);
  checkUserInLogin(inUser);

  // const inUserArray = Array.from(data.entries());
  // console.log(inUserArray);
  onShowMainWindow();
}


//
// функция показа основного экрана (4 окно)
export function onShowMainWindow() {
  refs.goOut.classList.remove("not-show");
  refs.openModalBtnSingIn.classList.add("is-hidden");
  refs.openModalBtnSingUp.classList.add("is-hidden");
  refs.backdrop.classList.add("is-hidden");
  refs.modalSingIn.classList.add("is-hidden");
  // closeModal();
    refs.aboutWallet.classList.add("not-show");
    refs.mainWindow.classList.remove('not-show');
    addBarChartM();
    addBarChart();
    addDonChart();
    addDonChartM();
    onTableBuild();
 
    
  console.log("функція onShowMainWindow");
}