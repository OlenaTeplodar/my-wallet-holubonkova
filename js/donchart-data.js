import { arrayOfTransactions } from "./transaction-obj.js";

// -- отримуємо масив з типами транзакцій
async function vieArrayTypeAll() {
  try {
    const arrayNew = await arrayOfTransactions();
    const transactionAll = arrayNew.map((transaction) => transaction.type);
    console.log(arrayNew);
    console.log(transactionAll);
    return transactionAll;
  } catch (error) {
    console.log(error);
  }
}

// ----- отримуємо кількість транзакцій по надходженню та витратах
async function lengthArray() {
  const long = await vieArrayTypeAll();
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

export { vieArrayTypeAll, lengthArray }

// дані для побудови круглої діаграми