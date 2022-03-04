/*
Paul Ramirez Benites
Enviado
*/
function mostrar()
{
	let numero;
	let cantidadDeDivisores=0;
	let mensaje;
	numero=parseInt(prompt("Ingrese un numero"));
	
	for (let i=1; i<=numero; i++ )
	{
		if(numero % i ==0 ) 
		{	
			cantidadDeDivisores++;
			mensaje="Los divisores de :"+numero+"\nSon: "+i;
			alert(mensaje)
		}
		
	}
	
	mensaje="Cantidad de divisores encontraron son: "+cantidadDeDivisores;
	alert(mensaje);

}//FIN DE LA FUNCIÓN