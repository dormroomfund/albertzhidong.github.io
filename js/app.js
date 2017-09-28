$(document).ready(function() {
	setHeight();
});


// function setHeight(){
// 	alert("function called");
// 	var containerArray = document.getElementsByClassName('SingleGraphic');
// 	for(i = 0; i < containerArray.length; i++){
// 		alert(typeof(containerArray[i])); //object
// 		var text_height =containerArray[i].parent().find("bodytext");
// 		containerArray[i].attr('height') = text_height.attr('height')
// 		alert('works');
// 	}
// };

// function setHeight(){
// 	alert("function called");
// 	var containerArray = document.getElementsByClassName('content-page');
// 	for(var i = 0; i < containerArray.length; i++){
//   		var left = containerArray[i].getElementsByClassName('bodytext');
//   		var right = containerArray[i].getElementsByClassName('SingleGraphic');
//   	}




// 	for(var i = 0; i < containerArray.length; i++){
// 		alert(typeof(containerArray[i])); //object
// 		var text_height = containerArray[i].parent().find("bodytext");
// 		containerArray[i].attr('height') = text_height.attr('height')
// 		alert('works');
// 	}
// };


// var parent = document.getElementsByClassName('parent');
// for(var i=0;i<parent.length;i++){
//   var child = parent[i].getElementsByClassName('child');
// for(var j=0;j<child.length;j++){
//       child[j].style.color='red';
//     }