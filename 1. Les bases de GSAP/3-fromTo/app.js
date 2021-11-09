const img1 = document.querySelector('.container-images img:nth-child(1)');
const btnCat = document.querySelector('.cat-fade');


gsap.from('h1', { opacity: 1, fontSize: '20px', duration: 0.5 }); // l'inverse de to , on part de ces valeur pour arriver au valeur de base

btnCat.addEventListener('click', () => {
        gsap.fromTo(img1, { opacity: 0 }, { opacity: 1, duration: 5 })
    }) // bug sur le double click il ne finipas l'animation