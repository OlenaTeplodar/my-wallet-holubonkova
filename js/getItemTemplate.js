export const transactionInfo = ({ date, type, amount, balance, description }) => `<tr>
            <td class="data">"${date}"</td>
            <td class="type-transaction">${type}</td>
            <td class="descr-transaction">${description}</td>
            <td class="amount">${amount}</td>
            <td class="balance">${balance}</td>
            </tr>`;


export const getItemTemplate = ({
  id,
  isDone,
  text,
}) => `<li class="item" data-id="${id}">
  <div>
    <input
      data-action="toggle"
      type="checkbox"
      ${isDone ? "checked" : ""}
    />
    <span>${text}</span>
  </div>
  <div class="buttons">
    <button data-action="view" class="btn" type="button">view</button>
    <button data-action="delete" class="btn danger" type="button">x</button>
  </div>
</li>`;