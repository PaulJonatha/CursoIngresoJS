/*
Alumno: Paul Ramirez Benites
Tp 3
3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
    let Fahrenheit;
    let Centigrados;
    let temperaturaC;

    Fahrenheit=parseInt(document.getElementById("txtIdTemperatura").value);

	Centigrados=((Fahrenheit-32)/1.8);
    temperaturaC=Fahrenheit+" Fahrenheit son "+Centigrados+" Centígrados";
    alert(temperaturaC);

}

function CentigradosFahrenheit () 
{
    let Fahrenheit;
    let Centigrados;
    let temperaturaF;

    Centigrados=parseInt(document.getElementById("txtIdTemperatura").value);

	Fahrenheit=((Centigrados*1.8)+32);
    temperaturaF=Centigrados+" Centígrados son "+Fahrenheit+" Fahrenheit";
    alert(temperaturaF);
	
}
