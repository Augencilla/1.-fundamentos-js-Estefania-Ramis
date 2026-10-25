const producto = "Monitor";
const precio = 189;      
const cantidad = 2;
const porcentajeIva = 21;
let importe = 30;
const productos = ["Teclado", "Ratón", "Monitor", "Auriculares", "Webcam"];
const precios   = [45.99, 19.90, 189.00, 59.95, 34.50];
const stock     = [10, 25, 3, 0, 7];
let nombre = "Webcam"

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

//IA: Me enseñó cómo hacer bucles dentro de las funciones y cómo colocar correctamente el return.
function contarAgotados(stock) {
    let agotados = 0;
    for (let i = 0; i < stock.length; i++) {
    if (stock[i] === 0) {
            agotados++;
        }
    }
    return agotados;
}

function productoMasCaro(productos, precios){
    let posMax = 0;
    for (let i = 0; i < precios.length; i++) {
    if (precios[i] > precios[posMax])
        posMax = i;
    }
    return productos[posMax];
}

function valorInventario(precios, stock) {
    let total = 0;
    for (let i = 0; i < productos.length; i++) {
        total = total + (precios[i] * stock[i]);
    }
    return total;
}

function buscarProducto(productos, nombre) {
        let buscado = nombre;
        let posicion = -1;  
    for (let i = 0; i < productos.length; i++) {  
    if (productos[i].toLowerCase() === buscado.toLowerCase()) {
        posicion = i;
        }    
    }
    return posicion;
}

//IA: Me ayudó a entender que debía guardar constantes después de las funcionas para después llamarlas.
const subtotal = calcularImporteLinea(precio, cantidad);
const iva = calcularIva(subtotal, porcentajeIva);
const total = calcularTotal(subtotal, iva);
const descuento = calcularDescuento(importe);
const envio = calcularEnvio(importe);
const agotados = contarAgotados(stock);
const caro = productoMasCaro(productos, precios);
const inventario = valorInventario(precios, stock);
const posicion = buscarProducto(productos, nombre);

console.log(`Producto: ${producto}`);
console.log(`${cantidad} x ${precio.toFixed(2)} €`);
console.log(`Subtotal: ${subtotal.toFixed(2)} €`);
console.log(`IVA (${porcentajeIva}%): ${iva.toFixed(2)} €`);
console.log(`TOTAL: ${total.toFixed(2)} €`);
console.log(`Descuento: ${descuento.toFixed(2)} €`);
console.log(`Gastos de envío: ${envio.toFixed(2)} €`)
console.log(`Productos agotados : ${agotados}`)
console.log(`El producto más caro es: ${caro}`)
console.log(`El valor del inverntario es: ${inventario}`)
console.log(`La posición de ${nombre} es ${posicion}`)
