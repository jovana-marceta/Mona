
$(document).ready(function(){
	$('.js-slider').slick({
		dots: true,
		speed: 1000,
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		nextArrow: '<div class="slick-custom-arrow slick-custom-arrow-right"><i class="fas fa-angle-right"></i></div>',
		prevArrow: '<div class="slick-custom-arrow slick-custom-arrow-left"><i class="fa fa-angle-left"></i></div>',
	});
});

$(document).ready(function(){
	$('.collection-slider').slick({
		dots: true,
		speed: 1000,
		infinite: true,
		slidesToShow: 2,
		slidesToScroll: 1,
		nextArrow: '<div class="slick-custom-arrow slick-custom-arrow-right"><i class="fas fa-angle-right"></i></div>',
		prevArrow: '<div class="slick-custom-arrow slick-custom-arrow-left"><i class="fa fa-angle-left"></i></div>',
		responsive: [
			{
				breakpoint: 375,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			},
		]
	});
});

$(document).ready(function(){
	$('.item-slider').slick({
		dots: true,
		speed: 1000,
		infinite: true,
		slidesToShow: 3,
		slidesToScroll: 1,
		nextArrow: '<div class="slick-custom-arrow slick-custom-arrow-right"><i class="fas fa-angle-right"></i></div>',
		prevArrow: '<div class="slick-custom-arrow slick-custom-arrow-left"><i class="fa fa-angle-left"></i></div>',
		responsive: [
			{
				breakpoint: 769,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 375,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			},
		]
	});
});

$(document).ready(function(){
	$('.product-slider').slick({
		dots: true,
		speed: 1000,
		infinite: true,
		slidesToShow: 2,
		slidesToScroll: 1,
		nextArrow: '<div class="slick-custom-arrow slick-custom-arrow-right"><i class="fas fa-angle-right"></i></div>',
		prevArrow: '<div class="slick-custom-arrow slick-custom-arrow-left"><i class="fa fa-angle-left"></i></div>',
		responsive: [
			{
				breakpoint: 375,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			},
		]
	});

});
$(document).ready(function(){
	$('.product-simmilar-slider').slick({
		dots: true,
		speed: 1000,
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		nextArrow: '<div class="slick-custom-arrow slick-custom-arrow-right"><i class="fas fa-angle-right"></i></div>',
		prevArrow: '<div class="slick-custom-arrow slick-custom-arrow-left"><i class="fa fa-angle-left"></i></div>',
	});
});

