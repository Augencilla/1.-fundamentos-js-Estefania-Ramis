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

