/*global $, window, document*/
$(document).ready(function () {
    "use strict";
    //animation, elements appearing as we scroll down
    var windowHeight = $(window).height(), windowScrollPosTop = $(window).scrollTop(), windowScrollPosBottom = windowHeight + windowScrollPosTop;
    $.fn.revealOnScroll = function () {
        return this.each(function () {
            var objectOffset = $(this).offset(), objectOffsetTop = objectOffset.top;
            if (!$(this).hasClass("hidden")) {
                $(this).css("opacity", 0).addClass("hidden");
            }
            if (!$(this).hasClass("animation-complete")) {
                if (windowScrollPosBottom > objectOffsetTop) {
                    $(this).animate({"opacity" : 1, "right" : 0}, 3000).addClass("animation-complete");
                }
            }
        });
    };

    $(window).scroll(function () {
        windowHeight = $(window).height();
        windowScrollPosTop = $(window).scrollTop();
        windowScrollPosBottom = windowHeight + windowScrollPosTop;
        $(".textAnimation").revealOnScroll();
    });
});