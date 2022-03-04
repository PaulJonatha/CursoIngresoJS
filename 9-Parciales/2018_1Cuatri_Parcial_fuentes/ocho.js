/*
Paul Ramirez Benites
*/
/*Realizar el algoritmo que permita ingresar 5 paises:
el continente (validar entre america , asia , europa ,africa y oceania)
el nombre del país,
cantidad de habitantes en millones entre 1 y 7000 (validar)
el nivel de pobresa entre (pobre, rico , muy rico) en europa no hay paises pobre(validar) 
la temperaruta mínima que se registra en su territorio(entre -50 y 50) 
a)La cantidad de temperaturas pares.
b)la cantidad de temperaturas impares de europa
c)El nombre del pais con menos habitantes
d)la cantidad de paises que superan los 40 grados.
e)la cantidad de paises de america que tienen menos de 0 grados .
f)el promedio de habitantes entre los paises ingresados .
g)el promedio de habitantes entre los paises que superan los 40 grados    
H) la temperatura mínima ingresada, y nombre del pais que registro esa temperatura.
i) que continente tiene mas habitantes.*/
function mostrar()
{  
    let continente;
    let pais;
    let cantidadDeHabitantes;
    let nivelDePobreza;
    let temperaturaTerritorio;

    
    for(let i=0; i<1; i++)
    {
        continente=prompt("Ingresa estos contienentes: america , asia , europa ,africa y oceania");
        while (continente !="america"&& continente !="asia"&&continente !="europa "&& continente !="africa"&& continente !="oceania"&&) {
            
            continente=prompt("Erorr,Ingresa estos contienentes: america , asia , europa ,africa y oceania");
        }
    }
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    /*
    let numero;
    let letra;
    let bandera=0;
    let numeroMaximo;
    let letraMax;
    let numeroMinimo;
    let letraMin;
    let contadorDeCeros=0;
    let acumuladorPositivos=0;
    let contadorPositivos=0;
    let acumuladorNegativos=0;
    let contadorPares=0;
    let contadorImpares=0;
    let promedio;
    let respuesta="si";
    

     while(respuesta=="si")
    {
        //Numero-----------------------------------------------------------------
        numero=parseInt(prompt("Ingrese un numero: "));
        while (numero<-100 || numero>100 || isNaN(numero)==true) 
        {
            numero=parseInt(prompt("Error, Ingrese un numero: "));   
        }
        //Letra------------------------------------------------------------------
        letra=prompt("Ingrese una letra");
        while (isNaN(letra)==false) 
        {
            letra=prompt("Error,Ingrese una letra");
        }
        //A
        if(numero%2==0) 
        {
            contadorPares++;
        }
        //B
        else 
        {
            contadorImpares++;
        }
        //C
        if(numero==0)
        {
            contadorDeCeros++;
        }
        //D
        if(numero>=0)
        {
            acumuladorPositivos=numero+acumuladorPositivos;
            contadorPositivos++;

        }
        //E
        else
        {
            acumuladorNegativos=numero+acumuladorNegativos;
        }
        if(numeroMaximo<numero || bandera==0)
        {
            numeroMaximo=numero
            letraMax=letra;
            
        }
        if(numeroMinimo>numero|| bandera==0)
        {
            numeroMinimo=numero
            letraMin=letra;
            bandera=1;
        }

        respuesta=prompt("Desea ingresar otro dato? si/no");
    }
    //promedio de los todos numeros positivos
    promedio=acumuladorPositivos/contadorPositivos;

    document.write("A.La cantidad de numero pares es: "+ contadorPares+"<br>");
    document.write("B.La cantidad de numero impares es: "+ contadorImpares+"<br>");
    document.write("C.La cantidad de de ceros es: "+ contadorDeCeros+"<br>");
    document.write("D.El promedio de todos los numero positivos es: "+ promedio+"<br>");
    document.write("E.La suema de todos los numeros negativos es: "+ acumuladorNegativos+"<br>");
    document.write("F.El maximo y letras es :"+numeroMaximo+" "+letraMax +" .Y numero minimo: "
    +numeroMinimo+" "+letraMin ) ;*/
}
