import { arrayOfTransactions } from "./transaction-obj.js";

const saldoArray = [];

 async function onSaldo() {
  //  const transactionObj = await fetchTransaction();
  //  const items = transactionObj.transactions;
   const items = await arrayOfTransactions();
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
    return uniqueDate;
}

export { onSaldo, saldoArray };