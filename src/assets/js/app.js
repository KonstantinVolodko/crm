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


const tl = gsap.timeline();

tl.from('.mainTitle', {x: '-200%'})
tl.from('.hiddenText', {x: '600%'})
tl.from('.more', {x: '-100%'})
tl.from('.demo', {opacity: 0, y: 100})
tl.from('.verticalContainer', {opacity: 0, y: 200})
tl.from('.vertText', {x: '-300%',})

ScrollTrigger.create({
  animation: tl,
  trigger: '.mainTitle',
  start: 'top 50%',
  // end: "1000px",
  // scrub: true,
  // pin: '.nearHeaderContainer',
})

const tl2 = gsap.timeline();

tl2.to('.orangeSpan', {y: 200, color: '#F86247'})
tl2.to('.blackText1', {y: 200, color: '#3A3A3B'})
tl2.to('.blackText2', {y: 200, color: '#3A3A3B'})

ScrollTrigger.create({
  animation: tl2,
  trigger: '.benefitsTitle',
    start: "top 80%",
    end: "top 30%",
  scrub: true,
})

const tl3 = gsap.timeline();

tl3.from('.ctaTitle', {x: '-50%', duration: 2})
tl3.from('.ctaSubtitle', {opacity: 0, y: 100, duration: 1})
tl3.from('.btnCta1', {x: '-200%'})

ScrollTrigger.create({
  animation: tl3,
  trigger: '.cta1',
  start: "top 60%",
    end: "top 20%",
  scrub: true,
})

const tl4 = gsap.timeline();

tl4.to('.integrationTitle', { color: '#3A3A3B'})
tl4.to('.integrationContainerTitle', {color: '#124BF6'})

ScrollTrigger.create({
  animation: tl4,
  trigger: '.integration',
  start: "top 80%",
  end: "top 30%",
  scrub: true,
})

const tl5 = gsap.timeline();

tl5.fromTo('.moveStar', {x: 0}, {x: 50})


ScrollTrigger.create({
  animation: tl5,
  trigger: '.teachContainer',
  start: "top 70%",
  end: "top 30%",
  scrub: true,
})

const tl6 = gsap.timeline();

tl6.to('.moreTitle', {color: '#FFFFFF'})

ScrollTrigger.create({
  animation: tl6,
  trigger: '.moreTitle',
  start: "top 70%",
  end: "top 40%",
  scrub: true,
})

const tl7 = gsap.timeline();

tl7.fromTo('.helpAnimateArrowBg', {bottom: '0', fill: 'transparent'}, {width: '899.455rem', height: '889.485rem', left: '-182.5411%', bottom: '-71.0101%', fill: "#eaeaea", stroke: '#eaeaea'})

ScrollTrigger.create({
  animation: tl7,
  trigger: '.triggerArrow',
  start: "top 80%",
  end: "top 0",
  scrub: true,
  pin: '.more2'
})


const tl8 = gsap.timeline();

tl8.fromTo('.secStar', {x: 0}, {x: 50}),
tl8.fromTo('.thirdStar', {x: 0}, {x: 100}),

ScrollTrigger.create({
  animation: tl8,
  trigger: '.updateLeftTitle',
  start: "top 80%",
  end: "top 30%",
  scrub: true,
})


const tl9 = gsap.timeline();

tl9.fromTo('.secStar2', {x: 0}, {x: 50}),
tl9.fromTo('.thirdStar2', {x: 0}, {x: 100}),
tl9.fromTo('.fourStar2', {x: 0}, {x: 150}),

ScrollTrigger.create({
  animation: tl9,
  trigger: '.updateLeftTitle',
  start: "top 80%",
  end: "top 30%",
  scrub: true,
})


const tl10 = gsap.timeline();

tl10.to('.stepsTitleFirst', {color: '#3A3A3B'}),
tl10.to('.stepsTitleSecond', {color: '#3A3A3B'}),
tl10.to('.stepsSubtitle', {color: '#124BF6'})

ScrollTrigger.create({
  animation: tl10,
  trigger: '.stepsTitleFirst',
  start: "top 80%",
  end: "top 0%",
  scrub: true,
})

const tl11 = gsap.timeline();

tl11.from('.cta2Title', {x: '-130%'})
tl11.from('.img1', {y: -1000}),
tl11.from('.img2', {y: -800}),
tl11.to('.cta2TitleSpan', {color: '#9FF612'})
tl11.from('.img3', {y: -750, x: 500}),
tl11.from('.img4', {y: -700, x: 200}),
tl11.from('.img5', {y: -650}),
tl11.from('.img6', {y: -650, x: -200}),
tl3.from('.cta2Subtitle', {opacity: 0, y: 100}),
tl11.from('.img7', {y: -600}),
tl11.from('.img8', {y: -600, x: -200}),
tl11.from('.img9', {y: -500, x: 200}),
tl11.from('.img10', {y: -450, x: 150}),
tl11.from('.img11', {y: -400, x: 150}),

ScrollTrigger.create({
  animation: tl11,
  trigger: '.cta2',
  start: "top 30%",
  end: "1000",
  scrub: true,
  pin: '.cta2',
})

  
})











