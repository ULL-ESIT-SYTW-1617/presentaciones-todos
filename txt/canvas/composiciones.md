# 7. Composiciones

En este capítulo se abordarán distintas técnicas para realizar composiciones con figuras geométricas, ya vistas en el anterior capítulo.

Las composiciones tienen gran útilidad para el diseño de figuras, elementos, logos, etc.

## Sombra

Para añadir en canvas a un elemento una determinada sombra se utilizan las funciones: shadowColor, shadowBlur, shadowOffsetX y shadowOffsetY.

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
      // rect dibuja el rectángulo
      context.rect(188, 40, 200, 100);
      // fillStyle define el relleno
      context.fillStyle = '#FA8258';
      // shadowColor establece el color de la sombra
      context.shadowColor = '#999';
      // shadowBlur establece lo difuminado que está la sombra
      context.shadowBlur = 10;
      // puntos donde acaba la sombra
      context.shadowOffsetX = 15;
      context.shadowOffsetY = 15;
      context.fill();
    </script>
  </body>
</html>
```

![](https://s24.postimg.org/jpc13xi45/sombra.png)

## Opacidad

Para definir la opacidad de los elementos se definirá la propiedad **globalAlpha** a
un número real entre 0 y 1.

- 0: Completamente transparente.
- 1: Completamente opaco.

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
      context.rect(150, 110, 150, 100);
      context.fillStyle = '#DF7401';
      context.fill();
      //Dibujamos el círculo con 0.5 de transparencia
      context.globalAlpha = 0.5;
      context.beginPath();
      context.arc(320, 120, 60, 0, 2 * Math.PI, false);
      context.fillStyle = '#8904B1';
      context.fill();
    </script>
  </body>
</html>
```

![](https://s16.postimg.org/azhm65rj9/tranparencia.png)

## Región de recorte

Una región de recorte permite que todo lo que dibujemos dentro de la región **clip()** quede encuadernado dentro de la misma. Así podemos incluir formas dentro de otras, esto permite dibujar personajes, logos,...

Al terminar de dibujar es imprescindible que el contexto de canvas vuelva a su estado inicial, y así poder seguir dibujando fuera de la zona de recorte. Para ello utilizaremos el método **restore()**.

En el siguiente ejemplo se define una zona de recorte circular y varios elementos circulares con diferentes medidas en él.

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
      var x = canvas.width / 2;
      var y = canvas.height / 2;
      var radius = 85;
      var offset = 60;
      // Definimos el círculo donde será la región 'clip' en la que añadiremos formas encima.
      context.save();
      context.beginPath();
      context.arc(x, y, radius, 0, 2 * Math.PI, false);
      context.clip();

      // Añadimos una forma circular en la región de nuestro clip
      context.beginPath();
      context.arc(x - offset, y + offset, radius, 0, 2 * Math.PI, false);
      context.fillStyle = '#8904B1';
      context.fill();

      // Añadimos una forma circular en la región de nuestro clip
      context.beginPath();
      context.arc(x + offset, y, radius, 0, 2 * Math.PI, false);
      context.fillStyle = '#F7819F';
      context.fill();

      // Añadimos una forma circular en la región de nuestro clip
      context.beginPath();
      context.arc(x + offset, y + offset, radius, 0, 2 * Math.PI, false);
      context.fillStyle = '#DF7401';
      context.fill();

      //Es importante reestablecer el dibujo para poder seguir dijuando fuera de la zona clip
      context.restore();

    </script>
  </body>
</html>
```

![](https://s27.postimg.org/h35kfprb7/clip.png)
