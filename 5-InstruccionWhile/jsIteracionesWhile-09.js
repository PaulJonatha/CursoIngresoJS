/*
Enviado
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.
Faltar enviar
Buscar maximo y minimo
	let numero;										let numero;
	let maximo;										let minimo;
	numero =prompt..								numero =prompt..
	maxiom= numero;									minimo= numero;
	respuest("ingesa otro")							respuest("ingesa otro")					
	while (respuesta==si){ 							while (respuesta==si){ 
		numero promt()									numero promt()
		if(numero>maximo)                      			if(numero<minimo)
		{												{
			maximo=numero									minimo=numero
		}												}
		ingresa otro numero?..							ingresa otro numero?..
	}													}
	alert("el numero maximo ingresado es= "+ maximo)	alert("el numero maximo ingresado es= "+ maximo)
*/
function mostrar()
{	// declarar variables
	let numeroIngresado;
	let numeroMaximo;
	let numeroMinimo;
	let respuesta="si";

	let bandera=0;

	/*numeroIngresado=parseInt(prompt("Ingrese un numero"));
	while(isNaN(numeroIngresado)==true)
	{
		numeroIngresado=parseInt(prompt("Error, Ingrese un NUMERO: "));
	}
	numeroMaximo=numeroIngresado;
	numeroMinimo=numeroIngresado;
	respuesta=prompt("Desea continuar ingresando otro numero? escriba si o no");
	
	while(respuesta=="si")
	{
		numeroIngresado=parseInt(prompt("Ingrese otro numero"));
		while(isNaN(numeroIngresado)==true)
		{
			numeroIngresado=parseInt(prompt("Error, Ingrese un NUMERO: "));
		}
		if(numeroIngresado>numeroMaximo)
		{
			numeroMaximo=numeroIngresado;
		}
		else if(numeroIngresado<numeroMinimo)
		{
			numeroMinimo=numeroIngresado;
		}
		respuesta=prompt("Desea continuar ingresando otro numero? escriba si o no");
	}*/
	do {
		numeroIngresado=parseInt(prompt("Ingrese otro numero"));
	
		while (isNaN(numeroIngresado)==true) {
			numeroIngresado=parseInt(prompt("Ingrese solo NUMEROS: "))
		
		}
		if (bandera==0 || numeroIngresado>numeroMaximo) 
		{
			numeroMaximo=numeroIngresado;
		}
		if(bandera==0 || numeroIngresado<numeroMinimo)
		{
			numeroMinimo= numeroIngresado;
			bandera=1;
		}
		respuesta=prompt("Queres ingresar otro numero? si o no");

	} while (respuesta=="si");


	document.getElementById("txtIdMaximo").value =numeroMaximo;
	document.getElementById("txtIdMinimo").value =numeroMinimo;










}//FIN DE LA FUNCIÓN