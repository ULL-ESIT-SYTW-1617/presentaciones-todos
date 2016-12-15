# 5. Componentes destacados

En esta sección se dan a conocer algunos de los elementos más destacables de BootStrap, sin embargo son muchos más los que este framework nos ofrece. Para obtener información de todos ellos diríjase a la [documentación oficial.](http://getbootstrap.com/components)
Comenzaremos describiéndolos siguiendo un orden lógico según su posible posicionamiento en nuestra página web.


## Navbar
Las barras de navegación son componentes que nos sirven como cabecera de navegación para nuestra página web.
Por defecto las barras de navegación se extienden horizontalmente en dispositivos con un ancho de pantalla razonable y se colapsan en aquellos con pantallas de anchura reducida.
Existen multitud de tipos como por ejemplo barras de navegación por iconos, de estilo formulario para buscadores, como botones por ejemplo para login y singin...
También podemos modificar su comportamiento y posición referenciando unas u otras clases del css de BootStrap.
Ejemplo de una barra de navegación estilo inverted (colores invertidos) con separadores y hovers en un dispositivo de __pantalla reducida__:

![Ej_reducido](http://1.bp.blogspot.com/-Q9l3FL-2etQ/U1J51kqF8TI/AAAAAAAAALY/PfvwfLSW5Ks/s1600/bootstrap-navbar-search-expanded.png)

Ejemplo en una pantalla de __ancho razonable__:

![Ej_amplio](http://devgirl.org/wp-content/uploads/2012/08/Screen-Shot-2012-08-06-at-6.53.07-AM.png)

____
## Button
BootStrap nos ofrece siete estilos principales de botones:

* Por defecto
* Primario
* Éxito
* Información
* Advertencia
* Peligro
* Enlace

La visualización de cada uno de ellos se puede apreciar a continuación:

![Botones_BootStrap](http://img.creativosonline.org/blog/wp-content/uploads/2013/11/botones-bootstrap.jpg)


Es útil disponer de botones ya formateados, sin embargo, dónde reside su potencia es en la posibilidad de realizar agrupaciones de botones de formas ya predefinidas y estilizadas que sin duda aportarán una gran componente tanto visual como funcional a nuestros sitios web. Dichas agrupaciones se pueden configurar de diversas formas, ejemplo de ellas los botones en las barras de navegación ya sean laterales o verticales.
Otra de las funciones más representativas en lo que a botones se refiere es la compuesta por el siguiente subapartado:


#### Dropdown Button
Este tipo de botones, útil para diversas situaciones aunque mayormente utilizado para las barras de navegación estilo menú, nos permiten desplegar el botón de la forma que preferamos, ya sea descendente, ascendente... pudiendo agrupar en su despliegue otros elementos como pueden ser separadores, contenedores, entradas, otros botones...
Veamos un ejemplo de un Dropdown Button:

![Dropdown_Button](http://www.jqueryscript.net/images/Beautiful-jQuery-Drop-Down-Menu-Plugin-For-Bootstrap-Dropdown-on-Hover.jpg)

Como podemos apreciar en la imagen superior, cada uno de los botones de la parte superior cuenta con una flecha que en este caso indica que se trata de botones Dropdown con despliegue hacia abajo. En el segundo de los botones (Action) podemos apreciar que se trata de un botón Dropdown de tipo Primario y que cuenta con cuatro botones adheridos y un separador entre el tercer y cuarto botón.

____
## Jumbotron
Este elemento es uno de los más empleados en las páginas web actuales, aunque normalmente substituyendo el fondo predefinido por una imagen. Si decidimos no hacer ninguna modificación sobre el estilo, el Jumbotron nos proporciona un contenedor con un fondo gris claro y un botón embedido de tipo primario y con el tamaño aumentado. Lógicamente podremos modificar todo ello añadiendo texto, modificando el fondo e incluso el tipo de botón. En el siguiente ejemplo podemos ver un Jumbotron que sería la parte con fondo gris claro y se aprecia un header, un párrafo y a mayores el botón que la clase nos ofrece de forma predefinida:

![Jumbotron_default](http://www.ryanwright.me/sites/default/files/images/cookbooks/bootstrap/a1/jumbtron-page.png)

____
## Input groups
Los grupos de inputs nos permiten extender el control de los formularios comunes añadiendo texto y/o botones antes, después o en ambos lados de cualquier texto basado en <input>.
A la hora de crear nuestros propios grupos de inputs deberemos tener en cuenta que es de especial importancia la correcta asignación de las etiquetas para después no vernos envueltos en un verdadero lío a la hora de darle funcionalidad da nuestro html. Como ocurre con todos los elementos descritos, podremos modificar su apariencia a través de hojas de estilo personalizadas, sin embargo, los que BootStrap ofrece de forma predefinida se adecúan al estilo actual de los sitios web y sin duda nos ahorrarán tiempo de codificación.
Podemos ver en la siguiente imagen ejemplos de los mismos:

![Input_Groups](http://csharpexamples.com/wp-content/uploads/2014/07/bootstrap-various-input-examples.png)

____
## Labels
Al igual que en el caso de los botones, BootStrap nos ofrece etiquetas ya estilizadas siguiendo los mismos siete principios de los anteriores, es decir:

* Por defecto
* Primario
* Éxito
* Información
* Advertencia
* Peligro
* Enlace



____
## Badges
Mediante este componente se nos ofrece una manera realmente sencilla de destacar nuevos elementos, o elementos no leídos por ejemplo. Sus ejemplos de uso pueden ser muchos, pero en todos ellos se sigue una misma filosofía que es poder proporcionar a una sección concreta un valor numérico que podremos controlar proporcionando funcionalidad a través de JavaScript por ejemplo. BootStrap nos da a escoger diferentes tipos de estilo para los mismos. Los más utilizados se pueden ver en la siguiente imagen:

![Badges_comunes](http://librosweb.es/img/bootstrap_3/componentes-badges-adaptados.png)


____
## Thumbnails
La magia de este componente reside en extender el sistema de grilla de BootStrap para ofrecernos una sencilla inclusión de contenido media en nuestros sitios web adecuándolo de una manera intuitiva al resto del contenido e impidiendo que como suele suceder, introducir un vídeo en un pequeño marco en una zona concreta de nuestra página se vuelva un desafío.
Con apenas diez líneas de código podremos crear una grilla media como la que sigue:

![Thumbnail_portf](http://themeandphoto.com/wp-content/uploads/2014/05/portfolio-thumbnail-back.png)

Lógicamente quedaría a nuestro cargo la inclusión de las imágenes o vídeos así como el contenido descriptivo de los mismos, inclusión de botones o lo que creamos conveniente para dejar nuestro sitio web como deseamos que lo vean los visitantes al mismo.


____
## Progress bars
Las barras de progreso como su nombre indica nos permiten indicar el progreso de una determinada acción. Existen varios tipos y estilos para las mismas y en cada una de ellas podremos modificar los parámetros principales como son:

* Valor inicial
* Valor actual
* Valor máximo
* Estilo de barra
* Elementos embedidos

Veamos ejemplos de las mismas en la siguiente imagen:

![Progress_bars](http://csharpexamples.com/wp-content/uploads/2014/07/bootstrap-progress-bars.png)

____
## Pagination
La paginación nos permite incluir de una forma muy rápida una referencia para el visitante acerca de la página en la que se encuentra actualmente así como una forma de acceder a las demás páginas de nuestro sitio web. Existen varios tipos, principalmente la paginación por números en la que se muestran todas las referencias a cada una de las páginas como números y por otro lado la paginación "previous, next" en la que se muestran accesos para visualizar la página anterior o siguiente respectivamente. A continuación se muestra un ejemplo visual de cada uno de ellos:
![Paginación](http://jquery-plugins.net/image/plugin/keyboard-shortcuts-for-pagination.png)

Como con todos los elementos, podemos a posteriori combinar diferentes estilos o incluso componentes. A continuación podemos ver un ejemplo utilizando en un mismo item los citados anteriormente en este capítulo:

![Pagination_combinada](http://www.bitsandcodes.com/upload/img/post/jquery-pagination-plugin-optimized-for-bootstrap-thumbnail.png)

____
## Alerts
Las alertas nos proveen mensajes feedback que podremos incorporar en los casos que consideremos oportunos, por ejemplo cuando se deja en blanco un campo requerido de uno de nuestros formularios o cuando se introduce un email incorrecto, etc.
Realmente las alertas en BootStrap no cuentan con clases por defecto, sin embargo sí con clases modificadoras que nos permiten imprimir nuestras alertas de una manera más personalizada dependiendo del tipo de mensaje.
