(function() {
	"use strict";

	// Add Scripts Here
	document.getElementById("menu-button").addEventListener("click", () => {
			document.getElementById("mobile-nav-links").classList.toggle("open");
			document.getElementById("menu-arrow").classList.toggle("open");
	});

	document.getElementById("details-button").addEventListener("click", () => {
		document.getElementById("show-details").classList.toggle("hide");
		document.getElementById("hide-details").classList.toggle("hide");
		document.getElementById("details-arrow").classList.toggle("open");
		document.getElementById("alias-body").classList.toggle("open");
	});
})();