export default class Galeria {

    constructor(cantidad){
        this._nombres = [];

        for(let i = 1; i < cantidad; i++){
            this._nombres.push('foto' + i + '.jpg'); 
        }
        this._indiceCursor = this.cursorAleatorio();
    }
    
    cursorAleatorio(){
        return Math.floor(Math.random() * this._nombres.length);
    }

    //CAMBIAR TODOS PORQUE NO QUIERO EL THIS._NOMBRES SINO EL NUMERO DE INDICE CURSOR
    cursorUltimo(){
        this._indiceCursor = this._nombres.length -1;
        return this._nombres[this._indiceCursor];
    }
    cursorPimero() {
        this._indiceCursor = 0;
        return this._nombres[this._indiceCursor];
    }
    cursorAnterior() {
        this._indiceCursor--;
        return this._nombres[this._indiceCursor];
    }
    cursorSiguiente() {
        this.indiceCursor++;
        return this._nombres[this._indiceCursor];
    }

    get nombreAleatorio() {
        return this._nombres[this._indiceCursor];
    }
    get indiceCursor() {
        return this._indiceCursor;
    }
    set nombres(nombres) {
        this._nombres = nombres;
    }
    set indiceCursor(indiceCursor){
        this._indiceCursor = indiceCursor
    }
}