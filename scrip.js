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



/*
function myMenuFunction() {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', '/toggle-menu?class=' + encodeURIComponent(document.getElementById('navMenu').className));
    xhr.onload = function() {
        if (xhr.status === 200) {
            document.getElementById('navMenu').className = JSON.parse(xhr.responseText).class;
        }
    };
    xhr.send();
}
*/



document.addEventListener('DOMContentLoaded', () => {
  new TypeIt(".animate", {
    speed: 100,
    loop: true
  })
  .type("full stack júnior", {delay: 500})
  .delete(17)
  .type("design web (ui/ux)", {delay: 500})
  .delete(18)
  .type("frontend nativo", {delay: 300})
  .delete(15)
  .type("e backend inicial")
  .go()
} )


document.addEventListener('DOMContentLoaded', () => {
  new TypeIt(".animacao", {
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




