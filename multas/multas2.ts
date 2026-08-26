interface Prestamo {
    multa: number; 
    ejemplar: number;
}

function calcularMulta(prestamo: Prestamo): number {
    const cargoFijo = 50;
    return prestamo.multa + cargoFijo;
}
//le quite el "" al 350 para que no marque error TS
const prestamo: Prestamo = { multa: 350, ejemplar: 14 }; 
console.log(calcularMulta(prestamo));