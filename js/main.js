'use strict'; 
$(window).on('load', function () { $(".loader").fadeOut(); $("#preloder").delay(400).fadeOut("slow"); }); (function ($) { $('.responsive-bar').on('click', function (event) { $('.main-menu').slideToggle(400); event.preventDefault(); }); $('.set-bg').each(function () { var bg = $(this).data('setbg'); $(this).css('background-image', 'url(' + bg + ')'); }); var review_meta = $(".review-meta-slider"); var review_text = $(".review-text-slider"); review_text.on('changed.owl.carousel', function (event) { review_meta.trigger('next.owl.carousel'); }); review_meta.owlCarousel({ loop: true, nav: false, dots: true, items: 3, center: true, margin: 20, autoplay: true, mouseDrag: false, }); review_text.owlCarousel({ loop: true, nav: true, dots: false, items: 1, margin: 20, autoplay: true, navText: ['<i class="ti-angle-left"><i>', '<i class="ti-angle-right"><i>'], animateOut: 'fadeOutDown', animateIn: 'fadeInDown', }); $(".check-form").focus(function () { $(this).next("span").addClass("active"); }); $(".check-form").blur(function () { if ($(this).val() === "") { $(this).next("span").removeClass("active"); } }); })(jQuery);
(function ($) {

    var allPanels = $('.accordion > .accordion-content').hide();


    $('.accordion > .accordion-header > a').click(function () {
        
        
        if($(this).parent().next().is(":visible")){
            allPanels.slideUp();
            $('.accordion > .accordion-header > a').find('.plus-icon>span').fadeIn();
        }else{
            allPanels.slideUp();
            $('.accordion > .accordion-header > a').find('.plus-icon>span').fadeIn();
            $(this).parent().next().slideDown();
            $(this).children().children().fadeOut();
        };
        
        
        
        
        
        return false;
    });

})(jQuery);

$(document).ready(function () {
    // Add smooth scrolling to all links
    $("a").on('click', function (event) {

        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();

            // Store hash
            var hash = this.hash;

            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 1000, function () {

                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
            });
        } // End if
    });
});