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

La función ```autoDetectRenderer()``` elige entre la API de canvas o WebGL para renderizar los gráficos dependiendo de cual esté disponible, aunque la opción por defecto es usar WebGL, sin embargo si quieres forzar a que renderice usando la API de Canvas puedes hacer sustiyendo el método anterior por:

~~~javascript
  renderer = new PIXI.CanvasRenderer(256, 256);
~~~

## Sprites

Los sprites son basicamente imágenes que se pueden controlar con código, se puede controlar su tamaño posición y otras propiedades que lo hacen muy útil para hacer gráficos interactivos y animados. Saber utilizar los sprites es una de las cosas más importantes a la hora de desarrollar juegos con Pixi.

Este framework nos permite tres formas de crear los sprite:

1. A partir de una imagen.
2. A partir de una sub-imagen de un conjuto de imagenes denominado tileset(contiene todas las imágenes que necesitamos en nuestro juego).
3. A partir de una textura atlas(un fichero JSON que define el tamñano y la posición de una imagen en un tileset).

Para poder usar una imagen como sprite primero Pixi debe renderizarla en la GPU mediante la utilización de la API de WebGL, para que se pase a un formato con el que la GPU pueda trabajar,  la imagen resultante de este proceso se denomina textura. Para hacer que todo funcione de forma eficiente Pixi usa una caché de texturas donde almacena y referencia todos las texturas que van a necesitar nuestros sprites.

Lo primero que debemos hacer para poder crear un sprite es cargar la imagen con la que deseamos crear nuestro sprite y una vez cargada covertirla en una textura esto se hace de la siguiente forma:

~~~javascript
PIXI.loader
.add("images/anyImage.png")
.load(setup);

function setup() {
  var sprite = new PIXI.Sprite(
    PIXI.loader.resources["images/anyImage.png"].texture
  );
}
~~~

Una vez cargada una imagen y usada para crear un sprite debemos hacer dos cosas para que sea visible en el canvas:

* Añadir el sprite al Pixi stage(contenedor donde cargaremos los gráficos de nuestro juego).

~~~javascript
  stage.addChild(sprite);
~~~

* Llamar al renderizador de Pixi para que renderice el stage.

~~~javascript
  renderer.render(stage);
~~~

Ante de hacer los dos pasos anteriores podríamos haberle cambiado propiedades al sprite:

* Se puede posicionarlo asignándole unas coordenadas x e y:

  ~~~javascript
  sprite.x = 96;
  sprite.y = 96;

  // También se puede hacer así
  sprite.position.set(x, y)
  ~~~
* Cambiarle el tamaño:

  ~~~javascript
  sprite.width = 80;
  sprite.height = 120;
  ~~~

* Hacer que rote:

~~~javascript
  sprite.rotation = 0.5;
~~~

Para hacer que nuestro sprite se mueva debemos de crear una función que actúe como un bucle usando requestAnimationFrame, esta función recibe el nombre de gameloop, y todo el código que pongamos dentro de está función será actualizada 60 veces por segundo. Un ejemplo sería:

~~~javascript
function gameLoop() {

  //Loop this function at 60 frames per second
  requestAnimationFrame(gameLoop);

  //Move the cat 1 pixel to the right each frame
  sprite.x += 1;

  //Render the stage to see the animation
  renderer.render(stage);
}

//Start the game loop
gameLoop();
~~~

Como se puede apreciar Pixi es un framework bastante potente para el desarrollo de juegos ya que nos proporciona una serie de métodos muy sencillos y potentes para el tratamiento de la parte que más recursos necesita de nuestro juego que son los gráficos.

Enlaces de interés :

* Documentación: [Métodos y documentación](http://pixijs.github.io/docs/)
* Ejemplo: [Animaciones hechas con Pixijs](http://pixijs.github.io/examples/#/basics)
