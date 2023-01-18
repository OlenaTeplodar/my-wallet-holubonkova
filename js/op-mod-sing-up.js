import { refs } from "./refs.js";
import { onEscClick } from "./close-modal.js";

refs.openModalBtnSingUp.addEventListener("click", openModalSingUp);

export default function openModalSingUp() {
  refs.modalSingUp.classList.remove("is-hidden"); //видна модалка
  window.addEventListener("keydown", onEscClick); // слушаем клик по Esc
  refs.openModalBtnSingUp.classList.add("is-hidden"); // скрываем кнопку открытия
  refs.openModalBtnSingIn.classList.add("center-position");
}

//Открытие модалки Регистрации и скрытия кнопки