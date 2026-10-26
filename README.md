# 1.-fundamentos-js-Estefania-Ramis

Explicación del Ejercicio 1: Ticket de un producto

1. Guardo los datos de partida
   
Primero creo cuatro constantes con la información de la compra: el nombre del producto ("Monitor"), el precio de una unidad sin IVA (189), cuántas unidades se compran (2) y el porcentaje de IVA (21). Uso const porque estos valores no van a cambiar.

2. Hago los cálculos
   
Subtotal: multiplico el precio por la cantidad. 189 × 2 = 378
IVA: calculo el 21 % del subtotal. Multiplico el subtotal por 21 y divido entre 100. 378 × 21 / 100 = 79.38
Total: sumo el subtotal y el IVA. 378 + 79.38 = 457.38

3. Muestro el ticket
   
Con console.log imprimo cada línea del ticket. Uso template strings (las comillas invertidas `) para meter las variables dentro del texto con ${...}, sin tener que concatenar con +.
Para que todos los importes salgan con 2 decimales uso .toFixed(2). 


Prueba con otros datos (3 ratones a 19.90 €)
Si cambio los datos a producto = "Ratón", precio = 19.90 y cantidad = 3, sale:
Producto: Ratón
3 x 19.90 €
Subtotal: 59.70 €
IVA (21%): 12.54 €
TOTAL: 72.24 €

Para ejecutar el programa, escribir en consola: node ejercicio-1/ticket.js 


Explicación del Ejercicio 2: Descuento y Envío

1. Preparo las variables

importe: lo que cuesta la compra. Lo cambio a mano para probar cada caso.
descuento: empieza en 0. Así, si no hay descuento, ya tiene el valor correcto y no tengo que darle valor en el else.
envio y total: las declaro vacías y les doy valor más adelante.

2. Calculo el descuento (primer if)

Miro el importe de mayor a menor:
Si es más de 100 €, el descuento es del 10 %.
Si no, pero es más de 50 €, el descuento es del 5 %.
Si no cumple ninguna de las dos, es 50 € o menos y no hay descuento.

3. Calculo el envío (segundo if)

Para decidir el envío no miro el importe original, sino el importe ya con el descuento (importe - descuento):
Si es 50 € o más (>= 50), el envío es gratis (envio = 0).
Si no, cuesta 4.95 €.

4. Calculo el total

total = importe - descuento + envio, y lo muestro con 2 decimales usando .toFixed(2).

El caso de 52 €: como pasa de 50, tiene un 5 % de descuento. Pero al aplicarlo se queda en 49.40 €, que es menos de 50, así que paga envío. Esto funciona porque en el segundo if miro importe - descuento y no importe.

Para ejecutar el programa, escribir en consola: node ejercicio-2/descuento-envio.js


Explicación del Ejercicio 3: Explorar el catálogo

1. Mostrar el catálogo
   
Recorro todos los productos y, para cada uno, miro su stock:
Si es 0, escribo (AGOTADO).
Si no, escribo cuántas unidades quedan, por ejemplo (10 uds).
Los precios salen con 2 decimales gracias a .toFixed(2).

2. Contar los agotados (patrón contador)
   
Empiezo con agotados = 0. Recorro el stock y, cada vez que encuentro un 0, sumo 1 con agotados++. Al terminar el bucle, la variable tiene el número de productos agotados: 1 (los Auriculares).

3. Buscar el más caro (patrón máximo)

Aquí sigo la pista del enunciado: no guardo el precio más alto, sino su posición (posMax).
Empiezo suponiendo que el más caro es el de la posición 0 (posMax = 0).
Recorro los precios y, si encuentro uno mayor que el que tengo guardado (precios[i] > precios[posMax]), me quedo con esa nueva posición.
Al final, posMax vale 2. Con esa posición saco el nombre (productos[2] → Monitor) y el precio (precios[2] → 189.00).
Si solo hubiera guardado el precio (189), no sabría de qué producto es. Por eso guardo la posición.

4. Valor del inventario (patrón acumulador)
   
Empiezo con total = 0 y, en cada vuelta, le sumo el precio por el stock de ese producto
Los productos agotados suman 0, así que no hace falta tratarlos aparte.

Para ejecutar el programa, escribir en consola: node ejercicio-3/catalogo.js



Explicación del Ejercicio 4: Buscar un producto

1. Preparo la búsqueda

buscado: el nombre que quiero encontrar. Lo cambio a mano para probar cada caso.
posicion = -1: empiezo suponiendo que no lo he encontrado. Uso -1 porque ninguna posición real de un array puede ser negativa (empiezan en 0), así que -1 significa claramente “no está”.

2. Recorro el catálogo buscándolo

Con un for voy posición por posición comparando cada nombre con el que busco. Si coinciden, guardo esa posición en posicion = i.
Si el bucle termina sin encontrar nada, posicion sigue valiendo -1, que es el valor con el que empezó.

3. Muestro el resultado

Si posicion es -1, muestro el aviso de que no existe.
Si no, uso esa posición para sacar el precio y el stock de los otros dos arrays: precios[posicion] y stock[posicion]. Es la misma idea de arrays paralelos del ejercicio 3.

4. Reto opcional: no distinguir mayúsculas

Paso los dos textos a minúsculas con .toLowerCase(). Así "monitor", "MONITOR" y "Monitor" se convierten en "monitor" y coinciden con el producto.

Para ejecutar el programa, escribir en consola: node ejercicio-4/buscar.js 


Explicación del ejercicio 5: Refactorizar en funciones.

Cogí el código de los ejercicios 1 a 4 y metí cada cálculo dentro de una función. Cada función recibe unos datos (los parámetros, entre paréntesis), hace sus cálculos y devuelve un resultado con return.
La función no escribe nada en pantalla: solo devuelve el valor. Así puedo usar ese resultado donde quiera, ya sea para mostrarlo, sumarlo a otra cosa o pasarlo a otra función. Los console.log van fuera, al final del archivo.

Mis funciones:
- calcularImporteLinea(precio, cantidad): multiplica el precio por la cantidad. (189, 2) → 378
- calcularIva(subtotal, porcentajeIva): calcula el IVA. (378, 21) → 79.38
- calcularTotal(subtotal, iva): suma subtotal e IVA. Esta no la pedían, pero es útil.
- calcularDescuento(importe): aplica las reglas del ejercicio 2 (10 %, 5 % o 0). En vez de guardar el descuento en una variable, hago return directamente en cada caso. (120) → 12
- calcularEnvio(importe): devuelve 4.95 o 0.
- contarAgotados(stock): el patrón contador del ejercicio 3. → 1
- productoMasCaro(productos, precios): el patrón máximo. Guardo la posición y devuelvo el nombre. → "Monitor"
- valorInventario(precios, stock): el patrón acumulador. → 1765.9
- buscarProducto(productos, nombre): la búsqueda del ejercicio 4. Devuelve la posición, o -1 si no lo encuentra. También funciona con mayúsculas y minúsculas.

Al final llamo a cada función, guardo lo que devuelve en una constante y muestro esas constantes con console.log. 

Para ejecutar el programa, escribir en consola: node ejercicio-5/funciones.js 


Explicación del Obligatorio: Tienda online en consola

Copié el catálogo y el pedido. Usan arrays paralelos, o sea, la posición i de productos, precios y stock es siempre el mismo producto (al principio esto me lió un poco). Puse también una constante porcentajeIva = 21 para no escribir el 21 a mano.

1. Funciones de cálculo

Hice varias funciones pequeñas que devuelven un resultado con return:
buscarProducto: busca el producto comparando en minúsculas. Devuelve su posición, o -1 si no existe.
calcularImporteLinea: precio × cantidad.
calcularDescuento: 10 % si pasa de 100 €, 5 % si pasa de 50 €, y si no, 0. Tuve que poner primero la de 100 porque si no, todo se quedaba en el 5 % (esto me costó verlo).
calcularIva, calcularEnvio (gratis desde 50 €, si no 4,95 €) y calcularTotal.

2. Mostrar el catálogo

Con un for enseño cada producto con su precio y su stock.

3. Procesar el pedido

En procesarPedido() recorro el pedido y busco cada producto:
Si es -1, no existe y muestro un aviso.
Si el stock es 0, está agotado y tampoco se añade.
Si no, lo sirvo. Si piden más de lo que hay, sirvo solo lo que queda y aviso de que “solo hay X uds”.
Cuando se sirve una línea, calculo su importe, la guardo en lineasTicket con .push(), la sumo al subtotal y resto el stock.

4. El ticket

Después calculo en orden el descuento, la base, el IVA, el envío y el total, porque cada uno depende del anterior. Luego lo muestro todo, y si el envío es 0 pongo “Gratis”.

5. Stock y agotados

Enseño el stock actualizado y la lista de productos que han quedado a 0, o “ninguno” si no hay.

Resultado:

Se sirven 2 ratones, 3 monitores (en vez de 4) y 1 teclado. Los auriculares están agotados y el altavoz no existe. El subtotal es 652,79 €, así que se aplica el 10 %: la base queda en 587,51 €, el IVA en 123,38 €, el envío es gratis y el total sale 710,89 €, que coincide con el resultado esperado. Monitor y Auriculares quedan agotados.


Para ejecutar el programa, escribir en consola: node obligatorio/tienda.js