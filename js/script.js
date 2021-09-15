(function ($) {
  'use strict';

  // ----------------------------
  // AOS
  // ----------------------------
  AOS.init({
    once: true
  });

  
  $(window).on('scroll', function () {
		//.Scroll to top show/hide
    var scrollToTop = $('.scroll-top-to'),
      scroll = $(window).scrollTop();
    if (scroll >= 200) {
      scrollToTop.fadeIn(200);
    } else {
      scrollToTop.fadeOut(100);
    }
  });

  $(document).ready(function() {

    // navbarDropdown
    if ($(window).width() < 992) {
      $('.main-nav .dropdown-toggle').on('click', function () {
        $(this).siblings('.dropdown-menu').animate({
          height: 'toggle'
        }, 300);
      });
    }

    // -----------------------------
    //  Testimonial Slider
    // -----------------------------
    $('.testimonial-slider').slick({
      slidesToShow: 2,
      infinite: true,
      arrows: false,
      autoplay: true,
      autoplaySpeed: 2000,
      dots: true,
      responsive: [
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    });

  });

})(jQuery);