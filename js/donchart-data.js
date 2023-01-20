import { arrayOfTransactions } from "./transaction-obj.js";

// -- get an array with types of transactions
async function vieArrayTypeAll() {
  try {
    const arrayNew = await arrayOfTransactions();
    const transactionAll = arrayNew.map((transaction) => transaction.type);

    return transactionAll;
  } catch (error) {
    console.log(error);
  }
}

// ----- get the number of transactions by income and expenses
async function lengthArray() {
  const long = await vieArrayTypeAll();
  const sum = long.length;

  let receiptsCount = 0;
  let spendingCount = 0;
  for (let i = 0; i < sum; i += 1) {
    if (long[i] === 1 || long[i] === 3) {
      receiptsCount += 1;
    } else {
      spendingCount += 1;
    }
  }

  return spendingCount;
}

export { vieArrayTypeAll, lengthArray }

// data to construct a donchart