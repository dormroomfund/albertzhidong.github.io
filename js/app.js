$(document).ready(function(){

  //controls the flashing arrow animation
  arrowFlash();

  //controls the hopping arrow animation
  $('#arrow').mouseenter(function(){
    arrowHop();
  });

  //handles the banner dop animation
  $('.Banners').mouseenter(function(){
    $(this).find('img').finish().show()
    .animate({'margin-top':'15px'}, 250);
  });
  $('.Banners').mouseleave(function(){
    $(this).find('img').finish().show()
    .animate({'margin-top':'0px'}, 350);
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
      submit();
      $(this).parent().parent().find('.red').remove();
      var thanks = document.createElement("P");
      var textnode = document.createTextNode("Thanks!");
      thanks.appendChild(textnode);
      thanks.className += "SubsubheaderText blue";
      $('#newsletter').append(thanks);
      $(this).parent().remove();
    }
  });

  //allows for "Enter" to be pressed to submit one of the text boxes is in focus
  $("#nameinput").keyup(function(event){
    if(event.keyCode == 13){
        $("#SignUpButton").click();
    }
  });
  $("#emailinput").keyup(function(event){
    if(event.keyCode == 13){
        $("#SignUpButton").click();
    }
  });

});

//controls arrow hopping animation when mouse hovers over
var lastCall = 0;
function arrowHop() {
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
function arrowFlash(){
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

//checks to make sure the email is valid
function validateEmail(elementValue){      
   var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
   return emailPattern.test(elementValue); 
} 

function submit(){
  var url = "https://script.google.com/macros/s/AKfycbxs4vTvuG_Ysmaim4qefVjNH0bM4cWsmorz-av0eaby-1aPSQ/exec"
  var xhr = new XMLHttpRequest();
  xhr.open('POST', url);
  xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
  xhr.onreadystatechange = function() {
    console.log( xhr.status, xhr.statusText )
    console.log(xhr.responseText);
  };

  var filledName = $('#nameinput').val();
  var filledEmail = $('#emailinput').val();
  var data = {
    name: filledName,
    email: filledEmail
  }
  // url encode form data for sending as post data
  var encoded = Object.keys(data).map(function(k) {
      return encodeURIComponent(k) + '=' + encodeURIComponent(data[k])
  }).join('&')
  xhr.send(encoded);
}