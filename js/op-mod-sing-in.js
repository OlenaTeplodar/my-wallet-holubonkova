import { refs } from "./refs.js";
import { onEscClick } from "./close-modal.js";

refs.openModalBtnSingIn.addEventListener("click", openModalSingIn);

export default function openModalSingIn() {
  refs.modalSingIn.classList.remove("is-hidden"); //видна модалка
  window.addEventListener("keydown", onEscClick); // слушаем клик по Esc
  refs.openModalBtnSingIn.classList.add("is-hidden"); // скрываем кнопку открытия
  refs.openModalBtnSingUp.classList.add("center-position");
}
//  Открытие модалки логования и скрытия кнопки