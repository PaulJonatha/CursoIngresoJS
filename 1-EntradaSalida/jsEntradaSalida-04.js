/* 
Alumno :Paul Ramirez Benites
Ejercicio 4 
Debemos lograr tomar un dato por 'PROMPT' 
y lo muestro por 'ID' al presionar el botón 'mostrar'
*/

function mostrar()
{
	//reservo espacio a la memoria para guardar un dato
	let Dato;

    //guardo en la variable el dato en el texto que escribio el usario en prom
     Dato = prompt("Ingrese un dato");
     
    // copio el dato que tengo guardo en la variable dato dentro en la caja de texto
    document.getElementById("txtIdNombre").value = Dato;

	
}

