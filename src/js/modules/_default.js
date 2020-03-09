$(()=>{
	
	if( $(window).width() > 740 ) {
	} else {
		$(window).scroll(function(){
			if ( $(window).scrollTop() > 100 ) {
				$(".header").addClass("fixed");
			} else {
				$(".header").removeClass("fixed");
			}
		});
	}
	
	$(document).ready(function(){
		setTimeout(function(){
			$(".preloader").fadeOut(500);
		}, 2000);
	});
	
	$(".js-scroll-to").click(function() {
        var attr_href = $(this).attr("href");
        var data_href = $(this).data("href");
        if ( data_href ) {
            attr_href = data_href;
        }
		$("html, body").animate({
            scrollTop: $(attr_href).offset().top + "px"
        }, {
            duration: 1000
        });
        return false;
    });
	$(".js-svg").each(function(){
        var svg_src = $(this).data("svg-src");
        $(this).load(svg_src);
    });
	
	let burger__text = new Vue({
		el: '.burger',
		data: {
			burger__text: true
		}
	});
	
	$(".header__burger").click(function(){
		$(this).toggleClass("is-active");
		$(".header__mobile").toggleClass("is-active");
		$("body").toggleClass("js-lock");
		$(".header").toggleClass("is-active");
	});
	
	$(".header__mobile-nav ul li a").click(function(){
		$(".header__burger").removeClass("is-active");
		$(".header__mobile").removeClass("is-active");
		$("body").removeClass("js-lock");
		$(".header").removeClass("is-active");
	});
	
	/*$(".tag").click(function(){
		let name = $(this).data("slide");
		$(this).parent().find(".tag.is-active").removeClass("is-active");
		$(this).addClass("is-active");
	});*/
	
	$('.js-to-screen').click(function(){
		let href = $(this).attr("href");
		let index = $(".header__mobile-nav ul li a[href='" + href + "']").closest("li").index();
		
		if( $(window).width() > 740 ) {
			$(".pagin .swiper-pagination-bullet:eq(" + index + ")").click();
		} else {
			$(".header__mobile-nav ul li a[href='" + href + "']").click();
		}
		
		return false;
	});
	
});