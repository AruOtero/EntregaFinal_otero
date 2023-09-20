//validar formulario 
function validarFormulario(e) {
    e.preventDefault();
    
    // Obtener valores 
    const importe = Number(importeInput.value);
    const cuotas = Number(cuotasInput.value);
    const vencimiento = Number(vencimientoInput.value);
    const nombre = nombreInput.value;

    // Ver si hay datos cargados
    if (isNaN(importe) || isNaN(cuotas) || isNaN(vencimiento)) {
        popUp("Ingrese valores válidos para calcular");
    } else {
        verCuota(importe, cuotas, vencimiento, nombre);
    }
}
// calcular cuota con los valores ingresados
async function verCuota(a, b, c, nombre) {
    try {
        // interés por nombre(busca en json)
        const interes = await interesPorNombre(nombre);
        //valida que los días de vencimiento sea igual a 30, sino paga el doble
        const valor = (c === 30) ? (a + interes) / b : (a + interes) / (b * 2);

        // Guarda el valor de la cuota en el almacenamiento local
        guardarLocal(valor);

        popUp(`El valor de la cuota es ${valor}`);
    } catch (error) {
        popUp("Error al obtener los datos del servidor");
    }
}

// obtener el interés por nombre desde un archivo JSON
async function interesPorNombre(nombre) {
    const response = await fetch('datosDatos.json');
    const data = await response.json();
    const objetoBuscado = data.find(item => item.nombre === nombre);

    if (objetoBuscado) {
        return objetoBuscado.interes;
    } else {
        throw new Error("Nombre no encontrado en el JSON");
    }
}

// guarda datos en el local
function guardarLocal(verCuota) {
    const data = {
        verCuota: verCuota,
        importe: importeInput.value,
        cuotas: cuotasInput.value,
        vencimiento: vencimientoInput.value
    };
    const jsonData = JSON.stringify(data);
    localStorage.setItem("prestamoData", jsonData);
}

function popUp(mensaje) {
    Swal.fire({
        title: mensaje,
        confirmButtonText: "Salir"
    });
}
