import { refs } from "./refs.js";
import { vieArrayTypeAll, lengthArray } from "./donchart-data.js";

const ctd = document.getElementById("popChart");

export async function addDonChart() {
  const spend = await lengthArray();
    const allTransArr = await vieArrayTypeAll();
    const alltrans = allTransArr.length;
    const receipts = alltrans - spend;
    console.log(alltrans, spend, receipts);
  new Chart(ctd, {
    type: "doughnut",
    data: {
      labels: ["Wydatki", "Wpływy"],
      datasets: [
        {
          label: "Struktura transakcji",
          data: [spend, receipts],
          borderWidth: 1,
        },
      ],
    },
  });
}
