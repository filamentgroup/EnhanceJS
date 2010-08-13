//this file is included only if Modernizr determined Geolocation to be supported
$(function(){
	navigator.geolocation.getCurrentPosition(gpsSuccess,gpsFail, {enableHighAccuracy:true, maximumAge: 300000});
		
	//redirect function for successful location	
	function gpsSuccess(pos){
		var long,lat;
		if(pos.coords){ lat = pos.coords.latitude, long = pos.coords.longitude; }
		else{ lat = pos.latitude, long = pos.longitude; }
		if(!$('#geomsg').length){ $('h1').after('<p id="geomsg">Geo-location is supported. Your lat and long are: '+lat+', '+long+'</p>'); }
	}	
	
	function gpsFail(){
		if(!$('#geomsg').length){ $('h1').after('<p id="geomsg">Geo-location is supported, but we failed to get your coordinates.</p>'); }
	}
});