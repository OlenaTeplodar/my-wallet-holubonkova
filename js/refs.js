export const refs = {
  body: document.querySelector("body"),

  firstWindowHeader: document.querySelector(".first-window-header"),
  secondWindowHeader: document.querySelector(".sing-in-open"),
  thirdWindowHeader: document.querySelector(".sing-up-open"),
  fourthWindow: document.querySelector(".main-window"),

  userName: document.querySelector(".user-name"),
  userNameText: document.querySelector('.user-name-text'),

  openModalBtnSingUp: document.querySelector(".modal-sing-up-open"),
  openModalBtnSingIn: document.querySelector(".modal-sing-in-open"),
  closeModalBtn: document.querySelector(".close-btn"),
  closeModalBtnIn: document.querySelector(".stop-btn-in"),
  backdrop: document.querySelector(".backdrop"),

  goOut: document.querySelector(".close-out"),

  modalSingIn: document.querySelector(".modal-in-open"),
  modalSingUp: document.querySelector(".modal-up-open"),
  singInSubmit: document.querySelector(".js-sing-in"),
  singUpSubmit: document.querySelector(".js-sing-up"),

  formSingUp: document.querySelector(".sing-up"),
  formSingIn: document.querySelector(".sing-in"),

  singUpName: document.querySelector(".js-up-name"),
  singUpPassword: document.querySelector(".js-up-password"),
  singUpEmail: document.querySelector(".js-up-email"),
  singUpEmailControl: document.querySelector(".js-up-email-control"),

  nameError: document.querySelector(".js-up-name + span.error"),
  passwordError: document.querySelector(
    ".js-up-password + span.error"
  ),
  emailError: document.querySelector(".js-up-email + span.error"),
  emailControlError: document.querySelector(
    ".js-up-email-control + span.error"
  ),

  singInData: document.querySelector(".js-data-in"),
  singInPassword: document.querySelector(".js-in-password"),

  tableStatistic: document.querySelector(".js-table-statistic > tbody"),
  aboutWallet: document.querySelector(".about-wallet"),

  noShowSlider: document.querySelector(".on-desktop"),
  noShowBothCharts: document.querySelector(".on-mobile"),
  noShowColumn: document.querySelector(".desktop"),

  slider: document.querySelector(".slider"),
};
