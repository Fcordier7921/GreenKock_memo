const img1 = document.querySelector('.container-images img:nth-child(1)');
const btnCat = document.querySelector('.cat-fade');


gsap.to('.container-images img', {
    y: 150,
    scale: 1.2,
    ease: "power1",
    duration: 3,
    stagger: { //delay entrer les animation
        each: 1, //delay entre les animation
        //amount :1 // ce répartie la délais entre toute las animation
        from: "center", //peut prendre end , on commence par la derniére animation pour end
    }
}); //permet de mettre un delais d'animation

gsap.to('.container-btns button', {
    x: 50,
    duration: 0.2,
    stagger: 0.2
});