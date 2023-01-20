import { refs } from './refs.js';
import {
  arrayOfTransactions,
  lengthOfTransaction,
} from "./transaction-obj.js";




async function onTableBuild() {
  const transactionObjAll = await arrayOfTransactions();
  const transactionAllCount = await lengthOfTransaction();

  for (let i = 0; i < transactionAllCount; i += 1) {
    const a = transactionObjAll[i];
    tableAdd(a);
  }
  // return a;
}

function tableAdd({ date, type, amount, balance, description}) {
  if (type == 1) {
const tr = `<tr>
            <td class="data desktop">"${date}"</td>
            <td class="type-transaction"><svg
  class="type-icon receipts"
  width="40"
  height="40"
  aria-label="type of transaction"
>
  <use href="./image/symbol-defs.svg#icon-one"></use>
</svg></td>
            <td class="descr-transaction">${description}<br><span class="desc-type-table desktop">Wpływy - inne</span></td>
            <td class="amount">${amount}</td>
            <td class="balance desktop">${balance}</td>
            </tr>`;
    refs.tableStatistic.insertAdjacentHTML("beforeend", tr);
  }  
  if (type == 2) {
    const tr = `<tr>
            <td class="data desktop">"${date}"</td>
            <td class="type-transaction"><svg
  class="type-icon spending"
  width="40"
  height="40"
  aria-label="type of transaction"
>
  <use href="./image/symbol-defs.svg#icon-two"></use>
</svg></td>
            <td class="descr-transaction">${description}<br><span class="desc-type-table desktop">Wydatki - zakupy</span></td>
            <td class="amount">${amount}</td>
            <td class="balance desktop">${balance}</td>
            </tr>`;
    refs.tableStatistic.insertAdjacentHTML("beforeend", tr);
  }  
  if (type == 3) {
    const tr = `<tr>
            <td class="data desktop">"${date}"</td>
            <td class="type-transaction"><svg
  class="type-icon receipts"
  width="40"
  height="40"
  aria-label="type of transaction"
>
  <use href="./image/symbol-defs.svg#icon-three"></use>
</svg></td>
            <td class="descr-transaction">${description}<br><span class="desc-type-table desktop">Wpływy - wynagrodzenie</span></td>
            <td class="amount">${amount}</td>
            <td class="balance desktop">${balance}</td>
            </tr>`;
    refs.tableStatistic.insertAdjacentHTML("beforeend", tr);
  }  
  if (type == 4) {
    const tr = `<tr>
            <td class="data desktop">"${date}"</td>
            <td class="type-transaction"><svg
  class="type-icon spending"
  width="40"
  height="40"
  aria-label="type of transaction"
>
  <use href="./image/symbol-defs.svg#icon-four"></use>
</svg></td>
            <td class="descr-transaction">${description}<br><span class="desc-type-table desktop">Wydatki - inne</span></td>
            <td class="amount">${amount}</td>
            <td class="balance desktop">${balance}</td>
            </tr>`;
    refs.tableStatistic.insertAdjacentHTML("beforeend", tr);
  }  
};


export { onTableBuild, tableAdd };