gsap.fromTo('.pp_slide_1 .pp_element_3', { scaleX: 1, scaleY: 1 }, { scaleX: 1.2, scaleY: 1.1, duration: 1.2, repeat: -1, yoyo: true });
document.querySelector(".pp_slide_1 .pp_element_3").addEventListener('click', () => {
  console.log('working');
  gsap.timeline()
    .to('.pp_slide_1', { opacity: 0, duration: .5 })
    .fromTo('.pp_slide_2', { opacity: .5, display: 'none' }, { opacity: 1, display: 'block', duration: .8 }, ">-.3");
  setTimeout(() => {
    setCheckInterval();
    gameAnimation();
  }, 1000);
});

function jump() {
  document.querySelector('.pp_slide_2').removeEventListener('click', jump);
  gsap.timeline({ onComplete: myFunction, default: { ease: Linear.easeNone } })
    .to('.pp_slide_2 .pp_element_2', { top: 45, duration: .35 })
    .to('.pp_slide_2 .pp_element_2', { top: 125, duration: .35 }, '>');
  function myFunction() {
    document.querySelector('.pp_slide_2').addEventListener('click', jump);
  }
}

document.querySelector('.pp_slide_2').addEventListener('click', jump);


// clearCheckInterval();
function clearCheckInterval() {
  console.log('clearing');
  clearInterval(obstacleCheckInterval);
}
function setCheckInterval(params) {
  obstacleCheckInterval = setInterval(() => {
    const obstacle = document.getElementById("pp_obstacle").offsetLeft;
    const man = document.getElementById("pp_man").offsetLeft;
    const manTop = document.getElementById("pp_man").offsetTop;
    console.log(man, obstacle, manTop);
    if (obstacle <= 35) {
      gsap.to('.pp_slide_2 .pp_element_5', { left: 600, duration: .001, ease: Linear.easeNone })
    }
    if (man + 31 >= obstacle && obstacle + 22 >= man && manTop >= 115) {
      t1.pause();
      gsap.to('.pp_slide_2 .pp_element_5', { left: 600, duration: .001, ease: Linear.easeNone })
      clearCheckInterval()
      setTimeout(() => {
        t1.play();
        setTimeout(() => {
          console.log('setting');
          setCheckInterval();
        }, 3000);
      }, 2000);
    }
  }, 100);
}

function gameAnimation() {
  t1 = gsap.timeline({ onComplete: clearCheckInterval, delay: 2.5 })
    .fromTo('.pp_slide_2 .pp_element_1', { x: 0 }, { x: -1920, duration: 20, ease: Linear.easeNone })
    .to('.pp_slide_2 .pp_element_2', { x: 220, duration: 2.2, ease: Linear.easeNone }, 20)
    .fromTo('.pp_slide_2 .pp_element_4', { scaleX: 1, scaleY: 1, opacity: 1 }, { scaleX: 1.1, scaleY: 1.1, duration: .5, repeat: 2, yoyo: true }, -1.5)
    .fromTo('.pp_slide_2 .pp_element_4', { opacity: 1 }, { opacity: 0, display: "none", duration: .3 }, ">")
    // coin animation
    .fromTo('.pp_slide_2 .pp_element_3', { x: 0 }, { x: -100, duration: 1, ease: Linear.easeNone }, 1.5)
    .to('.pp_slide_2 .pp_element_3', { opacity: 0, y: -20, duration: .5, ease: Linear.easeNone }, '>')
    .to('.pp_slide_2 .pp_element_3', { opacity: 0, y: 0, x: 160, duration: .1, ease: Linear.easeNone }, '>.1')
    .to('.pp_slide_2 .pp_element_3', { opacity: 1, y: 0, x: 160, duration: .1, ease: Linear.easeNone }, '>.1')
    .to('.pp_slide_2 .pp_element_3', { opacity: 1, y: 0, x: -100, duration: 2.6, ease: Linear.easeNone }, '>.1')
    .to('.pp_slide_2 .pp_element_3', { opacity: 0, y: -20, duration: .5, ease: Linear.easeNone }, '>')
    .to('.pp_slide_2 .pp_element_3', { opacity: 0, y: 0, x: 160, duration: .1, ease: Linear.easeNone }, '>.1')
    .to('.pp_slide_2 .pp_element_3', { opacity: 1, y: 0, x: 160, duration: .1, ease: Linear.easeNone }, '>.1')
    .to('.pp_slide_2 .pp_element_3', { opacity: 1, y: 0, x: -100, duration: 2.6, ease: Linear.easeNone }, '>.1')
    .to('.pp_slide_2 .pp_element_3', { opacity: 0, y: -20, duration: .5, ease: Linear.easeNone }, '>')
    .to('.pp_slide_2 .pp_element_3', { opacity: 0, y: 0, x: 160, duration: .1, ease: Linear.easeNone }, '>.1')
    .to('.pp_slide_2 .pp_element_3', { opacity: 1, y: 0, x: 160, duration: .1, ease: Linear.easeNone }, '>.1')
    .to('.pp_slide_2 .pp_element_3', { opacity: 1, y: 0, x: -100, duration: 2.6, ease: Linear.easeNone }, '>.1')
    .to('.pp_slide_2 .pp_element_3', { opacity: 0, y: -20, duration: .5, ease: Linear.easeNone }, '>')
    .to('.pp_slide_2 .pp_element_3', { opacity: 0, y: 0, x: 160, duration: .1, ease: Linear.easeNone }, '>.1')
    .to('.pp_slide_2 .pp_element_3', { opacity: 1, y: 0, x: 160, duration: .1, ease: Linear.easeNone }, '>.1')
    .to('.pp_slide_2 .pp_element_3', { opacity: 1, y: 0, x: -100, duration: 2.6, ease: Linear.easeNone }, '>.1')
    .to('.pp_slide_2 .pp_element_3', { opacity: 0, y: -20, duration: .5, ease: Linear.easeNone }, '>')
    .to('.pp_slide_2 .pp_element_3', { opacity: 0, y: 0, x: 200, duration: .1, ease: Linear.easeNone }, '>.1')
    .to('.pp_slide_2 .pp_element_3', { opacity: 1, y: 0, x: 200, duration: .1, ease: Linear.easeNone }, '>.1')
    .to('.pp_slide_2 .pp_element_3', { opacity: 1, y: 0, x: -100, duration: 3, ease: Linear.easeNone }, '>.1')
    .to('.pp_slide_2 .pp_element_3', { opacity: 0, y: -20, duration: .5, ease: Linear.easeNone }, '>')
    // obstacle animation
    .fromTo('.pp_slide_2 .pp_element_5', { left: 130 }, { left: 30, duration: 1, ease: Linear.easeNone }, 1.5)
    .to('.pp_slide_2 .pp_element_5', { left: 350, duration: .01, ease: Linear.easeNone },">.1")
    .fromTo('.pp_slide_2 .pp_element_5', { left: 350 }, { left: 30, duration: 3.2, ease: Linear.easeNone }, 4)
    .to('.pp_slide_2 .pp_element_5', { left: 350, duration: .01, ease: Linear.easeNone },">.1")
    .fromTo('.pp_slide_2 .pp_element_5', { left: 290 }, { left: 30, duration: 2.9, ease: Linear.easeNone }, 12)
    .to('.pp_slide_2 .pp_element_5', { left: 350, duration: .01, ease: Linear.easeNone },">.1")
    .fromTo('.pp_slide_2 .pp_element_5', { left: 265 }, { left: 30, duration: 2.65, ease: Linear.easeNone }, 16)
    .to('.pp_slide_2 .pp_element_5', { left: 350,display:'none', duration: .01, ease: Linear.easeNone },">.1")

}