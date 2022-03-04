
function mostrar()
{
	let producto;
	let precio;
	let cantidadUnidades;
	let marca;
	let fabricante;
	///-----------
	let jabonMascaro;
	let acumuladorJabon=0;
	let fabricanteJabon;
	let banderaJabon=0;
	//let acumuladorJabon=0;
	let acumuladorAlcohol=0;
	let acumuladorBarbijo=0;
	let acumuladorPrecioBarbijo=0
	let cantidadAlcohol=0;
	let cantidadBarbijo=0;
	let cantidadJabon=0;
	let mensaje;
	let promedioPorCompra;


	for(let i=0; i<2; i++)
	{
		producto=prompt("Ingrese 5 productos, (validar barbijo , jabón o alcohol)");
		while (producto!="barbijo"&&producto!="jabon"&&producto!="alcohol") 
		{
			producto=prompt("Erorr, Reingrese 5 productos, (validar barbijo , jabón o alcohol)");
		}

		precio=parseFloat(prompt("Ingrese el precio entre (100 y 300)$"));
	
		while (precio<100 || precio>300|| isNaN(precio)==true)
		{
			precio=parseFloat(prompt("Error, Reingrese el precio entre (100 y 300)$"));
		}
		cantidadUnidades=parseFloat(prompt("Ingrese la cantidad unidades hasta 1000 unidades"));
	
		while (cantidadUnidades<1 || cantidadUnidades>1000|| isNaN(cantidadUnidades)==true)
		{
			cantidadUnidades=parseFloat(prompt("Error, Reingrese el cantidadUnidades entre (100 y 300)$"));
		}
		fabricante=prompt("Ingrese el nombre de fabricante");
		while (isNaN(fabricante)==false) 
		{
			fabricante=prompt("Error, Reingrese el nombre de fabricante");
		}
		marca=prompt("Ingrese el nombre de la marca");
		while (isNaN(marca)==false) 
		{
			marca=prompt("Error, Reingrese el nombre de la marca");
		}

		switch (producto) {
			case "alcohol":
				acumuladorAlcohol+=cantidadUnidades;
				cantidadAlcohol++;
				break;
		
			case "barbijo":
				acumuladorBarbijo+=cantidadUnidades;
				acumuladorPrecioBarbijo+=precio;
				cantidadBarbijo++;

				
				break;
		
			case "jabon":

				acumuladorJabon+=cantidadUnidades;
				cantidadAlcohol++;

				if (jabonMascaro<precio|| banderaJabon==0) 
				{
					jabonMascaro=precio;
					acumuladorJabon=cantidadUnidades;
					fabricanteJabon=fabricante;
					banderaJabon=1;
				}
				
				break;	
		}
	}//FOR

	if(acumuladorAlcohol>acumuladorBarbijo && acumuladorAlcohol>acumuladorJabon)
	{
		mensaje="Alchol con mas unidades";
		promedioPorCompra=acumuladorAlcohol/cantidadAlcohol;

	}
	else if (acumuladorBarbijo>acumuladorJabon && acumuladorBarbijo>acumuladorAlcohol) 
	{
		mensaje="barbijo con mas unidades"
		promedioPorCompra=acumuladorBarbijo/cantidadBarbijo;
	}
	else
	{
		mensaje="jabon con mas unidades"
		promedioPorCompra=acumuladorJabon/cantidadJabon;
	}
	alert(jabonMascaro +" " + acumuladorJabon+" " + fabricanteJabon);
	alert(mensaje);
	alert(acumuladorBarbijo);
	alert(promedioPorCompra);
}
