var color = $(".seleccionado").css("background-color");

var $canvas = $("canvas");
var context = $canvas[0].getContext("2d");

$(".controles").on("click","li",function(){
	$(this).siblings().removeClass("seleccionado");
	$(this).addClass("seleccionado");
	color = $(this).css("background-color");
});


//Cuando se preciona el boton: Nuevo color
$("#revelarColor").click(function(){
	changeColor();
	$("#colorSeleccionado").toggle();
});

function cambiarColor(){
	var r = $("#rojo").val();
	var g = $("#verde").val();
	var b = $("#azul").val();
	$("#nuevoColor").css("background-color","rgb("+r+", "+g+", "+b+")");
};

$("input(type=range)").change(changeColor);

$("#addNewColor").click(function(){
	var $nuevoColor = $("<li> </li>");
	$nuevoColor.css("background-color", $("#nuevoColor")).css("background-color");
	$("#.controles ul").append("#nuevoColor");
	$nuevoColor.click();
});


