//this fallback uses an IP lookup for approximate geo-location
$(function(){
	$.getScript('http://www.google.com/jsapi?key=ABQIAAAAUpHXJKI13X7wKh4OVJs7KhShctfaQgo3DqJiTmo9g4ezsrmNjBT4NL9jpVPN2pEufDghpADuABp6IA',function(){
		var lat = google.loader.ClientLocation.latitude,
			long = google.loader.ClientLocation.longitude;
			
		if(!$('#geomsg').length){ 
				$('h1').after('<p id="geomsg">Native geo-location isn\'t supported, but it looks like your approximate lat and long are: '+lat+', '+long+'</p>'); 
		}
	});
});