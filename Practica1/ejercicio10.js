/*es mejor usar callback cuando se tiene tareas simple y sincronicas o asincronicas simple*/
/*callback*/
function conCallback(tiempo, callback) {
    setTimeout(callback, tiempo);
}
conCallback(2000, () => console.log("Tarea con callback"));
/*es mejor usar promesas cuando se tienen tareas varias tareas asincronicas encadenadas de forma secuencias o paralela*/
/*promesa*/
function conPromesa(tiempo) {
    return new Promise((resolve) => {
        setTimeout(() => resolve("Tarea con promesa"), tiempo);
    });
}
conPromesa(3000).then(mensaje => console.log(mensaje));