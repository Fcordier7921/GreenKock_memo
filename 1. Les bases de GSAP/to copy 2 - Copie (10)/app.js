const img1 = document.querySelector('.container-images img:nth-child(1)');
const btnCat = document.querySelector('.cat-fade');


// gsap.to(img1, { x: 100, y: 100, scale: 2, zIndex: -1, opacity: 0, duration: 3 }); //gsap.to() permet d'animer tout ce qu'on veus avec des propriété css. to permet de partire du style des base jusqu'a ce qu'ona mis dans les chevron. de base la duré d'animation et de 0.5s
// gsap.to('h1', { color: 'red', duration: 1 });


// gsap.from('h1', { opacity: 1, fontSize: '20px', duration: 3 }); // l'inverse de to

btnCat.addEventListener('click', () => {
        gsap.from(img1, { opacity: 0, duration: 3 })
    }) // bug sur le double click