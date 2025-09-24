function crearPromesa() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Terminado");
        }, 3000);
    });
}
crearPromesa()
    .then((mensaje) => {
        console.log(mensaje);
    });