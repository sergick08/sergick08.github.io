$(document).ready()
$(window).load(function() {
  $('#slide-top').flexslider({
    animation: "slide",
    directionNav: false,
    smoothHeight: false,
    slideshowSpeed: 4000,
    
  });
  $('#slide-prd').flexslider({
     animation: "slide",
      itemWidth: 270,
      itemMargin: 30,
      minItems: 4,
      maxItems: 9,
      move: 0,
      controlNav: false,

  });
});


