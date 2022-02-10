/*
Alumno: Paul Ramirez

3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
    let Fahrenheit;
    let Centígrados;
    let temperaturaC;

    Fahrenheit=parseInt(document.getElementById("txtIdTemperatura").value);

	Centígrados=((Fahrenheit-32)/1.8);
    temperaturaC=Fahrenheit+" Fahrenheit son "+Centígrados+" Centígrados";
    alert(temperaturaC);

}

function CentigradosFahrenheit () 
{
    let Fahrenheit;
    let Centígrados;
    let temperaturaF;

    Centígrados=parseInt(document.getElementById("txtIdTemperatura").value);

	Fahrenheit=((Centígrados*1.8)+32);
    temperaturaF=Centígrados+" Centígrados son "+Fahrenheit+" Fahrenheit";
    alert(temperaturaF);
	
}
