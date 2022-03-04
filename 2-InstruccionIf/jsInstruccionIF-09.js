/*Alumno :Paul Ramirez Benites
Ejercicio 9
enviado
//Genero el número RANDOM entre 1 y 10 
*/
function mostrar()
{
	/*
	let numero= Math.round(Math.random()*10);
     

    numero="Numero random de 1 a 10 : "+numero;
    alert(numero);
	*/

    let numero;
	let maximo= 10;
	let minimo= 1;

	numero= Math.round(Math.random()*(maximo-minimo)+minimo);
	
	alert(numero);

	

}//FIN DE LA FUNCIÓN