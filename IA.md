# 1.-fundamentos-js-Estefania-Ramis

Ejercicio 1: No he usado IA.

Ejercicio 2: 

| Fecha | Ejercicio | Herramienta | Qué le pedí (prompt) | Qué me respondió | Qué hice con la respuesta |
|---|---|---|---|---|---|
| 14/10 | Ej. 2 | Claude | Le pedí, sin darme la solución, que me ayudase a
entender por qué mi condicional de gastos de envío no funciona. | Me ayudó a ver que no estaba aplicando bien la operación para calcular los gastos de envío ya que no estaba aplicando el. | Me di cuenta de que debía poner debía poner "importe - descuento". |

Ejercicio 3: 

| Fecha | Ejercicio | Herramienta | Qué le pedí (prompt) | Qué me respondió | Qué hice con la respuesta |
|---|---|---|---|---|---|

| 14/10 | Ej. 3 | Claude | Pedí un pseudocódigo para entender cómo recorrer el array y poder mostrar el catálogo. | Me explicó cómo hacer el bucle con la variable i. | Entendí que debía usar [i] para que recorriese el array de los productos, su precio y su stock |

| 18/10 | Ej. 3 | Claude | Le pedía ayuda con el bucle porque no entendía la lógica | Me preguntó que en qué valor debería empezar la variable | Entemdía que la variable debía empezar en 0, para que en el bucle se fuera sumando |

| 20/10 | Ej. 3 | Claude | Le pedí ayuda con la llamada de las constantes en el console.log | Me dijo que debía incluir posMax a la hora de mostrarlo | Al final probando como hacerlo entendí que debía ponerlo dentro de corchetes []. |

Ejercicio 4: 

| Fecha | Ejercicio | Herramienta | Qué le pedí (prompt) | Qué me respondió | Qué hice con la respuesta |
|---|---|---|---|---|---|

| 20/10 | Ej. 4 | Claude | Me costó mucho entender cómo hacer este ejercicio así que le pedí a la IA que me hiciera un Diagrama de flujo para estructurar el código. | INICIO
            │
     posicion ← -1
            │
  ┌──► ¿quedan productos? ──NO──────┐
  │         │ SÍ                    │
  │   ¿productos[i] == buscado?     │
  │      │ SÍ          │ NO         │
  │  posicion ← i      │            │
  │      │             │            │
  └──────┴─────────────┘            ▼
                           ¿posicion == -1?
                           │ SÍ        │ NO
                     "no existe"   mostrar datos
                           │           │
                           └─────┬─────┘
                                FIN
 | De esta manera entendí un poco mejor como estructurar la condicional y a ver que la posición debía empezar por -1, ya que 0 es una posición válida en un array.|

 | 20/10 | Ej. 4 | Claude | Le pregunté por qué no funcionaba la llamada al poner [i] | Me explicó que debía escribir el nombre de la variable dentro del array | Puse [posición] y ya funcionaba. |

Ejercicio 5: 

| Fecha | Ejercicio | Herramienta | Qué le pedí (prompt) | Qué me respondió | Qué hice con la respuesta |
|---|---|---|---|---|---|

| 20/10 | Ej. 5 | Claude | Le pregunté por qué no compilaba bien la llamada de las funciones | Me explicó que debía crear mis propias constantes | Después de las funciones fui creando las constantes de cada una para después poder llamarlas |

| 25/10 | Ej. 6 | Claude | Cómo podía hacer para servir los 3 productos que quedaban de stock si me pedían 4 y poner el aviso | Me dijo que creara una variable con la cantidad que se va a servir. Empieza siendo la cantidad pedida, y si es mayor que el stock la sustituyo por el stock y muestro el aviso. Después uso esa variable para el importe y para restar del stock. | Después de darle muchas vueltas conseguí crear la variable con la condicional correcta. |

| 25/10 | Ej. 6 | Claude | No entendía cómo guardar las líneas que se sirven para mostrar el ticket | Me explicó un poco mejor cómo funcina lo que decía la pista para el ticket el .push() | Hice un solo array de objetos, en el que cada objeto tiene producto, cantidad, precio e importe. |


| 25/10 | Ej. 6 | Claude | Le pregunté cómo podía separar los productos agotados con una coma "," | Me dijo que con un .join(",") | De esta manera pude sparar los productos agotados del array y si este está vacío lo compruebo con lenght y muestra "ninguno" |  

| 25/10 | Ej. 6 | Claude | Le pedí que revisara mi código por si tenía algún fallo aunque no se mostrara en consola | Encontró que calcularTotal solo recibía dos parámetros, así que el envío nunca se sumaba. Con este pedido no se nota porque el envío es gratis, pero con un pedido pequeño el total saldría 4,95 € más bajo. | Lo solucioné añadiendo el parámetro envío y sumandolo. |
