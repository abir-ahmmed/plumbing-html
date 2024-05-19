(function ($) {
  'use strict';

  $(document).ready(function($){
    const $window = $(window);
    let didScroll,
      lastScrollTop = 0,
      delta = 5,
      $mainNav = $('#sticky'),
      $mainNavHeight = $mainNav.outerHeight(),
      scrollTop;

    $window.on('scroll', function () {
      didScroll = true;
      scrollTop = $(this).scrollTop();
    });

    setInterval(function () {
      if (didScroll) {
        hasScrolled();
        didScroll = false;
      }
    }, 200);

    function hasScrolled() {
      if (Math.abs(lastScrollTop - scrollTop) <= delta) {
        return;
      }
      if (scrollTop > lastScrollTop && scrollTop > $mainNavHeight) {
        $mainNav.css('top', -$mainNavHeight);
      } else {
        if (scrollTop + $(window).height() < $(document).height()) {
          $mainNav.css('top', 0);
        }
      }
      lastScrollTop = scrollTop;
    }

    //sticky header
    function navbarFixed() {
      if ($('#sticky').length) {
        $(window).scroll(function () {
          var scroll = $(window).scrollTop();
          if (scroll) {
            $('#sticky').addClass('navbar_fixed');
          } else {
            $('#sticky').removeClass('navbar_fixed');
          }
        });
      }
    }
    navbarFixed();

    $('.navbar-nav > li .mobile_dropdown_icon').on('click', function (e) {
      $(this).parent().find('ul').first().toggle(300);
      $(this).parent().siblings().find('ul').hide(300);
    });

    if ($('.submenu').length) {
      $('.submenu > .dropdown-toggle').on('click', function () {
        let location = $(this).attr('href');
        window.location.href = location;
        return false;
      });
    }

    // initialize wow.js
    new WOW().init();

    // initialize nice-select
    $('.nice-select-common').niceSelect();



    // rigion Silder
    const swiper = new Swiper('.swiper', {
      slidesPerView: 1,
      spaceBetween: 10,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      loop:true,
      spaceBetween: 10,
      //  centeredSlides: true,
       autoplay:{
         delay:2500,
         disableOnInteraction:false,
       },
      breakpoints: {
        640: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
        1200: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
      },

    });
    // testimonial Silder
    const testimonialSwiper = new Swiper('.testimonial-swiper', {
      slidesPerView: 1,
      spaceBetween: 10,
      // navigation: {
      //   nextEl: ".swiper-button-next",
      //   prevEl: ".swiper-button-prev",
      // },
      loop:true,
      centeredSlides: true,
      spaceBetween: 10,
      //  centeredSlides: true,
       autoplay:{
         delay:2500,
         disableOnInteraction:false,
       },
      breakpoints: {
        640: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
        1024: {
          slidesPerView: 2.8,
          spaceBetween: 20,
        },
        1200: {
          slidesPerView: 2.8,
          spaceBetween: 30,
        },
      },

    });


    
  });

  $('.single-item').hover(
    function() {
      $('.single-item').removeClass('active');
      $(this).addClass('active');
    }, function() {
      // Optionally, you can remove the active class when the hover ends
      // $(this).removeClass('active');
    }
  );
  

})(jQuery);


