
# 5. Imágenes

### Funciones

En un elemento canvas podemos dibujar imágenes utilizando las siguientes funciones:

- **drawImage()**: Este método requiere un objeto de imagen y un punto de destino. Este punto
define la esquina superior izquierda de la imagen en relación con la esquina superior del canvas. 

    Dado que el método drawImage () requiere un objeto de imagen, primero debemos crear una imagen antes de instanciar 'drawImage()''.

```javascript
var img = new Image();
img.src = 'ruta de la imagen'
ctx.drawImage(img, 69, 50);
```

- **Tamaño de la imagen**: Al método anterior, **drawImage**, se le añaden dos argumentos adicionales que indican la altura y el ancho (width, height) de la imagen.

```javascript
ctx.drawImage(img, 69, 50, width, height);
```

- **Recortar la imagen**: Para recortar un rectángulo concreto de la imagen que se ha cargado se agregarán seis nuevos argumentos adicionales al método 'drawImage' que delimitarán el rectángulo que se desea mostrar.
    - sourceX.
    - sourceY.
    - sourceHeight.
    - sourceWidth.

```javascript
context.drawImage(imageObj, sourceX, sourceY, sourceWidth, sourceHeight, destX, destY, destWidth, destHeight);
```


### Ejemplo práctico


- **Ejemplo 1**:

En este ejemplo se muestra la inserción de una imagen en el lienzo del dibujo con un determinado tamaño especificado en las variables height y width.

```html
<!DOCTYPE HTML>
<html>
  <head>
  </head>
  <body>
    <canvas id="myCanvas" width="578" height="400"></canvas>
    <script>
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');
      //Size 
      var width = 500;
      var height = 337;
      
      var imageObj = new Image();

      imageObj.src = 'http://love2fly.iberia.com/wp-content/uploads/2016/04/L2F-Mar-16-pic-Spain-Canary-Islands-La-Palma-mountains-Borisov.jpg';
  	  context.drawImage(imageObj, 69, 50, width, height);  
    </script>
  </body>
</html> 
```

![](https://s27.postimg.org/f0lf7h4ub/la_Palma.png)


- **Ejemplo 2**:

En el ejemplo que se muestra a continuación se puede observar como se ha realizado un recorte de la imagen añadida en el lienzo anterior.
La imagen obtenida al recortar la original la colocaremos en el centro del lienzo mediante las variables 'dest'.

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
      var imageObj = new Image();

      var sourceX = 150;
      var sourceY = 0;
      var sourceWidth = 150;
      var sourceHeight = 150;
      var destWidth = sourceWidth;
      var destHeight = sourceHeight;
      var destX = canvas.width / 2 - destWidth / 2;
      var destY = canvas.height / 2 - destHeight / 2;
      imageObj.src = 'http://love2fly.iberia.com/wp-content/uploads/2016/04/L2F-Mar-16-pic-Spain-Canary-Islands-La-Palma-mountains-Borisov.jpg';

      context.drawImage(imageObj, sourceX, sourceY, sourceWidth, sourceHeight, destX, destY, destWidth, destHeight);
    </script>
  </body>
</html>      
```

![](https://s27.postimg.org/tp6nsb2er/recorte.png)
