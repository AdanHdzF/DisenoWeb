var texto = document.getElementById("miInput").value;

document.getElementById("boton").onclick = function(){
	texto = document.getElementById("miInput").value;
	document.getElementById("primerDiv").innerHTML = texto;
}


