const wrapper = document.querySelector('.modal-wrapper');
const element = document.querySelector('.modal');
const cancelButton = element.querySelector("footer .button:nth-child(1)")
const trs = document.querySelectorAll('tbody tr')
const deleteForm = document.querySelector('#delete-oficial')

cancelButton.addEventListener('click', close)

function open() {
  document.addEventListener('keydown', closeOnEscape)
  wrapper.classList.add('on')
  element.classList.add('animate-pop', 'back')
}

function close() {
  document.removeEventListener('keydown', closeOnEscape)
  wrapper.classList.remove('on')
  element.classList.remove('animate-pop', 'back')
}

function closeOnEscape({ key }) {
  if (key == 'Escape') {
    close()
  }
}

for (let tr of trs) {
  const trId = tr.dataset.id

  const deleteButton = tr.querySelector('button.delete')
  deleteButton.onclick = () => {
    open()
    deleteForm.setAttribute('action', `/oficial/delete/${trId}`)
  }
}
