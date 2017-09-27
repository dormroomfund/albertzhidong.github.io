$(document).ready(function() {
	setHeight();
});


function setHeight(){
	// alert("function called");
	var containerArray = document.getElementsByClassName('SingleGraphic');
	for(i = 0; i < containerArray.length; i++){
		// alert(typeof(containerArray[i])); //object
		var text_height =containerArray[i].parent().find("bodytext");
		containerArray[i].attr('height') = text_height.attr('height')
		// alert('works');
	}
};