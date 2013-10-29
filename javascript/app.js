$(function() {
  //LIFE AND WORK CONTAINER SLIDES ON CLICK
  $("#link-one").mouseover(function() {
      $("img#one").animate({width: '0%'},300);
  });
  $("#link-one").mouseleave(function() {
      $("img#one").animate({width: '100%'},300);
  });
});

  