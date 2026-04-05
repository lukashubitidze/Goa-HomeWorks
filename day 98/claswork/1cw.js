const openBtn = document.getElementById('openBtn');
const modal = document.getElementById('modal');
const modalContent = document.getElementById('modalContent');
const closeBtn = document.getElementById('closeBtn');

function openModal() {
    modal.classList.remove('opacity-0', 'pointer-events-none');
    modal.classList.add('opacity-100');

    modalContent.classList.remove('opacity-0', 'scale-95');
    modalContent.classList.add('opacity-100', 'scale-100');
    }

function closeModal() {
    modal.classList.remove('opacity-100');
    modal.classList.add('opacity-0');

    modalContent.classList.remove('opacity-100', 'scale-100');
    modalContent.classList.add('opacity-0', 'scale-95');

setTimeout(() => {
    modal.classList.add('pointer-events-none');
      }, 300);
    }

openBtn.addEventListener('click', openModal);
closeBtn.addEventListener('click', closeModal);

// Click outside
modal.addEventListener('click', (e) => {
    if (e.target === modal) {
    closeModal();
      }
    });