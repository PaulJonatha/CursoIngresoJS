function mostrar()
{
    let edad;
	let Estado;

	edad=parseInt(document.getElementById("txtIdEdad").value);
	Estado=document.getElementById("estadoCivil").value;
	if(Estado=="Soltero" && edad>=18)
	{
		alert("Es soltero y no es menor");
	}
	/*else if(Estado=="Soltero" && edad>=18)
	{
		alert("Es soltero y no es menor");
	}*/
	


}//FIN DE LA FUNCIÓN