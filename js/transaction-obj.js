import { fetchTransaction } from "./api";

export default async function creatTransactionArrayObj() {
    const transactionObj = await fetchTransaction();
    const arrayNew = transactionObj.transactions;
    console.log(arrayNew);
    return arrayNew;
}

// масив обєктів транзакцій