(function(){
	/* change these variables as you wish */
	var hours_date = 1549479538;
	var hours_deadline = 2;
	/* stop changing here */
	
	var current_date = new Date();
	var utc1 = Date.UTC(current_date.getFullYear(), current_date.getMonth(), current_date.getDate());
	var utc2 = (hours_date)
	var hours = Math.floor((utc2 - (utc1/1000)) / (60 * 60));
	
	if(hours > 0) {
		var opacity = (hours*100/hours_deadline)/100;
			opacity = (opacity < 0) ? 0 : opacity;
			opacity = (opacity > 1) ? 1 : opacity;
		if(opacity >= 0 && opacity <= 1) {
			document.getElementsByTagName("BODY")[0].style.opacity = opacity;
		}
		
	}
	
})()
