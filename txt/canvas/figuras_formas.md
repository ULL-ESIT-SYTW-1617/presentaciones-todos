
# 6. Figuras y Formas geométricas

#### Circulo

Para dibujar un círculo en el elemento canvas se utiliza la función **arc()**, a la cual le pasamos los 
parámetros (x,y) que indican el centro del círculo, el radio y el inicio y el fin del ángulo.

```html
<!DOCTYPE HTML>
<html>
  <head>
  </head>
  <body>
    <canvas id="myCanvas" width="578" height="200"></canvas>
    <script>
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');
      var centerX = canvas.width / 2;
      var centerY = canvas.height / 2;
      var radius = 70;

      context.beginPath();
      context.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
      context.stroke();
    </script>
  </body>
</html>      
```

![](https://s17.postimg.org/kryrgqsu7/circulo.png)



#### Rectángulo

Para crear un rectángulo en canvas utilizaremos la propiedad **rect()** .

El rectángulo se coloca con parámetros (x,y), y se dimensiona con parámetros de anchura y altura. 
Se posiciona a partir de su esquina superior izquierda.

```html
<!DOCTYPE HTML>
<html>
  <head>
  </head>
  <body>
    <canvas id="myCanvas" width="578" height="200"></canvas>
    <script>
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(188, 50, 200, 100);
      context.lineWidth = 2;
      context.strokeStyle = 'black';
      context.stroke();
    </script>
  </body>
</html>      
```

![](https://s18.postimg.org/mrzpv5dwp/rectangulo.png)



#### Forma personalizada

Para crear una forma personalizada con canvas, podemos crear un '**path**' y luego cerrarlo 
utilizando el método '**closePath()**'. 

Podemos usar los métodos siguientes para construir cada subtrama de nuestra forma: 
- lineTo()
- arcTo()
- quadraticCurveTo()
- bezierCurveTo()


```html
<!DOCTYPE HTML>
<html>
  <head>
  </head>
  <body>
    <canvas id="myCanvas" width="578" height="200"></canvas>
    <script>
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.moveTo(170, 80);
      context.bezierCurveTo(130, 100, 130, 150, 230, 150);
      context.bezierCurveTo(250, 180, 320, 180, 340, 150);
      context.bezierCurveTo(420, 150, 420, 120, 390, 100);
      context.bezierCurveTo(430, 40, 370, 30, 340, 50);
      context.bezierCurveTo(320, 5, 250, 20, 250, 50);
      context.bezierCurveTo(200, 5, 150, 20, 170, 80);

      context.closePath();
      context.lineWidth = 2;
      context.stroke();
    </script>
  </body>
</html>      
```

![](https://s30.postimg.org/gmrsqjtn5/bezier.png)


Nota: La curva de 'bezierCurveTo' es un tipo de arco que dibujaremos definiendo el punto de contexto de canvas, dos puntos de 
control y un punto final.

[Wikipedia](https://es.wikipedia.org/wiki/Curva_de_B%C3%A9zier)