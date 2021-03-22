import { gsap } from "gsap";
const bodyScrollLock = require('body-scroll-lock');
const disableBodyScroll = bodyScrollLock.disableBodyScroll;
const enableBodyScroll = bodyScrollLock.enableBodyScroll;

document.addEventListener('DOMContentLoaded',function() {

    const nav = document.getElementsByClassName('js-nav')[0],
          hamburger = document.getElementsByClassName('js-hamburger')[0],
          menu = document.getElementsByClassName('js-menu')[0];

    const init = function() {

        const hideMenu = function() {
            nav.classList.remove('is-visible');
            hamburger.classList.remove('is-active');
            document.body.classList.remove('menu-opened');
            document.removeEventListener('click', clickOutside);
            
            setTimeout(function() {
                nav.classList.remove('is-block');
                nav.classList.remove('is-animated');
            }, 500);
            
            enableBodyScroll(menu);
        };

        const showMenu = function() {
            
            nav.classList.add('is-block');
            hamburger.classList.add('is-active');

            setTimeout(function() {
                nav.classList.add('is-visible');
                document.addEventListener('click', clickOutside);
                showLinks();
            }, 100);
            
            setTimeout(function() {
                document.body.classList.add('menu-opened');
            }, 200);
            
            const showLinks = function() {
                gsap.utils.toArray(".js-menu").forEach(function(elem) {            
                    const blocks = elem.querySelectorAll(".js-item"),
                          tl = gsap.timeline().delay(.1).eventCallback("onComplete", function() {
                              nav.classList.add('is-animated');
//                              nav.getElementsByClassName('is-active')[0].classList.add('is-animated');
                          })

                    .from(blocks, {
                        x: 50,
                        opacity: 0,
                        stagger: {
                            each: 0.1
                        }
                    });
                });
            };

            disableBodyScroll(menu);
        };


        const toggleMenu = function(e) {
            nav.classList.contains('is-visible') ? hideMenu() : showMenu();
        };

        
        hamburger.addEventListener('click', toggleMenu);
        
        const clickOutside = function(e) {
            if (!e.target.closest('.js-nav')) {
                hideMenu();
        	}
        };
        


        // Hide menu on ESC

        document.addEventListener('keydown', function(evt) {
            // evt = evt || window.event;
            var isEscape = false;
            if ("key" in evt) {
                isEscape = (evt.key == "Escape" || evt.key == "Esc");
            } else {
                isEscape = (evt.keyCode == 27);
            }
            if (isEscape) {
                hideMenu();
            }
        });
        
        
        const checkWindowSize = function() {
            
            if (window.innerWidth > 1100) {
                hideMenu();
                window.removeEventListener('resize', checkWindowSize);
            }
        };


        const findHash = function() {
            
            const links = menu.getElementsByTagName('a');
            
            for (let i = 0; i < links.length; i++) {
                    
                let url = links[i].getAttribute('href');
                let type = url.split('#');
                let hash = '';
                
                if(type.length > 1) {
                    hash = type[1];
                    
                    links[i].addEventListener('click', function(e) {
                        gototarget(url);
                        hideMenu();
                        e.preventDefault() ? e.preventDefault() : e.preventDefault = false;
                    })
                }
            }
        };
        
        findHash();


        // Submenu in mobile
        
        const submenu = function(e) {
        
            if (window.innerWidth <= 1140) {
                let _this = e.currentTarget;
                               
                e.stopPropagation();
                
                if (_this.getElementsByTagName('ul').length > 0) {
                    
                    if (_this.classList.contains('open-submenu')) {
                        _this.classList.remove('open-submenu');
                        
                    } else {
                        _this.classList.add('open-submenu');
                    }
                } else {
                    let url = _this.getElementsByTagName('a')[0].getAttribute('href');
                    window.open(url, '_self');
                    hideMenu();
                }

                e.preventDefault() ? e.preventDefault() : e.preventDefault = false;
            }
        }
        
        const parent = menu.getElementsByTagName('li');

        for (let j = 0; j < parent.length; j++) {
            
            parent[j].addEventListener('click', submenu);
        }
        
        
        window.addEventListener('resize', checkWindowSize);

    };

    nav ? init() : false;

}, false);