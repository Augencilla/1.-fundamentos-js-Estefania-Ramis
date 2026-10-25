const productos = ["Teclado", "Ratón", "Monitor", "Auriculares", "Webcam"];
const precios   = [45.99, 19.90, 189.00, 59.95, 34.50];
const stock     = [10, 25, 3, 0, 7];

let buscado = "Ratón";
let posicion = -1;

for (let i = 0; i < productos.length; i++) {
    if (productos[i] === buscado) {
        posicion = i;
    
}
}

//IA: Me ayudó a ver que la posición debía empezar por -1, ya que 0 es una posición válida en un array.
if (posicion === -1) {
        console.log (`Posición: ${posicion}. ${buscado} no existe en el catálogo.`)    

//IA: Intentaba poner [i] en la llamada de las variables pero no funcionaba, la IA me explicó que debía escribir el nombre de la variable [posición].
} else {
        console.log(`${buscado} está en la posición ${posicion}. Precio: ${precios[posicion].toFixed(2)} €. Stock: ${stock[posicion]}`)      

}
