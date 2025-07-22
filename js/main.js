const refs = {
  openModal: document.querySelector('.hero-button'),
  backBtn: document.querySelector('.modal-button-exit'),
  modalOvarlay: document.querySelector('.modal-overlay'),
  burgerBtn: document.querySelector('.burger-menu'),
  mobileBackBtn: document.querySelector('.mobile-button-exit'),
  mobileModal: document.querySelector('.menu-overlay'),
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

const onShowMobileModalClick = e => {
  refs.mobileModal.classList.add('is-open');
};

const onMobileModalIsHideBtn = e => {
  refs.mobileModal.classList.remove('is-open');
};

refs.openModal.addEventListener('click', onModalIsOpenClick);
refs.backBtn.addEventListener('click', onModalIsHideBtnClick);
refs.modalOvarlay.addEventListener('click', onModalIsHideClick);
refs.burgerBtn.addEventListener('click', onShowMobileModalClick);
refs.mobileBackBtn.addEventListener('click', onMobileModalIsHideBtn);
