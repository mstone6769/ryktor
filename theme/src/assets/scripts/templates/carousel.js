import $ from 'jquery';

window.jQuery = $;
window.$ = $;
require('owl.carousel');

$(document).ready(() => {
  $('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    responsiveClass:true,
    autoWidth:false,
    nav: true,
    dots: false,
    stagePadding: 50,
    slideBy: 'page',
    lazyLoad:true,
    lazyLoadEager: 1,
    responsive:{
        0:{
            items:1,
            nav:false,
            
        },
        600:{
            items:2,
            nav:true,
        },
        900:{
            items:3,
            nav:true,
        },
        1200:{
            items:4,
            nav:true,
        }
    }
  });
});