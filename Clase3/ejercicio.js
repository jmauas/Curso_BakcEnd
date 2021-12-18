function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max + 1 - min)) + min;
}

let numeros = [];

for (let i= 1;i<=10000;i++) {
    numeros.push(getRandomInt(1, 20));
}

let valores = {};

numeros.map(val => {
    valores[val] = numeros.filter(v => v==val).length;
})

console.log(valores);