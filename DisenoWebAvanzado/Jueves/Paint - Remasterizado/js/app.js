var color = $(".seleccionado").css("background-color");

var $canvas = $("canvas");
var context = $canvas[0].getContext("2d");

//Para el canvas
var lastEvent;
var mouseDown = false;

//Selector de nuestros colores
$(".controles").on("click", "li", function(){
	//Elimina el selector
	$(this).siblings().removeClass("seleccionado");
	//Agregar selector a nuevo color
	$(this).addClass("seleccionado");
	//Lo guardamos en cache (lápiz)
	color = $(this).css("background-color");
});

//Cuando "Nuevo color" es presionado
$("#revelarColor").click(function(){
	//Muestra el menú
	changeColor();
	$("#colorSeleccionado").toggle();
});

//Actualiza color de nuestro span (cuadro negro)
function changeColor(){
	var r = $("#red").val();
	var g = $("#green").val();
	var b = $("#blue").val();
	$("#nuevoColor").css("background-color", "rgb("+r+", "+g+", "+b+")");
}

//Cambiar o actualizar slider de colores
$("#addNewColor").click(function(){
	var $nuevoColor = $("<li></li>");
	$nuevoColor.css("background-color", $("#nuevoColor").css("background-color"));
	$(".controles ul").append($nuevoColor);
	
	$nuevoColor.click();
});

//Para el canvas
$canvas.mousedown(function(e){
	lastEvent = e;
	mouseDown = true;;
}).mousemove(function(e){
	//Dinuja las líneas
	if (mouseDown) {
		context.beginPath();
		context.moveTo(lastEvent.offsetX, lastEvent.offsetY);
		context.lineTo(e.offsetX, e.offsetY);
		context.strokeStyle = color;
		context.stroke();
		lastEvent = e;
	}
}).mouseup(function(){
	mouseDown = false;
}).mouseleave(function(){
	$canvas.mouseup();
});



