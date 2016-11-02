$(document).ready(function() {
	
	var sites = {
		'gp' : 'http://www.garbagepeopleseries.com',
		'nf' : 'http://www.noahfeder.com',
		'ip' : 'http://processing.noahfeder.com',
		'pc' : 'http://www.taoofhoops.com',
		'iw' : 'http://iwasborninthe.club'		
	};

	if ($('iframe:last').attr('src') == '') {
		$(document).scroll(function()  {
			var $iframes = $("iframe[src='']");
			for (var j = 0, l = $iframes.length; j < l; j++) {
				if ($(document).scrollTop() > ($iframes[j].offsetTop - window.innerHeight - 100)) {
					$iframes[j].setAttribute('src',sites[$iframes[j].className]);
					delete sites[$iframes[j].className];
				}
			}
		});
	}
	
	$('.d').click(function() {
		$('iframe').addClass('desktop').removeClass('mobile tablet');
	});
	$('.t').click(function() {
		$('iframe').addClass('tablet').removeClass('mobile desktop');
	});
	$('.m').click(function() {
		$('iframe').addClass('mobile').removeClass('tablet desktop');
	});
	
	$('.button').click(function() {
		$(this).siblings('.subscrip, .tech').toggleClass('show');
	});
	
	$('a[href^="#"]').on('click',function (e) {
	    e.preventDefault();

	    var target = this.hash;
	    var $target = $(target);

	    $('html, body').stop().animate({
	        'scrollTop': $target.offset().top
	    }, 400, 'swing', function () {
	        window.location.hash = target;
	    });
	});
});