import { obtenerMensajes, enviarMensajes } from "./repositorio";

// Recibe un array para pintar los mensajes
function pintarMensajes(array) {
  let accordion = document.getElementById("acordeonMensajes");
  accordion.innerHTML = "";

  array.forEach((element, index) => {
    let itemId = `flush-collapse${index}`;

    let accordionItem = document.createElement("div");
    accordionItem.classList.add("accordion-item");

    let header = document.createElement("h2");
    header.classList.add("accordion-header");
    let button = document.createElement("button");
    button.classList.add("accordion-button", "collapsed", "bg-info-subtle");
    button.setAttribute("type", "button");
    button.setAttribute("data-bs-toggle", "collapse");
    button.setAttribute("data-bs-target", `#${itemId}`);
    button.setAttribute("aria-expanded", "false");
    button.setAttribute("aria-controls", itemId);
    button.innerText = `Mensaje de ${element.nombre}`;

    let collapse = document.createElement("div");
    collapse.id = itemId;
    collapse.classList.add("accordion-collapse", "collapse");
    collapse.setAttribute("data-bs-parent", "#accordionFlushExample");

    let body = document.createElement("div");
    body.classList.add("accordion-body");
    body.innerHTML = `<strong>Mensaje:</strong> ${element.mensaje}<br>
                            <strong>Nombre:</strong> ${element.nombre}<br>
                            <strong>Correo:</strong> ${element.correo}<br>
                            <strong>Teléfono:</strong> ${element.telefono}`;

    collapse.appendChild(body);
    header.appendChild(button);
    accordionItem.appendChild(header);
    accordionItem.appendChild(collapse);
    accordion.appendChild(accordionItem);
  });
}
