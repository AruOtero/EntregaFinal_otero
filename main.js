let diasVencimiento;
let cantidadCuotas;
let importeSolicitado;
let valorCuotas;
let impuestos = 0.50;
let simular=1;
let confirma;

do{
    importeSolicitado=(prompt("Ingrese el importe a solicitar"));
    if(importeSolicitado > 0)
        {   cantidadCuotas=pedirCuotas();
            confirma= prompt("Confirma la cantidad de cuotas? \n 1- SI \n 2- NO");
            while(confirma==2){
                cantidadCuotas= pedirCuotas();
                confirma=prompt("Confirma la cantidad de cuotas? \n 1-SI \n 2- NO");
            }
            diasVencimiento =pedirVencimiento();
            console.log(diasVencimiento);
            switch(cantidadCuotas){
                case 1:
                    if(diasVencimiento == 1){
                        valorCuotas=  (((Number(importeSolicitado) + Number(impuestos))/6));
                        console.log("El valor de la cuota es " + valorCuotas);
                    }
                    else{
                        valorCuotas=  (((Number(importeSolicitado) + Number(impuestos))/6)*2);
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
                        valorCuotas=  (((Number(importeSolicitado) + Number(impuestos))/24)*2);
                        console.log("El valor de la cuota es " + valorCuotas);
                    }
                    break;
                    }
                alert("El valor de la cuota es: "+valorCuotas);
                simular=prompt("Seleccione la opción requerida \n 1 - Simular otro importe \n 2- Salir");
        }
    else{
        simular==2;
    }
}while (simular==1);