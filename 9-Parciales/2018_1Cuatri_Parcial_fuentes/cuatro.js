/* 
Paul Ramirez Benites
*/
function mostrar()
{ 
    let sumar;
    let restar;
    let numero1;
    let numero2;
    let mensaje;

    numero1 = parseFloat(prompt("Ingresa numero 1:"));
    numero2 = parseFloat(prompt("Ingresa numero 2:"));

    if(numero1==numero2)
    {
        mensaje="Los dos numeros son iguales : "+ numero1 +", "+numero2;
        alert(mensaje);
    }
    else if (numero1> numero2) 
    {
        restar=numero1-numero2
        alert(restar);
    }
    else
    {
        sumar=numero2+numero1;
        alert(sumar);
        if (sumar>10)
        {
            mensaje="La suma es  : "+sumar+" y supero el 10 ";
            alert(mensaje);

        }

    }

}
