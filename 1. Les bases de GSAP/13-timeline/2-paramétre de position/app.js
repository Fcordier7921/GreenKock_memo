const img1 = document.querySelector('.container-images img:nth-child(1)');
const img2 = document.querySelector('.container-images img:nth-child(2)');
const img3 = document.querySelector('.container-images img:nth-child(3)');
const title = document.querySelector('.title');
const txt = document.querySelector('.txt');
const btn1 = document.querySelectorAll('.container-btns button');

//ne pas oublier de modifier le css rajouter: opacity: 0; visibility: hidden; transform: translateY(-30px);



const TL = gsap.timeline();
TL
    .to(img1, { autoAlpha: 1, y: 0, duration: 1 })
    .to(img2, { autoAlpha: 1, y: 0, duration: 1 }, '-=0.75') //positionement relatif permet de faire partire avec un léger enticipation pour rendre les animation plus fluide
    .to(img3, { autoAlpha: 1, y: 0, duration: 1 }, 0) //postionement absolue qui permet de faire partire un élément en même temps qu'un élément avant lui dans la liste , a ne pa utiliser pour des élément aprés lui dans la liste
    .to(title, { autoAlpha: 1, y: 0, duration: 1 })
    .to(txt, { autoAlpha: 1, y: 0, duration: 1 }, '<') //tu démare en même temps de le titre, on ppeux rajouter une valeur
    .to(btn1, { autoAlpha: 1, y: 0, duration: 1, stagger: 0.5 }, '>0.75') //démare a la fin de l'animation précédente, on ppeux rajouter une valeur