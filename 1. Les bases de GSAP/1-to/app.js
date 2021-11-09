const img1 = document.querySelector('.container-images img:nth-child(1)');
const btnCat = document.querySelector('.cat-fade');


gsap.to(img1, { x: 100, y: 100, scale: 2, zIndex: -1, opacity: 0, duration: 3 }); //gsap.to() permet d'animer tout ce qu'on veus avec des propriété css. to permet de partire du style des base jusqu'a ce qu'ona mis dans les chevron. de base la duré d'animation et de 0.5s
gsap.to('h1', { x: -10400, y: 450, duration: 1.5 });