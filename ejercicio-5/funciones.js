const producto = "Monitor";
const precio = 189;      
const cantidad = 2;
const porcentajeIva = 21;

function calcularImporteLinea(precio, cantidad) {
    return precio * cantidad;
}

function calcularIva(subtotal, porcentajeIva) {
    return subtotal * porcentajeIva / 100;
}

function calcularTotal(subtotal, iva) {
    return subtotal + iva;
}

//IA: Me ayudó a entender que debía guardar constantes después de las funcionas para después llamarlas.
const subtotal = calcularImporteLinea(precio, cantidad);
const iva = calcularIva(subtotal, porcentajeIva);
const total = calcularTotal(subtotal, iva);

console.log(`Producto: ${producto}`);
console.log(`${cantidad} x ${precio.toFixed(2)} €`);
console.log(`Subtotal: ${subtotal.toFixed(2)} €`);
console.log(`IVA (${porcentajeIva}%): ${iva.toFixed(2)} €`);
console.log(`TOTAL: ${total.toFixed(2)} €`);
