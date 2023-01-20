import { fetchTransaction } from "./api.js";



async function creatTransactionArrayObj() {
    const transactionObj = await fetchTransaction();

    return transactionObj;
}


async function arrayOfTransactions() {
    const transaction = await creatTransactionArrayObj();
    const arrayOftransaction = transaction.transactions;

    return arrayOftransaction;
}


async function lengthOfTransaction() {
    const transArray = await arrayOfTransactions();
    const lengthTr = transArray.length;

    return lengthTr;
}


export { creatTransactionArrayObj, arrayOfTransactions, lengthOfTransaction };