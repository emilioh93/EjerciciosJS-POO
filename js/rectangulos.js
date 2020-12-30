// Escribe una clase que permita crear distintos objetos “rectángulos”, con las propiedades de alto y ancho, mas los métodos necesarios para modificar y mostrar sus propiedades, calcular el perímetro y el área.

// clase Rectángulo
// propiedades: alto - ancho
// métodos: setter, getter, perímetro, área

class Rectangulo {
    constructor(alto, ancho) {
        this.alto = alto;
        this.ancho = ancho;
    }

    set setAlto(alto) {
        this.alto = alto;
    }

    set setAncho(ancho) {
        this.ancho = ancho;
    }

    get getAlto() {
        return this.alto;
    }

    get getAncho() {
        return this.ancho;
    }

    perimetro() {
        let p = 2 * (this.alto + this.ancho);
        return p;
    }

    area() {
        let a = this.ancho / this.alto;
        return a;
    }
}

let r1 = new Rectangulo(2, 4);
let r2 = new Rectangulo(4, 10);
let r3 = new Rectangulo(5, 8);
let r4 = new Rectangulo(10, 4);

document.write("<br>Valores del Rectángulo 1:");
document.write("<br>Alto: " + r1.getAlto);
document.write("<br>Ancho: " + r1.getAncho);
document.write("<br>Perímetro: " + r1.perimetro());
document.write("<br>Área: " + r1.area());
document.write("<hr>");
document.write("<br>Valores del Rectángulo 2:");
document.write("<br>Alto: " + r2.getAlto);
document.write("<br>Ancho: " + r2.getAncho);
document.write("<br>Perímetro: " + r2.perimetro());
document.write("<br>Área: " + r2.area());
document.write("<hr>");
document.write("<br>Setter y Getter para Rectángulos 3 y 4:");
document.write("<br>Valores del Rectángulo 3:");
document.write("<br>Alto: " + r3.getAlto);
document.write("<br>Seteando alto a 10...");
r3.setAlto = 10;
document.write("<br>Alto: " + r3.getAlto);
document.write("<br>Valores del Rectángulo 4:");
document.write("<br>Ancho: " + r4.getAncho);
document.write("<br>Seteando alto a 15...");
r4.setAncho = 15;
document.write("<br>Ancho: " + r4.getAncho);