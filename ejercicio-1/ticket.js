const producto = "Monitor";
const precio = 189;      
const cantidad = 2;
const porcentajeIva = 21;


let subtotal = precio * cantidad;
let iva = subtotal * porcentajeIva / 100;
let total = subtotal + iva;

console.log(`Producto: ${producto}`)
console.log(`${cantidad} x ${precio.toFixed(2)} €`)
console.log(`Subtotal: ${subtotal.toFixed(2)} €`)
console.log(`IVA (21%): ${iva.toFixed(2)} €`)
console.log(`TOTAL: ${total.toFixed(2)} €`)
