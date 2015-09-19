$(document).ready(function() {
	createGrid(32);
	resetGrid();
	addNewGrid();
	defaultGrid();
	trailGrid();
	randomColors();
	killGrid();

});
//create grids via divs
var createGrid = function(x) {
	squareSize = (960/x);

	for(var i = 0; i < (x*x); i++) {
		$('#container').prepend('<div class="grid"></div>');
	}

	$(".grid").width(squareSize);
	$(".grid").height(squareSize);

	sketch();
};

//Sketch!
var sketch = function (){
	$('.grid').mouseover(function() {
		$(this).css({
			"background-color": "white"
		});

	});
};

//clears sketchpad
var resetGrid = function(){
	$('#reset').click(function() {
		$('.grid').css('background-color', '#0B233A');
		createGrid(32);
	});
};

//Add new grids on user input
var addNewGrid = function(){
	$('#newGrid').click(function(){
		$('.grid').remove();
		newGrids = $('input[name="number of squares"]').val();
		if (newGrids > 100) {
				alert("Sorry, Etch-a-Sketch is limited to 100x100 for best performance!");
				createGrid(100);
			} else {
			createGrid(newGrids);
		};
		
	});
};


//Reset sketch pad to default
var defaultGrid = function(){
	$('#default').click(function(){
		$('.grid').unbind();
		$('.grid').css('background-color', '#0B233A');
		sketch();
	});
};

//Leaves a temporary trail rather than a permanent sketch
var trailGrid = function () {
	$("#trails").click(function(){
		$('.grid').unbind();
		$(".grid").css({
			"background-color" : "#0B233A",
			"opacity": "1"
		});
		$(".grid").mouseenter(function(){
			$(this).fadeTo(400,0);
		});
		$(".grid").mouseleave(function(){
			$(this).fadeTo(2000,1);
		});
	});
}

// Sketch in random colors!
var randomColors = function(){
	$('#randomColor').click(function(){
		$('.grid').unbind();
		$('.grid').css('background-color', "#0B233A");
		$('.grid').mouseover(function(){
			$(this).css('background-color', ranColor());
		});

	});
};

//Find out the 6 digit color code after # from 16 possible characters
var ranColor = function (){
	code = 'ABCDEF0123456789'.split('');
	hex = '#';
	for(var i = 0; i<6; i++){
		hex+=code[Math.floor(Math.random() * 16)];
	}
	return hex;
};

//grids are removed after being sketched
var killGrid = function(){
	$('#kill').click(function(){

		$('.grid').css('background-color', '#0B233A');
		$('.grid').mouseover(function() {
		$(this).css({
			"background-color": "white"
		});
	});
		$('.grid').mouseleave(function(){
			$(this).fadeOut(3000).css('background-color', '#0B233A');				
		});
});
};