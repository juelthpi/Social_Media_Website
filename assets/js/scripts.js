$(document).ready(function(){
	// Mobile Menu
	// $('.logo a i').click(function(){
	// 	$('.menu ul').slideToggle(1000);

	// 	return false
	// });

	// Banner Carousel
	// $('.banner_carousel').owlCarousel({
	// 	items:1,
	// 	loop:true,
	// 	nav:true,
	// 	dots:true,
	// 	autoplay:true,
	// });


// page 3
$(".social_media_3").owlCarousel({
	items:4,
		loop:true,
		nav:false,
		dots:true,
		autoplay:false,
});
$(".social_carosel").owlCarousel({
	items:1,
		loop:true,
		nav:false,
		dots:true,
		autoplay:false,
});

	// Start Particles

	particlesJS("particles-js", {
	  "particles": {
	    "number": {
	      "value": 100,
	      "density": {
	        "enable": true,
	        "value_area": 800
	      }
	    },
	    "color": {
	      "value": "#95989A"
	    },
	    "shape": {
	      "type": "circle",
	      "stroke": {
	        "width": 5,
	        "color": "#95989A"
	      },
	      "polygon": {
	        "nb_sides": 1
	      },
	      "image": {
	        "src": "img/github.svg",
	        "width": 100,
	        "height": 100
	      }
	    },
	    "opacity": {
	      "value": 0.5,
	      "random": false,
	      "anim": {
	        "enable": false,
	        "speed": 1,
	        "opacity_min": 0.1,
	        "sync": false
	      }
	    },
	    "size": {
	      "value": 2,
	      "random": true,
	      "anim": {
	        "enable": false,
	        "speed": 40,
	        "size_min":0.5,
	        "sync": false
	      }
	    },
	    "line_linked": {
	      "enable": true,
	      "distance": 150,
	      "color": "#ddd",
	      "opacity": 0.4,
	      "width": 3
	    },
	    "move": {
	      "enable": true,
	      "speed": 6,
	      "direction": "none",
	      "random": false,
	      "straight": false,
	      "out_mode": "out",
	      "bounce": false,
	      "attract": {
	        "enable": false,
	        "rotateX": 600,
	        "rotateY": 1200
	      }
	    }
	  },
	  "interactivity": {
	    "detect_on": "canvas",
	    "events": {
	      "onhover": {
	        "enable": true,
	        "mode": "grab"
	      },
	      "onclick": {
	        "enable": false,
	        "mode": "push"
	      },
	      "resize": true
	    },
	    "modes": {
	      "grab": {
	        "distance": 140,
	        "line_linked": {
	          "opacity": 1
	        }
	      },
	      "bubble": {
	        "distance": 400,
	        "size": 40,
	        "duration": 2,
	        "opacity": 8,
	        "speed": 3
	      },
	      "repulse": {
	        "distance": 200,
	        "duration": 0.4
	      },
	      "push": {
	        "particles_nb": 4
	      },
	      "remove": {
	        "particles_nb": 2
	      }
	    }
	  },
	  "retina_detect": true
	});

	// End Particles


});