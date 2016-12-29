jQuery(document).ready(function(){
	// Smooth scroll
	jQuery('.ia-smooth-scroll').find('a').on('click', function(event){
		// Make sure this.hash has a value before overriding default behavior
		if(this.hash !== ""){
			// Prevent default anchor click behavior
			event.preventDefault();
			// Store hash
			var hash = this.hash;
			
			// Smooth scroll animation
			jQuery('html, body').animate({
				scrollTop: jQuery(hash).offset().top
			}, 800, function(){
				// Add hash to URL when done scroll
				window.location.hash = hash;
			});
		}
	});
	
	// Change active class on scroll
	jQuery(document).on('scroll', function() {
	    if(jQuery(this).scrollTop()>=jQuery('#home').position().top){
			jQuery('.ia-smooth-scroll').find('a').removeClass('active');
	        jQuery('.ia-smooth-scroll').find('a[href="#home"]').addClass('active');
	    }
		if(jQuery(this).scrollTop()>=jQuery('#about').position().top){
	        jQuery('.ia-smooth-scroll').find('a').removeClass('active');
	        jQuery('.ia-smooth-scroll').find('a[href="#abouts"]').addClass('active');
	    }
		if(jQuery(this).scrollTop()>=jQuery('#product').position().top){
	        jQuery('.ia-smooth-scroll').find('a').removeClass('active');
	        jQuery('.ia-smooth-scroll').find('a[href="#product"]').addClass('active');
	    }
		if(jQuery(this).scrollTop()>=jQuery('#services').position().top){
	        jQuery('.ia-smooth-scroll').find('a').removeClass('active');
	        jQuery('.ia-smooth-scroll').find('a[href="#services"]').addClass('active');
	    }
		if(jQuery(this).scrollTop()>=jQuery('#contact').position().top){
	        jQuery('.ia-smooth-scroll').find('a').removeClass('active');
	        jQuery('.ia-smooth-scroll').find('a[href="#contact"]').addClass('active');
	    }
	});
});