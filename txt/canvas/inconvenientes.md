
# 9. Inconvenientes


### Polémica intelectual 

El elemento canvas fue creado con la empresa Apple, por tanto esta empresa era propietaria de la ingeniería que daba soporte 
a este elemento y por tanto de las patentes de la misma.
Al ser propiedad de Apple surgió la polémica sobre la aceptación del elemento canvas en el estándar de Html5.

Finalmente Apple abrió la licencia de uso, liberando la propiedad intelectual y permitiendo su uso de formato abierto.

Gracias a ello se incorporó finalmente **canvas** dentro del nuevo estándar de HTML5.



### Accesibilidad

La accesibilidad es el principal inconveniente del elemento canvas, 
ya que todo documento en la Web debería poder ser descrito con un objeto DOM.

Algunos dispositivos como los lectores de pantalla, navegadores de texto, etc... necesitan tener acceso al DOM 
para poder cargar el documento con sentido para las personas con algún tipo de discapacidad.


* Solución: **Estándar W3C**

En el estándar W3C se ha añandido el elemento canvas ([wiki W3C](https://www.w3.org/wiki/HTML/Elements/canvas)) 
ya que actualmente se está trabajando para que el lienzo en el que se dibuja sea todo lo accesible que debería.

Como posibles soluciones se han añadido las siguientes:

- Incluir un 'alt' con la descripción del elemento, qué contiene y cuál es su funcionalidad.

- Utilización del tabulador como sustituto al click del ratón.

- Si el usuario está utilizando un lector de pantalla, el nombre del dibujo canvas 
va a ser leído en voz alta cuando el foco se mueve a la zona del lienzo.

- Eventos de cambio de enfoque en **Juegos**: 
    - Función "**drawFocus()**"
    - Función "**drawFocusIfNeeded()**"

- Marcar las regiones afectadas, cada vez que un elemento se mueve se dibuja un recuadro transparente sobre él.

- ...


### Referencias W3C

- [Canvas Accessibility - Past, Present and Future](https://www.w3.org/Talks/2014/0510-canvas-a11y/#1)
- [Canvas - HTML accessibility task force Wiki](https://www.w3.org/WAI/PF/HTML/wiki/Canvas)
- [HTML/Elements/canvas - W3C Wiki](https://www.w3.org/wiki/HTML/Elements/canvas)