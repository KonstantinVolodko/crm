document.addEventListener("DOMContentLoaded", () => {


//= components/

SmoothScroll({
  // Время скролла 400 = 0.4 секунды
  animationTime    : 1000,
  // Размер шага в пикселях 
  stepSize         : 65,

  // Дополнительные настройки:
  
  // Ускорение 
  accelerationDelta : 30,  
  // Максимальное ускорение
  accelerationMax   : 2,   

  // Поддержка клавиатуры
  keyboardSupport   : true,  
  // Шаг скролла стрелками на клавиатуре в пикселях
  arrowScroll       : 50,

  // Pulse (less tweakable)
  // ratio of "tail" to "acceleration"
  pulseAlgorithm   : true,
  pulseScale       : 4,
  pulseNormalize   : 1,

  // Поддержка тачпада
  touchpadSupport   : true,
})


let swiper = new Swiper(".mySwiper", {
    slidesPerView: 'auto',
    spaceBetween: 30,
    grabCursor: true,
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

tl3.from('.ctaTitle', {y: '-200%'})
tl3.from('.ctaSubtitle', {opacity: 0, y: 100})
tl3.from('.btnCta1', {y: '300%'})

ScrollTrigger.create({
  animation: tl3,
  trigger: '.cta1',
  start: "top 70%",
    end: "top 0%",
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

tl7.fromTo('.helpAnimateArrowBg', {bottom: '0', fill: 'transparent'}, {width: '899.455rem', height: '889.485rem', left: '-182.5411%', bottom: '-71.0101%', fill: "#F9F9F9", stroke: '#F9F9F9'})

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

tl11.from('.cta2Title', {y: '-200%'})
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



let sector = document.querySelector('.sector');
let strokeLength = sector.getTotalLength(); 
let part = 0;
result = strokeLength/360*part;
sector.style.strokeDasharray = result + ',' + strokeLength;





const tl12 = gsap.timeline();
tl12.fromTo('.sector', {strokeDasharray: '0, 180'}, {strokeDasharray: '157, 180'})


ScrollTrigger.create({
  animation: tl12,
  trigger: '.sector',
  start: "top 60%",
  end: '3000',
  scrub: true,
  pin: '.gift',
})

const tl13 = gsap.timeline();
tl13.to('.giftTitleFirst', {color: '#3A3A3B'})
tl13.to('.giftTitleSecond', {color: '#3A3A3B'})
tl13.to('.giftTitleThird', {color: '#F86247'})
tl13.fromTo('.giftSubtitle', {opacity: 0, y: 100}, {opacity: 1, y: 0, fontSize: '1.6rem', lineHeight: '2rem'})


ScrollTrigger.create({
  animation: tl13,
  trigger: '.giftTitle',
  start: "top 50%",
  end: "top 0",
  scrub: true,
})


const tl14 = gsap.timeline();
tl14.to('.giftTitle', {display: 'flex', fontSize: '5rem', gap: '1rem', justifyContent: 'center'})


ScrollTrigger.create({
  animation: tl14,
  trigger: '.giftSubtitle',
  start: "top 50%",
  end: "top 0",
  scrub: true,
})


const tl15 = gsap.timeline();
tl15.to('.textContainer', {display: 'none'})
tl15.to('.textContainer2', {display: 'block'})
tl15.to('.textContainer2', {display: 'none'})
tl15.to('.textContainer3', {display: 'block'})
tl15.to('.textContainer3', {display: 'none'})
tl15.to('.textContainer4', {display: 'block'})
tl15.to('.textContainer4', {display: 'none'})
tl15.to('.textContainer5', {display: 'block'})


ScrollTrigger.create({
  animation: tl15,
  trigger: '.sector',
  start: "top 60%",
  end: '3000',
  scrub: true,
})


const tl16 = gsap.timeline();
tl16.to('.number1', {color: '#F86247'})
tl16.to('.number2', {color: '#3A3A3B'})
tl16.to('.number2', {color: '#F86247'})
tl16.to('.number3', {color: '#3A3A3B'})
tl16.to('.number3', {color: '#F86247'})
tl16.to('.number4', {color: '#3A3A3B'})
tl16.to('.number4', {color: '#F86247'})
tl16.to('.number5', {color: '#3A3A3B'})


ScrollTrigger.create({
  animation: tl16,
  trigger: '.sector',
  start: "top 60%",
  end: '3000',
  scrub: true,
})


const tl17 = gsap.timeline();
tl17.fromTo('.progressBar', {background: 'linear-gradient(180deg, #124BF6 -40%, transparent 0%), #D9D9D9'}, {background: 'linear-gradient(180deg, #124BF6 100%, transparent 0%), #D9D9D9'})


ScrollTrigger.create({
  animation: tl17,
  trigger: '.sector',
  start: "top 60%",
  end: '3000',
  scrub: true,
})


// tl18.to('.text3', {color: '#F86247'})
// tl18.to('.text4', {color: '#124BF6'})
// tl18.to('.text5', {color: '#124BF6'})
// tl18.to('.text6', {color: '#3A3A3B'})
// tl18.to('.text7', {color: '#F86247'})
// tl18.to('.text8', {color: '#F86247'})
// tl18.to('.text9', {color: '#124BF6'})


const tl18 = gsap.timeline();

tl18.to('.text1', {color: '#3A3A3B'})
tl18.to('.text1', {color: '#DADADB'})

ScrollTrigger.create({
  animation: tl18,
  trigger: '.text1',
  start: "top 50%",
  end: 'top 10%',
  scrub: true,
})

const tl19 = gsap.timeline();

tl19.to('.text2', {color: '#3A3A3B'})
tl19.to('.text2', {color: '#DADADB'})

ScrollTrigger.create({
  animation: tl19,
  trigger: '.text2',
  start: "top 50%",
  end: 'top 10%',
  scrub: true,
})

const tl20 = gsap.timeline();

tl20.to('.text3', {color: '#F86247'})
tl20.to('.text3', {color: '#DADADB'})

ScrollTrigger.create({
  animation: tl20,
  trigger: '.text3',
  start: "top 50%",
  end: 'top 10%',
  scrub: true,
})

const tl21 = gsap.timeline();

tl21.to('.text4', {color: '#124BF6'})
tl21.to('.text4', {color: '#DADADB'})

ScrollTrigger.create({
  animation: tl21,
  trigger: '.text4',
  start: "top 50%",
  end: 'top 10%',
  scrub: true,
})

const tl22 = gsap.timeline();

tl22.to('.text5', {color: '#124BF6'})
tl22.to('.text5', {color: '#DADADB'})

ScrollTrigger.create({
  animation: tl22,
  trigger: '.text5',
  start: "top 50%",
  end: 'top 10%',
  scrub: true,
})

const tl23 = gsap.timeline();

tl23.to('.text6', {color: '#3A3A3B'})
tl23.to('.text6', {color: '#DADADB'})

ScrollTrigger.create({
  animation: tl23,
  trigger: '.text6',
  start: "top 50%",
  end: 'top 10%',
  scrub: true,
})

const tl24 = gsap.timeline();

tl24.to('.text7', {color: '#F86247'})
tl24.to('.text7', {color: '#DADADB'})

ScrollTrigger.create({
  animation: tl24,
  trigger: '.text7',
  start: "top 50%",
  end: 'top 10%',
  scrub: true,
})

const tl25 = gsap.timeline();

tl25.to('.text8', {color: '#F86247'})
tl25.to('.text8', {color: '#DADADB'})

ScrollTrigger.create({
  animation: tl25,
  trigger: '.text8',
  start: "top 50%",
  end: 'top 10%',
  scrub: true,
})

const tl26 = gsap.timeline();

tl26.to('.text9', {color: '#124BF6'})
tl26.to('.text9', {color: '#DADADB'})

ScrollTrigger.create({
  animation: tl26,
  trigger: '.text9',
  start: "top 50%",
  end: 'top 10%',
  scrub: true,
})

const tl27 = gsap.timeline();
tl27.to('.tarifTitle', {color: '#FFFFFF'})

ScrollTrigger.create({
  animation: tl27,
  trigger: '.tarifTitle',
  start: "top 50%",
  end: 'top 20%',
  scrub: true,
})

const tl28 = gsap.timeline();
tl28.from('.greenContainerAnimate', {y: 100})

ScrollTrigger.create({
  animation: tl28,
  trigger: '.greenContainerAnimate',
  start: "top 70%",
  end: 'top 40%',
  scrub: true,
})

const tl29 = gsap.timeline();
tl29.to('.helpText1', {color: '#FFFFFF',})
tl29.to('.helpText2', {color: '#FFFFFF',})
tl29.to('.helpText3', {color: '#9FF612',})


ScrollTrigger.create({
  animation: tl29,
  trigger: '.helpTitle',
  start: "top 50%",
  end: 'top 20%',
  scrub: true,
})

  
  const buttons = document.querySelectorAll('.custom-button')
  buttons.forEach(el => {
    el.addEventListener('pointerdown', function clickHandler() {
      this.style.setProperty('border-width', '0.1rem');
    })
    el.addEventListener('pointerup', function pointerUp() {
      this.style.removeProperty('border-width')
    })
  })


const tl30 = gsap.timeline();
tl30.to('.keysesTitleFirst', {color: '#FFFFFF',})
tl30.to('.keysesTitleSecond', {color: '#FFFFFF',})
tl30.to('.keysesSubtitle', {color: '#FFFFFF',})


ScrollTrigger.create({
  animation: tl30,
  trigger: '.keysesTitle',
  start: "top 50%",
  end: 'top 20%',
  scrub: true,
})

const tl31 = gsap.timeline();
tl31.to('.founder', {background: '#f9f9f9'})
tl31.to('.founderRightTitle', {color: '#3A3A3B',})
tl31.to('.founderRightTitleSec', {color: '#3A3A3B',})
tl31.to('.founderRightTitleThird', {color: '#3A3A3B',})
tl31.to('.founderRightTitleOrange', {color: '#F86247',})


ScrollTrigger.create({
  animation: tl31,
  trigger: '.founderRightTitleContainer',
  start: "top 50%",
  end: 'top 20%',
  scrub: 0.5,
})

const tl32 = gsap.timeline();
tl32.to('.founder', {background: '#f9f9f9'})
tl32.to('.founderRightTitle', {color: '#3A3A3B',})



ScrollTrigger.create({
  animation: tl32,
  trigger: '.founderRightTitleContainer',
  start: "top 50%",
  end: 'top 20%',
  scrub: 0.5,
})


const tl33 = gsap.timeline();

tl33.from('.cta4Title', {y: -300})
tl33.from('.cta4Btn', {x: -300})
tl33.from('.cta4Img1', {y: 500})
tl33.from('.cta4Img2', {y: 500})
tl33.from('.cta4Img3', {y: 500, x: -200})
tl33.from('.cta4Img4', {y: 450, x: 200})
tl33.from('.cta4Img5', {y: 450})
tl33.from('.cta4Img6', {y: 400, x: -200})
tl33.from('.cta4Img7', {y: 400})
tl33.from('.cta4Img8', {y: 400, x: 100})
tl33.from('.cta4Img9', {y: 350, x: -100})
tl33.from('.cta4Img10', {y: 350, x: 300})
tl33.from('.cta4Img11', {y: 350})



ScrollTrigger.create({
  animation: tl33,
  trigger: '.cta4',
  start: "top 20%",
  end: '3000',
  scrub: true,
  pin: '.cta4',
})

const tl34 = gsap.timeline();

tl34.to('.developmentTitle', {color: '#FFFFFF'})


ScrollTrigger.create({
  animation: tl34,
  trigger: '.developmentSubtitle',
  start: "top 50%",
  end: 'top 20%',
  scrub: true,
})


const tl35 = gsap.timeline();

tl35.to('.contactsMainFirst', {color: '#FFFFFF'})
tl35.to('.contactsMainSecond', {color: '#A0F615'})


ScrollTrigger.create({
  animation: tl35,
  trigger: '.contactsMainTitle',
  start: "top 50%",
  end: 'top 20%',
  scrub: true,
})

const tl36 = gsap.timeline();

tl36.to('.help', {y: -200})


ScrollTrigger.create({
  animation: tl36,
  trigger: '.help',
  start: "top 70%",
  end: 'top 20%',
  scrub: true,
})

const tl37 = gsap.timeline();

tl37.to('.nearArrow7', {y: -700, x: 300})

ScrollTrigger.create({
  animation: tl37,
  trigger: '.moreTriggeredBtn',
  start: "top 60%",
  end: 'top 20%',
  scrub: true,
})


const tl38 = gsap.timeline();

tl38.to('.nearArrow1', {y: -300, x: 300})

ScrollTrigger.create({
  animation: tl38,
  trigger: '.moreTriggeredBtn',
  start: "top 60%",
  end: 'top 40%',
  scrub: true,
})

const tl39 = gsap.timeline();

tl39.to('.nearArrow2', {y: -300, x: 300})

ScrollTrigger.create({
  animation: tl39,
  trigger: '.moreTriggeredBtn',
  start: "top 60%",
  end: 'top 35%',
  scrub: true,
})

const tl40 = gsap.timeline();

tl40.to('.nearArrow3', {y: -200, x: 300})

ScrollTrigger.create({
  animation: tl40,
  trigger: '.moreTriggeredBtn',
  start: "top 60%",
  end: 'top 20%',
  scrub: true,
})


const tl41 = gsap.timeline();

tl41.to('.nearArrow4', {y: -100, x: 300})

ScrollTrigger.create({
  animation: tl41,
  trigger: '.moreTriggeredBtn',
  start: "top 60%",
  end: 'top 40%',
  scrub: true,
})


const tl42 = gsap.timeline();

tl42.to('.nearArrow5', {y: -400, x: 300})

ScrollTrigger.create({
  animation: tl42,
  trigger: '.moreTriggeredBtn',
  start: "top 60%",
  end: 'top 30%',
  scrub: true,
})


const tl43 = gsap.timeline();

tl43.to('.nearArrow6', {y: -500, x: 300})

ScrollTrigger.create({
  animation: tl43,
  trigger: '.moreTriggeredBtn',
  start: "top 60%",
  end: 'top 20%',
  scrub: true,
})


const tl44 = gsap.timeline();

tl44.to('.nearArrow8', {y: -700, x: 300})

ScrollTrigger.create({
  animation: tl44,
  trigger: '.moreTriggeredBtn',
  start: "top 60%",
  end: 'top 30%',
  scrub: true,
})


const tl45 = gsap.timeline();

tl45.to('.nearArrow9', {y: -700, x: 300})

ScrollTrigger.create({
  animation: tl45,
  trigger: '.moreTriggeredBtn',
  start: "top 60%",
  end: 'top 25%',
  scrub: true,
})


const tl46 = gsap.timeline();

tl46.to('.nearArrow10', {y: -650, x: 450})

ScrollTrigger.create({
  animation: tl46,
  trigger: '.moreTriggeredBtn',
  start: "top 60%",
  end: 'top 25%',
  scrub: true,
})


const tl47 = gsap.timeline();

tl47.to('.nearArrow11', {y: -300, x: 450})

ScrollTrigger.create({
  animation: tl47,
  trigger: '.moreTriggeredBtn',
  start: "top 60%",
  end: 'top 25%',
  scrub: true,
})


const tl48 = gsap.timeline();

tl48.to('.nearArrow12', {y: -900, x: 450})

ScrollTrigger.create({
  animation: tl48,
  trigger: '.moreTriggeredBtn',
  start: "top 60%",
  end: 'top 20%',
  scrub: true,
})

const tl49 = gsap.timeline();

tl49.to('.nearArrow13', {y: -1100, x: 450})

ScrollTrigger.create({
  animation: tl49,
  trigger: '.verticalContainer',
  start: "top 90%",
  end: 'top 60%',
  scrub: true,
})

const tl50 = gsap.timeline();

tl50.to('.nearArrow14', {y: -1300, x: 450})

ScrollTrigger.create({
  animation: tl50,
  trigger: '.verticalContainer',
  start: "top 70%",
  end: 'top 10%',
  scrub: true,
})

const tl51 = gsap.timeline();

tl51.to('.nearArrow18', {y: -2300, x: 450})

ScrollTrigger.create({
  animation: tl51,
  trigger: '.verticalContainer',
  start: "top 90%",
  end: 'top 60%',
  scrub: true,
})

const tl52 = gsap.timeline();

tl52.to('.nearArrow15', {y: -2500, x: 600})

ScrollTrigger.create({
  animation: tl52,
  trigger: '.verticalContainer',
  start: "top 90%",
  end: 'top 50%',
  scrub: true,
})

const tl53 = gsap.timeline();

tl53.to('.nearArrow16', {y: -1400, x: 450})

ScrollTrigger.create({
  animation: tl53,
  trigger: '.verticalContainer',
  start: "top 70%",
  end: 'top 20%',
  scrub: true,
})


const tl54 = gsap.timeline();

tl54.to('.nearArrow20', {y: -1600, x: 450})

ScrollTrigger.create({
  animation: tl54,
  trigger: '.verticalContainer',
  start: "top 70%",
  end: 'top 10%',
  scrub: true,
})


const tl55 = gsap.timeline();

tl55.to('.nearArrow19', {y: -1300, x: 450})

ScrollTrigger.create({
  animation: tl55,
  trigger: '.verticalContainer',
  start: "top 70%",
  end: 'top 10%',
  scrub: true,
})

const tl56 = gsap.timeline();

tl56.to('.cta1Arrow1', {y: -850})

ScrollTrigger.create({
  animation: tl56,
  trigger: '.cta1',
  start: "top 60%",
  end: 'top 0%',
  scrub: true,
})


const tl57 = gsap.timeline();

tl57.to('.cta1Arrow2', {y: -850})

ScrollTrigger.create({
  animation: tl57,
  trigger: '.cta1',
  start: "top 65%",
  end: 'top 0%',
  scrub: true,
})


const tl58 = gsap.timeline();

tl58.to('.cta1Arrow3', {y: -1250})

ScrollTrigger.create({
  animation: tl58,
  trigger: '.ctaBlackText',
  start: "top 70%",
  end: 'top 0%',
  scrub: true,
})


const tl59 = gsap.timeline();

tl59.to('.cta1Arrow4', {y: -700})

ScrollTrigger.create({
  animation: tl59,
  trigger: '.ctaSubtitle',
  start: "top 60%",
  end: 'top 0%',
  scrub: true,
})

const tl60 = gsap.timeline();

tl60.to('.cta1Arrow5', {y: -600})

ScrollTrigger.create({
  animation: tl60,
  trigger: '.ctaSubtitle',
  start: "top 50%",
  end: 'top 0%',
  scrub: true,
})


const tl61 = gsap.timeline();

tl61.to('.cta1Arrow6', {y: -600})

ScrollTrigger.create({
  animation: tl61,
  trigger: '.btnCta1',
  start: "top 60%",
  end: 'top 0%',
  scrub: true,
})


const tl62 = gsap.timeline();

tl62.from('.cta3Title', {y: -300})
tl62.from('.cta3Subtitle', {y: -500})
tl62.from('.cta3Btn', {y: -400})

ScrollTrigger.create({
  animation: tl62,
  trigger: '.cta3',
  start: "top 60%",
  end: 'top 20%',
  scrub: true,
})


const tl63 = gsap.timeline();

tl63.to('.cta3ImgArrow1', {y: -900, x: 450})

ScrollTrigger.create({
  animation: tl63,
  trigger: '.cta3',
  start: "top 60%",
  end: 'top 0%',
  scrub: true,
})


const tl64 = gsap.timeline();

tl64.to('.cta3ImgArrow2', {y: -900, x: 450})

ScrollTrigger.create({
  animation: tl64,
  trigger: '.cta3',
  start: "top 50%",
  end: 'top 0%',
  scrub: true,
})


const tl65 = gsap.timeline();

tl65.to('.cta3ImgArrow3', {y: -900, x: 450})

ScrollTrigger.create({
  animation: tl65,
  trigger: '.cta3Title',
  start: "top 50%",
  end: 'top 0%',
  scrub: true,
})

const tl66 = gsap.timeline();

tl66.to('.cta3ImgArrow4', {y: -900, x: 450})

ScrollTrigger.create({
  animation: tl66,
  trigger: '.cta3',
  start: "top 20%",
  end: 'top 0%',
  scrub: true,
})


const tl67 = gsap.timeline();

tl67.to('.cta3ImgArrow5', {y: -900, x: 450})

ScrollTrigger.create({
  animation: tl67,
  trigger: '.help',
  start: "top 80%",
  end: 'top 0%',
  scrub: true,
})


const tl68 = gsap.timeline();

tl68.to('.cta3ImgArrow6', {y: -900, x: 450})

ScrollTrigger.create({
  animation: tl68,
  trigger: '.help',
  start: "top 75%",
  end: 'top 0%',
  scrub: true,
})
  
})











