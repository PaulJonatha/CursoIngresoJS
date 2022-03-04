function mostrar()
{
    let sexo;
    let nota;
    let promedioTotal;
    let contadorPromedio=0;
    let notaMasBaja=0;
    let sexoNotabaja;
    let bandera=0;
    let cantidadDeV;
    let contadorV=0;
    let mensaje;
    let sumarNota=0;
    let banderaNota=0

    //nota=prompt(parseFloat("Ingrese la nota del alumno: "));
    //sexo=prompt("Ingrese el sexo del alumno:");

    for(let i=0; i<3; i++ )
    {
        nota=parseFloat(prompt("Ingrese la nota del alumno de (1 a 10): "));
        while(nota<0  || nota>10 || isNaN(nota))
        {
            nota=parseFloat(prompt("Error, Ingrese la nota del alumno de (1 a 10): "));
        }

        sexo=prompt("Ingrese el sexo del alumno (m o f):");
        while (sexo !="m" && sexo!="f") 
        {
            sexo=prompt("Error, Ingrese el sexo del alumno (m o F):");
        }
        if(sexo=="m")
        {
            contadorV++;
        }
        if(notaMasBaja>nota || bandera==0 )//Arreglar error nota mas baja
        {
            sexoNotabaja=sexo;
            notaMasBaja=nota;
            console.log(notaMasBaja)
            bandera=1;
            mensaje="La nota mas baja es : "+notaMasBaja+" y el sexo: "+sexoNotabaja;
            alert(mensaje);
        }
        sumarNota=nota+sumarNota;
        console.log(sumarNota);
        contadorPromedio++;
        console.log(contadorPromedio);
        
    }
    
    promedioTotal=sumarNota/contadorPromedio;
    console.log(promedioTotal);
    mensaje="El promedio de las notas totales es: " + promedioTotal;
    alert(mensaje);


    if(nota>=6)
    {
        cantidadDeV=contadorV
        mensaje="La cantidad de varones que aprobaron fueron: "+cantidadDeV+ " con la nota mas de 6 " + sumarNota;
    }

    alert(mensaje);
}
/*    switch (nota) {
        case 0<6:
                    sexoNotabaja=sexo;
        notaMasBaja=nota;
        bandera=1;
        mensaje="La nota mas baja es : "+notaMasBaja+" y el sexo: "+sexoNotabaja;
            break;
    
        case 6>=10:
            cantidadDeV=contadorV
        mensaje="La cantidad de varones que aprobaron fueron: "+cantidadDeV+ " con la nota mas de 6 " + sumarNota;
            break;
    }*/