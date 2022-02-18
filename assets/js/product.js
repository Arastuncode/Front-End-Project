$(document).ready(function(){
	
	$('ul.tabs li').click(function(){
		var tab_id = $(this).attr('data-tab');

		$('ul.tabs li').removeClass('current');
		$('.tab-content').removeClass('current');

		$(this).addClass('current');
		$("#"+tab_id).addClass('current');
	})

	$(document).ready(function () {
		$("h6").hover(function () {
		 $(this).addClass("active")
		});  
		$("h6").mouseout(function () {
			$(this).removeClass("active")
		   });  
	  });
	  
	  
})
var galleryThumbs = new Swiper('.gallery-thumbs', {
	spaceBetween: 5,
	freeMode: true,
	watchSlidesVisibility: true,
	watchSlidesProgress: true,
	breakpoints: {
		0: {
			slidesPerView: 3,
		},
		992: {
			slidesPerView: 4,
		},
	}
});
var galleryTop = new Swiper('.gallery-top', {
	spaceBetween: 10,
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
	thumbs: {
		swiper: galleryThumbs
	},
});
// change carousel item height
// gallery-top
let productCarouselTopWidth = $('.gallery-top').outerWidth();
$('.gallery-top').css('height', productCarouselTopWidth);

// gallery-thumbs
let productCarouselThumbsItemWith = $('.gallery-thumbs .swiper-slide').outerWidth();
$('.gallery-thumbs').css('height', productCarouselThumbsItemWith);

// activation zoom plugin
var $easyzoom = $('.easyzoom').easyZoom();