$(document).ready(function(){

  arrowflash();

  $('.Banners').mouseenter(function(){
    $(this).find('img').finish().show()
    .animate({'margin-top':'15px'}, 250);
  });
  $('.Banners').mouseleave(function(){
    $(this).find('img').finish().show()
    .animate({'margin-top':'0px'}, 350);
  });

  $('#arrow').mouseenter(function(){
    arrowhop();
  });

  //controls the newsletter signup responses
  $('#SignUpButton').click(function(){
    if($('#nameinput').val().length == 0 || $('#emailinput').val().length == 0){ //checks to see all boxes are filled
      $(this).parent().parent().find('.red').remove();
      var warning = document.createElement("P");
      var textnode = document.createTextNode("Please fill out all required fields!");
      warning.appendChild(textnode);
      warning.className += "SubsubheaderText red";
      warning.style.marginTop = 2 + '%';
      warning.style.marginBottom = 0 + '%';
      $('#newsletter').append(warning);
    }else if(validateEmail($('#emailinput').val()) != true){ //checks to see if its a valid email
      $(this).parent().parent().find('.red').remove();
      var warning2 = document.createElement("P");
      var textnode = document.createTextNode("Please enter a valid email");
      warning2.appendChild(textnode);
      warning2.className += "SubsubheaderText red";
      warning2.style.marginTop = 2 + '%';
      warning2.style.marginBottom = 0 + '%';
      $('#newsletter').append(warning2);
    }else{
      $(this).parent().parent().find('.red').remove();
      var thanks = document.createElement("P");
      var textnode = document.createTextNode("Thanks!");
      thanks.appendChild(textnode);
      thanks.className += "SubsubheaderText blue";
      $('#newsletter').append(thanks);
      $(this).parent().remove();
    }
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

function validateEmail(elementValue){      
   var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
   return emailPattern.test(elementValue); 
} 