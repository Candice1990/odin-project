$(document).ready(function() {

	var container = $(".container");
	var p1 = '<p>Giant wels, "sergeant major Cornish Spaktailed Bream cherry salmon Bitterling Black angelfish silver driftfish, coho salmon." Pollock yellowmargin triggerfish wolffish crocodile icefish stonecat zebra danio Reef triggerfish tube-eye, roach straptail silver hake rohu barracudina? Platyfish thresher shark alligatorfish sailfin silverside mahi-mahi mosshead warbonnet surf sardine devil ray. Graveldiver northern anchovy Oriental loach blue gourami sea bass saw shark combtail gourami spiny basslet. Minnow, guppy largenose fish luminous hake giant wels. Rattail gar garibaldi freshwater flyingfish dogteeth tetra aholehole Celebes rainbowfish anchovy roosterfish. Dace porcupinefish paddlefish deep sea smelt gibberfish; barreleye sea devil combtooth blenny flagfish bleak scabbard fish, swordtail crevice kelpfish."</p><br/>';
	var p2 = '<p>Long-whiskered catfish, perch; horn shark flagfin Black triggerfish silver dollar sculpin Pacific saury blue danio handfish toadfish knifejaw rudderfish, bull shark kokopu. Mola mola sunfish capelin boga bent-tooth; sixgill ray round herring flashlight fish.</p><br/>';
	var p3 = '<p>Blue shark Canthigaster rostrata Australian prowfish flathead barb burrowing goby, Atlantic cod. Trunkfish golden trout, mola Moorish idol sea bream snoek pink salmon Moorish idol. Noodlefish, codling platyfish, upside-down catfish bigmouth buffalo Australian grayling ponyfish, "cutthroat eel!" Longnose dace luminous hake grideye pearl danio nurse shark bull trout European perch. Striped burrfish dragonet Atlantic silverside tiger shark northern squawfish Black scalyfin atka mackerel paradise fish.</p>';
	var tab1 = '<li id="tab1"><a href="#">Home</a></li>';
	var tab2 = '<li id="tab2"><a href="#">Menu</a></li>';
	var tab3 = '<li id="tab3"><a href="#">Contact</a></li>';
	var contactText = '<address>My Japanese Restaurant<br/>12345 Sesame Street Lane<br/>Huntsville, AL 35806<br/>Phone: <a href="tel:+1555-555-5555">555.555.5555</a><br/>Email: <a href="mailto:ryjordan@gmail.com">RyJordan@Gmail.com</a></address>';

	// The following objects are used to create the three tables on the menu.
	var menuObj1 = {
		"Mackeral & Ginger Roll": "$5.25",
		"BBQ Yellow Tail Roll": "$5.00",
		"California Roll": "$5.00",
		"Spicy Crunchy Roll": "$5.60",
		"Dynamite Roll": "$5.50",
		"Spicy Salmon Roll": "$5.60",
		"Scallop Roll": "$5.35",
		"Crawfish Roll": "$5.75",
		"Yellow Tail Roll": "$5.75",
		"Tuna Roll": "$5.25"
	};

	var menuObj2 = {
		"Spicy Tuna Rainbow Roll": "$8.00",
		"Smoked Salmon Tempura": "$8.00",
		"Volcano Roll": "$9.25",
		"Tuna Roll": "$9.00",
		"Eel Roll": "$6.25",
		"Crunchy Roll": "$5.50",
		"Cucumber Roll": "$4.00",
		"Smoked Salmon Roll": "$5.85",
		"Spicy Tuna Roll": "$5.85",
		"Amberjack": "$5.00"
	};

	var menuObj3 = {
		"Shrimp": "$4.75",
		"Octopus": "$5.24",
		"Salmon (Fresh)": "$5.25",
		"Squid": "$5.00",
		"Tuna Tataki": "$5.35",
		"Shrimp Tempura": "$5.25",
		"Eel": "$6.00",
		"Mackerel": "$5.00",
		"Red Snapper": "$5.25",
		"Sea Urchin": "$8.95"
	};

	// Functions that are called to add content to each page.
	var home = function() {
		$(".textArea").html(p1).append(p2).append(p3);
	};

	// Creates three tables and uses the three objects to populate the tables.
	var menu = function() {
		// Left Table
		// Create div 1
		$(".textArea").html("<div id='div1'></div>");
		var div1 = $("#div1");
		
		// Create Table 1
		$(div1).html('<table id="table1"></table>');
	    var table = $(div1).children();
	    
	    // Iterate through each key/value in menuObj1 and print to table1
	    jQuery.each(menuObj1, function(key, val) {
    		$(table).append("<tr><td>" + key + "</td><td>" + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + "</td><td>" + val + "</td></tr>" );
    	});

	    // Center Table
	    // Create div2
	    $(div1).append('<div id="div2"></div>');
	    var div2 = $("#div2");

	    // Create table2
	    $(div2).append("<table id='table2'></table>");
	    var table2 = $(div2).children();

	    // Iterate through each key/value in menuObj2 and print to table2
    	jQuery.each(menuObj2, function(key, val) {
    		$(table2).append("<tr><td>" + key + "</td><td>" + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + "</td><td>" + val + "</td></tr>" );
    	});

    	// Right Table
    	// Create div3
    	$(div2).append('<div id="div3"></div>');
    	var div3 = $("#div3");

    	// Create table3
	    $(div3).append("<table id='table3'></table>");
	    var table3 = $(div3).children();
    	
    	// Iterate through each key/value in menuObj3 and print to table3
    	jQuery.each(menuObj3, function(key, val) {
    		$(table3).append("<tr><td>" + key + "</td><td>" + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + "</td><td>" + val + "</td></tr>" );
    	});
	};


	var contact = function() {
		$(".textArea").html(contactText);
	};

	


	// Add the background image to the body tag.
	$("body").css('background-image', 'url("img/sushi.jpg")');

	// Add header to page.
	$(container).append("<h1>My Japanese Restaurant</h1>");

	// Add #content div to container
	$(container).append("<div id='content'></div>");

	// Add ul & li for menu tab
	var content = $("#content");
	$(content).prepend("<ul id='tabmenu'></ul>");
	var nav = $("#tabmenu");
	$(nav).append(tab1).append(tab2).append(tab3);

	//Add .textArea div to #content div -- This is where the main content will be.
	$(content).append("<div class='textArea'></div>");

	//Tab 1

	// Add the active class to home link and content to page on load.
	$("#tab1").addClass("active");
	home();


	// Add the textArea paragraphs for the Home page
	$("#tab1").click(function() {
		if($(this).hasClass("active")) {
			return true;
		} else {
			$("li").removeClass("active");
			$(this).addClass("active");
			home();
		}
		
	});

	// Add the menu content when Menu Tab is clicked.
	$("#tab2").click(function() {
		if($(this).hasClass("active")) {
			return true;
		} else {
			$("li").removeClass("active");
			$(this).addClass("active");
			menu();

		}
		
	});

	// Add the Contact content when the Menu Tab is clicked.
	$("#tab3").click(function() {
		if($(this).hasClass("active")) {
			return true;
		} else {
			$("li").removeClass("active");
			$(this).addClass("active");
			contact();
		}
		
	});

	$("#content").after("<footer>&copy; Not copyrighted! 2015 Created by: Ryan Jordan</footer>")

});