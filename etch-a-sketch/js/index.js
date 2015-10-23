$(document).ready(function() {
	
	grid16();
	white();

});
var square;

	// Builds the grid
function buildGrid(size) {
    square = Math.floor(640 / size);
	for (i = 0; i < (size*size); i++) {
		$('#sketch').append("<div class='block'></div>");
	};
	$('.block').css('width', square);
	$('.block').css('height', square);

}

	// Shakes the sketchpad and resets the sketch
function shake() {
	$('#shake').click(function() {
		$('#sketch').effect('shake', 250);
	});
	gridSearch();
	effectSearch();
}

	// Changes the background-color to white on mouseover
function white() {
	$('.block').mouseover(function() {
		$(this).css({'background-color': '#fff'});
	});
	$('.selectedB').removeClass('selectedB');
	$('#white').addClass('selectedB');

}

	// Changes the background-color to white and fades back to black
function trail() { 
	$('.block').mouseenter(function() {
		$(this).fadeTo(100, 0);
	});
	$('.block').mouseleave(function() {
		$(this).fadeTo(400, 1);
	});
	$('.selectedB').removeClass('selectedB');
	$('#trail').addClass('selectedB');
}
	
	// Lightens the background-color 10% on each mouseover until completely white
function gradient() {
	$('.block').mouseenter(function() {
		var currentOpacity = $(this).css('opacity');
		if (!(currentOpacity === 0)) {
			$(this).css('opacity', currentOpacity - 0.1);
		}
	});
	$('.selectedB').removeClass('selectedB');
	$('#gradient').addClass('selectedB');
}

	// Inits the 16x16 grid, uses buildGrid(), then searches for the effect already in use
function grid16() {
	$('.block').remove();
	buildGrid(16);
	$('.selectedA').removeClass('selectedA');
	$('#16').addClass('selectedA');
	effectSearch();
}

	// Inits the 32x32 grid, uses buildGrid(), then searches for the effect already in use
function grid32() {
	$('.block').remove();
	buildGrid(32);
	$('.selectedA').removeClass('selectedA');
	$('#32').addClass('selectedA');
	effectSearch();
}

	// Inits the 64x64 grid, uses buildGrid(), then searches for the effect already in use
function grid64() {
	$('.block').remove();
	buildGrid(64);
	$('.selectedA').removeClass('selectedA');
	$('#64').addClass('selectedA');
	effectSearch();
}

	// Searches for current grid selected and builds it
function gridSearch() {
	if ($('#16').hasClass('selectedA')) {
		grid16();
	} else if ($('#32').hasClass('selectedA')) {
		grid32();
	} else if ($('#64').hasClass('selectedA')) {
		grid64();
	}
}

	// Searches for the effect selected and keeps it selected
function effectSearch() {
	if ($('#white').hasClass('selectedB')) {
		white();
	} else if ($('#trail').hasClass('selectedB')) {
		trail();
	} else if ($('#gradient').hasClass('selectedB')) {
		gradient();
	}
}


