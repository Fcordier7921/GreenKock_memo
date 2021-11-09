const img1 = document.querySelector('.container-images img:nth-child(1)');
const btnCat = document.querySelector('.cat-fade');




btnCat.addEventListener('click', () => {
        gsap.to(img1, { x: 100, y: 100, scale: 2, zIndex: -1, opacity: 0, duration: 3, delay: 2, repeat: 1, repeatDelay: 2 });
    }) // delay et le temps avant le debut de l'animation
    //repeat permet de répéter l'animation en plus de l'animation sans repeat
    //repeatDelay et le temps entre chaque répétition