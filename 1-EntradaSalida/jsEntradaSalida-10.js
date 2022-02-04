/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	let sueldo;
	let aumento=0.25;
	let resultado;
 
	sueldo= parseInt(document.getElementById("txtIdImporte").value);
 
	 resultado=(sueldo-(sueldo*aumento));
	 
 
   document.getElementById("txtIdResultado").value = resultado;
	 
}
