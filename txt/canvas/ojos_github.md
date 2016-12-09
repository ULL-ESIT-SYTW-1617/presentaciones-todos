
# 10. Movimiento


### Paso a paso

En el siguiente ejemplo se muestra cómo añadir figuras geómetricas para añadirle unos ojos a una imagen estática y 
posteriormente asignarle movimiento desde que se perciba el movimiento del ratón dentro del elemento canvas.

- En primer lugar se genera el documento html correspondiente con la etiqueta canvas:

```html
<html>
<head>
    <meta charset="utf-8">
</head>
<body>
    <canvas width="700" height="488" id="plano"></canvas> 
</body>
</html>
```


- A continuación se establece el objeto del elemento canvas y se obtiene la imagen sobre la cual se desea dibujar, en este caso 
lo haremos sobre el logo de **GitHub**.

```javascript
var cnv = document.getElementById("plano");
var ctx = cnv.getContext('2d');

var img = new Image();
img.src = 'https://image.freepik.com/iconos-gratis/github-sociales_318-27989.png';
img.onload = function() {ctx.drawImage(img,0,0);}
```

![](https://s15.postimg.org/y7yjqroaj/github.png)


- Establecer las coordenadas del punto exacto dónde se desean dibujar las circunferencias que corresponden a los ojos.
Para dibujarlos se utiliza la función **arc** que nos permite realizar el trazo del círculo.


```javascript
var coX = [245,385];
var coY = 300;
```


- En la función dibujar, en primer lugar se realiza un borrado de todo el canvas para la animación y se establece la imagen, 
luego se insertan los círculos correspondientes a los ojos con las coordenadas que ya han sido fijadas. Y finalmente se 
realiza el trazado con todo lo especificado anteriormente (stroke()). 


```javascript
function dibujar(){
  ctx.clearRect(0,0,cnv.width,cnv.height);
  ctx.drawImage(img,0,0);
  for (i=0;i<2;i++){
    ctx.beginPath();
    ctx.arc(coX[i],coY,8,0,2*Math.PI);
    ctx.closePath();
    ctx.stroke();
    ctx.fillStyle = "white";
    ctx.fill(); 
  }
}
```


- Para realizar la animación se obtiene la posición del ratón **getMouseXY** dentro del elemento y se almacenan en las variables temporales 
tempX y tempY. El movimiento de los ojos debe ser proporcional entre ambos y para que no se salga de la forma que queremos en 
la imagen, para ello modificamos los valores de las coordenadas del centro del iris.

```javascript
var tempX = 0, tempY = 0;
document.captureEvents(Event.MOUSEMOVE);
document.onmousemove = getMouseXY; 
function getMouseXY(e) {
  tempX = e.pageX;
  tempY = e.pageY;  
  if (tempX < 0){tempX = 0;}
  if (tempY < 0){tempY = 0;} 
  coX = [240+tempX/document.body.scrollWidth*10,
         380+tempX/document.body.scrollWidth*10];
  coY = 295+tempY/document.body.scrollHeight*10;
  return true;
}
//Dibuja en el elemento canvas cada 60 milisegundos
setInterval(function(){dibujar();},60);
```



### CodePen

Para visualizar el ejemplo completo, podemos acceder al siguiente enlace en la plataforma CodePen.

[Ejemplo de movimiento en CodePen](http://codepen.io/Nayra710/pen/bBvELz?editors=0010)