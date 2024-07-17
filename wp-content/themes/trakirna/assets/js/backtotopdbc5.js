(function ($) {
    "use strict";

    $(".switch").on("click", function () {
        $("body").toggleClass("light");
        $(".switch").toggleClass("switched");
    });

    $(document).ready(function () {
        var e = document.querySelector(".progress-wrap path");
        if (e) {
            var t = e.getTotalLength();
            (e.style.transition = e.style.WebkitTransition = "none"),
                (e.style.strokeDasharray = t + " " + t),
                (e.style.strokeDashoffset = t),
                e.getBoundingClientRect(),
                (e.style.transition = e.style.WebkitTransition =
                    "stroke-dashoffset 10ms linear");

            var o = function () {
                var o = $(window).scrollTop(),
                    r = $(document).height() - $(window).height(),
                    i = t - (o * t) / r;
                e.style.strokeDashoffset = i;
            };

            o();
            $(window).scroll(o);

            $(window).on("scroll", function () {
                $(this).scrollTop() > 50
                    ? $(".progress-wrap").addClass("active-progress")
                    : $(".progress-wrap").removeClass("active-progress");
            });

            $(".progress-wrap").on("click", function (event) {
                event.preventDefault();
                $("html, body").animate({ scrollTop: 0 }, 550);
                return false;
            });
        }
    });
})(jQuery);
