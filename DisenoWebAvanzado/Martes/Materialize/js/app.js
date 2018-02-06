/*
Sintaxis
$(selector).action(){
	
}

Versión resumida
$(function(){
	
})

*/


//Evento ready: espera a que toda nuestra página se cargue antes de ejecutar cualquier código jQuery
$(document).ready(function(){
	$("body").css("background","#90a4ae");
	$("span").click(function(){
		$("#card2").hide("fast");
		//Al hacer click sobre etiqueta span, lo vamos a esconder de nuestro DOM
		//hide(duracion) "slow"
	})

	//Evento doubleclick
	$("img").dblclick(function(){
		$("#card2").show("slow");
	})

	//Evento mouseenter();
	//		 mouseleaver();
	$("#mostrar").mouseenter(function(){
		$("#card2").fadeOut("slow");
		//$("#card2").fadeIn("slow");
		//$(selector).fadeIn(tiempoMiliSegundos);
	})

	//mousedown reacciona al click derecho o izquierdo del ratón
	$("span.card-title").mousedown(function(){
		$("#imagenes").slideToggle();
	})

	$(".m4 img").on("click",mostrarImagen);

	//Con this hacemos referencia al elemento que nos mandó el evento
	//.attr('atributo'): ingresamos al atributo de esa etiqueta
	function mostrarImagen(){
		var nombre = $(this).attr('alt');
		var direccion = 'img/'+nombre+'.jpg';
		$("#imagenPrincipal").attr('src',direccion);
		$("card2").show("fast");
	}

})


