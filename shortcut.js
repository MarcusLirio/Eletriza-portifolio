jQuery(document).ready(function(){
    "use strict";
    if (jQuery(".wp-audio-shortcode").length){
        jQuery(".wp-audio-shortcode").each(function(){
            jQuery(this).removeClass("wp-audio-shortcode").addClass("wp-audio-shortcode-ready").attr("preload","meta");
            if (typeof jQuery(this).get(0).player != "undefined") jQuery(this).get(0).player.remove();
            jQuery(this).append("<source src='"+jQuery(this).find("a").attr("href")+"' />");
        });
    }
});