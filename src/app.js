const modal = document.querySelector('.modal-overlay');
const openModalButton = document.querySelector('.modal-btn');
const closeModalButton = document.querySelector('.close-btn');

openModalButton.addEventListener('click', () => {
    modal.classList.add('opened');
});

closeModalButton.addEventListener('click', () => {
    modal.classList.remove('opened');
});
