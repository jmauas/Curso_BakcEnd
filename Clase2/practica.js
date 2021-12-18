

const mostrarLetras = (palabra, i) => {
    mostrar(palabra, i, (res) => {
        console.log(res);
        if (i<palabra.length - 1) {
            mostrarLetras(palabra, i+1);
        } else {
            console.log('Terminé');
        }
    })
}

const mostrar = (palabra, i, callback) => {   
    setTimeout(() => {
        callback(palabra[i]);
    }, 1000);
}
mostrarLetras('hola', 0);

const fs = require('fs');

try {
    fs.writeFileSync('fyh.txt', new Date().toLocaleString())
    console.log(fs.readFileSync('fyh.txt', 'utf-8'));
} catch (error) {
    console.log(`Error ${error}`)
}

