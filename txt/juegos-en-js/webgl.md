# 2. OpenGl y WebGl

## OpenGl

OpenGl es un estandar que define una API multilenguaje y multiplataforma para escribir aplicaciones con gráficos en 2d o 3d. Tiene más de 250 funciones diferentes que pueden usarse para dibujar escenas tridimensionales complejas a partir de primitivas simples como pueden ser puntos líneas a triángulos, es por ello que es muy usada en realidad virtual y en el desarrollo de videojuegos.

A partir de este estandar de especificaciones los fabricantes de hardware crean implementaciones, que son bibliotecas de funciones que se ajustan a los requisitos de la especificación, utilizando aceleración hardware cuando es posible.

OpenGl tiene dos propósitos iniciales que son:

* Ocultar la complejidad de la interfaz con las diferentes tarjetas gráficas presentando al programador una API única y uniforme.
* Ocultar las diferentes capacidades de las diversas plataformas hardware, requiriendo que todas las implementaciones soporten la funcionalidad completa de OpenGL (utilizando emulación software si fuese necesario).

Cabe resaltar que es una API a bajo nivel y que ha influido en el desarrollo de las tarjetas gráficas proporcionando un nivel básico de funcionalidad que actualmente es común en el hardware comercial.

El enlace entre esta API y la programación de videojuegos en javascript consiste en que muchas APIs para la creación de videojuegos en javascript están basadas en OpenGL, por lo que es probable que aunque no directamente al desarrollar un juego en dicho lenguaje estemos usando esta API.

## WebGl

WebGl es una API basada en OpenGl ES 2.0(OpenGL ES es una versión simplificada de la existente librería de OpenGL para
dispositivos con limitada capacidad de procesamiento y memoria) que permite la reprensetanción de gráficos en 2D y 3D en navegadores que soporten canvas sin necesidad de usar plugins.

Los programas desarrollados con WebGl están formado por el código de control escrito en javascript y por el código de efectos especiales que es ejecutado por la GPU. Los elementos WebGl pueden ser usados junto con otros elementos HTML.

### Uso de WebGl

Lo primero que hay que hacer es colocar nuestro elemento canvas en el archivo HTML:

~~~HTML
<canvas id="canvas" width="600" height="300" style="background:#999">
        Este texto se mostrará para los navegadores no compatibles con canvas
   </canvas>
~~~

En segundo lugar debemos preparar el contexto WebGl en nuestro archivo javascript:

~~~javascript
var gl; // Una variable global para el contexto WebGl

function start() {
  var canvas = document.getElementById("glcanvas");

  // Inicializa el contexto WebGL
  gl = initWebGL(canvas);

  // Solo continua si webgl está disponiblre y funcionando
  if (!gl) {
    return;
  }

  // Establece el color en negro
  gl.clearColor(0.0, 0.0, 0.0, 1.0);
  // Enable depth testing
  gl.enable(gl.DEPTH_TEST);
  // Near things obscure far things
  gl.depthFunc(gl.LEQUAL);
  // Clear the color as well as the depth buffer.
  gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
}
~~~

A continuación debemos crear el contexto una vez esta preparado:

~~~javascript
function initWebGL(canvas) {
  gl = null;

  // Try to grab the standard context. If it fails, fallback to experimental.
  gl = canvas.getContext("webgl") || canvas.getContext("experimental-webgl");

  // If we don't have a GL context, give up now
  if (!gl) {
    alert("Unable to initialize WebGL. Your browser may not support it.");
  }

  return gl;
}
~~~

Una vez hecho estos pasos el resultado será una caja negra esperando a que se le dibuje el contenido de nuestros juegos.

Enlaces interés:

* DOOM3: [Ejemplo y análisis de juego desarrollado con WebGl](https://upcommons.upc.edu/bitstream/handle/2099.1/15478/82457.pdf)
* DOOM3: [juego](http://www.minijuegos.com/juego/doom-i7363)
* Documentación y ejemplo: [WebGl](https://dev.opera.com/articles/introduction-to-webgl-part-1/)
