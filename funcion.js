 function pedirCuotas (){
    cantidadCuotas = Number(prompt("Seleccione la cantidad de cuotas \n 1- 6 cuotas \n 2- 12 cuotas \n 3- 24 cuotas"));
    while (cantidadCuotas != 1 && cantidadCuotas != 2 && cantidadCuotas != 3){
        cantidadCuotas= Number(prompt("Seleccione una opción correcta: \n 1- 6 cuotas \n 2- 12 cuotas \n 3- 24 cuotas "));
    };
    return(cantidadCuotas);
    };

function pedirVencimiento(){
    diasVencimiento = Number(prompt("Desea que el vencimiento sea en \n 1- 30 días \n 2- 60 días"));
    while (diasVencimiento != 1 && diasVencimiento != 2){
    diasVencimiento= Number(prompt("Seleccione una opción correcta: \n 1- 30 días \n 2- 60 días"));
    };
    return(diasVencimiento);
};

function error(){
    alert("Seleccione una opción válida");
    pedirCuotas();
} 