$(document).ready(function() {
	var browsing;
	var searching;
	$("a[href='#top']").click(function(a) {			// Listens for click on the Top arrow
		a.preventDefault();							// Prevents the page from reloading
		$("html, body").animate({ scrollTop: 0 }, "slow");
			return true;							// Scrolls back to the top of page
	});


	$("#movieSearch").on("click", function(e) {		// Listens for click on Search button
		e.preventDefault();  						// Prevents the page from reloading due to #
		$(".moreInfo").hide();						// Hides movies if any from previous search
		$("#intro").hide();							// Hides the introduction that appears on load
		$(".spin").css("visibility", "visible");	// Displays loading icon
		browsing = false;
		searching = true;
		getMovieInfo($("input").val());				// Takes user input and makes ajax call

	});

	$("#browse").on("click", function(x) {			// Listens for click on Browse button
		x.preventDefault();							// Prevents page from reloading	
		$("#intro").hide();							// Hides the introduction
		$(".spin").css("visibility", "visible");	// Displays the loading icon
		browsing = true;
		searching = false;
		browseMovies();								// Makes ajax request

	});

	$("#results").on("click", ".moreInfo", function() {	
		var that = $(this);							// Listens for click on the movie results
		if ($(this).hasClass("clicked")) {			// If this has the clicked class
			$(this).children("img").hide();			// Hides the children of this
			$(this).children("p").hide();
			$(this).removeClass("clicked");			// Removes clicked class from this

		} else {
			$(this).addClass("clicked");			// Adds the clicked class to this
			getMoreInfo(this.id, that);				// Makes ajax request for more info
		}
		
	});

	$(document).scroll(function(){					// Checks for page scroll
		var userInput = $("input");
		if (document.body.scrollTop === 0) {  		// Hides and displays the to Top button
			$("#buttonTop").css("visibility", "hidden");
		} else {
			$("#buttonTop").css("visibility", "visible");
		}
	    if (pageScroll(".moreInfo:last-child")) {    // If the last movie result is shown
            
            if (searching === true) {				
            	return;								// And searching do nothing
            } else if (browsing === true) {
            	browseMovies();						// If browsing, make another ajax call for 10 more movies
            }
        }
	});

});

function pageScroll(elem)							// Checks the height of the page to determine location
{
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();
 
    var elemTop = $(elem).offset().top;
    var elemBottom = elemTop + $(elem).height();
 
    return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
}



function browseMovies() {
	
	for (var i = 0; i < 10; i++) {					// Loops through the ajax call to grab ten listings
		var randNum = Math.floor(Math.random() * (2999999 - 1000000 + 1)) + 1000000; // 
		randNum = "tt" + randNum;					// Generates random number and concats tt to make movieID
		console.log(randNum);

		$.ajax({									// Ajax call
			url: "http://www.omdbapi.com/?i=" + randNum + "&r=json", 	// Lookup by movieID
			cache: false,
			type: "GET",
			dataType: "json",
			success: function(data) {
				console.log(data);
				if (data.Response === "False") {	// If data is undefined, i.e. wrong ID skip
					return;
				} else {							// Hides loading icon
					$(".spin").css("visibility", "hidden");
													// Append data to the results div
					$("#results").append("<div class='moreInfo' id='" + data.imdbID + "'><h2 class='title'>" + data.Title + " <br/><small class='year'>(" + data.Year + ") </small> <span class='movieType'>" + data.Type + "</h2></div>");
				}
				
			},

			error: function(xhr, status, errorThrown) {
				alert("Sorry, there was a problem!");
				console.log("Error: " + errorThrown + " | Status: " + status);
				console.dir(xhr);
			},

			complete: function(xhr, status) {
				console.log("Status: " + status);
			}

		});
	}
}

function getMoreInfo(id, that) {
	$.ajax({										// Ajax more info
		url: "http://www.omdbapi.com/?i=" + id + "&plot=full&r=json",	// Looks up movieID and returns full info
		cache: false,
		type: "GET",
		dataType: "json",
		success: function(data) {
			console.log(data);

			if (data.Response === "False") {		// If data is undefined, i.e. wrong ID skip
					return;
			} else {								// Appends more data to this
				$(that).append("<img class='poster' src='" + data.Poster + "' alt='" + data.Title + "'>")
				$(that).append("<p class='sub-heading'><span class='rating'>" + data.Rated + "</span><span class='runtime'><strong>Runtime:</strong> " + data.Runtime + "</span> | <span class='genre'><strong>Genre:</strong> " + data.Genre + "</span> | <span class='released'><strong>Released:</strong> " + data.Released + "</span></p>");
				$(that).append("<p class='plot'>" + data.Plot + "</p>");	
			}

			

		},

		error: function(xhr, status, errorThrown) {
			alert("Sorry, there was a problem!");
			console.log("Error: " + errorThrown + " | Status: " + status);
			console.dir(xhr);
		},

		complete: function(xhr, status) {
			console.log("Status: " + status);

		}
	});
}

function getMovieInfo(title) {
	$.ajax({										// Ajax call to search movies
			url: "http://www.omdbapi.com/?s=" + title + "&r=json",		// Searching movie by title
			cache: false,
			type: "GET",
			dataType: "json",
			success: function(data) {
				console.log(data);					// Hides loading icon
				$(".spin").css("visibility", "hidden");
				
													// iterate over the data result set
				$.each(data.Search, function(element) {
													// Append it to the results div
					$("#results").append("<div class='moreInfo' id='" + this.imdbID + "'><h2 class='title'>" + this.Title + " <br/><small class='year'>(" + this.Year + ") </small> <span class='movieType'>" + this.Type + "</h2></div>");
				});
			},

			error: function(xhr, status, errorThrown) {
				alert("Sorry, there was a problem!");
				console.log("Error: " + errorThrown);
				console.log("Status: " + status);
				console.dir(xhr);
			},

			complete: function(xhr, status) {
				console.log("Status: " + status);

			}
		});

}