class Cuenta {
    constructor(titular, saldo) {
        this.titular = titular;
        this.saldo = saldo;
    }

    ingresar(cantidad) {
        this.cantidad = cantidad;
        this.saldo += cantidad;
        document.write("<br>Titular de la cuenta: " + this.titular);
        document.write("<br>Ingresaste: " + cantidad);
        document.write("<br>Su saldo actual es de: " + this.saldo);
        document.write("<hr>");
    }

    extraer(cantidad) {
        this.cantidad = cantidad;
        this.saldo -= cantidad;
        document.write("<br>Titular de la cuenta: " + this.titular);
        document.write("<br>Extrajiste: " + cantidad);
        document.write("<br>Su saldo actual es de: " + this.saldo);
        document.write("<hr>");
    }

    informar() {
        document.write("<br>Titular de la cuenta: " + this.titular);
        document.write("<br>Su saldo actual es de: " + this.saldo);
        document.write("<hr>");
    }
}

let cuenta1 = new Cuenta("Alex", 0);
console.log("🚀 ~ file: cuentaBancaria.js ~ line 27 ~ cuenta", cuenta1)
cuenta1.ingresar(1000);
cuenta1.extraer(500);
cuenta1.informar();