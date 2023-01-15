import { refs } from './refs.js';
import { creatTransactionArrayObj } from './transaction-obj.js';


export default async function tableBuild() {
  const transactionArray = await creatTransactionArrayObj();
  for (let i = 0; i < transactionArray.lenght; i += 1) {
  const transactionInfo = ({ date, type, amount, balance, description }) => {
  const tr =  `<tr>
            <td class="data">"${date}"</td>
            <td class="type-transaction">${type}</td>
            <td class="descr-transaction">${description}</td>
            <td class="amount">${amount}</td>
            <td class="balance">${balance}</td>
            </tr>`;
    refs.tableStatistic.insertAdjacentHTML('beforeend', tr)
  };
}
  }
  //  const transactionInfo = transactionArray.transactions;
  
// export const transactionInfo = ({ date, type, amount, balance, description }) => `<tr>
//             <td class="data">"${date}"</td>
//             <td class="type-transaction">${type}</td>
//             <td class="descr-transaction">${description}</td>
//             <td class="amount">${amount}</td>
//             <td class="balance">${balance}</td>
//             </tr>`;


