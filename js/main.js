$(window).load(function(){
     $('.preloader').fadeOut('slow');
});

setInterval(function(){
	console.log("Updated");
	getCount();
}, 1*1000);

/* =Main INIT Function
-------------------------------------------------------------- */
function initializeSite() {

	"use strict";

	//OUTLINE DIMENSION AND CENTER
	(function() {
	    function centerInit(){

			var sphereContent = $('.sphere'),
				sphereHeight = sphereContent.height(),
				parentHeight = $(window).height(),
				topMargin = (parentHeight - sphereHeight) / 2;

			sphereContent.css({
				"margin-top" : topMargin+"px"
			});

			var heroContent = $('.hero'),
				heroHeight = heroContent.height(),
				heroTopMargin = (parentHeight - heroHeight) / 2;

			heroContent.css({
				"margin-top" : heroTopMargin+"px"
			});

	    }

	    $(document).ready(centerInit);
		$(window).resize(centerInit);
	})();

	// Init effect 
	$('#scene').parallax();

};
/* END ------------------------------------------------------- */

/* =Document Ready Trigger
-------------------------------------------------------------- */
$(window).load(function(){
	initializeSite();
	(function() {
		setTimeout(function(){window.scrollTo(0,0);},0);
	})();
});
/* END ------------------------------------------------------- */


/*$('#countdown').countdown({
	date: "December 14, 2019 18:03:26",
	render: function(data) {
	  var el = $(this.el);
	  el.empty()
	    //.append("<div>" + this.leadingZeros(data.years, 4) + "<span>years</span></div>")
	    .append("<div>" + this.leadingZeros(data.days, 2) + " <span>days</span></div>")
	    .append("<div>" + this.leadingZeros(data.hours, 2) + " <span>hrs</span></div>")
	    .append("<div>" + this.leadingZeros(data.min, 2) + " <span>min</span></div>")
	    .append("<div>" + this.leadingZeros(data.sec, 2) + " <span>sec</span></div>");
	}
});*/

Number.prototype.pad = function(size) {
    var s = String(this);
    while (s.length < (size || 2)) {s = "0" + s;}
    return s;
}

function diffDate(date1, date2) {
	const diffTime = Math.abs(date2 - date1);
	const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
	const diffHours = Math.abs(date2.getHours() - date1.getHours());
	const diffMin = Math.abs(date2.getMinutes() - date1.getMinutes());
	const diffSec = Math.abs(date2.getSeconds() - date1.getSeconds());

	const data = {
		days: diffDays,
		hours: diffHours,
		min: diffMin,
		sec: diffSec
	};

	return data;
}

function getCount() {
	const initDate = new Date("March 20, 2020 00:00:00");
	const currentDate = new Date();
	const data = diffDate(initDate, currentDate);

	var el = $('#countdown');
	  el.empty()
	    //.append("<div>" + this.leadingZeros(data.years, 4) + "<span>years</span></div>")
	    .append("<div>" + (data.days).pad() + " <span>días</span></div>")
	    .append("<div>" + (data.hours).pad() + " <span>horas</span></div>")
	    .append("<div>" + (data.min).pad() + " <span>min</span></div>")
	    .append("<div>" + (data.sec).pad() + " <span>seg</span></div>");
}