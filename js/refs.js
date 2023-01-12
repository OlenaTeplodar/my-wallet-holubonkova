export const refs = {
  body: document.querySelector("body"),

  firstWindowHeader: document.querySelector(".first-window-header"),
  secondWindowHeader: document.querySelector(".sing-in-open"),
  thirdWindowHeader: document.querySelector(".sing-up-open"),
  fourthWindow: document.querySelector(".main-window"),
  userName: document.querySelector(".user-name"),

  openModalBtnSingUp: document.querySelector("[data-modal-sing-up-open]"),
  openModalBtnSingIn: document.querySelector("[data-modal-sing-in-open]"),
  closeModalBtn: document.querySelector("[data-modal-close]"),
  backdrop: document.querySelector('.backdrop'),

  goOut: document.querySelector("[data-modal-out]"),

  modalSingIn: document.querySelector("[data-modal-sing-in]"),
  modalSingUp: document.querySelector("[data-modal-sing-up]"),
  singInSubmit: document.querySelector(".js-sing-in"),
  singUpSubmit: document.querySelector(".js-sing-up"),

  singUpName: document.querySelector(".js-data-sing-up-name"),
  singUpPassword: document.querySelector(".js-data-sing-up-password"),
  singUpEmail: document.querySelector(".js-data-sing-up-email"),
  singUpEmailControl: document.querySelector(".js-data-sing-up-email-control"),

  singInData: document.querySelector(".js-data-sing-in"),
  singInPassword: document.querySelector(".js-data-sing-in-password"),

  tableStatistic: document.querySelector(".js-table-statistic > tbody"),
};
