const wrapper = document.querySelector('.modal-wrapper');
const element = document.querySelector('.modal');
const cancelButton = element.querySelector("footer .button:nth-child(1)")
const deleteForm = document.querySelector('#delete-oficial')
const btnCancel = document.querySelector('.button.red')

const formEdit = document.querySelector('#form-oficial')
const nome = document.getElementById('nome')
const idorder = document.getElementById('idorder')
const posto = document.querySelector('.selected')
const quadro = document.querySelector('.selectedd')

btnCancel.addEventListener('click', (event) =>{
    event.preventDefault()
    document.querySelector('.modal-edit-wrapper').classList.remove('active')
})

cancelButton.addEventListener('click', (event) => {
    event.preventDefault()
    close()
})

function open() {
    document.addEventListener('keydown', closeOnEscape)
    wrapper.classList.add('on')
    element.classList.add('animate-pop', 'back')
}

function openEditModal(id){
    document.querySelector('.modal-edit-wrapper').classList.add('active')
    test(id)
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

function openModal(id){
    open()
    deleteForm.setAttribute('action', `/oficial/delete/${id}`)
}

async function test(id){
    const response = await fetch(`http://localhost:3000/oficial/${id}`)
    const oficial = await response.json()

    console.log(oficial)
    nome.setAttribute('value', oficial.nome)
    idorder.setAttribute('value', oficial.idorder)
    posto.setAttribute('value', oficial.posto)
    posto.innerHTML = oficial.posto
    quadro.setAttribute('value', oficial.quadro)
    quadro.innerHTML = oficial.quadro

    document.querySelector('.button-group button').addEventListener('click', () =>{
        formEdit.setAttribute('action', `/oficial/${oficial.id}`)
    })
}


async function teste() {
    const response = await fetch('http://localhost:3000/')
    const oficiais = await response.json()
    
    oficiais.forEach(oficial => {
        document.querySelector('tbody').innerHTML += `
        <tr data-id="${oficial.id}">
            <td>${oficial.idorder} </td>
            <td>${oficial.posto} </td>
            <td>${oficial.quadro} </td>
            <td>${oficial.nome} </td>
            <td>
                <button class="edit" type="button" onclick="openEditModal('${oficial.id}')">
                    <img src="/platinas/edit-24.svg" alt="Editar">
                </button> 
            </td>
            <td>
                <button class="delete" type="button" onclick="openModal(${oficial.id})">
                    <img src="/platinas/trash-24.svg" alt="Excluir">
                </button>
            </td>
        </tr>`
    });

}
