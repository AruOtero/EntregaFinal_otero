let importeSolicitado;
let cantidadCuotas;
let diasVencimiento;
let valorCuotas;
let cotizar = true; 


importeSolicitado = prompt("Que importe desea simular de préstamo?");
console.log(importeSolicitado);

let impuestos = Number(importeSolicitado*2);
console.log (impuestos);

cantidadCuotas = pedirCuotas();
console.log(cantidadCuotas);

diasVencimiento= pedirVencimiento();
console.log(diasVencimiento);

switch (cantidadCuotas){
    case 1:
        if(diasVencimiento == 1){
            valorCuotas =  (((Number(importeSolicitado) + Number(impuestos))/6));
            console.log("El valor de la cuota es " + valorCuotas);
        }
        else{
            valorCuotas =  (((Number(importeSolicitado) + Number(impuestos))/6)*2);
            console.log("El valor de la cuota es " + valorCuotas);
        }
        break;
    case 2:
        if(diasVencimiento == 1){
            valorCuotas =  (((Number(importeSolicitado) + Number(impuestos))/12));
            console.log("El valor de la cuota es " + valorCuotas);
        }
        else{
            valorCuotas =  (((Number(importeSolicitado) + Number(impuestos))/12)*2);
            console.log("El valor de la cuota es " + valorCuotas);
        }
        break;
    case 3:
        if(diasVencimiento == 1){
            valorCuotas =  (((Number(importeSolicitado) + Number(impuestos))/12));
            console.log("El valor de la cuota es " + valorCuotas);
        }
        else{
            valorCuotas =  (((Number(importeSolicitado) + Number(impuestos))/24)*2);
            console.log("El valor de la cuota es " + valorCuotas);
        }
        break;
    
    default: 
        cantidadCuotas = error();
        
        break;
    }
