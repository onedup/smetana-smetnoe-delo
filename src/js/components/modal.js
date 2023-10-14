import vars from "../_vars";
import { disableScroll } from '../functions/disable-scroll';
import {enableScroll} from "../functions/enable-scroll";

const modalBtns = document.querySelectorAll("._modal-open");
const modals = document.querySelectorAll("._modal");

function openModal(el) {
  el.classList.add("open");
  disableScroll();
}

function closeModal(e) {
  if (e.target.classList.contains("modal__close") || e.target.closest(".modal__close") || e.target.classList.contains("modal")) {
    e.target.closest("._modal").classList.remove("open");
    enableScroll();
  }
}

modalBtns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    let data = e.target.dataset.modalOpen;

    modals.forEach((modal) => {
      if (modal.dataset.modal == data) {
        openModal(modal);
      }
    });
  });
});

modals.forEach((modal) => {
  modal.addEventListener("click", (e) => closeModal(e));
});
