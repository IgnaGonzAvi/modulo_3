

class Libro {
    constructor(nombreP, autorP, editorialP, generoP){
        this.nombre = nombreP;
        this.autor = autorP;
        this.editorial = editorialP;
        this.genero = generoP;
    }

    mostrarLibro(){
        console.log(this.nombre + ", "+ this.autor + ", "+ this.editorial +", "+ this.genero);
        return this.mostrarLibro;
    }

}

var libro1 = new Libro("Metamorfosis", "Kafka", "Salamandra", "Fantástico");
var libro2 = new Libro("Harry Potter", "Rowling", "Random Penguin", "Fantástico");
var libro3 = new Libro("Sabina", "Daniela Sol", "Marciano", "Poesía");


libro1.mostrarLibro();
libro2.mostrarLibro();
libro3.mostrarLibro();

let libros = [
    {   
        nombre : "Metamorfosis",
        autor : "Kafka",
        editorial : "Salamandra",
        genero : "Fantástico" 
    },
    {
        nombre: "Harry Potter",
        autor: "Rowling",
        editorial: "Random Penguin",
        genero : "Fantástico"
    },
    {
        nombre : "Sabina",
        autor : "Daniela Sol",
        editorial : "Marciano",
        genero : "Poesia"
    }
];





