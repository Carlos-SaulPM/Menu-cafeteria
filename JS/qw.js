// export const peticionGET = () => {
//   const myHeaders = new Headers();
//   myHeaders.append("accept", "*/*");

//   const requestOptions = {
//     method: "GET",
//     headers: myHeaders,
//     redirect: "follow",
//   };

//   fetch(
//     "https://restaurantes-fesa.vmartinez84.xyz/api/Platillos/Restaurantes/Cafeteria",
//     requestOptions
//   )
//     .then((response) => response.json())
//     .then((result) => pintarMenu(result))
//     .catch((error) => console.error(error));
// };

// Recibe un array que pinta los mensajes en el index
export const pintarMenu = (lista) => {
  //Obtener el contenedor de cada platillo
  let contenedorPlatillos = document.querySelector(".platillos");

  // Limpiar el HTML
  contenedorPlatillos.innerHTML = "";

  // Iterando sobre cada platillo
  lista.forEach((platillo, index) => {
    // Crear un nuevo artículo para cada platillo
    let article = document.createElement("article");
    article.className = "presentacion platillo";

    let divInterior = document.createElement("div");
    divInterior.className = "interior-presentacion";

    let h2 = document.createElement("h2");
    h2.textContent = platillo.nombre;

    let divDescripcion = document.createElement("div");
    let p = document.createElement("p");
    p.textContent = platillo.descripcion;

    let pPrecio = document.createElement("p");
    pPrecio.textContent = `Precio: $${platillo.precio}`;

    let pCategoria = document.createElement("p");
    pCategoria.textContent = `Categoría: ${platillo.categoria}`;

    divDescripcion.appendChild(p);
    divDescripcion.appendChild(pPrecio);
    divDescripcion.appendChild(pCategoria);
    divInterior.appendChild(h2);
    divInterior.appendChild(divDescripcion);

    let divImagen = document.createElement("div");
    divImagen.className = "image";
    divImagen.id = `img-platillo${index + 1}`;

    article.appendChild(divInterior);
    article.appendChild(divImagen);

    contenedorPlatillos.appendChild(article);
  });
};
