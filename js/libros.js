class Libro {
    constructor(isbn, titulo, autor, numPag) {
        this.isbn = isbn;
        this.titulo = titulo;
        this.autor = autor;
        this.numPag = numPag;
    }

    generarISBN() {
        let generador = Math.floor(Math.random() * 9999999999999);
        this.isbn = generador;
    }

    get getISBN() {
        return this.isbn;
    }
    get getTitulo() {
        return this.titulo;
    }
    get getAutor() {
        return this.autor;
    }
    get getNumPag() {
        return this.numPag;
    }

    set setISBN(isbn) {
        this.isbn = isbn;
    }
    set setTitulo(titulo) {
        this.titulo = titulo;
    }
    set setAutor(autor) {
        this.autor = autor;
    }
    set setNumPag(numPag) {
        this.numPag = numPag;
    }

    mostrarLibro() {
        document.write(`El libro ${this.titulo} con ISBN ${this.isbn} creado por el autor ${this.autor} tiene páginas ${this.numPag}.`);
        document.write("<hr>");
    }
}

let libro1 = new Libro(0, "Línea de Fuego", "Arturo Pérez-Reverte", 688);
let libro2 = new Libro(0, "Pandenomics", "Javier Milei", 358);

libro1.generarISBN();
libro2.generarISBN();

libro1.mostrarLibro();
libro2.mostrarLibro();

if (libro1.numPag > libro2.numPag) {
    document.write(`${libro1.getTitulo} tiene más páginas que ${libro2.getTitulo}.`);
} else {
    document.write(`${libro2.getTitulo} tiene más páginas que ${libro1.getTitulo}.`);
}