
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

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

/*========== scroll sections active link ==========*/
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });


/*========== sticky navbar ==========*/
let header = document.querySelector('.header');

header.classList.toggle('sticky', window.scrollY > 100);


/*========== remove menu icon navbar when click navbar link (scroll) ==========*/
menuIcon.classList.remove('bx-x');
navbar.classList.remove('active');

};


new TypeIt("#hero", {
    speed: 50,
    startDelay: 900,
  })
    .type("Sou o Azrie rmando", { delay: 100 })
    .move(-8, { delay: 100 })
    .type("l", { delay: 400 })
    .move(null, { to: "START", instant: true, delay: 300 })
    .move(1, { delay: 200 })
    .delete(1)
    .type("l", { delay: 225 })
    .pause(200)
    .move(2, { instant: true })
    .pause(200)
    .move(5, { instant: true })
    .move(5, { delay: 200 })
    .type("A", { delay: 350 })
    .move(null, { to: "END" })
    .type("le typing utlity")
    .move(-4, { delay: 150 })
    .type("i")
    .move(null, { to: "END" })
    .type(' on the <span class="place">internet</span>', { delay: 400 })
    .delete(".place", { delay: 800, instant: true })
    .type('<em><strong class="font-semibold">planet.</strong></em>', {
      speed: 100,
    })
    .go();












