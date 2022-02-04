/* 
Alumno :Paul Ramirez Benites
Ejercicio 4 
Enviado
Debemos lograr tomar un dato por 'PROMPT' 
y lo muestro por 'ID' al presionar el botón 'mostrar'
*/

function mostrar()
{
	//Declaro una variable dato

	let Dato;

     Dato = prompt("Ingrese un dato");
     
    // Copio el dato que tengo guardo en la variable dato dentro en la caja de texto
    document.getElementById("txtIdNombre").value = Dato;

	
}

