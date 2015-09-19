$(document).ready(function() {
	createGrid(32);
});

var createGrid = function(x){
	squareNum = (600/x);
	for(var i=0; i<(x*x); i++){
		$('#container').append('<div id="grid"></div>')
	};

	$("#grid").width(squareNum);
	$("#grid").height(squareNum);

	sketch();
};

var sketch = function (){
	$('#grid').mouseover(function() {
		$(this).css({
			background-color: #FFFFFF,
		});

	});
};

