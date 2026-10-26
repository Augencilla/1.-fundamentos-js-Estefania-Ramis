const productos = ["Teclado", "Ratón", "Monitor", "Auriculares", "Webcam"];
const precios   = [45.99, 19.90, 189.00, 59.95, 34.50];   // sin IVA
const stock     = [10, 25, 3, 0, 7];
const pedidoProductos  = ["Ratón", "Monitor", "Auriculares", "Teclado", "Altavoz"];
const pedidoCantidades = [2, 4, 1, 1, 1];
const porcentajeIva = 21;

//IA: Le pedí que revisara mi código para ver posibles fallos, me hizo arreglar calcularTotal
function calcularTotal(baseImponible, iva, envio) {
    return baseImponible + iva + envio;
}

function calcularEnvio(baseImponible) {
    if (baseImponible >= 50) {
        return 0;
    } else {
        return 4.95;
    }
}

function calcularIva(subtotal, porcentajeIva) {
    return subtotal * porcentajeIva / 100;
}

function calcularDescuento(importe) {
    if (importe > 100){
        return importe * 10 / 100;
    } else if (importe > 50){
        return importe * 5 / 100;
    } else {
        return 0;
    }   
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

function calcularImporteLinea(precio, cantidad) {
    return precio * cantidad;
}



function mostrarCatalogo() {
    console.log("=== CATÁLOGO INICIAL ===");

    for (let i = 0; i < productos.length; i++) {
        console.log(`${productos[i]} (${precios[i].toFixed(2)} €) - Stock: ${stock[i]}`);
    } 
    console.log("");
}

    

function procesarPedido(){
    let lineasTicket = [];
    let subTotal = 0;
    console.log (" === PROCESANDO PEDIDO === ");

    for (let i = 0; i < pedidoProductos.length; i++){
        const nombre = pedidoProductos[i];
        const cantidad = pedidoCantidades[i];
        const posicion = buscarProducto(productos, nombre);

        if (posicion === -1) {
            console.log(`AVISO: ${nombre} no existe en el catálogo`);
            

        }  else if (stock[posicion] === 0) {
            console.log(`AVISO: ${nombre} está agotado.`);
            
        } else {
 
        //IA: Me ayudó a sacar la variable para poder servir el stock de 3 y el aviso.
        let cantidadStock = cantidad;
        if (cantidad > stock[posicion]) {
            cantidadStock = stock[posicion];
            console.log(`AVISO: sólo hay ${stock[posicion]} uds de ${nombre}, se sirven ${cantidadStock}`)

        } else {
            console.log(`OK: ${cantidadStock} x ${nombre}`);
        }
    
        //IA: Me ayudó a guardar las líneas de ticket utilizando .push()
        let importeLinea = calcularImporteLinea(precios[posicion],cantidadStock);
        lineasTicket.push({producto: nombre,cantidad: cantidadStock,precio: precios[posicion],importe: importeLinea});

        subTotal += importeLinea;
        stock[posicion] -= cantidadStock;
    }
    }
    
    let descuento = calcularDescuento(subTotal);
    let baseImponible = subTotal - descuento;
    let iva = calcularIva(baseImponible, porcentajeIva);
    let envio = calcularEnvio(baseImponible);
    let total = calcularTotal(baseImponible, iva, envio);


    console.log("");



    console.log(" === TICKET === ");

    for (let i = 0; i < lineasTicket.length; i++) {
        let linea = lineasTicket[i];

        console.log(`${linea.cantidad} x ${linea.producto} (${linea.precio.toFixed(2)} €) = ${linea.importe.toFixed(2)} €`);
    }
    
    console.log(`Subtotal: ${subTotal.toFixed(2)} €`);
    console.log(`Descuento: -${descuento.toFixed(2)} €`);
    console.log(`Base imponible: ${baseImponible.toFixed(2)} €`);
    console.log(`IVA (21%): ${iva.toFixed(2)} €`);
    if (envio === 0) {
    console.log(`Envío: Gratis`);
    } else {
    console.log(`Envío: ${envio.toFixed(2)} €`);
    }
    console.log(`TOTAL: ${total.toFixed(2)} €`);

    console.log("");

    console.log(" === STOCK ACTUALIZADO === ");

    for (let i = 0; i < productos.length; i++) {
        console.log(`${productos[i]}: ${stock[i]}`);
    }


    let listaAgotados = [];

    for (let i = 0; i < productos.length; i++) {
        if (stock[i] === 0) {
            listaAgotados.push(productos[i]);
        }

    }
        //IA: Me ayudó a separar los productos agotados con una coma con .join
        if (listaAgotados.length > 0) {
            console.log(`Agotados: ${listaAgotados.join(", ")}`);
        } else {
            console.log(`Agotados: ninguno`);
}
}

mostrarCatalogo();
procesarPedido(pedidoProductos, pedidoCantidades)