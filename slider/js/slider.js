$(document).ready(function() {
	var interval;
	init()

	// Listens for the click event on the next button.
	$("li, a").click(function() {
		if (this.id === "next") {	
			nextSlide();
		} else if (this.id === "prev") {
			prevSlide();
		} else if ($(this).hasClass("dots")) {
			if (this.id === "active1") {
				dots("active1");
			} else if (this.id === "active2") {
				dots("active2");
			} else if (this.id === "active3") {
				dots("active3");
			} else if (this.id === "active4") {
				dots("active4");
			} else if (this.id === "active5") {
				dots("active5");
			}
		}

	});

	// Listens for mouseover on next/previous buttons. 
	$("#slider").mouseenter(function() {
		$("#next, #prev").fadeIn();
		pause();
	})
				.mouseleave(function() {
		$("#next, #prev").fadeOut();
		start();
	});
});


// Initializes the slider by hiding the slides, showing the 
// first slide and adding the selected class to it.
function init() {
	$(".slides").hide();
	$("#slide1").fadeIn().addClass("selected");
	$("#active1").addClass("active");

	// Hides the next/prev buttons.
	$("#next, #prev").hide();	
	start();
}

// When the user clicks on a dot under the slideshow the
// slider displays the appropriate slide.
function dots(dot) {
	var selected = $(".selected");
	var active = $(".active");
	var slideNumber;
	var activeNumber;
	
	
	if (dot === "active1") {
		slideNumber = "#slide1";
		activeNumber = "#active1";

	} else if (dot === "active2") {
		slideNumber = "#slide2";
		activeNumber = "#active2";

	} else if (dot === "active3") {
		slideNumber = "#slide3";
		activeNumber = "#active3";

	} else if (dot === "active4") {
		slideNumber = "#slide4";
		activeNumber = "#active4";

	} else if (dot === "active5") {
		slideNumber = "#slide5";
		activeNumber = "#active5";
	}

	$(selected).fadeOut().removeClass("selected");
	$(active).removeClass("active");
	$(slideNumber).fadeIn().addClass("selected");
	$(activeNumber).addClass("active");
}

// Goes to the next slide in the li element.
function nextSlide() {
	var selected = $(".selected");
	var active = $(".active");

	// If the last slide is showing, moves to the first slide.
	if ($(".selected").attr("id") === "slide5") {
		$(selected).fadeOut().removeClass("selected");			
		$("#slide1").fadeIn().addClass("selected");
		$(active).removeClass("active");
		$("#active1").addClass("active");
	} else {
		$(selected).fadeOut().removeClass("selected");
		$(selected).next().fadeIn().addClass("selected");
		$(active).removeClass("active");
		$(active).next().addClass("active");		
	}		
}	

// Goes to the previous slide in the li element.
function prevSlide() {
	var selected = $(".selected");
	var active = $(".active");

	// If the first slide is showing, moves to the last slide.
	if ($(".selected").attr("id") === "slide1") {
		$(selected).fadeOut().removeClass("selected");
		$("#slide5").fadeIn().addClass("selected");
		$(active).removeClass("active");
		$("#active5").addClass("active");	
	} else {
		$(selected).fadeOut().removeClass("selected");
		$(selected).prev().fadeIn().addClass("selected");
		$(active).removeClass("active");
		$(active).prev().addClass("active");
	}
}

// Starts the autoplay on the slideshow.	
function start() {
	interval = setInterval(nextSlide, 5000);
}

// Stops the autoplay on the slideshow.
function pause() {
	clearInterval(interval);
}	







