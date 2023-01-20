import { refs } from "./refs.js";
import { onEscClick } from "./close-modal.js";

refs.openModalBtnSingUp.addEventListener("click", openModalSingUp);

export default function openModalSingUp() {
  refs.modalSingUp.classList.remove("is-hidden"); 
  window.addEventListener("keydown", onEscClick); 
  refs.openModalBtnSingUp.classList.add("is-hidden"); 
  refs.openModalBtnSingIn.classList.add("center-position");
}

//Open the registration modal and hide the button