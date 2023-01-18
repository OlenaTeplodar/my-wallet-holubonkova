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