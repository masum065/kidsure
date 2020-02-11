$(function(){
   "use strict"
    //  wow js active script
    new WOW().init();

   jQuery(document).ready(function($){

    //scrollspy menu
    $('body').scrollspy({
        target: '.main-menu',
        offset: 95
    });
     // Closes responsive menu when a scroll link is clicked
     $('.nav-link').on('click', function () {
      $('.navbar-collapse').collapse('hide');
  });
 var htmlBody = $('html, body');
//    //nave top js
 var navNavbar = $('div.navbar'),
     $window = $(window),
    navOffset = navNavbar.offset().top;

  //animation scroll js
  $('a[href*="#"]:not([href="#').on('click', function () {
      if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
          if (target.length) {
              htmlBody.animate({
                  scrollTop: target.offset().top - 82
              }, 1200);
              return false;
          }
      }
  });

  var windo = $(window);
 // this is for back to top and sticky menu js
      var bc2top = $('.back-to-top');
      bc2top.on('click', function () {
          htmlBody.animate({
              scrollTop: 0
          }, 1500);
      });
      windo.on('scroll', function () {
          var scrollPos = windo.scrollTop();
          var scrolling = $(this).scrollTop();
          if (scrollPos > 150) {
              bc2top.fadeIn(1500);
          } else {
              bc2top.fadeOut(1500);
          }
          if (scrolling >= 150) {
              $('.header-area').addClass('nav-fixed');
          } else {
              $('.header-area').removeClass('nav-fixed');
          }
      });

      // owlCarousel
      $('.gallery-photo-list').owlCarousel({
        dots: false,
        nav: true,
        loop: true,
        margin: 45,
        autoplay: false,
        autoplayTimeout: 3000,
        navText: ["<i class='fa fa-angle-left'></i>" , "<i class='fa fa-angle-right'></i>"],
        responsive : {
            // breakpoint from 0 up
            0 : {
                items:1,
                nav:true
            },
            // breakpoint from 480 up
            576 : {
                items:2,
                nav:true,
                margin: 50
            },
            768 : {
                items:3,
                nav:true,
                margin: 40
            },
            // breakpoint from 768 up
            992 : {
                items:4,
                nav:true
            },
            1200 : {
                items:5,
                nav:true,
                margin: 45
            }
        }
     });


// animated css


   });
    
   jQuery(window).load(function(){

    
    
   });


});