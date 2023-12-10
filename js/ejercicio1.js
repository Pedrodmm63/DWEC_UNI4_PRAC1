import Galeria from "./Galeria.js";

window.addEventListener('load', cargarPagina);

function cargarPagina() {
    let galeria = new Galeria(7);
    document.querySelector('#imagen').style.backgroundImage ='url(images/' + galeria.nombreAleatorio + ')'; 

    
}