/*
Paul Ramirez Benites
Enviado
*/
function mostrar()
{
	let numero;
	let cantidadNumeroPar=0;

	numero=parseInt(prompt("Ingrese un numero"));
	
	for (let i=1; i<=numero; i++ )
	{
		if(i%2 ==0 )
		{	
			alert("Numero pares son: "+i);
			cantidadNumeroPar++;
		}
		
	}
	
	alert("Cantidad de numero pares encontraron son: "+cantidadNumeroPar);

}//FIN DE LA FUNCIÓN