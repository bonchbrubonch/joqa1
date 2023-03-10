$(function(){
  $('.product-slider__inner').slick({
    centerMode: true,
    centerPadding: '60px',
    slidesToShow: 2,             
    dots: false,
    arrows: false,
    variableWidth:true,
    infinite: true,
  });

  $('.instructors__slider-wrapper').slick({
    dots: true,
    arrows: false,
  });

  $('.rewiew-slider-wrapper').slick({
    arrows: false,
    dots: true,
  });

  $('.fancybox-media').fancybox({
    openEffect: 'none',
    closeEffect: 'none',
    helpers: {
      media: {}
    }
  });

});
