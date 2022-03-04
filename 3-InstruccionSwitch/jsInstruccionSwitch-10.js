/* 
Alumno: Paul Ramirez Benites
Ejercicio 9
Enviado
*/
function mostrar()
{
	let estacionIngresada;
	let Destino;
	
	estacionIngresada=document.getElementById("txtIdEstacion").value;
	Destino=document.getElementById("txtIdDestino").value;
	
	if (estacionIngresada=="Invierno")
	{
		switch (Destino) {
			case "Bariloche":
				alert("Se viaja");
				break;

			default:
				alert("No se viaja");
				break;
		}
  	} 
	else if (estacionIngresada=="Verano"){
	  	switch (Destino) {
			case "Mar del plata":
			case "Cataratas":
				alert("Se viaja");
				break;
			default:
				alert("No se viaja");
				break;
		  }
	}
	else if (estacionIngresada=="Otoño"){
		switch (Destino) {
			case "Bariloche":
			case "Mar del plata":
		    case "Cataratas":
			case "Cordoba":
			  alert("Se viaja");
			  break;
		}
  }
  else{
	switch (Destino) {
		case "Bariloche":
			alert("No se viaja");
			break;
		default:
		case "Mar del plata":
		case "Cataratas":
		case"Cordoba":
		  alert("Se viaja");
		  break;
	}
 }
    	
	//Otra forma de hacer que hizo el profe
	/*switch (estacionIngresada) 

	{	
	 case"Invierno":
		if( Destino=="Bariloche"){
			alert("Se viaja");
	         }
		else{
		 	alert("No se viaja");
			 }
	 break;

	 case"Verano":
		if( Destino=="Mar del plata" || Destino=="Cataratas"){
			alert("Se viaja");
			
	         }
		else{
			alert("No se viaja");
			 }
	 break;
	case"Otoño":
		if( Destino=="Mar del plata" || Destino=="Cataratas"  || Destino=="Cordoba" || Destino=="Bariloche"){
		alert("Se viaja");
		 }
	 break;
	 
	 case "Primavera":
		if( Destino=="Bariloche"){
			alert("No se viaja");
			
	         }
		else{
			alert("Se viaja");
			 }
	 break;
    }*/
}