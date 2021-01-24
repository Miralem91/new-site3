
 $('.slider').slick({
  autoplay:true,
  infinite: true,
  slidesToShow: 2,
  slidesToScroll: 2,
  arrows: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        autoplay:true,
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 2,
        arrows: true,
      }
    },
    {
      breakpoint: 600,
      settings: {
        autoplay:true,
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 2,
        arrows: true,
      }
    },
    {
      breakpoint: 480,
   
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]

});

$(window).on('resize orientationchange', function() {
  $('.js-slider').slick('resize');
});