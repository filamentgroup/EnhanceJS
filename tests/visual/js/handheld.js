$(function(){
	$('#enhanceMsg').text('Enhanced (handheld)');
	
	//desktop toggle link
	if(enhance.cookiesSupported){
		$('<a href="#" class="mobiledesktoptoggle">View screen version</a>')
			.click(function(){
				enhance.toggleMedia('-ejs-desktop', '-ejs-handheld');
			})
			.appendTo('body');
			
		$('.mobiledesktoptoggle, .enhanced_toggleResult').wrapAll('<div id="toggleContain"></div>');	
	}
});