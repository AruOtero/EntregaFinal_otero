let verCuota;
document.getElementById("formu");
addEventListener("submit",validarFormulario);    

function validarFormulario (e){
    let importe = Number(document.getElementById("importe").value);
    let cuotas = Number(document.getElementById("cuotas").value); 
    let vencimiento = Number(document.getElementById("vencimiento").value); 
    e.preventDefault();
    console.log("el importe es"+importe);
    console.log(typeof(importe));
    console.log("las cuotas son" + cuotas);    
    console.log(typeof(cuotas));
    console.log("el vencimiento es en" + vencimiento + "dias");
    console.log(typeof(vencimiento));
    if(vencimiento === 30){
        verCuota= importe/Number(cuotas);}
        else{
            verCuota= importe/Number(cuotas)*2;
        };
        console.log(verCuota);  
};





addEventListener('submit', () =>{
    
    Swal.fire({
        title: 'el valor de la cuota es '+ verCuota,
        confirmButtonText: 'Salir'
    })

})





