document.addEventListener('DOMContentLoaded', function() {

    const el = document.getElementsByClassName('anim');
    
    const isInView = function(el) {
		let bottomOfWindow = (window.pageYOffset || window.scrollY) + window.innerHeight  ;
		
		if ( el.getBoundingClientRect().top + (window.pageYOffset || window.scrollY) < bottomOfWindow ) {
			return true;
		}
	};
	
	let lastScrollTop = 0;
	
	for (let i = 0; i < el.length; i++) {
	    
		if (isInView(el[i])) {
			el[i].className += ' anim--visible';
		}
	}
   
	window.showOnSroll = function() {
	    // Check direction of scroll
	    let st = window.pageYOffset || document.documentElement.scrollTop, d;

        if (st > lastScrollTop) {
            d = 'down';
        } else {
            d = 'up';
        }
        lastScrollTop = st;
        

        // Show or remove from viewport
        for (let j = 0; j < el.length; j++) {
            let bottomOfObject = el[j].getBoundingClientRect().top + st,
                bottomOfWindow = st + window.innerHeight;

            if ( bottomOfWindow > bottomOfObject ) {
                el[j].classList.add('anim--visible');
            } else if( bottomOfWindow -200 < bottomOfObject) {                
                el[j].classList.remove('anim--visible');
			}
		}
	}

	window.addEventListener('scroll', showOnSroll);
	
}, false);