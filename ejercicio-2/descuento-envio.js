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

//IA: Me ayudó a entender por qué no me calculaba bien los gastos de envío, debía poner "importe - descuento".
 if (importe - descuento >= 50 ) {
    envio = 0;
    console.log(`Gastos de envío: Gratis`)
       
} else {
    envio = 4.95;
    console.log(`Gastos de envío: ${envio.toFixed(2)}€`)
}

    total = importe - descuento + envio;
    console.log(`Total: ${total.toFixed(2)}€`)