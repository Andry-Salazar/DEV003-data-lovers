
# En este repositorio realizamos una interfaz para que el usuario pueda acceder a una base de datos de los campeones del popular juego MOBA "League of Legends"

En la primera etapa del proyecto me dediqué a revisar la documentación e investigar para así crear un primer prototipo.

Para crear el wireframe me base en la pagina oficial del juego, y para los criterios de usuarios en los comentarios de foros del juego (facebook).
[Protitpos Figma](https://www.figma.com/file/gxCEhyp29jhMQXTKlFcNjK/LOL-DATA-LOVERS?node-id=0%3A1&t=fx7mvI94WnFML9iI-0 "Prototipos Figma")

De acuerdo a lo investigado pude concluir que la pagina debe ser sencilla, amigable, debe mostrar la información relevante para los jugadores de forma rapida, y tambien debe permitir acceder a otros datos no tan relevantes para usuarios mas experimentados.

#### Como jugador de LOL quiero quiero poder navegar en una interfaz agradable y familiar, y así poder navegar fácilmente

**Criterios de aceptación:**
- El diseño debe tener como tema el juego
- Los colores usados deben ser similares a los del juego

**Definición de terminado:**

Cuando tengamos un diseño que al usuario le evoque fácilmente al juego, y cumplamos con los principios básicos de diseño visual.

Una vez terminados los diseños, pasé al maquetado simple de los mismos,  crear los template en HTML y  darle estilos en CSS, luego cargar de forma dinámica los template y su funcionalidad con JS. 

#### Como jugador de LOL quiero un listado para ver campeones

El objetivo es poder observar la data relevante de varios campeones al mismo tiempo, en este caso el diseño es mostrar la data en tarjetas unicas por cada campeon. 

**Criterios de aceptación:**
- Debe haber varios filtros que puedan ser manipulados por el usuario.
- La data debe poder ordenarse de forma ascendente y descendente.

**Definición de terminado:**
-El render de la pagina principial, contiene una barra de navegación con los filtros de cada tipo de campeón, los cuales te redireccionan a la vista de los campeones filtrados por cada tipo. 
-El render de la pagina de campeones, muestra la data filtrada por el tipo de campeon(asesinos, luchadores, magos, soportes, tanques....), mostrando la data en tarjetas de detalle único.
-Contiene un select, que permite ordenar a los campones de forma ascendente y descendente.
-Puede seleccionar un campeon y poder visualizar el detalle de sus caracteríscas. 

#### Como jugador de LOL quiero ver el detalle del campeon seleccionado

El objetivo es poder observar las características de un campeon seleccionado.

**Criterios de aceptación:**
-Renderizar la vista del detalle de un campeon y mostrar su características.
-Crear un función que cálcule el average de un campeón y cargarlo en la vista del detalle. 