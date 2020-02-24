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
	let windowHash = window.location.hash;
	let index = $(".header__mobile-nav ul li a[href='" + windowHash + "']").closest("li").index();
	if ( windowHash.length > 0 ) {
		setTimeout(function(){
			$(".pagin .swiper-pagination-bullet:eq(" + index + ")").click();
		},1000);
	}
};

export { getRandomInt, requireAll, animationEnd, transitionEnd, thousandSeparator, openPage };