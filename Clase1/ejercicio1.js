const sujeto = {
    nombre: "pepe",
    edad: 25,
    precio: "$ 99.90",
    seriesFavoritas: [
        "Dark",
        "Mr. Robot",
        "Castelvania"
    ],
    peliculasFavoritas: [
        {
            titulo: "Bohemian Rapsody",
            estreno: 2018,
            protagonistas: [
                "Rami Malek",
                "Gwilym Lee"
            ]
        },
        {
            titulo: "El Padrino",
            estreno: 1972,
            protagonistas: [
                "Al Pacino",
                "Marlon Brando"
            ]
        }
    ]
}

const mostrar = () => {
    console.log("----------------");
    console.log("Nombre: ", sujeto.nombre);
    console.log("Edad: ", sujeto.edad);
    console.log("Precio: ", sujeto.precio);
    sujeto.seriesFavoritas.forEach(s => {
        console.log("Series Favoritas: ", s)
    });
    sujeto.peliculasFavoritas.forEach(p => {
        console.log("Pelicula: ", p.titulo, " Del Año ", p.estreno, " Protagonizada por: ")
        p.protagonistas.forEach(pro => {
            console.log(pro)
        })
    });
    console.log("----------------");
}

mostrar();
sujeto.edad ++;
mostrar();

