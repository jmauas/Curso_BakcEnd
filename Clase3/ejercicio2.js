const productos = [
    { id:1, nombre:'Escuadra', precio:323.45 },
    { id:2, nombre:'Calculadora', precio:234.56 },
    { id:3, nombre:'Globo Terráqueo', precio:45.67 },
    { id:4, nombre:'Paleta Pintura', precio:456.78 },
    { id:5, nombre:'Reloj', precio:67.89 },
    { id:6, nombre:'Agenda', precio:78.90 }
]

const formatoSepMiles = (valor, deci=0) => {
	valor = Number(valor);
	return new Intl.NumberFormat("de-DE", {style: 'decimal', minimumFractionDigits: deci, maximumFractionDigits: deci}).format(valor);
}

console.log("A", productos.map(prod => prod.nombre).join());

let total = productos.reduce((total, prod) => total+Number(prod.precio), 0);

const promedio = total / productos.length;

const getMax = (a, b) => Math.max(a, b);
let max = productos.reduce((max, prod) => getMax(max, Number(prod.precio)), 0);
const prodMax = productos.find(prod => prod.precio==max); 

const getMin = (a, b) => Math.min(a, b);
let min = productos.reduce((min, prod) => getMin(min, Number(prod.precio)), 9999999999);
const prodMin = productos.find(prod => prod.precio==min); 

const resultados = {
    'Precio Total: ': formatoSepMiles(total, 2),
    'Precio Promedio: ': formatoSepMiles(promedio, 2),
    'Producto mas Caro: ': prodMax,
    'Producto mas Barato: ': prodMin
}

console.log(resultados);