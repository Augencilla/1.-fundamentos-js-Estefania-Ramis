const producto = "Monitor";
const precio = 189;      
const cantidad = 2;
const porcentajeIva = 21;
let importe = 30;

function calcularImporteLinea(precio, cantidad) {
    return precio * cantidad;
}

function calcularIva(subtotal, porcentajeIva) {
    return subtotal * porcentajeIva / 100;
}

function calcularTotal(subtotal, iva) {
    return subtotal + iva;
}

//IA: Me ayudó a hacer condicionales dentro de las funciones.
function calcularDescuento(importe) {
    if (importe > 100){
        return importe * 10 / 100;
    } else if (importe > 50){
        return importe * 5 / 100;
    } else {
        return 0;
    }   
}

function calcularEnvio(importe) {
    if (importe - descuento >= 50){
        return 0; 
    } else {
        return 4.95;
    }
}

//IA: Me ayudó a entender que debía guardar constantes después de las funcionas para después llamarlas.
const subtotal = calcularImporteLinea(precio, cantidad);
const iva = calcularIva(subtotal, porcentajeIva);
const total = calcularTotal(subtotal, iva);
const descuento = calcularDescuento(importe);
const envio = calcularEnvio(importe);

console.log(`Producto: ${producto}`);
console.log(`${cantidad} x ${precio.toFixed(2)} €`);
console.log(`Subtotal: ${subtotal.toFixed(2)} €`);
console.log(`IVA (${porcentajeIva}%): ${iva.toFixed(2)} €`);
console.log(`TOTAL: ${total.toFixed(2)} €`);
console.log(`Descuento: ${descuento.toFixed(2)} €`);
console.log(`Gastos de envío: ${envio.toFixed(2)} €`)
