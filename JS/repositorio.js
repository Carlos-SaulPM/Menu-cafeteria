//Platillos
export function obtenerPlatillos() {
  const myHeaders = new Headers();
  myHeaders.append("accept", "*/*");

  const requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  };

  fetch(
    "https://restaurantes-fesa.vmartinez84.xyz/api/Platillos/Restaurantes/Cafeteria",
    requestOptions
  )
    .then((response) => response.json())
    .then((result) => result)
    .catch((error) => console.error(error));
}

export function obtenerImagenPlatillos() {
  const myHeaders = new Headers();
  myHeaders.append("accept", "*/*");

  const requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  };

  fetch(
    "https://restaurantes-fesa.vmartinez84.xyz\n/api/Platillos/1/Imagen/Restaurantes/Cafeteria/",
    requestOptions
  )
    .then((response) => response.text())
    .then((result) => console.log(result))
    .catch((error) => console.error(error));
}
//Mensajes
export function obtenerMensajes() {
  const requestOptions = {
    method: "GET",
    redirect: "follow",
  };

  fetch(
    "http://127.0.0.1:8000/api/restaurantes/Cafeteria/mensajes",
    requestOptions
  )
    .then((response) => response.json())
    .then((result) => result)
    .catch((error) => console.error(error));
}

export function enviarMensajes(mensaje, nombre, correo, numero) {
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  const raw = JSON.stringify({
    mensaje: mensaje,
    restaurante: "Cafeteria",
    nombre: nombre,
    correo: correo,
    telefono: numero,
  });

  const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };

  fetch("http://127.0.0.1:8000/api/mensajes", requestOptions)
    .then((response) => response.text())
    .then((result) => result)
    .catch((error) => console.error(error));
}

//Comentarios
export function obtenerComentarios() {
  const myHeaders = new Headers();
  myHeaders.append("accept", "text/plain");

  const requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  };

  fetch(
    "https://restaurantes-fesa.vmartinez84.xyz/api/Opiniones/Restaurantes/Cafeteria",
    requestOptions
  )
    .then((response) => response.text())
    .then((result) => console.log(result))
    .catch((error) => console.error(error));
}

//Categorias
export function obtenerCategorias() {
  const myHeaders = new Headers();
  myHeaders.append("accept", "*/*");
  myHeaders.append("Content-Type", "application/json");

  const raw = JSON.stringify({
    nombre: "Especiales",
  });

  const requestOptions = {
    method: "GET",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };

  fetch(
    "https://restaurantes-fesa.vmartinez84.xyz\n/api/Categorias/Restaurantes/Cafeteria",
    requestOptions
  )
    .then((response) => response.text())
    .then((result) => console.log(result))
    .catch((error) => console.error(error));
}
