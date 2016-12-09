# 4. Texto

### Funciones

Para dibujar texto en el elemento canvas, se utiliza la propiedad **font** y el método **fillText()**.

- **font**: Método para establecer la fuente, el tamaño y el estilo del texto, 
a una cadena que contenga el estilo, el tamaño y la familia de la fuente, delimitados por espacios. 
El estilo puede ser normal, cursiva o negrita. A menos que se especifique lo contrario, el estilo de fuente es predeterminado como normal.

```javascript
context.font = 'italic 40pt Calibri';
```

- **fillText()**: Método para dibujar el texto, requiere una cadena y las coordenadas x e y donde queremos colocar el texto en el canvas.

```javascript
context.fillText('Hello World!', 150, 100);
```

- **fillStyle**: Propiedad para aplicarle un color al texto que hemos dibujado.

```javascript
context.fillStyle = 'blue';
```

- **strokeText**: Propiedad para dibujar el texto sin relleno en el elemento canvas.
Al igual que el método 'fillText()', a 'strokeStyle' le pasamos el texto y las coordenadas (x,y) de su posición.

```javascript
ctx.strokeText("Sistemas y...",10,40);
```

- **textAlign**: Propiedad para alinear el texto dentro del elemento canvas, se puede configurar para situarlo en 
el inicio, el final, el centro, la izquierda o la derecha. 

  La alineación es relativa a una línea vertical imaginaria en la posición x del texto que hemos definido anteriormente.
Si no se especifica, la propiedad 'textAlign' está predeterminada para la posición inicial (ajustada a la derecha).

```javascript
ctx.textAlign = 'center';
```

- **measureText**: Propiedad para obtener las métricas del texto que hemos introducido. Esta propiedad puede resultar 
útil a la hora de diseñar un elemento y que se desee controlar de manera precisa el tamaño que ocupa el texto, por ejemplo.

```javascript
var metrics = context.measureText(text);
```

- **wrapText**: Esta propiedad permite *ajustar* el texto en el elemento canvas, para ello, se puede crear una función
personalizada que deberá requerir el contexto (ctx) del canvas, posición, ancho máx y altura. También será necesario el uso 
de 'measureText' para el cálculo de cuándo debe encajar la siguiente línea.

```javascript
wrapText(ctx, text, x, y, maxWidth, lineHeight);
```


### Ejemplo práctico

```html
<!DOCTYPE html>
<html>
    <body>
      <canvas id="myCanvas" width="400" height="200" style="border:6px solid #d3d3d3;"></canvas>
      <script>
          var canvas=document.getElementById("myCanvas");
          var ctx=canvas.getContext("2d");

          ctx.font="30px Arial";
          // Texto con relleno...
          ctx.fillText("Tecnologias...",20,70);
          // Texto sin relleno
          ctx.strokeText("Sistemas y...",10,40);
      
          // Texto en el centro del Canvas.
          ctx.font="30px Comic Sans MS";
          ctx.fillStyle="red";
          ctx.textAlign="center";
          ctx.fillText("Web", canvas.width/2, canvas.height/2);
      
      </script>
        
    </body>
</html>     
```

![](https://s29.postimg.org/kb4jciqev/texto.png)