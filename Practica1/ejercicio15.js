/*usando callbak*/
function obtenerDatos(callback) {
    setTimeout(() => {
        callback(null, "Datos obtenidos");
    }, 1000); 
}
obtenerDatos((error, resultado) => {
    if (error) {
        console.error("Error:", error);
    } else {
        console.log(resultado);
    }
});

/*usando promesas*/
function obtenerDatos() {
    return new Promise((resolve, reject) => {
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