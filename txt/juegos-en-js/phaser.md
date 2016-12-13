# 4. Phaser

Phaser es un framework de código abierto para la creación de videojuegos, usa una versión optimizada y más potente de Pixijs para el renderizado para WebGL y Canvas y es soportado por navegadores en sus versiones de ordenadores y móviles. Para el desarrollo de los juegos soporta tanto javascript como typescript.

Al igual que con Pixijs también es necesario tener corriendo un servidor para poder hacer funcionar nuestro juego. Esto es debido a que cuando solicitas algún servicio en la web estamos usando el protocolo http y el nivel de seguridad del servidor es suficiente para garantizar que accedes a los ficheros que tengas acceso, mientras que si lo pones a funcionar en local se usa el protocolo file:// , al intentar probar el juego usando dicho protocolo los navegadores bloquean algunas de las características de acceso y carga de los recursos al utilizar el framework, por motivos de seguridad establecidos en dicho protocolo, para no darle a javascript la habilidad de cargar cualquier archivo de nuestros sistema de archivo.

Sin embargo si es posible probar la ejecución del juego en c9 y codepen y otros servicios similares.

## Instalación

Phaser permite la instalación de diversas formas:

* Desde su propia web : [Phaser](http://phaser.io/)

O bien mediante la línea usando bower o nodejs:

* Bower install:

  ~~~Bash
  $> bower install phaser
  ~~~
* NPM install:

  ~~~Bash
  $> npm install phaser
  ~~~
* A través de git:

  ~~~Bash
  git clone git@github.com:photonstorm/phaser.git
  ~~~

  Además permite su uso sin haberlo instalado via cdnjs añadiendolo en el html:

  ~~~HTML
  <script src=""//cdn.jsdelivr.net/phaser/2.6.2/phaser.js""></script>
  ~~~

  ~~~HTML
  <!minified version>
  <script src=""//cdn.jsdelivr.net/phaser/2.6.2/phaser.js""></script>
  ~~~

  Phaser te ofrece un IDE para crear juegos con su framework con todas las herramientas esenciales para el desarrollo de juegos multi plataforma, aunque hay que decir que no es gratuito, cuesta 30$

## Características

* Phaser utiliza tanto Canvas como WebGL internamente y cambia entre uno u otro en función de las características del navegador. Esto permite renderizar de forma rápida tanto en móvil como en pc. Además hace uso de la librería Pixi.js para un mejor renderizado.
* La precarga de recursos se realiza en tan solo una línea de código.
* Utiliza su propio sistema Arcade Physics. Un librería ligera, perfecta para dispositivos poco potentes, con una respuesta veloz a las colisiones. Control de velocidad, acelaración, rebotes, arrastres y control total de colisiones.
* Permite multitud de opciones  para el uso de sprites.
* Permite de opciones de dispositivos de entrada como ratón, teclado, toques en pantallas táctiles. Multigestos y reconocimiento de gestos personalizados
* Phaser soporta Audio Web y directamente Audio HTML.
* Phaser puede cargar, renderizar y hacer colisionar el mapa de cuadros (o tilemap) con unas simples líneas de código. Soporte de CSV y TiledMap con múltiples capas.

## Ejemplos Utilización del framework

En primer lugar debemos añadir a la cabecera de nuestro archivo html la librería phaser.js en cualquiera de sus versiones:

~~~html
<script type="text/javascript" src="js/phaser.min.js"></script>
~~~

A continuación en nuestro fichero .js debemos crear nuestro objeto Phaser:

~~~javascript
var game = new Phaser.Game(600, 400, Phaser.AUTO, '', { preload: preload, create: create, update: update });
~~~

Los parámetros pasados al constructor del objeto Phaser son la longitud horintal del espacio de juego, la vertical, el método de renderizado(Puede ser Phaser.CANVAS, Phaser.WEBGL o Phaser.AUTO), Una cadena usada si se desea que se introduzca el juego en un elemento html(como la dejamos vacía se introduce en el body), preload: preload, create: create, update: update }(asignan las referencias a las funciones esenciales de Phaser).

A continuación declararemos nuestras funciones preload, create y update:

~~~javascript
function preload() {
}

function create() {
}

function update() {
}
~~~

En la función ```preload()``` cargaremos las imágenes de nuestro juego :

~~~javascript
function preload() {
    game.load.image('fondo', 'assets/sky.png');
    game.load.image('plataforma', 'assets/platform.png');
    game.load.image('diamante', 'assets/diamante.png');
    game.load.spritesheet('personaje', 'assets/dude.png', 32, 48);
}
~~~

En las 3 primeras líneas cargamos imágenes en nuestro juego, sin embargo en la línea siguiente se cargará un sprite que contiene varias imágenes con posiciones de nuestro objeto.

Una vez cargadas las imágenes procederemos a añadir los componentes cargados al juego y a crear la escena:

~~~javascript
var platforms;

function create() {

    //  We're going to be using physics, so enable the Arcade Physics system
    game.physics.startSystem(Phaser.Physics.ARCADE);

    //  A simple background for our game
    game.add.sprite(0, 0, 'sky');

    //  The platforms group contains the ground and the 2 ledges we can jump on
    platforms = game.add.group();

    //  We will enable physics for any object that is created in this group
    platforms.enableBody = true;

    // Here we create the ground.
    var ground = platforms.create(0, game.world.height - 64, 'ground');

    //  Scale it to fit the width of the game (the original sprite is 400x32 in size)
    ground.scale.setTo(2, 2);

    //  This stops it from falling away when you jump on it
    ground.body.immovable = true;

    //  Now let's create two ledges
    var ledge = platforms.create(400, 400, 'ground');

    ledge.body.immovable = true;

    ledge = platforms.create(-150, 250, 'ground');

    ledge.body.immovable = true;

}
~~~

A continuación se puede ver un ejemplo de creación de un personaje de un juego:

~~~javascript
// The player and its settings , player positioned at 32 pixels by 150 pixels from the bottom of the game
   player = game.add.sprite(32, game.world.height - 150, 'dude');

   //  We need to enable physics on the player
   game.physics.arcade.enable(player);

   //  Player physics properties. Give the little guy a slight bounce.
   player.body.bounce.y = 0.2;
   player.body.gravity.y = 300;
   player.body.collideWorldBounds = true;

   //  Our two animations, walking left and right.
   player.animations.add('left', [0, 1, 2, 3], 10, true);
   player.animations.add('right', [5, 6, 7, 8], 10, true);
~~~

Otra función importante que nos explicar es la función update que es llamada por el game loop cada frame ahí es donde pondremos el código de funcionamiento de nuestro juego. Un ejemplo de una función que influirá en el funcionamiento del juego serán las colisiones entre el personaje y otros actores del juego que serán detectadas de la siguiente forma:

~~~javascript
function update() {
    //  Collide the player and the stars with the platforms
    var hitPlatform = game.physics.arcade.collide(player, platforms);

}
~~~

Otra función importante en nuestro juego será la forma de interactuar que tenga el usuario con el juego una forma de realizar esta tarea sería mediante la adición de un elemnto de entrada como sería un teclado:

~~~javascript
cursors = game.input.keyboard.createCursorKeys();
~~~

Un ejemplo de como hacer que nuestro personaje se moviera en función de la tecla que presiones en el teclado sería la siguiente:

~~~javascript
//  Reset the players velocity (movement)
    player.body.velocity.x = 0;

    if (cursors.left.isDown{
        //  Move to the left
        player.body.velocity.x = -150;

        player.animations.play('left');
    }
~~~

Como se puede apreciar en los ejemplos Phaser nos proporciona un serie de métodos que nos facilitan mucho la tarea de desarrollar un juego, es por ello por lo que es considerado como uno de los mejores frameworks gratuitos para el desarrollos de videjuegos en javascript.
