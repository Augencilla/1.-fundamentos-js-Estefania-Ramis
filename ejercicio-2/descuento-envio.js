let importe = 53;
let descuento = 0;
let envio;
let total;

if (importe > 100) {
    descuento = importe * 10 / 100;
    console.log(`Descuento de 10%: ${descuento.toFixed(2)}€`)

} else if (importe > 50) {
    descuento = importe * 5 / 100;
    console.log(`Descuento de 5%: ${descuento.toFixed(2)}€`)

    } else {
    console.log("Sin descuento")
} 