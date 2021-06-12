function renderDate() {
  const date = new Date()
  const options = { weekday: 'short', day: 'numeric', month: 'short', year: 'numeric'};
  const formatDat = date.toLocaleString('PT-BR', options)
  const dateNow = formatDat.replace('.', '')
  
  document.querySelector('.data').innerHTML = dateNow
}

function renderTime(){
	const clock = document.getElementById("Clock");
	const now = new Date(); 
	const hours = now.getHours();
	const minutes = now.getMinutes(); 
	const seconds = now.getSeconds(); 

	const timeString = [hours, minutes, seconds]
        .map(unit => String(unit).padStart(2, '0')).join(':')
    
    clock.innerText = timeString 
}

function init(){
	setInterval(renderTime, 1000);
	renderDate()
}