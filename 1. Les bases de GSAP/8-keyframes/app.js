const img1 = document.querySelector('.container-images img:nth-child(1)');
const btnCat = document.querySelector('.cat-fade');


gsap.to('.container-images img:nth-child(2)', {
    keyframes: [{ duration: 0.3, y: 100 },
        { duration: 0.3, scale: 1.3 },
        { duration: 0.3, y: 200 }
    ]
}); //le keyframes permet de faire plusieur animation sue le même objet a la suite les un des autre