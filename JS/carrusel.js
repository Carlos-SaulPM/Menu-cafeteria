const btnLeft = document.getElementsByClassName("btn-left")[0],
  btnRight = document.getElementsByClassName("btn-right")[0],
  slider = document.getElementsByClassName("carruseles")[0],
  sliderSection = document.getElementsByClassName("slider-section");

btnLeft.addEventListener("click", (e) => moverIzquierda());
btnRight.addEventListener("click", (e) => moverDerecha());

let aux = 0,
  contador = 0,
  widthImg = 100 / sliderSection.length;

export default function moverDerecha() {
  if (contador >= sliderSection.length - 1) {
    aux = 0;
    contador = 0;
    slider.style.transform = `translate(-${aux}%)`;
    slider.style.transition = "none";
    return;
  }
  contador++;
  aux = aux + widthImg;
  slider.style.transform = `translate(-${aux}%)`;
  slider.style.transition = "all ease .7s";
}
function moverIzquierda() {
  contador--;
  if (contador < 0) {
    contador = sliderSection.length - 1;
    aux = widthImg * (sliderSection.length - 1);
    slider.style.transform = `translate(-${aux}%)`;
    slider.style.transition = "none";
    return;
  }
  aux = aux - widthImg;
  slider.style.transform = `translate(-${aux}%)`;
  slider.style.transition = "all ease .7s";
}
