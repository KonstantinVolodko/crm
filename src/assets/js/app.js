document.addEventListener("DOMContentLoaded", () => {


//= components/


let swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    setWrapperSize: false,
    navigation: {
        nextEl: ".arrowRight",
        prevEl: ".arrowLeft",
      },
});

let swiper2 = new Swiper(".tarifSwiper", {
  slidesPerView: 3.3,
  spaceBetween: 30,
  navigation: {
    nextEl: ".tarifArrowRight",
    prevEl: ".tarifArrowLeft",
  },
});

let swiper3 = new Swiper(".helpSwiper", {
  slidesPerView: 1.2,
  spaceBetween: 30,
  navigation: {
    nextEl: ".helpArrowRight",
    prevEl: ".helpArrowLeft",
  },
});

let swiper4 = new Swiper(".keysesSwiper", {
  slidesPerView: 2.2,
  spaceBetween: 30,
  navigation: {
    nextEl: ".keysesArrowLeft",
    prevEl: ".keysesArrowRight",
  },
});

// gsap.registerPlugin(ScrollTrigger);


// gsap.to('.marqSpan', {
//   x: 1500,
//   duration: 3,
//   scrollTrigger: {
//     trigger: ".marqSpan",
//     start: "top 80%",
//     end: "top 30%",
//     toggleActions: 'restart reverse none none',
//     scrub: true,

//   }
// })

// gsap.to('.siteLineSpan', {
//   x: -3000,
//   duration: 3,
//   scrollTrigger: {
//     trigger: ".siteLineSpan",
//     start: "top 80%",
//     end: "top 30%",
//     toggleActions: 'restart reverse none none',
//     scrub: true,

//   }
// })

// gsap.to('.businessLineSpan', {
//   x: 1000,
//   duration: 3,
//   scrollTrigger: {
//     trigger: ".businessLineSpan",
//     start: "top 80%",
//     end: "top 30%",
//     toggleActions: 'restart reverse none none',
//     scrub: true,

//   }
// })


let benefitsContainer = document.querySelector('.benefitsContainer')
let nearHeaderContainer = document.querySelector('.nearHeaderContainer')
let mainTitle = document.querySelector('.mainTitle')

const tl = gsap.timeline();

tl.from('.mainTitle', {x: '-200%'})
tl.from('.hiddenText', {x: '600%', duration: 1})
tl.from('.more', {x: '-100%', duration: 1})
tl.from('.demo', {opacity: 0, y: 100, duration: 1})
tl.from('.verticalContainer', {opacity: 0, y: 200, duration: 1})
tl.from('.vertText', {x: '-300%',})

ScrollTrigger.create({
  animation: tl,
  trigger: '.mainTitle',
  start: 'top top',
  end: "1000px",
  scrub: true,
  pin: '.nearHeaderContainer',
})
  
})











