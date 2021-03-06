import GLightbox from '../../node_modules/glightbox/dist/js/glightbox.js';
require('../../node_modules/glightbox/dist/css/glightbox.css');

document.addEventListener('DOMContentLoaded', function() {

    if (document.getElementsByClassName('js-image').length > 0) {
        const image = GLightbox({
            selector: '.js-image'
        });
    }

    if (document.querySelectorAll("[href*='youtube']").length > 0) {
        const video = GLightbox({
            selector: "[href*='youtube']"
        });
    }

}, false);
