class Producto {
    constructor(codigo, nombre, precio) {
        this.codigo = codigo;
        this.nombre = nombre;
        this.precio = precio;
    }

    imprimirDatos() {
        document.write("Código:" + this.codigo);
        document.write("<br>Nombre:" + this.nombre);
        document.write("<br>Precio: $" + this.precio);
        document.write("<hr>");
    }
}

let plancha = new Producto("HEZ9DHL7", "Plancha a vapor ATMA", 3599);
let ventilador = new Producto("5WC97Q3Q", "Ventilador USB Netmak", 950);
let celular = new Producto("XC4988JR", "Celular Moto G8 Power Lite", 22799);

// crear array
let listaProductos = [plancha, ventilador, celular];
document.write(listaProductos[plancha.imprimirDatos(), ventilador.imprimirDatos(), celular.imprimirDatos()]);