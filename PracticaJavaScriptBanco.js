const MOVIMIENTO = {
    DEBITADO: "debitado",
    ACREDITADO: "acreditado"
}

function CuentaBancaria({nombre, numeroCuenta, apellido, saldo}) {
    this.nombre = nombre;
    this.__numeroCuenta = numeroCuenta;
    this.apellido = apellido;
    this.__saldo = saldo;
    this.__movimientos = [];
}

CuentaBancaria.prototype.mostrarNombreTitular = function () {
    return `${this.nombre} ${this.apellido}`;
}

CuentaBancaria.prototype.mostarSaldoCuenta = function () {
    return `${this.__saldo} ars`;
}

CuentaBancaria.prototype.mostrarMovimientos = function () {
    return this.__movimientos;
}

CuentaBancaria.prototype.mostrarNumeroCuenta = function () {
    return this.__numeroCuenta;
}

CuentaBancaria.prototype.mostrarDetallesCuenta = function () {
    return {
        movimientos: this.mostrarMovimientos(),
        titular: this.mostrarNombreTitular(),
        saldo: this.mostarSaldoCuenta(),
        cuenta: this.__numeroCuenta
    };
}


CuentaBancaria.prototype.debitarSaldo = function (saldoADebitar) {
    
    if (saldoADebitar > this.__saldo) {
        console.log(`No se puede debitar ${saldoADebitar} ars. Saldo Insuficiente`);
        return;
    }

    const saldoAnterior = this.__saldo;
    this.__saldo -= saldoADebitar;

    this.__movimientos.push({
        type: MOVIMIENTO.DEBITADO,
        saldoAnterior,
        saldoADebitar,
        nuevoSaldo: this.__saldo,
    });
}

CuentaBancaria.prototype.acreditarSaldo = function (saldoAAcreditar) {
    
    if (saldoAAcreditar <= 0) {
        console.log(`No se puede acreditar el monto ${saldoAAcreditar} ars. Monto Invalido`);
        return;
    }

    const saldoAnterior = this.__saldo;
    this.__saldo += saldoAAcreditar;

    this.__movimientos.push({
        type: MOVIMIENTO.ACREDITADO,
        saldoAnterior,
            saldoAAcreditar,
            nuevoSaldo: this.__saldo,
    });
}

const accountDetails = { 
    nombre: "Maria",
    apellido: "Casadiego",
    numeroCuenta: "012345684",
    saldo: 1200
}

const cuenta = new CuentaBancaria(accountDetails);

console.log("********");
console.log(cuenta.mostrarDetallesCuenta());

cuenta.debitarSaldo(300);

console.log("********");
console.log(cuenta.mostrarDetallesCuenta());

cuenta.debitarSaldo(1200);

cuenta.acreditarSaldo(3000);

console.log("********");
console.log(cuenta.mostrarDetallesCuenta());