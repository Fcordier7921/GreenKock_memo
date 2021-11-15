window.addEventListener('load', init);

function init() {
    const animation = gsap.timeline({ repeat: -1 })

    animation.to('.vertical-slider p', { y: 0, autoAlpha: 1, stagger: 1 }) //stagger permet de mettre un délais entre toute les p selectionné
    animation.to('.vertical-slider p', { y: -100, autoAlpha: 0, stagger: 1 }, 1)
}