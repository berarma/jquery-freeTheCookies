#jquery-freeTheCookies

This is a simple but highly customizable plugin that puts a banner in your site warning the user about the use of cookies. It will ask for explicit or implicit consent from the user without offering the option to reject cookies. This is useful when disabling cookies is not wanted or can be troublesome for your site. User consent is saved in a configurable cookie. You're given full control over the banner appearance and the interpretation of implicit consent.

It will let you run Javascript code in the browser when the user gives explicit or implicit consent allowing to run the code that sets cookies.

Requirements

  + jQuery 1.2+ (https://github.com/jquery/jquery)
  + jquery-cookie (https://github.com/carhartl/jquery-cookie)

##How to use it

Load the plugin in your web page after jQuery and jquery-cookie:
```
<script src="js/jquery.js"></script>
<script src="js/jquery.cookie.js"></script>
<script src="js/jquery.freeTheCookies.js"></script>
```

Initialize the plugin:
```
jQuery.freeTheCookies( options );
```

The first time you call the plugin you can pass an options object as argument
(optional), you can see the defaults in the code.

The following options can be set:

  + text: message content to be shown in the banner, can contain any HTML.
  + style: styles that will override the default styles set by the plugin for the banner.
  + disabled: set it to true if you want the banner to be disabled for this
    page. To be used in the cookies policy page. The banner won't be shown and no user
    action will allow cookies.
  + onConsent: (function) Called when consent given. You can then run any
    Javascript code that would create cookies.

You can further customize the plugin with the following advanced options:

  + cookieName: (string) The name of the cookie to save user consent. Default:
    'cookie-consent'.
  + cookieOptions: (array) jquery.cookie options.
  + speed: (int) Animation speed (ms)
  + position: (string) It may be 'append' or 'prepend', appends or prepends the
    block. Default: 'append' (recommended for SEO).
  + parentBlock: (string) jQuery selector for the parent block where the banner
    will be appended/prepended. Default: 'body'.
  + blockAttrs: (array) Banner block HTML attributes.
  + blockCss: (array) Banner block CSS.
  + closeHtml: (string) Close button block content,
  + closeAttrs: (array) Close button block HTML attributes.
  + closeCss: (array) Close button block CSS.
  + onUserAction: (function) Called when a user event occurs. It receives an
    event object that can be used to decide whether this action means consent
    or not. Return true when it means consent. The default callback returns
    true for all user actions captured.

You can call __$.freeTheCookies__ anytime to check for consent, it will return
true on consent or false, or pass it a callback function that will be called
when consent is given.

```
if ( $.freeTheCookies() ) {
  ...
}
$.freeTheCookies(function() {
  ...
});
```

Passing a callback function as an argument will add it to the set of callback
functions called when consent is given. If consent is already given the
callback function will be called immediately.

You can call __$.freeTheCookies.now()__ to force the plugin to take consent. You
could pass a function returning always false in the __onUserAction__ callback
and let consent happen only when you want, e.g. when pressing a button.

Scroll is detected when the banner goes out of sight and it will be handled as
a user action. It will be called just once. You can choose to ignore scroll
events in __onUserAction__.

See __demo/index.html__ for examples.

##Using it with Google Analytics

With the Universal Analytics code you just have to put the Google Analytics
code inside the __onConsent__ function.

##Using it with Google AdSense

When using the asynchronous code just load the external JS script from inside
the __onConsent__ function. Everything else is left as is.

```
$.freeTheCookies(function() {
  $( "<script async src='//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js'></script>" ).appendTo('body');
});
```

##License

This plugin is licensed under the GPL v2 license. This is a plugin, you're just
required to share your modifications/fixes/improvements to it. You aren't
required to relicense your own projects because you're using and/or
redistributing this plugin with them.

##Disclaimer

There's no warranty of any kind, you're the sole responsible for the use or
misuse of this plugin. Using this plugin alone isn't enough to make your site
compliant with any law.
