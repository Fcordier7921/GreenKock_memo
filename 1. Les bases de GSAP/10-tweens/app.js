const img1 = document.querySelector('.container-images img:nth-child(1)');
const btnCat = document.querySelector('.cat-fade');


gsap.registerEffect({
    name: "imgCrazy",
    effect: (targets, config) => {
        return gsap.to(targets, { duration: config.duration, y: 200, scale: 1.4, rotation: 360 })
    },
    default: { duration: 2 }

});
gsap.effects.imgCrazy(img1, { duration: 5 })
gsap.effects.imgCrazy(".container-images img:nth-child(2)")