/* 
Alumno: Paul Ramirez Benites
Ejercicio 9
Enviado
*/
function mostrar()
{
	let estacionIngresada;
	let Destino;
	let Viaje=15000;
	let aumento10=10; //Aumento de 10%
	let aumento20=20; //Aumento de 20%
	let descuento10=10; //Descuento de 10%	
	let descuento20=20;  //Descuento de 20%
	let precioFinal;

	aumento20=((Viaje*aumento20)/100);
	aumento10=((Viaje*aumento10)/100);
	descuento10=((Viaje*descuento10)/100);
	descuento20=((Viaje*descuento20)/100);

	estacionIngresada=document.getElementById("txtIdEstacion").value;
	Destino=document.getElementById("txtIdDestino").value;


	if(estacionIngresada=="Invierno"){
	switch (Destino) {
		case "Bariloche":
			//Aumento de 20%
			precioFinal=(Viaje+aumento20);
			alert("El viaje costaria "+precioFinal+"$");
			break;
		case"Cordoba":
		case "Cataratas":
			//Descuento de 10%
		 precioFinal=(Viaje-descuento10);
		 alert("El viaje costaria "+precioFinal+"$");
			break;
		case "Mar del plata":
			//Descuento de 20%
			precioFinal=(Viaje-descuento20);
			alert("El viaje costaria "+precioFinal+"$");
		break;
		 }
	 }
	 else if(estacionIngresada=="Verano")
	 {
		switch (Destino) 
		{
			case "Bariloche":
				
				precioFinal=(Viaje-descuento20);
				alert("El viaje costaria "+precioFinal+"$");
				break;
			case "Cordoba":
			case "Cataratas":
			
				precioFinal=(Viaje+aumento10);
				alert("El viaje costaria "+precioFinal+"$");
				break;
			case "Mar del plata":
				
				precioFinal=(Viaje+aumento20);
				alert("El viaje costaria "+precioFinal+"$");
			break;
	 	}
	 }
	 else
	 {
		switch (Destino) 
		{
			case "Bariloche":
				
				precioFinal=(Viaje+aumento10);
				alert("El viaje costaria "+precioFinal+"$");
				break;
			case "Cordoba":
				alert("El viaje costaria "+Viaje+"$");
				break;
			case "Cataratas":
			
				precioFinal=(Viaje+aumento10);
				alert("El viaje costaria "+precioFinal+"$");
				break;
			case "Mar del plata":
				
				precioFinal=(Viaje+aumento10);
				alert("El viaje costaria "+precioFinal+"$");
			break;
	 	}
	 }

	

}//FIN DE LA FUNCIÓN