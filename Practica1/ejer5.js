function miFuncion(cadena) {
    let limpia = '';
    for (let i = 0; i < cadena.length; i++) {
        if (cadena[i] !== ' ') {
            limpia += cadena[i].toLowerCase();
        }
    }
    for (let i = 0; i < limpia.length / 2; i++) {
        if (limpia[i] !== limpia[limpia.length - 1 - i]) {
            return false;
        }
    }
    return true;
}
let band1 = miFuncion("oruro");
console.log(band1);
let band2 = miFuncion("hola");
console.log(band2);