let importeSolicitado;
let cantidadCuotas;
let diasVencimiento;
let valorCuotas;
let cotizar; 
let menuPrin;
let impuestos;


alert("entro");
do{
    importeSolicitado = prompt("Que importe desea simular de préstamo?");
    console.log(importeSolicitado);
    typeof(importeSolicitado);
    impuestos= Number(importeSolicitado*2);
    console.log (impuestos);
    cantidadCuotas = pedirCuotas();
    console.log(cantidadCuotas);
    typeof(cantidadCuotas);
    diasVencimiento= pedirVencimiento();
    console.log(diasVencimiento); 
    switch (cantidadCuotas){
    case 1:
        if(diasVencimiento == 1){
            valorCuotas=  (((Number(importeSolicitado) + Number(impuestos))/6));
            console.log("El valor de la cuota es " + valorCuotas);
        }
        else{
            Number(valorCuotas) =  (((Number(importeSolicitado) + Number(impuestos))/6)*2);
            console.log("El valor de la cuota es " + valorCuotas);
        }
        break;
    case 2:
        if(diasVencimiento == 1){
            Number(valorCuotas) =  (((Number(importeSolicitado) + Number(impuestos))/12));
            console.log("El valor de la cuota es " + valorCuotas);
        }
        else{
            Number(valorCuotas) =  (((Number(importeSolicitado) + Number(impuestos))/12)*2);
            console.log("El valor de la cuota es " + valorCuotas);
            }
        break;
    case 3:
        if(diasVencimiento == 1){
            Number(valorCuotas) =  (((Number(importeSolicitado) + Number(impuestos))/12));
            console.log("El valor de la cuota es " + valorCuotas);
        }
        else{
            Number(valorCuotas) =  (((Number(importeSolicitado) + Number(impuestos))/24)*2);
            console.log("El valor de la cuota es " + valorCuotas);
        }
        break;
    }
    alert("el valor de la cuota es " + valorCuotas);
    simular= prompt("1- Seguir simulando \n 2-Salir");
} while(simular != 2);
