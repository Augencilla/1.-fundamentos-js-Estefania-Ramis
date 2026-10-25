const productos = ["Teclado", "Ratón", "Monitor", "Auriculares", "Webcam"];
const precios   = [45.99, 19.90, 189.00, 59.95, 34.50];
const stock     = [10, 25, 3, 0, 7];

//IA: Me ayudó a entender como hacer el bucle teniendo en cuenta los arrays y su posición para recorrerlos con [i].
for (let i = 0; i < productos.length; i++) { 
if (stock[i] === 0){
        console.log(`${productos[i]} - ${precios[i].toFixed(2)} € (AGOTADO)`);
    }    else {
        console.log(`${productos[i]} - ${precios[i].toFixed(2)} € (${stock[i]} uds)`);
     }   

}

//IA: Me ayudó a ver que estaba poniendo mal la variable agotados, debía empezar con un valor 0, para que en el bucle se fuera sumando.
let agotados = 0;
for (let i = 0; i < stock.length; i++) {

        if (stock[i] === 0) {
                agotados++;
        }
        }

        console.log(`Productos Agotados: ${agotados}`);


//IA: Me ayudó a escribir bien el console.log y ver que debía poner posMax en la llamada de las constantes.
let posMax = 0;
for (let i = 0; i < precios.length; i++) {

        if (precios[i] > precios[posMax])
                posMax = i;

}
        console.log(`Producto más caro: ${productos[posMax]} (${precios[posMax].toFixed(2)} €)`)

let total = 0;
for (let i = 0; i < productos.length; i++) {
        
        total = total + (precios[i] * stock[i]);

}
        console.log(`Valor del inventario: ${total.toFixed(2)} €`)

