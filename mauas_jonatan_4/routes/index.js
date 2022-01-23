import express  from 'express';
const router = express.Router();
import routerProd from "./productos.js";
import Productos from '../controladores/productos.js';

router.use("/productos", routerProd);


routerProd.get("/", (req, res) => {
    const prod = new Productos('productos.json');
    prod.getAll( prods => {
        let html = `<h1 style="background-color: red;">Productos en Stock</h1>`;
        html += `<br>`
        html += `<table>`
        html += `   <tr>`
        html += `       <th>Nombre</th>`
        html += `       <th>Precio</th>`
        html += `       <th>Foto</th>`
        html += `   </tr>`
        for (let p of prods){
                  html += `<tr>`;
                  html += ` <td>${p.title}</td>`;  
                  html += ` <td> USD ${p.price}</td>`;  
                  html += ` <td><img style="width: 50px" src="${p.thumbnail}" alt="${p.title}"</td>`;  
                  html += ` <td><a href="/api/productos/${p.id}"> Ver Producto</a></td>`;  
                  html += `</tr>`;
        }
        html += `</table>`
        html += `<br>`
        html += `<a href="/"> Inicio</a>`
        html += `<br>`
        res.send(html); 
    });
});

export default router;