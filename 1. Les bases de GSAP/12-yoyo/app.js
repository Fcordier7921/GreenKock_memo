const img1 = document.querySelector('.container-images img:nth-child(1)');
const btnCat = document.querySelector('.cat-fade');


const anim = gsap.to(img1, { y: 250, yoyo: true, repeat: 1 }) //yoyo permet de fair un aller retour

anim.delay(1); //démare aprés 1 seconde
anim.duration(5);
anim.pause();
// anim.kill();
anim.seek(1.25); //demare aprés 1.5s  
anim.resume(); //redémare

setTimeout(() => {
    anim.restart();
}, 3000);