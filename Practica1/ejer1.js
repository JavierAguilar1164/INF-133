function miFuncion(texto){
    texto = texto.toLowerCase();
    let conteo = {
        a:0, e:0, i:0, o:0, u:0
    };

    for (let char of texto){
        if (char == 'a') conteo.a++;
        else if (char == 'e') conteo.e++;
        else if (char == 'i') conteo.i++;
        else if (char == 'o') conteo.o++;
        else if (char == 'u') conteo.u++;
    }
    return conteo;
}
let obj = miFuncion("euforia");
console.log(obj);