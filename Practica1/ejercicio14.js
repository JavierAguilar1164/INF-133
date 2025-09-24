/*usando promesas*/
function obtenerDatos() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Datos obtenidos");
        }, 1000);
    });
}

obtenerDatos()
    .then((resultado) => {
        console.log(resultado);
    })
    .catch((error) => {
        console.error("Error:", error);
    });


/*usando callback*/
function obtenerDatosConCallback(callback) {
    setTimeout(() => {
        callback(null, "Datos obtenidos");
    }, 1000);
}

obtenerDatosConCallback((error, resultado) => {
    if (error) {
        console.error("Error:", error);
    } else {
        console.log(resultado);
    }
});