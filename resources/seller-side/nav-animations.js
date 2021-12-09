/*===== GSAP ANIMATION =====*/
// NAV
gsap.from('.nav-container', {opacity: 0, duration: 0.5, delay: 1, y: -15})
gsap.from('.logo', {opacity: 0, duration: 0.5, delay: 1, y: -15})
gsap.from('.nav-item', {opacity: 0, duration: 0.5, delay: 1, y: -15, stagger: 0,})
gsap.from('.nav-toggle-btn', {opacity: 0, duration: 0.5, delay: 1, y: -15, stagger: 0,})

// HOME
gsap.from('.title', {opacity: 0, duration: 0.5, delay: 1, y: 15})
gsap.from('.text', {opacity: 0, duration: 0.5, delay: 1, y: 15})
gsap.from('.join-btn', {opacity: 0, duration: 0.5, delay: 1, y: 15})
gsap.from('.creatives', {opacity: 0, duration: 0.5, delay: 1, y: 15})