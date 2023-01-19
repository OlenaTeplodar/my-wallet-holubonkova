import { fetchTransaction } from "./api.js";


// --- отримали об'єкт з даними
 async function creatTransactionArrayObj() {
    const transactionObj = await fetchTransaction();
    // const arrayNew = transactionObj.transactions;
    console.log(transactionObj);
    return transactionObj;
}

// -- отримали масив обєктів транзакцій
 async function arrayOfTransactions() {
     const transaction = await creatTransactionArrayObj();
     const arrayOftransaction = transaction.transactions;
     console.log(arrayOftransaction);
    //  const uName = "2022-11-09";
    //  for (const dfg of arrayOftransaction) {
    //      console.log(dfg.date);
    //    if (dfg.date === uName) {
    //      console.log("ok!!!");
    //      }
         
    //  }
     
    return arrayOftransaction;
}

// --- отримали довжину масиву - загальну кількість транзакцій
async function lengthOfTransaction() {
    const transArray = await arrayOfTransactions();
    const lengthTr = transArray.length;
    console.log(lengthTr);
    console.log(transArray);
    return lengthTr
}


export { creatTransactionArrayObj, arrayOfTransactions, lengthOfTransaction };