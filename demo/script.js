(function($) {
	$(function() {
		$.freeTheCookies({
			blockHtml: "This site needs <em>cookies</em> to offer its services. By using our services you're accepting the use we make of <em>cookies</em>. <a href='cookie_policy.html'>More information</a>. <button id='explicit-consent'>Allow</button>",
			onUserAction: function( e ) {
				var $target = $( e.target );
				if ( $( "body" ).hasClass( "cookie-neutral" ) && e.type === "scroll" ) {
					return false;
				}
				if ( $target.hasClass( "cookie-neutral" ) || $target.parents( ".cookie-neutral" ).length > 0 ) {
					return false;
				}
				return true;
			},
			onConsent: function() {
				console.log( "Got consent." );
			}
		});
		$.freeTheCookies( function() {
			console.log( "Yes, got it." );
		});
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
