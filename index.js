window.onload = function() {
	addYearToFooter();
	linkNavbarButtons();
	showDesktopOrMobileVideo();
}

function linkNavbarButtons() {
	// find buttons in navbar:
	var btnMission = document.getElementById("btn-mission");
	var btnProjects = document.getElementById("btn-projects");
	var btnContact = document.getElementById("btn-contact");
	var arrowDown = document.getElementById("arrow-down");

	// find target section for each button:
	var sectionMission = document.getElementById("mission");
	var sectionProjects = document.getElementById("projects");
	var sectionContact = document.getElementById("contact");

	// set function for each button/target pair:
	if (btnMission !== null) {
		btnMission.onclick = function() {
			smoothScroll(sectionMission);
		}
	}
	if (btnProjects !== null) {
		btnProjects.onclick = function() {
			smoothScroll(sectionProjects);
		}
	}
	if (btnContact !== null) {
		btnContact.onclick = function() {
			smoothScroll(sectionContact);
		}
	}
	if (arrowDown !== null) {
		arrowDown.onclick = function() {
			smoothScroll(sectionMission);
		}
	}
	
}

function smoothScroll(target) {
	target.scrollIntoView({ 
	  behavior: 'smooth' 
	});
}

function addYearToFooter() {
	var footer = document.getElementById("footer-year");
	var today = new Date();
	var yearNode = document.createTextNode(today.getFullYear());

	footer.appendChild(yearNode);
}

function startCheckout() {
	fbq('track', 'InitiateCheckout');
}

function showDesktopOrMobileVideo() {
	var promoVideo;
	var tapVideo;

	if (window.innerWidth < 767) {
		// show mobile video if screen is small
		promoVideo = document.getElementById("promo-mobile");
		tapVideo = document.getElementById("tap-mobile");
	} else {
		// show desktop video if screen is big
		promoVideo = document.getElementById("promo-desktop");
		tapVideo = document.getElementById("tap-desktop");
	}
	promoVideo.style.display = "block";
	tapVideo.style.display = "block";
}
