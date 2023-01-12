import { refs } from "./refs";

refs.openModalBtnSingIn.addEventListener('click', openModalSingIn);


export function openModalSingIn() {
    refs.modalSingIn.classList.remove('is-hidden');
    refs.body.classList.add('no-scroll');
    window.addEventListener('keydown', onEscClick);
}

