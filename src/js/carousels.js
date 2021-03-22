import Swiper, { Navigation, Thumbs, Pagination } from 'swiper';
import 'swiper/swiper-bundle.css';

Swiper.use([Navigation, Thumbs, Pagination]);


document.addEventListener('DOMContentLoaded',function() {
    
    const offerNavEl = document.getElementsByClassName('js-offerNavSlider')[0],
          offerPhotosEl = document.getElementsByClassName('js-offerPhotosSlider')[0];

    window.offer = function() {

        const swiperNav = new Swiper(offerNavEl, {
            breakpoints: {
                '769': {
                    spaceBetween: 80,
                    freeMode: true,
                }
            },            
            spaceBetween: 30,
            slidesPerView: 'auto',
            speed: 800,
            watchSlidesVisibility: true,
            watchSlidesProgress: true,
        });

	    const swiperPhotos = new Swiper(offerPhotosEl, {
    	    breakpoints: {
                '501': {
                    spaceBetween: 0
                }
            },
            pagination: {
                el: '.swiper-pagination',
                type: 'progressbar',
            },
            spaceBetween: 40,
            slidesPerView: 'auto',
            speed: 800,
            thumbs: {
                swiper: swiperNav
            },
            on: {
                slideChange: function (e) {
                    swiperNav.slideTo(swiperPhotos.activeIndex);
                    
                    console.log( offerNavEl.getElementsByClassName('swiper-slide')[swiperPhotos.activeIndex] );
                    
                    const slide = offerNavEl.getElementsByClassName('swiper-slide');
                    
                    for (let i = 0; i < slide.length; i++) {
                        slide[i].classList.remove('swiper-slide-active');
                        slide[i].classList.remove('swiper-slide-thumb-active');
                    }
                    
                    offerNavEl.getElementsByClassName('swiper-slide')[swiperPhotos.activeIndex].classList.add('swiper-slide-active');
                },
            },
        });
    };

}, false)
