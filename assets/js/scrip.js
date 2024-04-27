
// Programa para o Relógio Digital
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




// Eventos typelt para a digitação automática
document.addEventListener('DOMContentLoaded', () => {
  new TypeIt("#multipleStrings", {
    strings: ["Olá sou o <br> Suélio Armando", "Programador Full stack."],
    speed: 70,
    waitUntilVisible: true,
  }).go();
} )



// Eventos typelt para a digitação automática
document.addEventListener('DOMContentLoaded', () => {
  new TypeIt(".animacao", { //Obejcto TypeIt adicionado na classeName animacao
    speed: 100,
    loop: true
  })
  .type("Olá gostou da minha apresentação?", {delay: 500})
  .delete(33)
  .type("Espero que tenha deixado sua mensagem!", {delay: 250})
  .delete(41)
  .type("Até mais &#x1F596;! Se cuide viu...")
  .go()
} )




