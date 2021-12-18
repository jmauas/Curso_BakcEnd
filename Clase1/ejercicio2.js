
//PUNTO 1
const mostrarLista = (lista) => {
    if (lista.length>0) {
        lista.forEach(l => {
            console.log(l)
        });
    } else {
        console.log('La Lista esta Vacia')
    }
}

mostrarLista(["dato 1","dato 2","dato 3"]);
mostrarLista([]);

//PUNTO 2
(function (lista) {
    if (lista.length>0) {
        lista.forEach(l => {
            console.log(l)
        });
    } else {
        console.log('La Lista esta Vacia')
    }
})(["dato 4","dato 5","dato 6"])

//PUNTO 3
const crearMultiplicador = (nro1) => {
    return (nro2) => {
        console.log("Valores ", nro1, nro2);
        const rsdo = nro1 * nro2;
        return rsdo;
    }
}

const duplicar = crearMultiplicador(2);
console.log("Duplicar 3: ", duplicar(3));
console.log("Duplicar 4: ", duplicar(4));

const triplicar = crearMultiplicador(3);
console.log(`Tripli 3: ${triplicar(3)}`);
console.log("Tripi 4: ", triplicar(4));