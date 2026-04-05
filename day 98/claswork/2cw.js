const openBtn = document.getElementById('openBtn');
const modal = document.getElementById('modal');
const closeBtn = document.getElementById('closeBtn');

// Open modal
openBtn.addEventListener('click', () => {
  modal.classList.remove('hidden');
});

// Close modal
closeBtn.addEventListener('click', () => {
  modal.classList.add('hidden');
});