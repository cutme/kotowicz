document.addEventListener('DOMContentLoaded',function() {

    const cover = document.getElementById('cover');
    
    const init = function() {
        document.documentElement.removeAttribute('style');
        document.documentElement.classList.add('is-loaded');
        window.anims();
        
        setTimeout(function() {
            cover.remove();
            
            
            
            // carousel
            document.getElementsByClassName('js-offerPhotosSlider')[0] ? window.offer() : false;
        }, 250);  
    };
    
    window.addEventListener('load', init);

}, false);