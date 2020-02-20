import Swiper from 'swiper';

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
			breakpoints: {
				0: {
					loop: false,
					spaceBetween: 0
				},
				1024: {
					slidesPerView: 'auto',
				},
			},
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
		
	} else {
		$(window).scroll(function(){
			if ( $(window).scrollTop() > 100 ) {
				$(".header").addClass("fixed");
			} else {
				$(".header").removeClass("fixed");
			}
		});
	}
})($);