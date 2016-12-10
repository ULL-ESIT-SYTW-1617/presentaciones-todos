# 1. Canvas en videjuegos

Canvas  es un elemento HTML incorporado en HTML5 que permite la generación de gráficos dinamicamente por medio del scripting.

Fue introducido inicialmente por Apple para su uso dentro de su propio componente de Mac os X surgido en 2004, para empujar aplicaciones como widgets de Dashboard y el navegador Safari. Más tarde se adaptó en la versión 1.8 de los navegadores Gecko y Safari, hasta que finalmente fue estandarizado por el Grupo de Trabajo de Tecnologías de Aplicaciones de hipertexto web (WHATWG).

## Compatibilidad con canvas

El canvas fue desarrollado inicialmente para Safari pero una vez que se estandarizó fue adoptado por la mayoría de los navegadores principales excepto por Internet Explorer hasta la versión 8 (Aunque existen numerosos plugins que intentaban suplir esta carencia). Sin embargo si fue adoptado por Firefox, Opera y Chrome.

## Aplicaciones que usan Canvas

Canvas nos da muchas facilidades a la hora de la creación de dibujos en nuestra página web, ya que nos permite dibujar y actualizar dinámicamente los dibujos. Esta tarea se realiza a través de scripts atendiendo a las acciones del usuario, por ello hace que sea un elemento ampliamente usado en la creación de juegos en javascript.

## Uso del elemento canvas

A continuación explicaré una serie de pasos que servirán de ayuda a la hora de crear los gráficos de un juego en javascript usando canvas.

En primer lugar debemos de colocar el elemento canvas en nuestro archivo .html en donde queramos usarlo. Esto se hace de la siguiente forma:

~~~javascript
<canvas id="canvas" width="600" height="300" style="background:#999">
        Este texto se mostrará para los navegadores no compatibles con canvas
   </canvas>
~~~

Inicialmente el canvas está en blanco y para poder acceder a el para poder pintar dentro debemos de acceder al contexto de renderizado para así poder invocar a los distintos métodos que nos permitan dibujar dentro del canvas:  

~~~javascript
  canvas = document.getElementById('canvas');
  ctx = canvas.getContext('2d'); //se accede al contexto
~~~

Una vez que accedemos al contexto podemos usar los distintos métodos para dibujar en el canvas. Lo primero que debemos hacer es crear un rectángulo y cambiarle el estilo:

~~~javascript
ctx.fillStyle = '#000';
ctx.fillRect(0, 0, canvas.width, canvas.height);
~~~

Este rectángulo será el marco en donde se desarrollará toda la acción de nuestro juego. Además para facilitar la creación de los elementos del juego(en nuestro ejemplo serán un rectángulo) podremos crear una función Rectángulo que tendrá como parámetro las coordenadas x, y además de un ancho y un alto:

~~~javascript
function Rectangulo(x, y, width, height) {
    this.x = (x == null) ? 0 : x;
    this.y = (y == null) ? 0 : y;
    this.width = (width == null) ? 0 : width;
    this.height = (height == null) ? this.width : height;
    this.intersects = function(rect) {
        if (rect == null) {
            window.console.warn('Missing parameters on function intersects');
        } else {
            return (this.x < rect.x + rect.width && this.x + this.width > rect.x && this.y < rect.y + rect.height && this.y + this.height > rect.y);
        }
    };
    this.fill = function(ctx) {
        if (ctx == null) {
            window.console.warn('Missing parameters on function fill');
        } else {
            ctx.fillRect(this.x, this.y, this.width, this.height);
        }
    };
}
~~~

Una vez creada esta función ya podremos instanciar nuestro objeto jugador y nuestro objeto comida que serán los protagonistas de este ejemplo:

~~~javascript
player = new Rectangulo(40, 40, 10, 10);
food = new Rectangulo(80, 80, 10, 10);
~~~

Ahora podríamos dibujar los elementos anteriores para que sean visibles en nuestro lienzo:

~~~javascript
// Dibuja al jugador
ctx.fillStyle = '#0f0';
jugador.fill(ctx);
// Dibuja la comida
ctx.fillStyle = '#f00';
comida.fill(ctx);
~~~

Una vez hecho esto ya tendríamos dibujados nuestro lienzo y los elementos del juego. Como se puede apreciar canvas hace que esta tarea se convierta en algo sencillo usando sus métodos para dibujar en el lienzo.

Enlaces relacionados con canvas y videojuegos:

* Primer ejemplo: [Tutoriales y Códigos de creación de juegos usando canvas](https://github.com/joshuape)
* Segundo ejemplo: [Repositorio de videjuego monstruo](https://github.com/lostdecade/simple_canvas_game.git)
