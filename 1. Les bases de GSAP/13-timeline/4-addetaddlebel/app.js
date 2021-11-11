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
    paused: true,
});
TL
    .to(img1, { autoAlpha: 1, y: 0 })
    .to(img2, { autoAlpha: 1, y: 0 })
    .to(img3, { autoAlpha: 1, y: 0 })
    .to(title, { autoAlpha: 1, y: 0 })
    .to(txt, { autoAlpha: 1, y: 0 })
    .addLabel('endAnim') //label  ajpouter
    .to(btn1, { autoAlpha: 1, y: 0, stagger: 0.5 })
    .add(() => { //on peut ajouter un tweens ou d'autre élément
        console.log("fin d'animation");
    })


setTimeout(() => {
    // TL.seek('endAnim')
    TL.play('endAnim') //on rejoue apartire de ce label 
}, 1000);