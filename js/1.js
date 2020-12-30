// Crea un objeto llamado auto que tenga algunas características como el color, marca, modelo y si está encendido o apagado. Crea los métodos necesarios para permitir encender y apagar el auto

// objeto auto
// propiedades: color, marca, modelo, ¿encendido?
// método para encender y apagar

// creando objeto con función constructora
function Auto(color, marca, modelo, encendido) {
    // propiedades
    this.color = color;
    this.marca = marca;
    this.modelo = modelo;
    this.encendido = encendido;

    document.write("Color: " + color + "<br>");
    document.write("Marca: " + marca + "<br>");
    document.write("Modelo: " + modelo + "<br>");

    // métodos
    if (encendido) {
        document.write("El auto está encendido. Variable = " + encendido)
    } else {
        document.write("El auto está apagado. Variable = " + encendido)
    }
}

let auto1 = new Auto("Blanco", "Chevrolet", "Onix LT", false);
document.write("<hr>");
let auto2 = new Auto("Negro", "Peugeot", "208", true);