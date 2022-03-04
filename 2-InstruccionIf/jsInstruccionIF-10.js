/*Alumno :Paul Ramirez Benites
Ejercicio 10
enviado
*/
function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	let numero;
	let maximo=10;
	let minimo=1

	numero=Math.round(Math.random()*(maximo-minimo)+minimo);

	if(numero>=9)
	{
		alert(numero+" EXELENTE");
	}
	 else if(numero<=8 && numero>=4)
	{
		alert(numero+" APROBO");
	}
	else
	{
		alert(numero+" Vamos, la proximas se puede");
	}



}//FIN DE LA FUNCIÓN