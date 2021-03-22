import { gsap } from "gsap";

import ScrollTrigger from "gsap/ScrollTrigger";

document.addEventListener('DOMContentLoaded',function() {

    gsap.registerPlugin(ScrollTrigger);

    window.anims = function() {
        
        gsap.utils.toArray(".js-waypoint").forEach(function(section) {

            gsap.from(section, {
                scrollTrigger: {
                    trigger: section,
                    start: '-50px bottom',
                    scrub: 1,
                    onEnter: function(e) {
                        
                        document.getElementsByClassName('js-currentpoint')[0].classList.add('is-fadeout');
                        
                        setTimeout(function() {
                            document.getElementsByClassName('js-currentpoint')[0].innerHTML = section.getAttribute('data-title');                            
                            document.getElementsByClassName('js-currentpoint')[0].classList.remove('is-fadeout');
                        }, 200);                        
                    },
                    onEnterBack: function(e) {
                        
                        document.getElementsByClassName('js-currentpoint')[0].classList.add('is-fadeout');
                        
                        setTimeout(function() {
                            document.getElementsByClassName('js-currentpoint')[0].innerHTML = section.getAttribute('data-title');                            
                            document.getElementsByClassName('js-currentpoint')[0].classList.remove('is-fadeout');
                        }, 400);
                    }
                },
            });
        }); 
        

        const topbar = gsap.fromTo('.js-topbar', { autoAlpha: 0, y: -100}, { duration: 1, autoAlpha: 1, y: 0});
        
        
/*
        gsap.to('.c-about .o-photo', {
            scrollTrigger: {
                trigger: '.c-about .o-photo',
                scrub: true,
                start: 'top top'
            },      
            y: 160,
        });
*/
        
        
        gsap.from('.c-partners__list--partners li', {
            scrollTrigger: {
                trigger: '.c-partners__list--partners li',
                scrub: true,
                start: 'top bottom',
                end: 'center top'
            },
            stagger: {
                each: 0.1,
            },
            opacity: 0,
        });


        //gsap.to('.c-partners__list--media:before', { autoAlpha: 0, y: -100}, { duration: 1, autoAlpha: 1, y: 0});        
    };



}, false)
