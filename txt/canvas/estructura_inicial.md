
# 2. Estructura inicial


### Insertar en html

Para dibujar un elemento canvas en nuestro html:

```html
<!DOCTYPE html>
<html>
    <body>
      <canvas id="myCanvas" width="200" height="100">
      <script>
          var canvas=document.getElementById("myCanvas");
          var ctx=canvas.getContext("2d");
        
      </script>
        
    </body>
</html>
```

### CSS

En CSS añadimos las características y estilos que deseemos agregar a nuestro elemento canvas. 
Por ejemplo, le añadimos un border y centramos el elemento en el navegador.

```css
canvas {
    border: solid black 0.2rem;
    display: block;
    margin: 0 auto;
}
```

### Sistema de coordenadas

El punto de origen de coodenadas difiere del sistema común de coordenadas **Cartesiano**.
El sistema de coordenadas **Canvas** se inicia en la esquina superior izquierda.


![](https://lh6.googleusercontent.com/WFj7PnMc_7jTowNvPAeeMOZ-Q8DyYMulJOy2v_g10hC_f0Rz9ejqaJVQ8C4ESBmmziyZ-kezUwQklfSqMq86GukjUnvwV5A9CU883i-LIxHKKPYyNy0Wa3UDJ22QZ4wUgomHQlva)

