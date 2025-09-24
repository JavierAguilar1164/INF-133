/* usando promesas*/
function tarea1() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Tarea 1 completada");
        }, 1000);
    });
}
function tarea2(resultado1) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`${resultado1}, Tarea 2 completada`);
        }, 1000); 
    });
}
function tarea3(resultado2) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`${resultado2}, Tarea 3 completada`);
        }, 1000); 
    });
}
tarea1()
    .then((resultado1) => {
        console.log(resultado1);
        return tarea2(resultado1);
    })
    .then((resultado2) => {
        console.log(resultado2);
        return tarea3(resultado2);
    })
    .then((resultado3) => {
        console.log(resultado3);
    })
    .catch((error) => {
        console.error("Error:", error);
    });

/*async await*/
function tarea1() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Tarea 1 completada");
        }, 1000); 
    });
}
function tarea2(resultado1) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`${resultado1}, Tarea 2 completada`);
        }, 1000); 
    });
}
function tarea3(resultado2) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`${resultado2}, Tarea 3 completada`);
        }, 1000); 
    });
}
async function ejecutarTareas() {
    try {
        const resultado1 = await tarea1();
        console.log(resultado1); 
        
        const resultado2 = await tarea2(resultado1);
        console.log(resultado2); 
        
        const resultado3 = await tarea3(resultado2);
        console.log(resultado3); 
    } catch (error) {
        console.error("Error:", error);
    }
}
ejecutarTareas();