const express = require('express');
const mm = require('moment');

const app = express()
const PORT = 8080;
let visitas = 0;
const srv = app.listen(PORT, () => {
   console.log(`Servidor http escuchando en el puerto ${srv.address().port}`)
})

srv.on("error", error => console.log(`Error en servidor ${error}`))

app.get('/', (req, res) => {
    visitas++;
    const iphone13 = {
        title: 'Iphone 13 Pro Max 256 GB Sierra Blue',                                                                                                                                 
        price: 1199,                                                                                                                                     
        thumbnail: 'https://www.apple.com/v/iphone-13-pro/d/images/overview/design/finishes_1_sierra_blue__2bovafkl4yaa_large.jpg',             
    }
    const iphone12 = {
        title: 'Iphone 12 Pro Max 256 GB Sierra Blue',                                                                                                                                 
        price: 1000,                                                                                                                                     
        thumbnail: 'https://www.apple.com/v/iphone-13-pro/d/images/overview/design/finishes_1_sierra_blue__2bovafkl4yaa_large.jpg',             
    }
    const iphone11 = {
        title: 'Iphone 11 Pro Max 256 GB Sierra Blue',                                                                                                                                 
        price: 800,                                                                                                                                     
        thumbnail: 'https://www.apple.com/v/iphone-13-pro/d/images/overview/design/finishes_1_sierra_blue__2bovafkl4yaa_large.jpg',             
    }
    const prod = new Contenedor('productos.json')
    prod.save(iphone13);
    prod.save(iphone12);
    prod.save(iphone11);
    
    res.send(`
        <h1 style="background-color: red;">Productos en Stock</h1>
        <ul>
            ${prod

            }
            <li>
    `)
})

app.get('/visitas', (req, res) => {
    visitas++;
    res.send(`<h2>La Cantidad de Visitas de Hoy es ${visitas}</h2>`)
})

app.get('/fyh', (req, res) => {
    visitas++;
    const hoy = {fyh: mm().format('DD/MM/yyyy HH:mm:ss')};
    res.send(JSON.stringify(hoy));
})
 


