/* 
Paul Ramirez Benites
*/
function mostrar()
{
    let Planetas;
    let mensaje;

    Planetas=prompt("Ingrese un planeta del sistema solar");
    
    switch (Planetas) {
        case "tierra":
            mensaje="Aca vivimos."
            alert(mensaje);
            break;
        case"mercurio":
        case "venus":
            mensaje="Aca hace mas calor."
            alert(mensaje);
            break;
        case"marte":
        case"jupiter":
        case"saturno":
        case"urano":
        case"neptuno":
        case"pluton":   
            mensaje="Aca hace mas frio."
            alert(mensaje);
            break;
        default:
            mensaje= Planetas+ " no es un planeta.";
            alert(mensaje);
            break;
    }
}
