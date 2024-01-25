//Relógio Digital
const hour = document.querySelector('#hour')
const min = document.querySelector('#min')
const sec = document.querySelector('#sec')

setInterval(() => {
  let date = new Date()
  let dHour = date.getHours()
  let dMinute = date.getMinutes()
  let dSec = date.getSeconds()

  hour.innerHTML = `${formatTime(dHour)}`
  min.innerHTML = `${formatTime(dMinute)}`
  sec.innerHTML = `${formatTime(dSec)}`

}, 1000)

function formatTime(time) {
  return time < 10 ? '0' + time : time
}


function myMenuFunction() {
  var i = document.getElementById("navMenu")
  if(i.className === "nav-menu") {
    return i.className += " responsive"
  }  else {
      return i.className = "nav-menu"
  }
 
}

document.addEventListener('DOMContentLoaded', () => {
  new TypeIt(".animate", {
    speed: 100,
    loop: true
  })
  .type("Design Web (UI/UX)", {delay: 500})
  .delete(18)
  .type("Frontend Nativo", {delay: 250})
  .delete(15)
  .type("Backend Inicial", {delay: 250})
  .delete(15)
  .type("e Analista de Dados")
  .go()
} )





