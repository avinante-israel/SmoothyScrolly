/* jQuery(document).ready(function($){
	// Smooth scroll
	$('.ia-smooth-scroll').find('a').on('click', function(event){
		// Make sure this.hash has a value before overriding default behavior
		if(this.hash !== ""){
			// Prevent default anchor click behavior
			event.preventDefault();

			// Store hash
			var hash = this.hash;
			
			// Smooth scroll animation
			$('html, body').animate({
				scrollTop: $(hash).offset().top - 50
			}, 800);
		}
	});

	$('.ia-smooth-scroll a').each(function(){
		var anchorHash = $(this).prop('hash');

		$(document).on('scroll', function(){
			if($(this).scrollTop() >= $(anchorHash).position().top - 50){
				$('#main-menu .ia-smooth-scroll').find('a').parent().removeClass('active');
				$('#main-menu .ia-smooth-scroll').find('a[href="' + anchorHash + '"]').parent().addClass('active');
			}
		});
	});
}); */

(function($){
	$.fn.smoothyScrolly = function(){
		var selector = this.prop("class");

		// Smooth scroll
		this.find('a').on('click', function(event){

			// Make sure this.hash has a value before overriding default behavior
			if(this.hash !== ""){

				// Prevent default anchor click behavior
				event.preventDefault();

				// Store hash
				var hash = this.hash;

				// Smooth scroll animation
				$('html, body').animate({
					scrollTop: $(hash).offset().top - 50
				}, 800);
			}
		});

		// Add "active" class
		this.find('a').each(function(){
			var anchorHash 	= $(this).prop('hash');

			$(document).on('scroll', function(){
				if($(this).scrollTop() >= $(anchorHash).position().top - 50){

					// Remove all "active" class
					$('#main-menu').find('a').parent().removeClass('active');

					// Add "active" class to the current menu
					$('#main-menu').find('a[href="' + anchorHash + '"]').parent().addClass('active');
				}
			});
		});

		return this;
	};
}(jQuery));