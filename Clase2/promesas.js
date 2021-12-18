const dividir = (dividendo, divisor) => {
    return new Promise((resolve, reject) => {
        if (divisor===0) {
            reject('No se Puede Dividir por Cero.')
        } else {
            resolve(resolve(dividendo / divisor))
        }
    });
};

const divi = (a, b) => {
    console.log(`Se va a Dividir ${a} Por ${b}`);
    dividir(a, b)
        .then(res => console.log(`Resultado es Igual a ${res}`))
        .catch(err => console.log(err))
}

divi(10, 0);
divi(10, 5);