const img1 = document.querySelector('.container-images img:nth-child(1)');
const img2 = document.querySelector('.container-images img:nth-child(2)');
const img3 = document.querySelector('.container-images img:nth-child(3)');
const title = document.querySelector('.title');
const txt = document.querySelector('.txt');
const btn1 = document.querySelectorAll('.container-btns button');

//ne pas oublier de modifier le css rajouter: opacity: 0; visibility: hidden; transform: translateY(-30px);



const TL = gsap.timeline({
    defaults: {
        duration: 1,
        ease: "power2", //valeur général qu'on peur suprimer au cas par cas
    },
    repeat: -1,
    repeatDelay: 0.5,
    yoyo: true,
    // paused: true,
    onComplete: () => console.log("complete"),
    onStart: () => console.log("start")
});
TL
    .to(img1, { autoAlpha: 1, y: 0 })
    .to(img2, { autoAlpha: 1, y: 0 }, '-=0.75')
    .to(img3, { autoAlpha: 1, y: 0 }, '-=0.75')
    .to(title, { autoAlpha: 1, y: 0 }, '-=0.75')
    .to(txt, { autoAlpha: 1, y: 0 }, '-=0.75')
    .to(btn1, { autoAlpha: 1, y: 0, stagger: 0.5 }, '-=0.75')


// setTimeout(() => {
//     TL.play()
// }, 1000);