# League of Legends (LoL)

League of Legends es un juego de estrategia que se juega en línea y que es
multijugador. Tiene millones de jugadores en todo el mundo y, por ahora es uno
de los _esports_ de referencia y que más público atraen.
Durante el juego, los equipos trabajan juntos para lograr una
condición de victoria que sucede al destruir la estructura central en la base
del equipo enemigo.

En todos los modos de juego, los jugadores controlan
personajes llamados **campeones**, que son elegidos o asignados en cada partida,
y que tienen un conjunto de habilidades únicas. Es con esos campeones con los
que se juega toda la partida. Para entender un poco más del juego puedes entrar
a este [link](https://www.redbull.com/es-es/5-consejos-empezar-jugar-league-of-legends#targetText=Lo%20primero%20que%20tienes%20que,donde%20lucha%20cinco%20contra%20cinco).

## Hallazgos

* Para poder elegir a los campeones que van a combatir en una partida, es
  importante para el jugador de LoL poder saber cuál es el rol de cada campeón.
* Adicionalmente al rol, cada campeón tiene distintos niveles de ataque, por
  ejemplo dentro de los _tanques_ hay campeones con distintos niveles de ataque,
  defensa, velocidad o poder. Es importante para el jugador de LoL poder saber
  quiénes son los más poderosos o lo más defensivos, para poder elegir al mejor
  grupo de campeones para una partida.estarán
  en tu equipo y que lucharán contra el enemigo.
* Los campeones tienen distintos tipos de habilidades, algunas inherentes
  (básicas/principales) a ellos y otras (pasivas/secundarias) que pueden ser
  adquiridas. En ambos casos, estas habilidades pueden ir desarrollándose hasta
  alcanzar su máximo nivel.
* Los campeones tienen distintos roles en los que se desempeñan:

  - Luchador: Especializado en combate cercano. Combinnan objetos de daño con
    objetos de aguante. También se los conoce como _offtanks_.
  - Tirador: Especializado en ataque a distancia. Popularmente conocido como
    _AD Carry_ del inglés _attack damage carry_ o carreador de daño de ataque.
  - Mago o Hechicero: Especializado en habilidades y daño mágico. Popularmente
    conocido como _AP Carry_ del inglés _ability power carry_ o carreador de
    poder de habilidad.
  - Asesino: Especializado en emboscar al enemigo, atacando por sorpresa y
    retirándose rápidamente. Su misión es eliminar al jugador más importante del
    equipo enemigo (generalmente el tirador) aunque ello suponga morir él
    también.
  - Tanque: Especializado en resistencia. Su misión es absorber la mayor
    cantidad de daño posible e iniciar las peleas.
  - Apoyo o Soporte: Especializado en apoyar a su equipo y aportar visión en el
    mapa mediante guardianes de visión (_wards_).

##
 En este repositorio realizamos una interfaz para que el usuario pueda acceder a una base de datos de los campeones del popular juego MOBA "League of Legends"

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