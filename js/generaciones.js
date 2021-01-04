class Persona {
    constructor(nombre, edad, dni, sexo, peso, altura, anioNacimiento) {
        this.nombre = nombre;
        this.edad = edad;
        this.dni = dni;
        this.sexo = sexo;
        this.peso = peso;
        this.altura = altura;
        this.anioNacimiento = anioNacimiento;
    }

    mostrarGeneracion() {
        // este método debe mostrar un mensaje indicando a qué generación pertenece la persona creada y cual es el rasgo característico de esta generación.
        if (this.anioNacimiento >= 1994 && this.anioNacimiento <= 2010) {
            document.write(`${this.nombre} pertenece a la generación Z. El rasgo característico de esta generación es la Irreverencia<br>`);
        } else if (this.anioNacimiento >= 1981 && this.anioNacimiento <= 1993) {
            document.write(`${this.nombre} pertenece a la generación Y (millennials). El rasgo característico de esta generación es la Frustración<br>`);
        } else if (this.anioNacimiento >= 1969 && this.anioNacimiento <= 1980) {
            document.write(`${this.nombre} pertenece a la generación X. El rasgo característico de esta generación es la Obsesión por el éxito<br>`);
        } else if (this.anioNacimiento >= 1949 && this.anioNacimiento <= 1968) {
            document.write(`${this.nombre} pertenece a la generación Baby Boom. El rasgo característico de esta generación es la Ambición<br>`);
        } else if (this.anioNacimiento >= 1930 && this.anioNacimiento <= 1948) {
            document.write(`${this.nombre} pertenece a la generación Silent Generation (niños de la posguerra). El rasgo característico de esta generación es la Austeridad<br>`);
        } else {
            document.write("Dato incorrecto<br>");
        }
    }

    // esMayorDeEdad: indica si es mayor de edad, devuelve un mensaje indicando que la persona es mayor de edad.
    esMayorDeEdad() {
        if (this.edad >= 18) {
            document.write(this.nombre + " es mayor de edad<br>");
        } else {
            document.write(this.nombre + " es menor de edad<br>");
        }
    }

    // mostrarDatos: devuelve toda la información del objeto.
    mostrarDatos() {
        document.write(`Nombre: ${this.nombre} -- Edad: ${this.edad} -- DNI: ${this.dni} -- ${this.sexo} -- Peso: ${this.peso}kg -- Altura: ${this.altura} -- Año de Nacimiento: ${this.anioNacimiento}<br>`);
    }

    // generaDNI(): genera un número aleatorio de 8 cifras.
    // generaDNI(0, 99999999) {
    //     let nuevoDNI = Math.floor(Math.random() * (99999999 - 0) + 0);
    //     this.dni = nuevoDNI;
    // }
}

let persona1 = new Persona("Emilio Hurtado", 27, 37423538, "H", 74, 1.75, 1993);
let persona2 = new Persona("Leonidas Hurtado", 6, 60888999, "H", 8, 40, 2010);
persona1.esMayorDeEdad();
persona1.mostrarGeneracion();
persona1.mostrarDatos();
document.write("<hr>");
persona2.esMayorDeEdad();
persona2.mostrarGeneracion();
persona2.mostrarDatos();