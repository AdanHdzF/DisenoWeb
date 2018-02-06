/*
Introduccion a javascript
*/

var x=10;
var y=2;
//console.log imprime en la consola del navegador
console.log("Operadores Aritmeticos");
console.log("la suma de x y y es: ",x+y);
console.log("la resta de x y y es: ",x-y);
console.log("la multiplicacion de x y y es: ",x*y);
console.log("la division de x y y es: ",x/y);
console.log("El modulo de x/y es: ",x%y);

document.write("Operadores de comparacion","<br>");
document.write(1==true,"<br>"); //true
document.write(1!=true,"<br>");//false
document.write(0===false,"<br>");//false
document.write(true===true,"<br>");//true
document.write(5>3,"<br>"); //true
document.write(5>=5,"<br>"); //true
document.write(1<10,"<br>"); //true
document.write(2<=2,"<br> <br>");//true

document.write("Operadores lógicos","<br>");
document.write(1==true && 0==false,"<br>");
document.write(1==true || 0==false,"<br>");
document.write(!true,"<br>");

//operador ternario ? is not a number
document.write(!isNaN(2)?"si es un numero":"no es un numero");

//cuadros de mensajes mas comunes
//no podemos asignar el valor de un alert
//respuesta=alert("Hola mundo!!");
/*
respuesta=confirm("quieres proporcionar tu ubicacion? ");
document.write("<br>",respuesta);

edad=prompt("ingresa tu edad: ","default");
respues=Number(edad);
if (respues>=18 && respues<=59) {
	alert("pasale, eres mayor de edad");
}else if (respues>=60){
	alert("Estas ruco")

}else{
	alert("Estas chavo, chavo");
}

document.write("<br>",respues);
*/

peso=prompt("Ingresa tu peso: ", "default");
estatura=prompt("Ingresa tu estatura: ","default");

imc=peso/(estatura*estatura);

document.write(imc);

if (imc<18.5){
	alert("Peso bajo");
}else if (imc>=18.5 && imc<=24.9) {
	alert("peso normal");
}else if (imc>=25 && imc<=29.9){
	alert("Sobrepeso");
}

/*Arreglos*/

var arreglo3=[25,89,13,100,2]
var arreglo1=[8,6,4,2,0]
var arreglo2=[]

arreglo2.push("dos");
arreglo2.push("cuatro");
arreglo2.push("uno");
arreglo2.push("tres");

console.log(arreglo1);
console.log(arreglo2);

//Impresión personalizada, método join
console.log(arreglo1.join(","));
console.log(arreglo2.join(","));

//Eliminar datos de un arreglo
//Método pop quita el último elemento del arreglo
console.log(arreglo1.pop());
console.log(arreglo2.pop());
//Imprimimos arreglos
console.log(arreglo1);
console.log(arreglo2);


console.log(arreglo1.push(10));
//Longitud del arreglo
console.log("Tamaño del arreglo 1: ",arreglo1.length);
console.log("Tamaño del arreglo 2: ",arreglo2.length);

//Ordenar datos por el método sort
var ordenados1 = arreglo1.sort();
console.log("Datos ordenados: ",ordenados1);

var ordenados2 = arreglo2.sort();
console.log("Datos ordenados: ",ordenados2)

var ordenados3 = arreglo3.sort();
console.log("Datos ordenados: ",ordenados3);


//Me voltea los datos, es decir del último al primero
var reversa = ordenados1.reverse();
console.log("De mayor a menor: ", reversa);

//Accediendo a cada elemento de un arreglo
console.log(arreglo1);
console.log(arreglo2);

console.log("arreglo1[0]: ",arreglo1[0]);
console.log("arreglo2[0]: ",arreglo2[5]);


//Ciclo for
for (i = 0; i<arreglo1.length; i ++){
	document.write(arreglo1[i], "<br>");
}   

//Ciclo while
var contador = 0;

while(contador<arreglo2.length){
	console.log(arreglo2[contador]);
	contador++;
}

//Funciones
function sumar(x,y){
	var resul;
	resul = x+y;
	return resul;
}

//Mandar a llamar a la función
console.log(sumar(10,5));

