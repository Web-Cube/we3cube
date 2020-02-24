$(()=>{
	
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
	setTimeout(
		function() {
			$(".preloader").addClass("is-active");
		}, 1500
	);
	setTimeout(
		function() {
			$(".preloader").fadeOut(500);
		}, 2500
	);
	
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
	
	$(".tag").click(function(){
		let name = $(this).data("slide");
		$(this).parent().find(".tag.is-active").removeClass("is-active");
		$(this).addClass("is-active");
	});
	
	$('.portfolio .tag').click(function(){
		var slide_name = $(this).data("slide");
		$('.portfolio__slide').not( slide_name ).hide();
		$('.portfolio__slide' + slide_name ).fadeIn(500);
	});
	
	$(".js-lick").click(function(){
		return false;
	});
	
});