gsap.to('.b2 h2', {
    duration: 1,
    y: 0,
    scale: 2,
    autoAlpha: 1,
    scrollTrigger: {
        trigger: ".b2 h2",
        markers: true, //pour afficher les marque 
        //trigger scroller 
        start: "30% 36%", //la premiére valeur et la postion de dépare de la zone d'animation;  la deuxiéme et le marquer du scroll ; on peut mettre des % ou des valeur absolut
        end: "bottom 10%", //idem que le start
        toggleActions: "play pause reverse reset",
        //toggleAction a 4 action:
        //onEnter =>quand on ma marcker scroller-start pass la marque start de la zonz d'animation
        //onLeave =>quand on ma marcker scroller-end passe aprés la marque end de la zone d'animation
        //onEnterBack =>quand on ma marcker scroller-end revient passer(sroll arriére) au dessus la marque end de la zone d'animation
        //onLeaveBack =>quand on ma marcker scroller-start revient passer(sroll arriére) au dessus la marque start de la zone d'animation
        //tout ces ation peuve contenir ces valeur:
        //play=> joure l'animation
        //pause=> met en pause
        //resume=> rejour aprés une pause
        //reset=> revien a 0
        //restart=> ca recommence depuis 0
        //complete=> va a la fin de l'animation
        //reverse=> revien en arriéerre
        //none=>  ne rien faire

        // on peut y rajouter des action
        onEnter: () => console.log("enter"),
        onLeave: () => console.log("onLeave"),
        onEnterBack: () => console.log("onEnterBack"),
        onLeaveBack: () => console.log("onLeaveBack"),

        scrub: 1 //permet de de faire l'animation en même temps que l'on scroll
    }
})

// figer l'écran 

// gsap.to('.b2', {
//     scrollTrigger: {
//         trigger: '.b2',
//         pin: true,
//         markers: true
//     }
// })

ScrollTrigger.create({
    trigger: '.b2',
    pin: true, //épingler a l'écrant
    // markers: true
    // on peut diminer la plage avec start et end comme précédament
})