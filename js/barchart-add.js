import { refs } from "./refs.js";
import { onSaldo, saldoArray } from "./barchart-data.js";

const ctx = document.getElementById("myChart");

export async function addBarChart() {
  const labelsD = await onSaldo();
  console.table(labelsD);

  new Chart(ctx, {
    type: "bar",
    data: {
      labels: labelsD,
      datasets: [
        {
          label: "Kwota na dzień",
          data: saldoArray,
          borderWidth: 1,
        },
      ],
    },
  });
}


