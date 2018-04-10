(function($){
	$.fn.smoothyScrolly = function(options){

		var selector	= this;
		var settings	= $.extend({
			'height' : 0,
			'speed' : 800,
			'class' : 'active'
		}, options);

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
					scrollTop: $(hash).offset().top - settings.height
				}, settings.speed);
			}
		});

		// Add "active" class
		this.find('a').each(function(){
			var anchorHash 	= $(this).prop('hash');

			$(document).on('scroll', function(){
				if($(this).scrollTop() >= $(anchorHash).position().top - settings.height){

					// Remove all "active" class
					$(selector).find('a').parent().removeClass(settings.class);

					// Add "active" class to the current menu
					$(selector).find('a[href="' + anchorHash + '"]').parent().addClass(settings.class);
				}
			});
		});

		return this;
	};
}(jQuery));