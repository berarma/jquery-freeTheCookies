(function($) {

	// Setup with custom text, style and callback function
	$.freeTheCookies({
		text: "This site needs <em>cookies</em> to offer its services. By using our services you're accepting the use we make of <em>cookies</em>. <a href='cookie_policy.html'>More information</a>. <button id='explicit-consent'>Allow</button>",
		style: {
			textAlign: "left"
		},
		onConsent: function() {
			console.log( "Got consent." );
		},
		disabled: window.cookieBannerDisabled
	});
	// Example for additional callback function
	$.freeTheCookies( function() {
		console.log( "Yes, got it." );
	});

	$(function() {
		// Button actions to manage cookies with more example calls
		$( "#remove-consent" ).bind( "click", function() {
			$.removeCookie( "cookie-consent", { path: "/" });
			location.reload();
		});
		$( "#check-consent" ).bind( "click", function() {
			if ( $.freeTheCookies() ) {
				alert( "Consent given" );
			} else {
				alert( "No consent" );
				$.freeTheCookies(function() {
					console.log( "This an optional callback after consent given" );
				});
			}
		});
		$( "#explicit-consent" ).bind( "click", function() {
			$.freeTheCookies.now();
		});
	});

})(jQuery);
