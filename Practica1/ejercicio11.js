function obtenerDatos() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Datos iniciales");
        }, 1000);
    });
}
function procesarDatos(datos) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`${datos} procesados`);
        }, 1000);
    });
}
function guardarDatos(datos) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`${datos} guardados a las ${new Date().toLocaleTimeString()}`);
        }, 1000);
    });
}
obtenerDatos()
    .then((resultado1) => {
        console.log(resultado1);
        return procesarDatos(resultado1);
    })
    .then((resultado2) => {
        console.log(resultado2);
        return guardarDatos(resultado2);
    })
    .then((resultado3) => {
        console.log(resultado3);
    })
    .catch((error) => {
        console.error("Un error fatal", error);
    });