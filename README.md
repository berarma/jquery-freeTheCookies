jquery-freeTheCookies
=====================

This is a simple but highly customizable plugin that puts a banner in your site warning the user about the use of cookies. It will ask for explicit or implicit consent from the user without offering the option to reject cookies. This is useful when disabling cookies is not wanted or can be troublesome for your site. User consent is saved in a configurable cookie. You're given full control over the banner appearance and the interpretation of implicit consent.

It will let you run Javascript code in the browser when the user gives explicit or implicit consent allowing to run the code that sets cookies.

Requirements
------------

  + jQuery 1.2+
  + jquery.cookie

How to use it
-------------

Load the plugin in your web page after jQuery:
```
<script src="js/jquery.js"></script>
<script src="js/jquery.freeTheCookies.js"></script>
```

Initialize the plugin:
```
jQuery.freeTheCookies( options );
```

The first time you call the plugin you can pass an options object as argument (optional), you can see the defaults in the code. The options that can be set are:

  + cookieName: (string) The name of the cookie to save user consent.
  + cookieOptions: (array) jquery.cookie options.
  + speed: (int) Animation speed (ms)
  + blockHtml: (string) Banner block content.
  + blockAttrs: (array) Banner block HTML attributes.
  + blockCss: (array) Banner block CSS.
  + closeHtml: (string) Close button block content,
  + closeAttrs: (array) Close button block HTML attributes.
  + closeCss: (array) Close button block CSS.
  + onUserAction: (function) Called when a user event occurs. It receives an event object that can be used to decide whether this action means consent or not. Return true when it means consent. The default callback returns true for all user actions captured.
  + onConsent: (function) Called when consent given. You can then run any Javascript code that would create cookies.

You can call __$.freeTheCookies__ anytime to check for consent or pass it a callback function that will be called when consent is given.
```
if ( $.freeTheCookies() ) {
  ...
}
$.freeTheCookies(function() {
  ...
});
```

Passing a callback function as an argument will add it to the set of callback functions called when consent is given. If consent is already given the callback function will be called immediately.

You can call $.freeTheCookies.now() to force the plugin to take consent. This way you could return false in __onUserAction__ and take full control over consent handling.

Scroll is detected when the banner goes out of sight and it will be handled as a user action. It will be called just once. You can choose to ignore scroll events in __onUserAction__.

See __demo/index.html__ for examples.

License
-------

This plugin is licensed under the GPL v2 license. This is a plugin, you're just required to share your modifications/fixes/improvements to it. You aren't required to relicense your own projects because you're using and/or redistributing this plugin with them.

Disclaimer
----------

There's no warranty of any kind, you're the sole responsible for the use or misuse of this plugin. Using this plugin doesn't warrant your site is following law as it should.
