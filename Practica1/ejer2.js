function miFuncion(frase){
    let caracteres = [];
    for (let i = 0; i<frase.length; i++){
        caracteres[i]=frase[i];
    }
    let resultado = '';
    for (let i = caracteres.length -1; i >=0;i--){
        resultado += caracteres[i];
    }
    return resultado
}
let cad = miFuncion("abcd");
console.log(cad);