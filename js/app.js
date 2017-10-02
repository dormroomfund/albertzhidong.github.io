$(document).ready(function(){

  arrowflash();

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

  $('#SignUpButton').onClick(function(){
      alert('works');
      $(this).closest().find('input').finish().show()
      .animate({'display':'none'}, 500);
  });
});

//controls arrow hopping animation when mouse hovers over
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

//looks to see if the user has scrolled
var scrolled = true;
window.onscroll= function(e){ 
  scrolled = false;
  if($(window).scrollTop() == 0){
    scrolled = true;
  }
}

//controls the flashing aniamtion of the arrow
function arrowflash(){
  $('#arrow').find('img').finish().show()
    .animate({'opacity':'0'}, 1500, function(){
    $(this).animate({'opacity':'1'}, 1500);
  });
  var t = setInterval(function(){
    if(scrolled === true){
       $('#arrow').find('img').finish().show()
        .animate({'opacity':'0'}, 1500, function(){
        $(this).animate({'opacity':'1'}, 1500);
       });
    }
  },3500);
}