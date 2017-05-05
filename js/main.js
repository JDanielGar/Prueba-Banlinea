
(function(){
	'use strict';

	//alertify.alert("Message");
	//alertify.success("You've clicked OK and typed: ");

	//setup form caorusel
	$(document).ready(function(){
		var owl = $('#form-carousel');
		owl.owlCarousel({
		    //nav:true,
		    responsive:{
		        0:{
		            items:1
		        },
		        600:{
		            items:1
		        },
		        1000:{
		            items:1
		        }
		    }
  		});
  		//setup dom listeners
		$('.customNextBtn').click(function() {
	    owl.trigger('next.owl.carousel');
		});
		// Go to the previous item
		$('.customPrevBtn').click(function() {
		    // With optional speed parameter
		    // Parameters has to be in square bracket '[]'
		    owl.trigger('prev.owl.carousel', [300]);
		});
		
	});
})();

