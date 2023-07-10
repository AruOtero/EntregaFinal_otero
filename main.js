let importeSolicitado;
let cantidadCuotas;
let diasVencimiento;
let valorCuotas;
let cotizar = true; 
let menuPrin;


importeSolicitado = prompt("Que importe desea simular de préstamo?");
console.log(importeSolicitado);

let impuestos = Number(importeSolicitado*2);
console.log (impuestos);

alert("Comenzar a simular");

menuPrin= prompt("1- Cuotas \n 2- Vencimiento \n 0-Salir");
if (menuPrin==1){
    cantidadCuotas = prompt("Ingrese una opción \n 1- 6 cuotas \n 2- 12 cuotas \n 3- 24 cuotas \n 4- 48 cuotas \n 0- Volver al menú principal");
    console.log(cantidadCuotas);
    while(cantidadCuotas>4){
        cantidadCuotas = prompt("Ingrese una opción válida \n 1- 6 cuotas \n 2- 12 cuotas \n 3- 24 cuotas \n 4- 48 cuotas \n 0- Volver al menú principal")
        console.log(cantidadCuotas);
    }
}
else if(menuPrin==2){
    diasVencimiento= Number(prompt("Seleccione la cantidad de días hasta la fecha de vencimiento: \n 1- 30 días \n 2- 60 días"));
    console.log(diasVencimiento);
    while(diasVencimiento>2){
        diasVencimiento = prompt("Seleccione una opción correcta: \n 1- 30 días \n 2- 60 días");
    }}
    else if(menuPrin==0){
        alert("salio");
        }
        else{
            menuPrin=("Ingrese una opción válida \n 1- Cuotas \n 2- Vencimiento 0-Salir ");
        }

if((diasVencimiento == 1 || diasVencimiento == 2)&&(cantidadCuotas != 0 && cantidadCuotas < 5)){
    cotizar=true;
}
else{
    menuPrin=prompt("Faltan ingresar datos");
}

/* cantidadCuotas = pedirCuotas();
console.log(cantidadCuotas);

diasVencimiento= pedirVencimiento();
console.log(diasVencimiento); */

/*switch (cantidadCuotas){
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
   8     }
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
 */