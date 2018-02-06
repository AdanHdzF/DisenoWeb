//Funciones
function suma(x,y){
	var resul;
	resul = x+y;
	return resul;
}

function resta(x,y){
	var resul;
	resul = x-y;
	return resul;
}

function mul(x,y){
	var resul;
	resul = x*y;
	return resul;
}

function div(x,y){
	var resul;
	if(y == 0){
		alert("No se puede dividir entre cero");
	}
	else{
		resul = x/y;
		return resul;
	}
}

//Mandar a llamar a la función
opcion=prompt("Elije una opción: \n1)Suma \n2)Resta \n3)Multiplicación \n4)División");
x = Number(prompt("Imgresa el valor de x: "));
y = Number(prompt("Imgresa el valor de y: "));
var resultado;

if(opcion == 1){
	alert("La suma de X y Y es: "+suma(x,y));
}
else if(opcion == 2){
	alert("La resta de X y Y es: "+resta(x,y));
}
else if(opcion == 3){
	alert("La multiplicación de X y Y es: "+mul(x,y));
}
else if(opcion == 4){
	alert("La división de X y Y es: "+div(x,y));
}
else{
	alert("Opción no válida...");
}
