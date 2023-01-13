import { items } from "./items";

function onSaldo() {
  const uniqueDate = [...items]
    .map((items) => items.date)
        .filter((dates, index, array) => array.indexOf(dates) === index);
    console.log(uniqueDate);
    return uniqueDate;
};

export default onSaldo;