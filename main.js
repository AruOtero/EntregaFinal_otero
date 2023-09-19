// Crear un objeto de usuario
let usuario = {
  nombre: "",
  apellido: "",
};

// Crear un array para almacenar usuarios
let usuarios = [];

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

     
      usuario.nombre = data.nombre;
      usuario.apellido = data.apellido;

      if (vencimiento === 30) {
        verCuota = (importe + interes) / cuotas;
      } else {
        verCuota = (importe + interes) / cuotas * 2;
      }
      console.log(verCuota);

      // Agregar el usuario al array de usuarios
      usuarios.push(usuario);

      // Guardar verCuota y usuarios en localStorage
      localStorage.setItem("verCuota", verCuota);
      localStorage.setItem("usuarios", JSON.stringify(usuarios));

      // Mostrar el valor de la cuota y los usuarios en un mensaje emergente
      Swal.fire({
        title: "El valor de la cuota es " + verCuota,
        text: "Usuarios: " + JSON.stringify(usuarios),
        confirmButtonText: "Salir"
      });
    })
    .catch(error => {
      console.error("Error al obtener datos del servidor:", error);
    });
}

    .catch(error => {
      console.error("Error al obtener datos del servidor:", error);
      // Puedes manejar el error aquí, por ejemplo, mostrar un mensaje de error al usuario.
    });
}
