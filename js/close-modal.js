import { refs } from "./refs";

refs.closeModalBtn.addEventListener("click", closeModal);


export function onEscClick(evt) {
  if (evt.code === "Escape") {
    closeModal();
    window.removeEventListener("keydown", onEscClick);
  }
}

export function closeModal() {
  refs.backdrop.classList.add("is-hidden");
  refs.body.classList.remove("no-scroll");
}

