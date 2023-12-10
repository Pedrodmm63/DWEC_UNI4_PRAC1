export default class Galeria {

    //constructor indicandole la cantidad de imagenes que va a recibir
    //además de crear un array con las imagenes e implementando que saque imagenes aleatorias
    constructor(cantidad){
        this._nombres = [];

        for(let i = 1; i <= cantidad; i++){
            this._nombres.push('foto' + i + '.jpg'); 
        }
        this._indiceCursor = this.cursorAleatorio();
    }
    
    //para sacar imagenes aleatorias
    cursorAleatorio(){
        return Math.floor(Math.random() * this._nombres.length);
    }

    cursorUltima(){
        this._indiceCursor = this._nombres.length -1;
        return this._nombres[this._indiceCursor];
    }
    cursorPimera() {
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