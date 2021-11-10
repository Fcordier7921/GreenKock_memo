const img1 = document.querySelector('.container-images img:nth-child(1)');
const btnCat = document.querySelector('.cat-fade');


gsap.to('.container-images img:nth-child(2)', {

    y: 100,
    repeat: 1,
    onComplete: () => console.log("teminer"),
    onStart: () => console.log("Démarre"),
    onUpdate: () => console.log("Anim en cours"),
    onRepeat: () => console.log("Répétition"),

}); //avec le méthode callback onComplete etc on peut faire des chose a un moment précis de l'animation