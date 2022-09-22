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

gsap.registerPlugin(ScrollTrigger);

// gsap.to(".marqSpan", {
//   scrollTrigger: {
//     trigger: ".marqSpan",
//     start: "top 80%",
//     end: "top 30%",
//     scrub: true,
//     toggleActions: "restart none none none",
//   }
// })

// const tl = gsap.timeline({
//   scrollTrigger: {
//     trigger: '.blueBox',
//     markers: true,
//     start: 'top 80%',
//     end: 'top 10%',
//     scrub: true,
//   }
// });


// tl.to('.blueBox', {x: 500, duration: 5})
//   .to('.blueBox', {y: 200, duration: 3})
//   .to(".blueBox", {x: 0, duration: 2})

gsap.to('.marqSpan', {
  x: 1500,
  duration: 3,
  scrollTrigger: {
    trigger: ".marqSpan",
    start: "top 80%",
    end: "top 30%",
    toggleActions: 'restart reverse none none',
    scrub: true,

  }
})

gsap.to('.siteLineSpan', {
  x: -3000,
  duration: 3,
  scrollTrigger: {
    trigger: ".siteLineSpan",
    start: "top 80%",
    end: "top 30%",
    toggleActions: 'restart reverse none none',
    scrub: true,

  }
})

gsap.to('.businessLineSpan', {
  x: 1000,
  duration: 3,
  scrollTrigger: {
    trigger: ".businessLineSpan",
    start: "top 80%",
    end: "top 30%",
    toggleActions: 'restart reverse none none',
    scrub: true,

  }
})


  
})











