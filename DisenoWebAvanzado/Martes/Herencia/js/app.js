//Programación orientada a objetos

/*
//Clase persona
function Persona(edad){
	//Atributo
	this.edad = edad;
	//Método
	this.saludar = function(){ //Función anónima
		alert("Hola a todos, esto es POO en JS");
	}
}

//Objeto
var Jorge = new Persona(22);

//Accedemos al atributo edad del objeto
document.write("Tu edad es: "+Jorge.edad);

//Llmamos al método saludar
Jorge.saludar();
*/

//Otra Clase
function Clase(){
	this.color = "color";
	this.nombre = "nombre";

	this.saludar = function(){
		alert("Hola "+this.nombre+" tu color favorito es: "+this.color);
	}
}

var alguien = new Clase();
alguien.color = "Azul";
alguien.nombre = "Jorge";

document.write("Hola "+alguien.nombre+" tu color favorito es: "+alguien.color);

alguien.saludar();


