'use strict'

const modal = document.querySelector('modal');
const modalOverlay = document.querySelector('modal-overlay');
const closeModal = document.querySelector('close-modal-btn');
const openModal = document.querySelectorAll('.show-modal');

for (let i = 0; i < openModal.length; i++) {
  openModal[i].addEventListener('click', function () {
    modal.classList.remove('modal-hide');
    modalOverlay.classList.remove('modal-hide');
    console.log('Modal Opened');
  });
}