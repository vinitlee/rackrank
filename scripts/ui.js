// Transition events
(function () {
	$('.titleslide').click(function(e) {
		$('.main-ui').fadeOut(0);
		$(this).animate({
			top: "-="+($(window).height()/2+500)
		},1000, "swing", function() {
			$(this).hide();
			$('.main-ui').fadeIn(1000, function() {
				$('.form-container').animate({
					bottom: "+=400"
				}, 1000, "easeOutBack");
			});
		});
	});

	deactivate_slide_signin = function(callback) {
		$('.form-container').animate({
			bottom: "-=400"
		}, 500, "easeInBack", callback)
	}

	activate_slide_ready = function() {
		$('.frame-balls').fadeIn(1000, function() {
			$('.break-container').animate({
				bottom: "+=400"
			},1000, "easeOutBack");
		});
	};
	deactivate_slide_ready = function(callback) {
		$('.break-container').animate({
				bottom: "-=400"
			},1000, "easeInBack",function() {
				$('.frame-balls').fadeOut(500,callback);
			});
	}
	activate_menu = function(style) {
		if (style == 'game') {
			$('.frame-menu .frame-game').show();
			$('.frame-menu .frame-rank').hide();
		}
		if (style == 'rank') {
			$('.frame-menu .frame-game').hide();
			$('.frame-menu .frame-rank').show();
		}
		$(".frame-menu").animate({
			top: '-=100%'
		},500);
	}
	deactivate_menu = function() {
		$('.frame-menu').animate({
			top: '+=100%'
		},1000)
	}

	$('#signin_go').click(function (e) {
		// !!! Add in user verification here
		if (true) {
			deactivate_slide_signin(activate_slide_ready);
		}
		else {
			$('#signin_go').addClass('wrong');
			setTimeout(function() {
				$('#signin_go').removeClass('wrong');
			},100);
			setTimeout(function() {
				$('#signin_go').addClass('wrong');
			},200);
			setTimeout(function() {
				$('#signin_go').removeClass('wrong');
			},300);
		}
	});
	$('.break-container').click(function(){
		deactivate_slide_ready(function() {
			activate_menu('game');
		});
	})
})();

// Ball placement
(function () {
	balls = $('.balls .ball');
	for (var i=0; i<balls.length; i++) {
		var x = 21*4;
		var y = 150;
		if (i >  0){y -= 36; x = (i-1)*42 + 21*3}
		if (i >  2){y -= 36; x = (i-3)*42 + 21*2}
		if (i >  5){y -= 36; x = (i-6)*42 + 21*1}
		if (i >  9){y -= 36; x = (i-10)*42}
		$(balls[i]).css('margin',y+' 0 0 '+x)
	}
})();