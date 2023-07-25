let diasVencimiento;
let cantidadCuotas;
let importeSolicitado;
let valorCuotas;
let impuestos = 0.50;
let simular=1;
let confirma;
let i=0;
let array=[];
let nombre;
let apellido;
let email;

 
 function pedirCuotas (){
    cantidadCuotas = Number(prompt("Seleccione la cantidad de cuotas \n 1- 6 cuotas \n 2- 12 cuotas \n 3- 24 cuotas "));
    while ((cantidadCuotas>3)){
        cantidadCuotas= Number(prompt("Seleccione una opción correcta: \n 1- 6 cuotas \n 2- 12 cuotas \n 3- 24 cuotas"));
    };
        return(cantidadCuotas);
}


function pedirVencimiento(){
    diasVencimiento = Number(prompt("Desea que el vencimiento sea en \n 1- 30 días \n 2- 60 días"));
    while ((diasVencimiento >3)){
        pedirVencimiento= Number(prompt("Seleccione una opción correcta: \n 1- 30 días \n 2- 60 días") );
    };
    return(diasVencimiento);
};

function simulado (a,b,c,d,e,f) {
    this.nombre = a;
    this.apellido = b;
    this.email = c;
    this.importe = d;
    this.cuotas = e;
    this.vto = f;
};

function error(){
    alert("Seleccione una opción válida");
}; 

function ingreseNombre(){
    nombre=prompt("Por favor, ingrese su nombre:");
    return(nombre);
}

function ingreseApellido(){
    apellido=prompt("Por favor ingrese su apellido:");
    return(apellido);
}

function ingreseEmail(){
    email=prompt("Por favor ingrese su email:");
    return(email);
}