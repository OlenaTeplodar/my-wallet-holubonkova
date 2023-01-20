import { refs } from "./refs.js";
import { vieArrayTypeAll, lengthArray } from "./donchart-data.js";

const ctd = document.getElementById("popChart");
const ctM = document.getElementById("popChartM");

export async function addDonChart() {
  const spend = await lengthArray();
    const allTransArr = await vieArrayTypeAll();
    const alltrans = allTransArr.length;
    const receipts = alltrans - spend;
  
  ctd.style.height = "300px";

  new Chart(ctd, {
    type: "doughnut",
    data: {
      labels: ["Wydatki", "Wpływy"],
      datasets: [
        {
          data: [spend, receipts],
          borderWidth: 1,
        },
      ],
    },
  });
}

export async function addDonChartM() {
  const spend = await lengthArray();
  const allTransArr = await vieArrayTypeAll();
  const alltrans = allTransArr.length;
  const receipts = alltrans - spend;

  new Chart(ctM, {
    type: "doughnut",
    data: {
      labels: ["Wydatki", "Wpływy"],
      datasets: [
        {
          
          data: [spend, receipts],
          borderWidth: 1,
        },
      ],
    },
  });
}