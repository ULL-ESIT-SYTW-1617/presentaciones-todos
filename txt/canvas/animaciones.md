
# 8. Animaciones


#### Limpiar el elemento canvas

Si se desea realizar una animación que necesite ser reiniciada cada vez, es necesario limpiar el elemento canvas, para ello 
añadiremos el método **clearRect()**. Este método es más eficiente que destruir el elemento canvas y volviéndolo a crear luego.

```javascript
context.clearRect(0, 0, canvas.width, canvas.height);
```


#### Primer paso en una animación: Añadir frame.

Para crear una animación con canvas se puede utilizar el método **requestAnimFrame** que permite al navegador determinar
 el fps óptimo para la animación que se ha diseñado.
 
Para cada frame de animación se puede realizar cuanto se desee: actualizar los elementos, borrar, volver a mostrar otro 
dibujo, ...

```javascript
requestAnimFrame(function() {
    animate(myRectangle, canvas, context, startTime);
});
```

Éste método se utiliza para un sencillo ejemplo en el cual una figura rectangular se desplaza de un lado a otro 
en nuestro elemento canvas.

[Frame Rectángulo lateral (CodePen)](http://codepen.io/Nayra710/pen/zoaNjL)



#### Movimiento Lineal

Una animación puede contener un movimiento lineal, para crearlo se deberá incrementar la (x, y). 
La posición de un objeto para cada frame deberá cambiar en concordancia con la ecuación de la velocidad.

Distancia = velocidad * tiempo



#### Aceleración

Para crear una animación de movimiento cuadrático con canvas, podemos incrementar la velocidad horizontal, la velocidad vertical, o ambas de un objeto 
para cada frame, y luego actualizar la posición del objeto. 

De acuerdo con la ecuación de aceleración: 
    
    Distacia = velocidad * tiempo + 1/2 * aceleración * tiempo ^2
    

En el siguiente ejemplo podemos ver cómo se le ha aplicado aceleración a un objeto rectangular.

[Ejemplo Rectángulo Codepen](http://codepen.io/Nayra710/pen/vyrxOL)



#### Oscilación

Para crear una oscilación de animación en canvas se deberá emplear una ecuación de oscilación (oscilador armónico simple).

X (t) = amplitud * sin (t * 2PI / periodo) + x0

[Rectángulo oscilante CopePen](http://codepen.io/Nayra710/pen/KNeWge)




#### Iniciar y parar una animación

Para que una animación se realice se solicita continuamente un nuevo frame, para pararla simplemente no solicitamos un frame.

Si se desea añadir el elemento del ratón para el manejo por parte del usuario de cuándo se para la animación, se incluirá un evento que esté a la escucha 
del click del ratón.

Como en los ejemplos anteriores, adaptándolo al movimiento de un rectángulo, añadimos un evento al elemento canvas en el cual esté a la escucha de cada 
click del ratón en la figura que se ha dibujado en el elemento canvas.

```javascript
document.getElementById('myCanvas').addEventListener('click', function() {
    runAnimation.value = !runAnimation.value;

    if(runAnimation.value) {
      var date = new Date();
      var time = date.getTime();
      animate(time, myRectangle, runAnimation, canvas, context);
    }
});
drawRect(myRectangle, context);
```


### Ratón

Incluir el elemento del ratón en una animación canvas es muy importante, ya que el usuario interactúa con la misma, puediendo modificarla, realizar
 movimientos, participar en un juego, etc.
 
En el siguiente ejemplo, como ejemplo básico, se toma la posición del ratón dentro del elemento canvas. Para hacerlo visual al usuario se mostrará 
las coordenadas del ratón en cada momento en el canvas.


[Ejemplo posición del ratón CodePen](http://codepen.io/Nayra710/pen/ObEpwz)