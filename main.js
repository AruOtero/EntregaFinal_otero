


do{
    nombre=ingreseNombre();
    apellido=ingreseApellido();
    email=ingreseEmail();
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
    
    array.push(simulador = new simulado(nombre, apellido, email, importeSolicitado, cantidadCuotas, diasVencimiento));
    console.log(simulador);
    i++;
    
}while (simular==1);


for(e=0;e<array.length;e++){
    console.log(array[e]);
} 


