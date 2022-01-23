import express  from 'express';
const routerProd = express.Router();
import upload from "../middlewares/uploadFile.js";
import Productos from '../controladores/productos.js';
    
routerProd.get("/:id", (req, res) => {
    const { ...rest } = req.params;
    const prod = new Productos(`productos.json`);
    const id = Number(rest.id);
    prod.getById(id, (p) => {
        res.send(p);
    });       
});

routerProd.get("/", (req, res) => {
    const prod = new Productos(`productos.json`);
    prod.getAll((p) => {
        res.send(p);
    });
});

routerProd.post("/", (req, res) => {
    const prod = new Productos(`productos.json`);
    const { title, price, thumbnail } = req.body;
    const productoNuevo = {
        title,
        price,
        thumbnail
    }
    prod.save(productoNuevo, prod => {
        res.send(prod);
    });    
});

routerProd.put("/:id", (req, res) => {
    const prod = new Productos(`productos.json`);
    const productoNuevo = req.body;
    console.log(productoNuevo);
    prod.modi(productoNuevo, prod => {
        res.send(productoNuevo);
    });    
});

routerProd.delete("/:id", (req, res) => {
    const { ...rest } = req.params;
    const prod = new Productos(`productos.json`);
    const id = Number(rest.id);
    prod.deleteById(id, prod => {
        res.send(prod);
    });
});

routerProd.post("/uploadFile", upload.single("myFile"), (req, res, next) => {
  const file = req.file;
  if (!file) {
    const error = new Error("File not found");
    return next(error);
  }
  res.send(file);
});

export default routerProd;