$(function () {
	$('.header-slider').slick({
		arrows: false,          /* убирате стрелки слайдера */
		vertical: true,
		dots: true,
		dotsClass: 'header-dots', /* наш уникальный класс вмето дефотлтного класса slick */
		autoplay: 2000
	});
	$('.menu__btn').on('click', function () {
		$('.menu__list').slideToggle();
	});

});