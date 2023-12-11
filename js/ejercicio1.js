import Galeria from "./Galeria.js";

window.addEventListener('load', cargarPagina);

function cargarPagina() {
    //tuve que crear una variable cantidad 
    //porque sino no me dejaba (o yo no sabia) como deshabilitar la ultima imagen
    let cantidad = 7;
    let galeria = new Galeria(cantidad);
    document.querySelector('#imagen').style.backgroundImage ='url(images/' + galeria.nombreAleatorio + ')'; 

    //si el indice cursor es igual a 0 deshabilitas los botones primera y anterior
    if(galeria._indiceCursor === 0){
        document.querySelector('#primera').className = 'deshabilitado';
        document.querySelector('#anterior').className = 'deshabilitado';
    }

    //si el indice cursor es igual a la cantidad que le entra por parametro
    //deshabilitas los botones ultima y siguiente
    if(galeria._indiceCursor === cantidad - 1){
        document.querySelector('#ultima').className = 'deshabilitado';
        document.querySelector('#siguiente').className = 'deshabilitado';
    }

    //evento para los botones
    document.querySelector('#primera').addEventListener('click', function(){
            imagen(galeria.cursorPimera());
            document.querySelector('#primera').className = 'deshabilitado';
            document.querySelector('#anterior').className = 'deshabilitado';

            document.querySelector('#ultima').className = 'habilitado';
            document.querySelector('#siguiente').className = 'habilitado';
    })

    document.querySelector('#anterior').addEventListener('click', function(){
        if(galeria._indiceCursor !== 0) {
            imagen(galeria.cursorAnterior());
            document.querySelector('#ultima').className = 'habilitado';
            document.querySelector('#siguiente').className = 'habilitado';
        }
        if(galeria._indiceCursor == 0) {
            document.querySelector('#primera').className = 'deshabilitado';
            document.querySelector('#anterior').className = 'deshabilitado';
        }
    })

    document.querySelector('#siguiente').addEventListener('click', function(){
        if(galeria._indiceCursor !== cantidad -1) {
            imagen(galeria.cursorSiguiente());
            document.querySelector('#primera').className = 'habilitado';
        document.querySelector('#anterior').className = 'habilitado';
        }
        if(galeria._indiceCursor === cantidad - 1){
            document.querySelector('#ultima').className = 'deshabilitado';
            document.querySelector('#siguiente').className = 'deshabilitado';
        }
    })

    document.querySelector('#ultima').addEventListener('click', function(){
        imagen(galeria.cursorUltima());
        document.querySelector('#ultima').className = 'deshabilitado';
        document.querySelector('#siguiente').className = 'deshabilitado';

        document.querySelector('#primera').className = 'habilitado';
        document.querySelector('#anterior').className = 'habilitado';
    })
}

//funcion que al darle a los botones te saca una nueva imagen
function imagen(img) {
    document.querySelector('#imagen').style.backgroundImage = 'url(images/' + img + ')';
}