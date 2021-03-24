document.addEventListener('DOMContentLoaded', function() {
        
    const init = function() {
        
        const topbar = document.getElementsByClassName('js-topbar')[0];
        
        let scroll_pos = window.pageYOffset || window.scrollY;
            
        let lastScrollTop = 0,
        	partnerAreaLink_visible = true,
        	topbar_status = false;
        
        const action = function() {
	        
            scroll_pos = window.pageYOffset || window.scrollY;
            
            if (scroll_pos >= 100) {
	            if (topbar_status === false) {
		            topbar.classList.add('is-narrow');
		            topbar_status = true;
	            }
            }

            else if (scroll_pos < 100) {

	            topbar.classList.remove('is-narrow');
	            topbar_status = false;
            }
            
        }

	    window.addEventListener('scroll', action);
    };
    
    document.getElementsByClassName('js-topbar')[0] ? init() : false;

}, false);
