var socket = io()


function renderOficial(oficiais){
    document.querySelector('#col-esq').innerHTML = ''
    document.querySelector('#col-dir').innerHTML = ''
	oficiais.forEach((oficial, index) => {
		if(index < oficiais.length / 2){
            document.querySelector('#col-esq').innerHTML += `
                <li class="card">
                    <img class="li-img" src="/platinas/${ oficial.posto }-${ oficial.quadro }.png">
                    <div class="card-content">
                        <h3 class="text">${ oficial.posto } ${ oficial.quadro === 'ARM' ? ' ' : '('+oficial.quadro+')' } ${ oficial.nome }</h3>
                        <div class="liga-desliga">
                            <input type="checkbox" class="liga-desliga__checkbox" id="liga-desliga${ oficial.id }" ${ oficial.status }>
                            <label for="liga-desliga${ oficial.id }" class="liga-desliga__botao" onclick="preOficial(${ oficial.id })"></label>
                        </div>
                    </div>
                </li>
            `
        }else{
            document.querySelector('#col-dir').innerHTML += `
                <li class="card">
                    <img class="li-img" src="/platinas/${ oficial.posto }-${ oficial.quadro }.png">
                    <div class="card-content">
                        <h3 class="text">${ oficial.posto } ${ oficial.quadro === 'ARM' ? ' ' : '('+oficial.quadro+')' } ${ oficial.nome }</h3>
                        <div class="liga-desliga">
                            <input type="checkbox" class="liga-desliga__checkbox" id="liga-desliga${ oficial.id }" name="status" ${ oficial.status }>
                            <label for="liga-desliga${ oficial.id }" class="liga-desliga__botao" onclick="preOficial(${ oficial.id })"></label>
                        </div>
                    </div>
                </li>
            `
        }
	});
}


socket.on("oficiais", (oficiais) =>{
    renderOficial(oficiais)
})

socket.on("oficiaisUpdate", (oficiais) =>{
    renderOficial(oficiais)
})


function preOficial(id){
    socket.emit('update_status', id)
}