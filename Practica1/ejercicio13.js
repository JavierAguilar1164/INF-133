function paso1() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("paso 1 completado");
        }, 1000);
    });
}
function paso2(resultado1) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`${resultado1}, paso 2 completado`);
        }, 1000);
    });
}
function paso3(resultado2) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`${resultado2}, paso 3 completado`);
        }, 1000);
    });
}
async function ejecutarPasos() {
    try {
        const resultado1 = await paso1();
        console.log(resultado1);
        
        const resultado2 = await paso2(resultado1);
        console.log(resultado2);
        
        const resultado3 = await paso3(resultado2);
        console.log(resultado3);
    } catch (error) {
        console.error("Error:", error);
    }
}

ejecutarPasos();