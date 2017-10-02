$(document).ready(function(){


  $('.Banners').mouseenter(function(){
    $(this).find('img').finish().show()
    .animate({'margin-top':'15px'}, 250);
  });
  $('.Banners').mouseleave(function(){
    $(this).find('img').finish().show()
    .animate({'margin-top':'0px'}, 250);
  });

  $('#arrow').mouseenter(function(){
    arrowhop();
  });
});

var lastCall = 0;
function arrowhop() {
  var now = Date.now();
  if (lastCall + 1000 < now) {
    lastCall = now;
    $('#arrow').find('img').finish().show()
    .animate({'margin-bottom': '15px'}, 200, function(){
      $(this).animate({'margin-bottom': '0px'}, 350);
    });
  }
}