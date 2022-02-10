


function mostrar()

{
	let edad;
	
	edad=parseInt(document.getElementById("txtIdEdad").value);

     /*if(edad>=18)
	 {
		alert("Es mayor edad");	
	 }
	 else
	 {
		if (edad>=13 && edad<=17)
		{
			alert("Es adolecente");
		}
		else
		{
			if(edad<13)
	         {
		    	alert("Es menor de edad");
	         }
		}
	 }*/

	 //alternativa mas proliga
	 if(edad>=18)
	 {
		alert("Es mayor edad");	
	 }
	 else if(edad>=13 && edad<=17)
	 {
		alert("Es adolecente");
	 }
	 else if(edad<13)
	 {
	   alert("Es menor de edad");
	 }

	 


}//FIN DE LA FUNCIÓN