import gsap from 'gsap';

export function letteringHover() {
  const blob = document.querySelectorAll('span');
  blob.forEach(element => {
    element.addEventListener('mouseover', () => {
      gsap.to(element, { color: '#ffffffdf', duration: 0.5 });
    })
    element.addEventListener('mouseout', () => {
      gsap.to(element, { color: '#fe800c', delay: 0.1 });
    })
  });
}

export function headerAnimation() {

  gsap.to('.logo', {
    scrollTrigger: {
      trigger: 'header',
      scrub: true,
      start: "bottom 90%",

    },
    duration: 2,
    autoAlpha: 0,
    y: 200,
  })
  gsap.to('.small', {
    scrollTrigger: {
      trigger: '.header',
      scrub: true,
      start: "bottom 80%"
    },
    y: -200,
  })
  gsap.to('.medium', {
    scrollTrigger: {
      trigger: '.header',
      scrub: true,
      start: "bottom 80%"
    },
    y: 200,
    autoAlpha: 0
  }),
    gsap.to('.large', {
      scrollTrigger: {
        trigger: '.header',
        scrub: true,
        start: "bottom 75%"
      },
      y: 300,
      autoAlpha: 0
    })
}

export function presentationAnimation() {

  gsap.to('.container__presentation__card', {
    scrollTrigger: {
      trigger: '.container__presentation',
      scrub: true,
      start: "bottom center"
    },
    // y: 250,
    autoAlpha: 0
  })
  gsap.to('.container__presentation__title', {
    scrollTrigger: {
      trigger: '.container__presentation',
      scrub: true,
      start: "top center"
    },
    delay: -0.2,
    y: 240,
  })
  gsap.to('.container__presentation__subtitle', {
    scrollTrigger: {
      trigger: '.container__presentation',
      scrub: true,
      start: "top 40%"
    },
    y: 50,
  })
  gsap.to('.container__presentation__card__image--me', {
    scrollTrigger: {
      trigger: '.scrollTitle',
      scrub: true,
      start: 'top 70%',
    },
    x: 0,
    autoAlpha: 1,
  })
  gsap.to('.container__presentation__card__description', {
    scrollTrigger: {
      trigger: '.scrollTitle',
      scrub: true,
      start: 'top 70%',
    },
    x: 0,
    autoAlpha: 1,
  })
}

export function skillAnimation() {

  gsap.to('.container__skill__title', {
    scrollTrigger: {
      trigger: '.container__skill',
      scrub: true,
      start: 'top +=1000',
    },
    y: 250
  })
  gsap.to('.container__skill__subtitle', {
    scrollTrigger: {
      trigger: '.container__skill',
      scrub: true,
      start: 'top +=800',
    },
    y: -50
  })

  gsap.to('.container__skill__list__details',
    {
      scrollTrigger: {
        trigger: '.container__skill__subtitle',
      },
      autoAlpha: 1,
      y: 0,
    }
  )

  gsap.to('.box-shadow-left', {
    scrollTrigger: {
      trigger: '.container__skill__subtitle',
      scrub: true,
    },
    autoAlpha: 1,
    x: 0,
  })
  gsap.to('.box-shadow-right', {
    scrollTrigger: {
      trigger: '.box-shadow-left',
      scrub: true,
    },
    autoAlpha: 1,
    x: 0,
  })
  gsap.to('.box-shadow-left-two', {
    scrollTrigger: {
      trigger: '.box-shadow-right',
      scrub: true,
    },
    autoAlpha: 1,
    x: 0,
  })
  gsap.to('.skillcard', {
    scrollTrigger: {
      trigger: '.container__skill__title',
      scrub: true,
    },
    y: 50,
  })
}

export function projectAnimation() {
  gsap.to('.container__project__title', {
    scrollTrigger: {
      trigger: '.container__project',
      scrub: true,
    },
    y: 150,
  })
}
