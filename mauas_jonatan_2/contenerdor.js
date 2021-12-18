class Contenedor {
    constructor (archivo) {
        this.archivo = archivo;
    }

    save(producto) {
        let productos = []; 
        const fs = require('fs');       
        productos = fs.readFile(this.archivo, 'utf-8', (error, contenido)  => {
            if (error) {
                console.log('No existen Productos.')
                producto.id = 1;
                productos = [];
                productos.push(producto);
                this.guardarProductos(productos);
            } else {
                try {
                    productos = JSON.parse(contenido);
                    producto.id = this.leerMaxId(productos) + 1;
                    productos.push(producto);
                    this.guardarProductos(productos); 
                } catch {
                    fs.unlink(this.archivo, error => {
                        if (error === false) {
                            console.log('Archivo Eliminado.');
                        }
                    })
                }
                           
            }
        });
    }
    leerMaxId(productos) {
        let id = 1;
        productos.map(prod => {
            if (prod.id>id) {
                id = prod.id;
            }
        })
        return id;
    }
    guardarProductos(productos) {
        const fs = require('fs');       
        fs.writeFile(this.archivo, JSON.stringify(productos), error =>{
            if (error) {
                console.log('Error al Guardar el Archivo.');
            } else {
                console.log('Productos Guardados.');
            }
        })
    }
    getById(Number, producto) {
        let productos = []; 
        const fs = require('fs');       
        productos = fs.readFile(this.archivo, 'utf-8', (error, contenido)  => {
            if (error) {
                console.log('No existen Productos.')
                producto(null);
            } else {
                productos = JSON.parse(contenido);
                const prod = productos.find( prod => prod.id==Number);
                producto(prod);
            }
        });
    }
    getAll(all) {
        let productos = []; 
        const fs = require('fs');       
        productos = fs.readFile(this.archivo, 'utf-8', (error, contenido)  => {
            if (error) {
                console.log('No existen Productos.')
                all(null);
            } else {
                productos = JSON.parse(contenido);
                all(productos);
            }
        });
    }

    deleteById(Number) {
        let productos = []; 
        const fs = require('fs');       
        productos = fs.readFile(this.archivo, 'utf-8', (error, contenido)  => {
            if (error) {
                console.log('No existen Productos. Nada para Borrar')
            } else {
                productos = JSON.parse(contenido);
                const prod = productos.find( prod => prod.id==Number);
                try {
                    if (prod.length==0) {
                        console.log(`No se Encontró el Producto con ID ${Number}`);
                    } else {
                        const i = productos.indexOf(prod);
                        console.log(`Indice ${i}`)
                        productos.splice(i, 1);
                        this.guardarProductos(productos)
                        console.log(`Producto con ID ${Number} Eliminado ¡¡¡¡`);
                    }
                } catch {
                    console.log(`No se Encontró el Producto con ID ${Number}`);
                }                
            }
        });
    }

    deleteAll() {
        const fs = require('fs');       
        fs.unlink(this.archivo, error => {
            if (error) {
                console.log('No se Pudieron Eliminar los Productos.');
            } else {
                console.log('Productos Eliminados.');
            }
        })  
    }
}

const nuevoProd = {
    title: 'Iphone 13 Pro Max 256 GB Sierra Blue',                                                                                                                                 
    price: 1199,                                                                                                                                     
    thumbnail: 'https://www.apple.com/v/iphone-13-pro/d/images/overview/design/finishes_1_sierra_blue__2bovafkl4yaa_large.jpg',             
}
const iphone = new Contenedor('productos.json')
iphone.save(nuevoProd);

iphone.getById(2, (prod) => {
    console.log('Producto Econtrado: '+JSON.stringify(prod));
})

iphone.getAll((prods) => {
    console.log('Conjunto de Productos: '+JSON.stringify(prods));
})

//iphone.deleteById(2);
//iphone.deleteAll();
