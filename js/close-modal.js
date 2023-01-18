import { refs } from "./refs.js";

refs.closeModalBtn.addEventListener("click", closeModal);
refs.closeModalBtnIn.addEventListener("click", closeModal);

export function onEscClick(evt) {
  if (evt.code === "Escape") {
    closeModal();
    window.removeEventListener("keydown", onEscClick);
    refs.openModalBtnSingIn.classList.remove("focus");
    refs.openModalBtnSingUp.classList.remove("focus");
    refs.openModalBtnSingIn.classList.remove("hover");
    refs.openModalBtnSingUp.classList.remove("hover");
    console.log("ескейп");
  }
}

export function closeModal() {
  if (refs.modalSingIn.classList.contains("is-hidden")) {
    refs.modalSingUp.classList.add("is-hidden");
    refs.openModalBtnSingUp.classList.remove("is-hidden");
    refs.openModalBtnSingIn.classList.remove("center-position");
    console.log("закриваємо модалку реєстрації");
  } else {
    refs.modalSingIn.classList.add("is-hidden");
    refs.openModalBtnSingIn.classList.remove("is-hidden");
    refs.openModalBtnSingUp.classList.remove("center-position");

    console.log("закриваємо модалку логования");
  }

  console.log("Закриття ");
}

