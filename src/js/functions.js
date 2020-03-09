var animationEnd = "animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd";
var transitionEnd = "transitionend webkitTransitionEnd oTransitionEnd";

var requireAll = r => r.keys().forEach(r);

var getRandomInt = (min, max) => {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

var thousandSeparator = str => {
    var parts = (str + '').split('.'),
        main = parts[0],
        len = main.length,
        output = '',
        i = len - 1;

    while(i >= 0) {
        output = main.charAt(i) + output;
        if ((len - i) % 3 === 0 && i > 0) {
            output = ' ' + output;
        }
        --i;
    }

    if (parts.length > 1) {
        output += '.' + parts[1];
    }
    return output;
};

var openPage = function() {
	var windowHash = window.location.hash;
	var index = $(".js-link[href='" + windowHash + "']").closest("li").index();
	/*if( $(window).width() > 740 ) {
		if ( windowHash.length > 0 ) {
			setTimeout(function(){
				$(".pagin .swiper-pagination-bullet:eq(" + index + ")").click();
			},1000);
		}
	} else {
		$("html, body").animate({
			scrollTop: $( windowHash ).offset().top + "px"
		}, {
			duration: 1000
		});
	}
	return false;*/
};

export { getRandomInt, requireAll, animationEnd, transitionEnd, thousandSeparator, openPage };