(function ($) {
    "use strict";


    jQuery(document).ready(function ($) {




        // AOS Init
        AOS.init({
            once: true,
            duration: 1500,
        });


        // Nav Menu Active 
        $('.header__menu ul li a').click(function(){
            $('li a').removeClass("active");
            $(this).addClass("active");
        });


        // Hero Slider

        $('.hero__image--slider').owlCarousel({
            loop: true,
            items: 1,
            nav: false,
            dots: true,
            margin: 10,
            dotsData: true,
            autoplay: true,
            autoplayTimeout: 2000,
            smartSpeed: 1000,
            autoplayHoverPause: true,
        });


            
      
        // Featured Slider 
        $('.featured__wraper').owlCarousel({
            loop:               true,
            margin:             20,
            autoplay:           true,
            autoplayTimeout:    2000,
            smartSpeed:         800,
            autoplayHoverPause: true,
          
            responsive: {
              0: {
                items:        1,
                stagePadding: 60,   
              },
              767: {
                items:        2,
                stagePadding: 60,
              },
              992: {
                items:        2,
                stagePadding: 60,
              },
              992: {
                items:        2,
                stagePadding: 80,
              },
              1199: {
                items:        2,
                stagePadding: 100,
              },
              1449: {
                items:        2,
                stagePadding: 200,
              },
              1620: {
                items:        2,
                stagePadding: 300,
              },
            },
        });




        // Testiomonial Slider

        $('.testiomonial__card--wraper').owlCarousel({
            loop: true,
            margin: 50,
            dots: true,
            nav: false,
            dotsEach: true,
            autoplay: true,
            autoplayTimeout: 2000,
            smartSpeed: 800,
            autoplayHoverPause: true,
            slideTransition: 'cubic-bezier(0.4, 0, 0.2, 1)',
            onInitialized: updateGlobalDots,
            onTranslate: updateGlobalDots,
            onTranslated: updateGlobalDots,
            responsive: {
                0: { items: 1 },
                700: { items: 2,margin: 20, },
                1000: { items: 2 }
            }
        });

        // Events Slider
        
        $('.event__card--wraper').owlCarousel({
            loop: true,
            margin: 20,
            dots: true,
            dotsEach: true,
            autoplay: true,
            autoplayTimeout: 2000,
            smartSpeed: 800,
            autoplayHoverPause: true,
            slideTransition: 'cubic-bezier(0.4, 0, 0.2, 1)',
            onInitialized: updateGlobalDots,
            onTranslate: updateGlobalDots,
            onTranslated: updateGlobalDots,
            responsive: {
                0: { items: 1 },
                700: { items: 2 },
                1000: { items: 3 }
            }
        });
        
        function updateGlobalDots(event) {
            var $currentCarousel = $(event.target);
            var $dotsContainer = $currentCarousel.find('.owl-dots');
            var $dots = $dotsContainer.find('.owl-dot');
            $dots.removeClass('near-active mid-active');
        
            $dots.each(function(index) {
                if ($(this).hasClass('active')) {
                    if (index - 1 >= 0) $dots.eq(index - 1).addClass('near-active');
                    $dots.eq(index + 1).addClass('near-active');
                    
                    if (index - 2 >= 0) $dots.eq(index - 2).addClass('mid-active');
                    $dots.eq(index + 2).addClass('mid-active');
                }
            });
        }





    }); //---document-ready-----



}(jQuery));


