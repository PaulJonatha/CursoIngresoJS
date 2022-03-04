function mostrar()
{
	let numero;
	let i;
	let contador;

	numero=parseInt(prompt("Ingrese un numero"));

	for(i=0; i<=numero; 1++)	
	{
		if(numero%i==0)
		{
			contador=contador+1;
		}
	}
	if(contador%2==0)
	{
		alert("El numero : "+numero+" es numero primo");
	}
	else
	{
		alert("El numero: "+numero +" no es numero primo");
	}
}//FIN DE LA FUNCIÓN