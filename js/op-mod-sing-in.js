import { refs } from "./refs.js";
import { onEscClick } from "./close-modal.js";

refs.openModalBtnSingIn.addEventListener("click", openModalSingIn);

export default function openModalSingIn() {
  refs.modalSingIn.classList.remove("is-hidden"); 
  window.addEventListener("keydown", onEscClick); 
  refs.openModalBtnSingIn.classList.add("is-hidden"); 
  refs.openModalBtnSingUp.classList.add("center-position");
}
//  Open the login modal and hide the button