# jquery-freeTheCookies

This is a simple but highly customizable plugin that puts a banner in your site
warning the user about the use of cookies. It will wait for the user's explicit
or implicit consent and then fire an event to initialize the cookies. Implicit
consent can be any click or scroll event.

It's designed around the idea that your site needs the cookies to work so the
user should always consent. User consent is remembered by using a configurable
cookie.  You're given full control over the banner appearance and the
interpretation of implicit consent.

## Requirements

  + jQuery 1.2+ (https://github.com/jquery/jquery)
  + jquery-cookie (https://github.com/carhartl/jquery-cookie)

## How to use it

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

The first time being invoked an options object can be used as argument
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

  + blockAttrs: (array) Attributes used for the banner block.
  + blockCss: (array) CSS for the banner block.
  + closeHtml: (string) Content for the close block,
  + closeAttrs: (array) Attributes for the close block.
  + closeCss: (array) CSS for the close block.
  + position: (string) It may be 'append' or 'prepend', appends or prepends the
    block. Default: 'append' (recommended for SEO).
  + parentBlock: (string) jQuery selector for the parent block where the banner
    will be appended/prepended. Default: 'body'.
  + speed: (int) Animation speed (ms)
  + cookieName: (string) The name of the cookie used to remember user consent.
    Default: 'cookie-consent'.
  + cookieOptions: (array) jquery.cookie options.
  + onUserAction: (function) Called when a user event occurs. It receives an
    event object that can be used to decide whether this action means consent
    or not. Return true when it means consent. The default callback returns
    true for all user actions captured.

__$.freeTheCookies()__ can be called at anytime to check for consent, it will
return true when consent already given or false when still not.

```
if ( $.freeTheCookies() ) {
  ...
}
```

It can also be called passing a callback function as the only argument and it
will be called when consent is given. This can be done as many times as needed
and all callbacks functions will be called.

```
$.freeTheCookies(function() {
  ...
});
```

If consent is already given the callback function will be called immediately.

__$.freeTheCookies.now()__ triggers explicit consent when called.

In case you want to disable implicit consent the __onUserAction__ should return
always true and then call __$.freeTheCookies.now()__ when explicit consent
happens..

Scroll is detected when the banner goes out of sight and it will be handled as
a user action, so the outcome can be changed in the __onUserAction__ callback.

See __demo/index.html__ for examples.

Visit the [wiki](https://github.com/berarma/jquery-freeTheCookies/wiki) for
more information.

## License

This plugin is licensed under the GPL v2 license. This is a plugin, you're just
required to share your modifications/fixes/improvements to it. You aren't
required to relicense your own projects because you're using and/or
redistributing this plugin with them.

## Disclaimer

There's no warranty of any kind, you're the sole responsible for the use or
misuse of this plugin. Using this plugin alone isn't enough to make your site
compliant with any law.
