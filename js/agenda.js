class Contacto {
    constructor(nombre, telefono) {
        this.nombre = nombre;
        this.telefono = telefono;
    }

    get getNombre() {
        document.write("El nombre es " + this.nombre);
    }
    get getTelefono() {
        document.write("El teléfono es " + this.telefono);
    }
    set setNombre(nombre) {
        this.nombre = nombre;
    }
    set setTelefono(telefono) {
        this.telefono = telefono;
    }

    aniadirContacto(Contacto) {
        this.Contacto = Contacto;
        if (agenda.length < 10) {
            agenda.push(Contacto);
            console.log("El contacto ha sido añadido");
        } else {
            console.log("La lista está llena");
            document.write("La lista está llena.");
        }
    }

    // existeContacto(Conctacto)
    existeContacto(Contacto) {
        this.Contacto = Contacto;
        let busqueda = agenda.indexOf(Contacto)
        if (busqueda >= 0) {
            document.write("El contacto existe y se encuentra en la posición número " + busqueda);
        } else {
            document.write("El contacto no existe");
        }
    }

    // listarContactos()
    listarContactos() {
        for (let i = 0; i < agenda.length; i++) {
            let mostrarAgenda = agenda[i];
            document.write(mostrarAgenda + " - ")
        }
    }

    // buscarContacto(nombre)
    buscarContacto(nombre) {
        this.nombre = nombre;
        if (agenda.indexOf(nombre)) {
            document.write("Nombre: " + nombre);
            // falta imprimir teléfono
        } else {
            document.write("No se encontró un contacto con ese nombre.");
        }
    }

    // eliminarContacto(Contacto c)
    eliminarContacto(Contacto, posicionAEliminar) {
        this.Contacto = Contacto;
        this.posicionAEliminar = posicionAEliminar;
        let contactoEliminado = agenda.splice(posicionAEliminar, 1);

        if (contactoEliminado) {
            document.write("El contacto en la posición " + posicionAEliminar + " ha sido eliminado.");
        } else {
            document.write("No se ha eliminado ningún contacto.");
        }
    }

    // agendaLlena():
    agendaLlena() {
        if (agenda.length = 10) {
            document.write("La agenda está llena.");
        } else {
            document.write("La agenda aún no está llena.");
        }
    }

    // huecosLibres()
    huecosLibres() {
        let libres = 10 - agenda.length;
        if (libres > 0) {
            document.write("Quedan " + libres + " huecos libres.");
        } else {
            document.write("No quedan huecos libres.");
        }
    }
}

let contacto1 = new Contacto("Emilio", 381112233);
let contacto2 = new Contacto("Goncal", 381223344);
let contacto3 = new Contacto("Mariana", 381334455);
let contacto4 = new Contacto("Silvina", 381445566);
let contacto5 = new Contacto("Dolores", 388123456);
let contacto6 = new Contacto("Carlos", 386987456);
let contacto7 = new Contacto("Ernesto", 381653241);
let contacto8 = new Contacto("Gastón", 385241678);
let contacto9 = new Contacto("Cecilia", 3816393521);
let contacto10 = new Contacto("Fernando", 381521469);
let agenda = [contacto1, contacto2, contacto3, contacto4];

// Comienzo a desarrollar los métodos
aniadirContacto(contacto5);