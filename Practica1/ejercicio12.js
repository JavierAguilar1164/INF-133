function operacion1() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Datos iniciales");
        }, 1000);
    });
}
function operacion2(resultado1) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`${resultado1} procesados`);
        }, 1000);
    });
}
function operacion3(resultado2) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`${resultado2} guardados`);
        }, 1000);
    });
}
async function ejecutarOperaciones() {
    try {
        const resultado1 = await operacion1();
        console.log(resultado1);
        const resultado2 = await operacion2(resultado1);
        console.log(resultado2);
        
        const resultado3 = await operacion3(resultado2);
        console.log(resultado3);
    } catch (error) {
        console.error("fatal error:", error);
    }
}
ejecutarOperaciones();