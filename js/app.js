$(document).ready(function() {
	setHeight();
});


function setHeight(){
	alert("function called");
	var container = document.getElementsByClassName('content-page');
	for(i = 0; i < container.length; i++){
		alert(typeof(container[i])); //object
		if (container[i].children.find('.SingleGraphic').length > 0){
			var text_height = container[i].find('.bodytext');
			container[i].find('.SingleGraphic').attr('height') = text_height.attr('height')
			alert('works');
		}
	}
}