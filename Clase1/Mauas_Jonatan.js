class Usuario {
    constructor (nombre, apellido, libros, mascotas) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.libros = libros;
        this.mascotas = mascotas;
    }

    getFullName() {
        return `Nombre Completo: ${this.nombre} ${this.apellido}`
    }

    addMascota(nombre) {
        this.mascotas.push(nombre);
    }

    countMascotas() {
        return this.mascotas.length;
    }

    addBook(nombre, autor) {
        this.libros.push({nombre: nombre, autor: autor});
    }

    getBookNames() {
        return this.libros.map(libro => libro.nombre);
    }
}

const describirSujeto = (sujeto) => {
    console.log(`-----------------------------------------------`);
    console.log(`El Usuario con ${sujeto.getFullName()} Tiene un total de ${sujeto.countMascotas()} Mascotas.`);
    for (let i = 0;i<sujeto.mascotas.length;i++) {
        console.log(`--- La Mascota ${i+1} se llama ${sujeto.mascotas[i]}.`)
    }
    console.log(`Asimismo, Tiene en su haber un total de ${sujeto.libros.length} Libros.`);
    if (sujeto.libros.length>0) {
        console.log(`Los Nombres de sus Libros son:`)
        sujeto.libros.forEach(book => {
            console.log(`------${book.nombre}`);
        }); 
    }
    console.log(`-----------------------------------------------`);
}

const jonatan = new Usuario('Jonatan G.', 'Mauas', [], []);
jonatan.addBook('Contabilidad Básica', 'Enrique Fowler Newton');
jonatan.addBook('Contabilidad Intermedia', 'Enrique Fowler Newton');
jonatan.addMascota('Ada');
jonatan.addMascota('Sebastian');

const jose = new Usuario('Jose', 'Barrita', [], []);
jose.addBook('El señor de las moscas', 'William Golding');
jose.addBook('Fundacion', 'Isaac Asimov');
jose.addBook('Fundacion 2da Edición', 'Isaac Asimov');
jose.addMascota('firulais');
jose.addMascota('Michifus');

describirSujeto(jose);
describirSujeto(jonatan);