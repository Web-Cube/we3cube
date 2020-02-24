import Swiper from 'swiper';
import {openPage} from '../functions';

(() => {
	
	let nav = $('.header__nav')[0];
	let content = $('.page-slider')[0];
	
	let pagin = $('.footer__pagin')[0];
	
	if( $(window).width() > 740 ) {
		
		let navSwiper = new Swiper(nav, {
			slidesPerView: 'auto',
			loop: false,
			noSwiping: true,
			allowTouchMove: false,
			onlyExternal: true,
			spaceBetween: 0,
			watchSlidesVisibility: true,
			watchSlidesProgress: true,

		});

		let contentSwiper = new Swiper(content, {
			loop: true,
			autoHeight: true,
			slidesPerView: 1,
			speed: 700,
			mousewheel: true,
			pagination: {
				clickable: true,
				el: pagin,
			},
			thumbs: {
				swiper: navSwiper
			}

		});
		
		openPage();
		
	} else {
		$(window).scroll(function(){
			if ( $(window).scrollTop() > 100 ) {
				$(".header").addClass("fixed");
			} else {
				$(".header").removeClass("fixed");
			}
		});
	}
	
	let portfolio = new Swiper('.portfolio__slider', {
		slidesPerView: 'auto',
		loopedSlides: 4,
		slidesPerGroup: 4,
		speed: 0,
		loop: false,
		spaceBetween: 0,
		noSwiping: true,
		allowTouchMove: false,
		onlyExternal: true,
		watchSlidesVisibility: true,
		watchSlidesProgress: true,
		pagination: {
        el: '.portfolio__pagin',
			clickable: true,
			renderBullet: function (index, className) {
			  return '<span class="' + className + '">' + (index + 1) + '</span>';
			},
		},
		navigation: {
        	nextEl: '.portfolio__arrow_next',
        	prevEl: '.portfolio__arrow_prev',
      	},
		breakpoints: {
			0: {
				slidesPerView: 1,
			  	loopedSlides: 1,
				slidesPerGroup: 1,
				noSwiping: false,
				allowTouchMove: true,
				onlyExternal: false,
				speed: 300
			},
			400: {
				slidesPerView: 2,
			  	loopedSlides: 2,
				slidesPerGroup: 2,
			},
			479: {
				slidesPerView: 3,
			  	loopedSlides: 3,
				slidesPerGroup: 3,
				noSwiping: false,
				allowTouchMove: true,
				onlyExternal: false,
				speed: 300
			},
			740: {
				slidesPerView: 3,
			  	loopedSlides: 3,
				slidesPerGroup: 3,
			},
			769: {
				slidesPerView: 'auto',
			  	loopedSlides: 4,
				slidesPerGroup: 4,
			},
		}
	});
	
	let blog = new Swiper('.blog__slider', {
		slidesPerView: 4,
		loopedSlides: 4,
		slidesPerGroup: 4,
		speed: 300,
		loop: false,
		spaceBetween: 0,
		noSwiping: true,
		allowTouchMove: false,
		onlyExternal: true,
		pagination: {
        el: '.blog__pagin',
			clickable: true,
			renderBullet: function (index, className) {
			  return '<span class="' + className + '">' + (index + 1) + '</span>';
			},
		},
		navigation: {
        	nextEl: '.blog__arrow_next',
        	prevEl: '.blog__arrow_prev',
      	},
		breakpoints: {
			0: {
				slidesPerView: 1,
			  	loopedSlides: 1,
				slidesPerGroup: 1,
				noSwiping: false,
				allowTouchMove: true,
				onlyExternal: false,
			},
			400: {
				slidesPerView: 2,
			  	loopedSlides: 2,
				slidesPerGroup: 2,
			},
			479: {
				slidesPerView: 3,
			  	loopedSlides: 3,
				slidesPerGroup: 3,
				noSwiping: false,
				allowTouchMove: true,
				onlyExternal: false,
			},
			740: {
				slidesPerView: 3,
			  	loopedSlides: 3,
				slidesPerGroup: 3,
			},
			769: {
				slidesPerView: 4,
			  	loopedSlides: 4,
				slidesPerGroup: 4,
			},
		}
	});
})($);