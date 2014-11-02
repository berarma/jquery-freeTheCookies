#jquery-freeTheCookies

This is a simple but highly customizable plugin that puts a banner in your site
warning the user about the use of cookies. It will wait for the user's explicit
or implicit consent and then fire an event to initialize the cookies. Implicit
consent can be any click or scroll event.

It's designed around the idea that your site needs the cookies to work so the
user should always consent. User consent is remembered by using a configurable
cookie.  You're given full control over the banner appearance and the
interpretation of implicit consent.

##Requirements

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
(optional). The default values can be seen in the source code.

The following options are available:

  + text: message content to be shown in the banner, can contain any HTML.
  + style: styles that will override the default styles set by the plugin for
    the banner.
  + disabled: set it to true if you want the banner to be disabled for this
    page. To be used in the cookies policy page. The banner won't be shown and
    implicit consent will be disabled.
  + onConsent: (function) Callback function that will be called when consent is
    given. Any code that creates cookies should be run here.

You can further customize the plugin with the following advanced options:

  + cookieName: (string) The name of the cookie used to remember user consent.
    Default: 'cookie-consent'.
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

You can call __$.freeTheCookies()__ anytime to check for consent, it will
return true or false. You can also pass a callback function as the only
argument and it will be called when consent is given. This can be done as many
times as needed.

If consent is already given the callback function will be
called immediately.

```
if ( $.freeTheCookies() ) {
  ...
}
$.freeTheCookies(function() {
  ...
});
```

You can call __$.freeTheCookies.now()__ to force the plugin to take consent.

In case you want to disable implicit consent you could return always false in
the __onUserAction__ callback then call __$.freeTheCookies.now()__ when
explicit consent happens..

Scroll is detected when the banner goes out of sight and it will be handled as
a user action, so the outcome can be handled in the __onUserAction__ callback.

See __demo/index.html__ for examples.

Visit the [wiki](https://github.com/berarma/jquery-freeTheCookies/wiki) for
more information.

##License

This plugin is licensed under the GPL v2 license. This is a plugin, you're just
required to share your modifications/fixes/improvements to it. You aren't
required to relicense your own projects because you're using and/or
redistributing this plugin with them.

##Disclaimer

There's no warranty of any kind, you're the sole responsible for the use or
misuse of this plugin. Using this plugin alone isn't enough to make your site
compliant with any law.
