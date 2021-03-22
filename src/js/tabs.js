import { gsap } from "gsap";

document.addEventListener('DOMContentLoaded',function() {

    const el = document.getElementsByClassName('js-tabs');
  
    const thisindex = function(elm) {
        let nodes = elm.parentNode.childNodes, node, i = 0, count = 0;
        while( (node = nodes.item(i++)) && node != elm ) {
            if( node.nodeType == 1 ) count++;            
        }
        return count;
    }

    const init = function() {
        
        const showTab = function(idx, contentItem, navItem) {
            for (let i = 0; i < contentItem.length; i ++) {
                
                contentItem[i].classList.remove('is-visible');
                
                setTimeout(function() {
                    contentItem[i].classList.remove('is-active');
                    
                    if (i === idx) {
                        contentItem[i].classList.add('is-active');
                        
                        setTimeout(function() {
                            contentItem[i].classList.add('is-visible'); 
                            
                            gsap.from(contentItem[i].getElementsByClassName('o-article')[0], {
                                autoAlpha: 0, 
                                x: -20
                            }, 
                            { 
                                duration: 1, 
                                autoAlpha: 1, 
                                y: 0
                            });
                            
                            gsap.from(contentItem[i].getElementsByClassName('o-photo')[0], {
                                duration: .5, 
                                opacity: 0,
                                autoAlpha: 1, 
                                y: 20,
                                delay: .1 
                            }) 
                                                   
                        }, 1);
                    }
                }, 150);                
            }

            for (let j = 0; j < navItem.length; j ++) {
                navItem[j].classList.remove('is-active');
            }
        };

        for (let i = 0; i < el.length; i++) {
            const content = el[i].getElementsByClassName('js-content')[0],
                  contentItem = content.getElementsByClassName('js-tab'),
                  nav = el[i].getElementsByClassName('js-nav')[0],
                  navItem = nav.getElementsByClassName('js-tab');

            for (let j = 0; j < navItem.length; j ++) {
                navItem[j].addEventListener('click', function() {
                    showTab(thisindex(this), contentItem, navItem);
                    this.classList.add('is-active');
                });
            }
        }
    }

    el.length > 0 ? init() : false;

}, false);
