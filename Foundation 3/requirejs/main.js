requirejs.config({
  shim: {
    "foundation/jquery.cookie": { deps: ["jquery"] },
    "foundation/jquery.event.move": { deps: ["jquery"] },
    "foundation/jquery.event.swipe": { deps: ["jquery"] },
    "foundation/jquery.foundation.accordion": { deps: ["jquery"] },
    "foundation/jquery.foundation.alerts": { deps: ["jquery"] },
    "foundation/jquery.foundation.buttons": { deps: ["jquery"] },
    "foundation/jquery.foundation.clearing": { deps: ["jquery"] },
    "foundation/jquery.foundation.forms": { deps: ["jquery"] },
    "foundation/jquery.foundation.joyride": { deps: ["jquery"] },
    "foundation/jquery.foundation.magellan": { deps: ["jquery"] },
    "foundation/jquery.foundation.mediaQueryToggle": { deps: ["jquery"] },
    "foundation/jquery.foundation.navigation": { deps: ["jquery"] },
    "foundation/jquery.foundation.orbit": { deps: ["jquery"] },
    "foundation/jquery.foundation.reveal": { deps: ["jquery"] },
    "foundation/jquery.foundation.tabs": { deps: ["jquery"] },
    "foundation/jquery.foundation.tooltips": { deps: ["jquery"] },
    "foundation/jquery.foundation.topbar": { deps: ["jquery"] },
    "foundation/jquery.foundation.utils": { deps: ["jquery"] },
    "foundation/jquery.offcanvas": { deps: ["jquery"] },
    "foundation/jquery.placeholder": { deps: ["jquery"] }
  },

  paths: {
    jquery: "jquery.min"
  },

  name: "main",
  out: "main.min.js"
});

requirejs(["jquery",
         "foundation/jquery.cookie",
         "foundation/jquery.event.move",
         "foundation/jquery.event.swipe",
         "foundation/jquery.foundation.accordion",
         "foundation/jquery.foundation.alerts",
         "foundation/jquery.foundation.buttons",
         "foundation/jquery.foundation.clearing",
         "foundation/jquery.foundation.forms",
         "foundation/jquery.foundation.joyride",
         "foundation/jquery.foundation.magellan",
         "foundation/jquery.foundation.mediaQueryToggle",
         "foundation/jquery.foundation.navigation",
         "foundation/jquery.foundation.orbit",
         "foundation/jquery.foundation.reveal",
         "foundation/jquery.foundation.tabs",
         "foundation/jquery.foundation.tooltips",
         "foundation/jquery.foundation.topbar",
         "foundation/jquery.foundation.utils",
         "foundation/jquery.offcanvas",
         "foundation/jquery.placeholder"], function ($) {

  /**
   * Foundation - app.js:
   */

  (function ($, window, undefined) {
    var $doc = $(document),
        Modernizr = window.Modernizr;

    $(document).ready(function () {
      $.fn.foundationAlerts           ? $doc.foundationAlerts() : null;
      $.fn.foundationButtons          ? $doc.foundationButtons() : null;
      $.fn.foundationAccordion        ? $doc.foundationAccordion() : null;
      $.fn.foundationNavigation       ? $doc.foundationNavigation() : null;
      $.fn.foundationTopBar           ? $doc.foundationTopBar() : null;
      $.fn.foundationCustomForms      ? $doc.foundationCustomForms() : null;
      $.fn.foundationMediaQueryViewer ? $doc.foundationMediaQueryViewer() : null;
      $.fn.foundationTabs             ? $doc.foundationTabs({callback : $.foundation.customForms.appendCustomMarkup}) : null;
      $.fn.foundationTooltips         ? $doc.foundationTooltips() : null;
      $.fn.foundationMagellan         ? $doc.foundationMagellan() : null;
      $.fn.foundationClearing         ? $doc.foundationClearing() : null;
      $.fn.placeholder                ? $('input, textarea').placeholder() : null;
    });

    // UNCOMMENT THE LINE YOU WANT BELOW IF YOU WANT IE8 SUPPORT AND ARE USING .block-grids
    // $('.block-grid.two-up>li:nth-child(2n+1)').css({clear: 'both'});
    // $('.block-grid.three-up>li:nth-child(3n+1)').css({clear: 'both'});
    // $('.block-grid.four-up>li:nth-child(4n+1)').css({clear: 'both'});
    // $('.block-grid.five-up>li:nth-child(5n+1)').css({clear: 'both'});

    // Hide address bar on mobile devices (except if #hash present, so we don't mess up deep linking).
    if (Modernizr.touch && !window.location.hash) {
      $(window).load(function () {
        setTimeout(function () {
          // At load, if user hasn't scrolled more than 20px or so...
          if( $(window).scrollTop() < 20 ) {
            window.scrollTo(0, 1);
          }
        }, 0);
      });
    }

  })($, window);

});