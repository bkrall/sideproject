/*globals jQuery, document */
(function ($) {
    "use strict";

    $(document).ready(function(){

        /* Responsive videos */
        $(".post-content").fitVids();

        /* Responsive typography */
        $(".blog-logo").fitText(0.8, { minFontSize: '36px', maxFontSize: '48px' });
        $(".post-title").fitText(0.8, { minFontSize: '36px', maxFontSize: '52px' });
        $(".post-title a").fitText(0.8, { minFontSize: '36px', maxFontSize: '48px' });
    });

}(jQuery));