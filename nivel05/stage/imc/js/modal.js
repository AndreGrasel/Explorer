export const Modal = {
  wrapper: document.querySelector(".modal-wrapper"),
  message: document.querySelector(".modal-wrapper .modal header h2"),
  btnClose: document.querySelector(".modal-wrapper .modal button"),
  open() {
    this.wrapper.classList.add("open")
  },
  close() {
    this.wrapper.classList.remove("open")
  },
}

Modal.btnClose.onclick = () => {
  Modal.close()
}

window.addEventListener("keydown", handleKeydown)

function handleKeydown(event) {
  if (event.key == "Escape") {
    Modal.close()
  }
}
