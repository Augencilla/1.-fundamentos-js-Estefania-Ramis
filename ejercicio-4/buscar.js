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
