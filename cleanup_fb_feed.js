// ==UserScript==
// @name         Facebook Suggested Post Blocker
// @namespace    http://*.facebook.com
// @version      0.1
// @description  try to remove the "Suggested Post" blocks in the facebook feed
// @author       jenksy
// @match        https://www.facebook.com/
// @grant        none
// @require      http://code.jquery.com/jquery-3.1.1.min.js
// ==/UserScript==

(function() {
    'use strict';
    // Colour the ads.
    $(document).ready(function() {
        // Create some fun functions
        var replacement = '<div style="color:grey;text-align:center;">Ad Removed<div>';
        //var replacement = '';
        var hideAd = function() {
            $("span:contains('Suggested Post')").parent().parent().parent().replaceWith(replacement);
            $("span:contains('Suggested for you')").parent().parent().parent().parent().parent().parent().replaceWith(replacement);
            $("div:contains('People Also Shared')").parent().parent().parent().replaceWith(replacement);
            $("div:contains('Suggested Videos')").parent().parent().parent().replaceWith(replacement);
            $("div:contains('Suggested Videos')").parent().parent().replaceWith(replacement);
            $("span:contains('Reels and short videos')").parent().parent().parent().parent().parent().parent().replaceWith(replacement);
            $("span:contains('Follow')").parent().parent().parent().parent().parent().parent().parent().parent().parent().parent().replaceWith(replacement);
            $("a:contains('Sponsored')").parent().parent().parent().parent().parent().parent().parent().parent().parent().parent().parent().parent().parent().replaceWith(replacement);
        };
        $(window).bind('mousewheel DOMMouseScroll', function(event) {
            hideAd();
        });
    });

})();