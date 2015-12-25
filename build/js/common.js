$(document).ready(function() {

	// main menu dropdown

	$(document).on('click', function(){
		$('.js-menu-btn').removeClass('is-open');
		$('.js-menu').slideUp('fast');
	});

	$('.js-menu').on('click', function(event){
		event.stopPropagation();
	});

	$('.js-menu-btn').on('click', function(event){
		if ($(this).hasClass('is-open')) {
			$(this).removeClass('is-open');
			$('.js-menu').slideUp('fast');
		}
		else {
			$(this).addClass('is-open');
			$('.js-menu').slideDown('fast');
		}
		event.stopPropagation();
	});

	// product images gallery
	$('.js-product-view').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		fade: true,
		asNavFor: '.js-product-nav'
	});
	$('.js-product-nav').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		asNavFor: '.js-product-view',
		focusOnSelect: true,
		arrows: false
	});

	// js-substitution

	$('.js-substitution').slick({
		infinite: false,
		slidesToShow: 3,
		slidesToScroll: 1
	});	

	// item-slider

	$('.js-item-slider').slick({
		slidesToScroll: 1,
		slidesToShow: 5,
		arrows: true
	});

	// cart slider

	$('.js-cart-slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: true
	});

	// layout with sidebar

	function sidebarPos(){
		var leftPos = $('.content').offset().left,
			contentWidth = $('.content').width();

		var rightPos = leftPos + contentWidth + 30;

		$('.sidebar').css({
			'left': rightPos,
			'right': 'auto'
		});

	}
	sidebarPos();
	$(window).resize(function(){
		sidebarPos();
	});

	function fixedsidebar(){
		var scroll_left = $(window).scrollLeft();
		scroll_left = -scroll_left;
		$('.sidebar').css({
			'transform': 'translateX('+scroll_left+'px)'
		});
	}
	$(window).scroll(function(){
		fixedsidebar();
	});




});