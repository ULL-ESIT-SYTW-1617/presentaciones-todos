# 3. Pixi js

Pixi es un motor de renderizado 2d muy potente, lo que significa que te ayuda a mostrar y animar gráficos interactivos, lo que facilita la creación de juegos en javascript y HTML5 sin tener que acceder directamente a la API de WebGL.

Pixi js también hace uso del elemento HTML5 canvas para la creación de gráficos interactivos.

## Instalación

Este framework permite su instalación de varias formas:

* Desde su propia web : [pixijs](http://www.pixijs.com/)

O bien mediante la línea usando bower o nodejs:

* Bower install:

  ~~~Bash
  $> bower install pixi.js
  ~~~
* NPM install:

  ~~~Bash
  $> npm install pixi.js
  ~~~
* A través de git:

  ~~~Bash
  git clone git@github.com:pixijs/pixi.js.git
  ~~~

  Además permite su uso sin haberlo instalado via cdnjs añadiendolo en el html:

  ~~~HTML
  <script src="https://cdnjs.cloudflare.com/ajax/libs/pixi.js/4.2.2/pixi.min.js"></script>
  ~~~

## Características

Actualmente este framework posee las siguientes características:

1. Renderizado WebGL.
2. Rederizado de canvas
3. Gráficos a pantalla completa
4. Soporte para textura atlas
5. Autodetecta que renderizador debe usar
6. Permite la interacción total con el ratón y multi-touch
7. Soporta texto
8. Soporta texto BitmapFont
9. Soporta texto multilínea
10. Soporta plugins

## Utilización

Para que nuestra aplicación hecha utilizando pixi pueda funcionar debe de estar alojada en un servidor, sino no funcionará.

Para que poder utilizar pixi primero debemos descargarnos el framework mediante alguno de los métodos explicados anteriormente, una vez descargado podremos comenzar a crear nuestro juego con un fichero index.html que contenga lo siguiente:

~~~html
<!doctype html>
<meta charset="utf-8">
<title>Hello World</title>
<body>
<script src="../pixi.js/bin/pixi.js"></script>
<script>

//Test that Pixi is working
console.log(PIXI);

</script>
</body>
~~~

El siguiente paso sería la creación de un área rectangular en la que podamos dibujar nuestras imágenes. Para hacer esta tarea Pixi tiene un renderizador que lo crea para nosotros, generando un elemento ```<canvas>```.

~~~javascript
//Create the renderer
var renderer = PIXI.autoDetectRenderer(256, 256);

//Add the canvas to the HTML document
document.body.appendChild(renderer.view);
~~~

A continuación necesitamos crear un contenedor especial de Pixi que va a ser usado como contedor principal que va a alojar todo lo que queramos que Pixi muestre.

~~~javascript
//Create a container object called the `stage`
var stage = new PIXI.Container();
//Tell the `renderer` to `render` the `stage`
renderer.render(stage);
~~~

Con esto habremos constuido nuestro elementos canvas de 256x256 pixels y lo hemos añadido a nuestro documento HTML.

La función ```autoDetectRenderer()``` elige entre la API de canvas o WebGL para renderizar los gráficos dependiendo de cual esté disponible, aunque la opción por defecto es usar WebGL, sin embargo si quieres forzar a que renderice usando la API de Canvas puedes hacer sustiyéndo el método anterior por:

~~~javascript
  renderer = new PIXI.CanvasRenderer(256, 256);
~~~
