$(function(){
	$('#enhanceMsg').text('Enhanced (screen)');
	
	//mobile toggle link
	if(enhance.cookiesSupported){
		$('<a href="#" class="mobiledesktoptoggle">View handheld version</a>')
			.click(function(){
				enhance.toggleMedia('-ejs-desktop', '-ejs-handheld');
			})
			.appendTo('body');
			
		$('.mobiledesktoptoggle, .enhanced_toggleResult').wrapAll('<div id="toggleContain"></div>');		
	}
});