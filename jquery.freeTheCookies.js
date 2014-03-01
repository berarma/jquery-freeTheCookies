//
// jQuery.freeTheCookies
// https://github.com/berarma/jquery-freeTheCookies
//
// Copyright (c) 2013 Bernat Arlandis
// Licensed under the GPLv2 license.
//

"use strict";
(function($, window, undefined) {

	var
	$window = $( window ),
	initialized = false,
	$block = $( "<div/>" ),
	$close = $( "<div/>" ),
	defaults =  {
		cookieName: "cookie-consent",
		cookieOptions: {
			expires: 365,
			path: "/"
		},
		speed: 300,
		position: "append",
		parentBlock: "body",
		blockHtml: "This site needs <em>cookies</em> to offer its services. By using our services you're accepting the use we make of <em>cookies</em>. <a href='/cookie_policy'>More information</a>.",
		blockAttrs: {
		},
		blockCss: {
			position: "fixed",
			left: 0,
			right: 0,
			top: 0,
			padding: "0.5em",
			border: "1px solid #ccc",
			borderStyle: "solid none",
			textAlign: "center",
			font: "normal 0.9em/1.3 sans-serif",
			backgroundColor: "rgba(240, 232, 160, 0.5)",
			color: "#333",
		},
		closeHtml: "X",
		closeAttrs: {
			title: 'Close'
		},
		closeCss: {
			"float": "right",
			marginLeft: "1em",
			fontWeight: "bold",
			cursor: "pointer"
		},
		onUserAction: function( e ) {
			return true;
		}
	},
	settings,
	$events = $( defaults ),
	self = $.freeTheCookies = function( options ) {

		var callback = null;

		if ( options !== undefined ) {
			if ( $.isFunction( options ) ) {
				callback = options;
				options = {};
			}
			if ( options.onConsent ) {
				callback = options.onConsent;
				delete options.onConsent;
			}
		}

		if ( !initialized ) {
			settings = $.extend( {}, defaults, options );
		}

		if ( callback ) {
			$events.bind( "onConsent", callback);
		}

		if ( $.cookie( settings.cookieName ) ) {
			if ( !initialized ) {
				$events.triggerHandler( "onConsent" );
			} else {
				if ( callback ) {
					callback();
				}
			}
		}

		if ( $.cookie( settings.cookieName ) ) {
			initialized = true;
			return true;
		}

		if ( !initialized ) {

			$block.attr( settings.blockAttrs ).html( settings.blockHtml ).css( settings.blockCss );
			$close.attr( settings.closeAttrs ).html( settings.closeHtml ).css( settings.closeCss );
			$close.prependTo( $block );
			var $parent = $( settings.parentBlock );
			if ( settings.position == 'append' ) {
				$block.appendTo( $parent );
			} else {
				$block.prependTo( $parent );
			}
			$block.hide();
			$block.slideDown( settings.speed, function() {

				window.scrollTo( 0, 0 );

				$block.bind( "click", function( e ) {
					e.stopPropagation();
				});

				$close.bind( "click", function() {
					setCookiesFree();
				});

				$( "body" ).bind( "click.cookie-consent", function( e ) {
					userAction( e );
				});

				var blockHeight = $block.height();
				$window.bind( 'scroll.cookie-consent', function( e ) {
					if ( window.pageYOffset >= blockHeight ) {
						userAction( e );
						$window.unbind( ".cookie-consent" );
					}
				});

			});

		}

		initialized = true;

		return false;

	};

	function setCookiesFree() {
		$window.unbind( ".cookie-consent" );
		$( "body" ).unbind( ".cookie-consent" );
		$.cookie( settings.cookieName, "1", settings.cookieOptions);
		$block.slideUp( settings.speed );
		$events.triggerHandler( "onConsent" );
	}

	function userAction( e ) {
		if ( settings.onUserAction( e ) ) {
			setCookiesFree();
			return true;
		}
		return false;
	}

	self.now = setCookiesFree;

	self.settings = defaults;

})(jQuery, window);
