
# 11. ¿Cómo dibujar un reloj en canvas?

En el siguiente ejemplo se explicará paso a paso cómo dibujar un reloj y cómo hacerlo funcionar sincronizándolo con 
la hora actual.


### Creacion del elemento canvas

Para comenzar a dibujar hay que añadir el elemento canvas en nuestro documento html mediante la etiqueta canvas y creamos un nuevo objeto 'ctx' de tipo 2d. 

La variable **radius** se utilizará para establecer el radio de la circunferencia que contendrá al reloj. Este radio lo reducimos al 90% para que quede bin fijado dentro del elemento del canvas.

Para dibujar la circunferencia se puede utilizar una función **drawClock** y que así quede un código más limpio y ordenado. En esta función dibujamos 
el círculo mediante la función **arc** y lo rellenamos de color blanco.

```html
<!DOCTYPE html>
<html>
<body>

<canvas id="canvas" width="400" height="400" style="background-color:#333"></canvas>

<script>
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var radius = canvas.height / 2;
ctx.translate(radius, radius);
radius = radius * 0.90
drawClock();

function drawClock() {
    ctx.arc(0, 0, radius, 0 , 2*Math.PI);
    ctx.fillStyle = "white";
    ctx.fill();
}
</script>

</body>
</html>
```


### Dibujar el formato del reloj

A continuación, en el ejemplo se dibuja el borde de la circunferencia del reloj y la circunferencia central que más adelante será la encargada de mantener
 las agujas del reloj.

Para ello se ha definido la función 'drawFace' que realiza lo siguiente:

- Dibuja la circunferencia descrita en el paso 1 (reorganización del código).
- Se crea un gradiente radial entre el 95% y el 105% de la circunferencia original (la que establece el cuerpo del reloj).
- Se definen los colores del arco, mediante el método 'addColorStop' (método para crear un efecto 3D), definiendo así el borde, el centro y el exterior del arco.
- A continuación se define el gradiente como el estilo que se desea dar en la circunferencia exterior y seguidamente se dibuja el círculo.
- Finalmente, se dibuja el círculo central.


```javascript
function drawClock() {
    drawFace(ctx, radius);
}

function drawFace(ctx, radius) {
    var grad;

    ctx.beginPath();
    ctx.arc(0, 0, radius, 0, 2*Math.PI);
    ctx.fillStyle = 'white';
    ctx.fill();

    grad = ctx.createRadialGradient(0,0,radius*0.95, 0,0,radius*1.05);
    grad.addColorStop(0, '#333');
    grad.addColorStop(0.5, 'white');
    grad.addColorStop(1, '#333');
    ctx.strokeStyle = grad;
    ctx.lineWidth = radius*0.1;
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(0, 0, radius*0.1, 0, 2*Math.PI);
    ctx.fillStyle = '#333';
    ctx.fill();
}
```


### Añadir los números al reloj

El siguiente paso consiste en incluir los números en la circunferencia del reloj, para ello definimos la función **drawNumbers**. 
En ella se establece el tamaño de fuente y el tipo de letra para los números para posteriormente definir la alineación en el centro.

Para la colocación de cada número en su lugar correcto, se establece a un 85% del radio de la circunferencia y girando cada número (pi/6).

```javascript
function drawClock() {
    drawFace(ctx, radius);
    drawNumbers(ctx, radius);
}

function drawNumbers(ctx, radius) {
    var ang;
    var num;
    ctx.font = radius*0.15 + "px arial";
    ctx.textBaseline="middle";
    ctx.textAlign="center";
    for(num= 1; num < 13; num++){
        ang = num * Math.PI / 6;
        ctx.rotate(ang);
        ctx.translate(0, -radius*0.85);
        ctx.rotate(-ang);
        ctx.fillText(num.toString(), 0, 0);
        ctx.rotate(ang);
        ctx.translate(0, radius*0.85);
        ctx.rotate(-ang);
    }
}
```


### Dibujar las agujas del reloj

Para poder colocar correctamente las agujas del reloj en su posición actual se obtiene la hora mediante el objeto **Date()**.

A continuación se dibuja cada una de las agujas estableciendo un porcentaje del radio para definir su tamaño. 
Por ejemplo, para la aguja que marca las horas se ha definido un tamaño del 50% del radio y una anchura del 7%.
Este método lo repetimos para cada una de las agujas del reloj, mediante la función **drawHand()** a la cual se le pasa la posición de la aguja y sus medidas.


```javascript
function drawClock() {
    drawFace(ctx, radius);
    drawNumbers(ctx, radius);
    drawTime(ctx, radius);
}

function drawTime(ctx, radius){
    var now = new Date();
    var hour = now.getHours();
    var minute = now.getMinutes();
    var second = now.getSeconds();
    //hour
    hour=hour%12;
    hour=(hour*Math.PI/6)+(minute*Math.PI/(6*60))+(second*Math.PI/(360*60));
    drawHand(ctx, hour, radius*0.5, radius*0.07);
    //minute
    minute=(minute*Math.PI/30)+(second*Math.PI/(30*60));
    drawHand(ctx, minute, radius*0.8, radius*0.07);
    // second
    second=(second*Math.PI/30);
    drawHand(ctx, second, radius*0.9, radius*0.02);
}

function drawHand(ctx, pos, length, width) {
    ctx.beginPath();
    ctx.lineWidth = width;
    ctx.lineCap = "round";
    ctx.moveTo(0,0);
    ctx.rotate(pos);
    ctx.lineTo(0, -length);
    ctx.stroke();
    ctx.rotate(-pos);
}
```


### Arrancar el reloj

Finalmente, para poner en funcionamiento el reloj diseñado, se llama por intervalos a la función **drawClock**, 
estableciendo los intervalos en 1000 milisegundos, así la función será llamada siempre en ese periodo.

```javascript
//drawClock();
setInterval(drawClock, 1000);
```


### CodePen

[Reloj CodePen](http://codepen.io/Nayra710/pen/pNKwLr)




**Nota**: Los códigos de ejemplo que se muestran en este capítulo no son acumulativos, cada uno incluye lo explicado en el anterior.