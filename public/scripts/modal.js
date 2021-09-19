export default function Modal() {
  const modalWrapper = document.querySelector(".modal-wrapper");
  const cancelButton = document.querySelector(".button.cancel");

  cancelButton.addEventListener("click", close);

  function open() {
    //funcionalidade de atribuir a classe active para a modal
    return modalWrapper.classList.add("active");
  }
  function close() {
    //funcionalidade de remover a classe active da modal
    return modalWrapper.classList.remove("active");
  }

  //retornando as funcionalidade do modal
  return {
    open,
    close,
  };
}
