const img1 = document.querySelector('.container-images img:nth-child(1)');
const img2 = document.querySelector('.container-images img:nth-child(2)');
const img3 = document.querySelector('.container-images img:nth-child(3)');
const title = document.querySelector('.title');
const txt = document.querySelector('.txt');
const btn1 = document.querySelectorAll('.container-btns button');




const TL = gsap.timeline();
TL
    .to(img1, { autoAlpha: 1, y: 0 }) //autoAlpha passe l'opacity et la visibilité 
    .to(img2, { autoAlpha: 1, y: 0 })
    .to(img3, { autoAlpha: 1, y: 0 })
    .to(title, { autoAlpha: 1, y: 0 })
    .to(txt, { autoAlpha: 1, y: 0 })
    .to(btn1, { autoAlpha: 1, y: 0, stagger: 0.5 }) //stagger perme de mettre un délais entre chaque btn et les séléectionnan tous