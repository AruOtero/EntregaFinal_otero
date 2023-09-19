let verCuota;

document.getElementById("formu").addEventListener("submit", validarFormulario);

function validarFormulario(e) {
  e.preventDefault();
  let importe = Number(document.getElementById("importe").value);
  let cuotas = Number(document.getElementById("cuotas").value);
  let vencimiento = Number(document.getElementById("vencimiento").value);


  fetch('https://my.api.mockaroo.com/users.json')
    .then(response => response.json())
    .then(data => {
      const interes = data.interes;

      if (vencimiento === 30) {
        verCuota = (importe + interes) / cuotas;
      } else {
        verCuota = (importe + interes) / cuotas * 2;
      }
      console.log(verCuota);

      // Guardar verCuota en localStorage
      localStorage.setItem("verCuota", verCuota);

      Swal.fire({
        title: "El valor de la cuota es " + verCuota,
        confirmButtonText: "Salir"
      });
    })
    .catch(error => {
      console.error("Error al obtener datos del servidor:", error);
      // Puedes manejar el error aquí, por ejemplo, mostrar un mensaje de error al usuario.
    });
}
