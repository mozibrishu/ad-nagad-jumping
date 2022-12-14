const obstacle = document.getElementById("pp_obstacle").offsetLeft;
const man = document.getElementById("pp_man").offsetLeft;

function jump() {
  document.querySelector('.pp_slide_2').removeEventListener('click', jump);
  gsap.timeline({ onComplete: myFunction, default: { ease: Linear.easeNone } })
    .to('.pp_slide_2 .pp_element_2', { y: -80, duration: .35 })
    .to('.pp_slide_2 .pp_element_2', { y: 0, duration: .35 }, '>');
  function myFunction() {
    document.querySelector('.pp_slide_2').addEventListener('click', jump);
  }
}

document.querySelector('.pp_slide_2').addEventListener('click', jump);

setInterval(() => {
  console.log(man, obstacle);

}, 100);

gsap.timeline({ delay: 2.5 })
  .fromTo('.pp_slide_2 .pp_element_1', { x: 0 }, { x: -1920, duration: 20, ease: Linear.easeNone })
  .to('.pp_slide_2 .pp_element_2', { x: 220, duration: 2.5, ease: Linear.easeNone }, 20)
  .fromTo('.pp_slide_2 .pp_element_4', { scaleX: 1, scaleY: 1, opacity: 1 }, { scaleX: 1.1, scaleY: 1.1, opacity: .9, duration: .5, repeat: 2, yoyo: true }, -1.5)
  .fromTo('.pp_slide_2 .pp_element_4', { opacity: 1 }, { opacity: 0, display: "none", duration: .3 }, ">")
  .fromTo('.pp_slide_2 .pp_element_3',{x: 0}, {x:-100, duration: 1, ease: Linear.easeNone },1.5)
  .to('.pp_slide_2 .pp_element_3', { opacity: 0, y: -20, duration: .5, ease: Linear.easeNone }, '>')
  .to('.pp_slide_2 .pp_element_3', { opacity: 0, y: 0,x:200, duration: .1, ease: Linear.easeNone }, '>.1')
  .to('.pp_slide_2 .pp_element_3', { opacity: 1, y: 0,x:200, duration: .1, ease: Linear.easeNone }, '>.1')
  .to('.pp_slide_2 .pp_element_3', { opacity: 1, y: 0,x:-100, duration: 3, ease: Linear.easeNone }, '>.1')
  .to('.pp_slide_2 .pp_element_3', { opacity: 0, y: -20, duration: .5, ease: Linear.easeNone }, '>')
  .to('.pp_slide_2 .pp_element_3', { opacity: 0, y: 0,x:200, duration: .1, ease: Linear.easeNone }, '>.1')
  .to('.pp_slide_2 .pp_element_3', { opacity: 1, y: 0,x:200, duration: .1, ease: Linear.easeNone }, '>.1')
  .to('.pp_slide_2 .pp_element_3', { opacity: 1, y: 0,x:-100, duration: 3, ease: Linear.easeNone }, '>.1')
  .to('.pp_slide_2 .pp_element_3', { opacity: 0, y: -20, duration: .5, ease: Linear.easeNone }, '>')
  .to('.pp_slide_2 .pp_element_3', { opacity: 0, y: 0,x:200, duration: .1, ease: Linear.easeNone }, '>.1')
  .to('.pp_slide_2 .pp_element_3', { opacity: 1, y: 0,x:200, duration: .1, ease: Linear.easeNone }, '>.1')
  .to('.pp_slide_2 .pp_element_3', { opacity: 1, y: 0,x:-100, duration: 3, ease: Linear.easeNone }, '>.1')
  .to('.pp_slide_2 .pp_element_3', { opacity: 0, y: -20, duration: .5, ease: Linear.easeNone }, '>')
  .to('.pp_slide_2 .pp_element_3', { opacity: 0, y: 0,x:200, duration: .1, ease: Linear.easeNone }, '>.1')
  .to('.pp_slide_2 .pp_element_3', { opacity: 1, y: 0,x:200, duration: .1, ease: Linear.easeNone }, '>.1')
  .to('.pp_slide_2 .pp_element_3', { opacity: 1, y: 0,x:-100, duration: 3, ease: Linear.easeNone }, '>.1')
  .to('.pp_slide_2 .pp_element_3', { opacity: 0, y: -20, duration: .5, ease: Linear.easeNone }, '>')

