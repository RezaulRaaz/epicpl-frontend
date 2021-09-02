(function ($) {


	// upload cv

	$(document).on('click', '.upload-field', function(){
		var file = $(this).parent().parent().parent().find('.input-file');
		file.trigger('click');
	  });
	  $(document).on('change', '.input-file', function(){
		$(this).parent().find('.form-control').val($(this).val().replace(/C:\\fakepath\\/i, ''));
	  });


		// counter js activate
		$('.counter').counterUp({
			delay: 10,
			time: 1000
		});

	$('.owl-carousel').owlCarousel({
		loop:true,
		margin:0,
		items:1,
		navText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
		nav:true,
		dots:true,
		animateOut: 'fadeOut',
		animatein: 'fadeIn',
		autoplay:true,
		autoplayTimeout:4500,
		smartSpeed:400,
		// autoplayHoverPause:true,
		responsive:{
			0:{
				items:1
			},
			767:{
				items:1
			},
			992:{
				items:1
			}
		}
	})
})(jQuery);

const menuIcon = document.querySelector('.menuicon');
const navbar = document.querySelector('.menubtn');
menuIcon.addEventListener('click',() =>{
	navbar.classList.toggle('change')
});