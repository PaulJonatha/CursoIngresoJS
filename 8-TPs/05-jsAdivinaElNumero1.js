/*
Sin terminar

Al comenzar el juego generamos un número 
secreto del 1 al 100, en la pantalla del juego
 dispondremos de un cuadro de texto para ingresar
  un número y un botón “Verificar”, si el número 
  ingresado es el mismo que el número secreto se dará 
  por terminado el juego con un mensaje similar a este: 
“Usted es un ganador!!! y en solo X intentos”.
de no ser igual se debe informar si “falta…”  para llegar al número secreto  o si “se pasó…”  del número secreto.
*/


function comenzar()
{
  let numeroSecreto; 
  let contadorIntentos=0;
 
  let numero;
  let maximo=2;
  let minimo=1

	//Genero el número RANDOM entre 1 y 100
  numero=Math.round(Math.random()*(maximo-minimo)+minimo);

  numeroSecreto=parseInt(document.getElementById("txtIdNumero").value);
  contadorIntentos=parseInt(document.getElementById("txtIdIntentos").value);
  //alert (numero);
  switch (numeroSecreto) {
    case numeroSecreto==numero:
      alert("Usted es un ganador!!! y en solo "+contadorIntentos+ " intestos");
     document.getElementById("txtIdNumero").value=contadorIntentos;
      break;
  
    default:
      break;
  }
		
	

}

function verificar()
{
  let numeroSecreto; 
  let contadorIntentos;
  //const INTENTOS=0;
 
  let numero;
  let maximo=2;
  let minimo=1

	//Genero el número RANDOM entre 1 y 100
  numero=Math.round(Math.random()*(maximo-minimo)+minimo);

  numeroSecreto=parseInt(document.getElementById("txtIdNumero").value);
 
  contadorIntentos=parseInt(document.getElementById("txtIdIntentos").value);
  if (contadorIntentos){
      contadorIntentos++;
  }
   //alert (numero);
  if (numeroSecreto==numero){   
      
     alert("Usted es un ganador!!! y en solo "+contadorIntentos+ " intentos");
    
      document.getElementById("txtIdIntentos").value=parseInt(contadorIntentos);


  }
  //contadorIntentos=INTENTOS+1;
  
}