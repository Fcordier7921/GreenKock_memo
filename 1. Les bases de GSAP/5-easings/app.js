const img1 = document.querySelector('.container-images img:nth-child(1)');
const btnCat = document.querySelector('.cat-fade');


gsap.to('.container-images img', { y: 300, scale: 1.2, ease: "elastic.out(1,0.3)", duration: 3 }); //ce rendre sur la doc de greensock pour voir les différente courbe d'animation