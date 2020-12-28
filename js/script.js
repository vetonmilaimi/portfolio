function topNav() {
	var x = document.getElementById("myTopnav");
	if (x.className === "topnav") {
		x.className += " responsive";
	} else {
		x.className = "topnav";
	}
}

// ##### SCROLL UP BUTTON ########### 
var scrollButton = document.getElementById("scrollUp");

window.onscroll = function () { scrollFunction() };

function scrollFunction() {
	if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
		scrollButton.style.display = "block";
	} else {
		scrollButton.style.display = "none";
	}
}

function topFunction() {
	document.body.scrollTop = 0;
	document.documentElement.scrollTop = 0;
}