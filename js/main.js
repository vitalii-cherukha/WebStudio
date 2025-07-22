const refs = {
  openModal: document.querySelector('.hero-button'),
  backBtn: document.querySelector('.modal-button-exit'),
  modalOvarlay: document.querySelector('.modal-overlay'),
};

const onModalIsOpenClick = e => {
  refs.modalOvarlay.classList.add('is-open');
};

const onModalIsHideClick = e => {
  if (e.target === e.currentTarget) {
    refs.modalOvarlay.classList.remove('is-open');
  }
};

const onModalIsHideBtnClick = e => {
  refs.modalOvarlay.classList.remove('is-open');
};

refs.openModal.addEventListener('click', onModalIsOpenClick);
refs.backBtn.addEventListener('click', onModalIsHideBtnClick);
refs.modalOvarlay.addEventListener('click', onModalIsHideClick);
