import { gsap } from "gsap";
import { ScrollToPlugin, Power4 } from "gsap/all";
gsap.registerPlugin(ScrollToPlugin);

document.addEventListener('DOMContentLoaded',function() {

    window.gototarget = function(src) {
        
        document.documentElement.classList.add('no-anim');

        let target = src,
            topbar_height = document.getElementsByClassName('js-topbar')[0].clientHeight;
        
        const action = function(obj) {            
            
            if (obj) {
                target = obj;                
            } 

            gsap.to(window, { 
                duration: 1.5, scrollTo: { 
                    y: target, 
                    offsetY: topbar_height + 25
                }, 
                ease: Power4.easeOut,
                onComplete: function() {
                    setTimeout(function() {
                        document.documentElement.classList.remove('no-anim');
                    }, 2000)
                    
                }
            });
        };

        action();
    };
 
}, false);