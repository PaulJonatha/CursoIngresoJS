/*
Paul Ramirez Benites
RISING BTL. Empresa dedicada a la toma de datos para realizar estadísticas y censos nos pide realizar una carga de datos validada e ingresada por ventanas emergentes solamente (para evitar hacking y cargas maliciosas) y luego asignarla a cuadros de textos. 
12.   Los datos requeridos son los siguientes:
A.	Edad, entre 18 y 90 años inclusive.
B.	Sexo, “M” para masculino y “F” para femenino
C.	Estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos
D.	Sueldo bruto, no menor a 8000.
E.	Número de legajo, numérico de 4 cifras, sin ceros a la izquierda.
F.	Nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.
 */
function ComenzarIngreso () 
{
 	//Edad y sexo
 	let edadIngresada;
 	let sexoIngresado;
	 //estado civil
 	let estadoCivilIngresado;
	//Variables
	let sueldoBruto;
	let legajo;
	let Nacionalidad;
	let i=0

	//while(i<=0)
	//{	
		//Edad------------------------------------------------------------------------
		edadIngresada=parseInt(prompt("Ingrese su edad entre 18 y 90 años: "));

		while(edadIngresada<18 || edadIngresada>90 || isNaN(edadIngresada)) 
		{
			edadIngresada=parseInt(prompt("ERROR, Ingrese un numero de su edad entre 18 y 90 años: "));	
		}

		//Sexo-------------------------------------------------------------------------
		sexoIngresado=prompt("Ingrese: f o m");

		while (sexoIngresado!="f"&& sexoIngresado!="m") 
		{
			sexoIngresado=prompt(" Error, ingrese f o m");
			
		}
		//Estado civil------------------------------------------------------------------------------
		estadoCivilIngresado=prompt("Escriba su estado civil de esta forma: Soltero, Casado, Divorciado o Viudo ");
		
		while(estadoCivilIngresado!="Soltero" && estadoCivilIngresado!="Casado"&& estadoCivilIngresado!="Divorciado"&&estadoCivilIngresado!="Viudo")
		{
			estadoCivilIngresado=prompt("Error, Escriba su estado civil de esta forma: Soltero, Casado, Divorciado o Viudo ");
		}
		switch (estadoCivilIngresado) {
			case "Soltero":
				document.getElementById("txtIdEstadoCivil").value=estadoCivilIngresado;
				break;
			case "Casado":
				document.getElementById("txtIdEstadoCivil").value=estadoCivilIngresado;
				break;
			case "Divorciado":
				document.getElementById("txtIdEstadoCivil").value=estadoCivilIngresado;
				break;	
			case"Viudo":
				document.getElementById("txtIdEstadoCivil").value=estadoCivilIngresado;
				break;
		}
		//Sueldo bruto---------------------------------------------------------------------
		sueldoBruto=parseInt(prompt("Ingrese su sueldo bruto, no menor a 8000$: "));
		while(sueldoBruto < 8000 ||  isNaN(sueldoBruto) )
		{
			sueldoBruto=prompt("Erorr,ingrese su sueldo bruto, no menor de 8000$: ");
			console.log(sueldoBruto);
		}

		//Numero de legajo (No lo entendi)
		//Paul Ramirez: TP12: para legajo: 0100(eso es un cero a la izquierda)
		//, otra cosa, estado civil esta puesto del 1 al 4....asiq hay que validar eso. 


		//Nacionalidad
		Nacionalidad=prompt("Ingrese su  nacionalidad, con “A” para argentinos, con “E” para extranjeros, con “N” para nacionalizados.");
		while(Nacionalidad!="A" && Nacionalidad!="E" && Nacionalidad!="N")
		{
			Nacionalidad=prompt("Error, ingrese su  nacionalidad, con “A” para argentinos, con “E” para extranjeros, con “N” para nacionalizados.");
		}
		switch (Nacionalidad) {
			case "A":
				Nacionalidad="Argentino"
				document.getElementById("txtIdNacionalidad").value=Nacionalidad;
				break;
		
			case "E":
				Nacionalidad="Extranjero"
				document.getElementById("txtIdNacionalidad").value=Nacionalidad;
				break;
			case "N":
				Nacionalidad="Nacionalizado"
				document.getElementById("txtIdNacionalidad").value=Nacionalidad;
				break;	
		}

	//	i++;
	//}
	document.getElementById("txtIdEdad").value =edadIngresada;
	document.getElementById("txtIdSexo").value=sexoIngresado;
	document.getElementById("txtIdSueldo").value=sueldoBruto;
}
