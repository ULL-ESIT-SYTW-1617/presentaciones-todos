# 2. Como funciona

React.js está construido en torno a hacer funciones, que toman las actualizaciones de estado de la página y que se traduzcan en una representación virtual de la página resultante. Siempre que React es informado de un cambio de estado, vuelve a ejecutar esas funciones para determinar una nueva representación virtual de la página, a continuación, se traduce automáticamente ese resultado en los cambios del DOM necesarios para reflejar la nueva presentación de la página.

A primera vista, esto suena como que fuera más lento que el enfoque JavaScript habitual de actualización de cada elemento, según sea necesario. Detrás de escena, sin embargo, React.js hace justamente eso: tiene un algoritmo muy eficiente para determinar las diferencias entre la representación virtual de la página actual y la nueva. A partir de esas diferencias, hace el conjunto mínimo de cambios necesarios en el DOM.

Pues utiliza un concepto llamado el DOM virtual que hace selectivamente sub-árboles de los nodos sobre la base de cambios de estado, desarrollando esto, con la menor cantidad de manipulación DOM posible, con el fin de mantener los componentes actualizados, estructurando sus datos.

## Ejemplo Hello World

Para realizar el siguiente ejemplo tenemos que crear la siguiente estructura:
![](https://3.bp.blogspot.com/-Y8erLL5NaEQ/WFeucSzXbMI/AAAAAAAAACA/flMO93UJlBQXFeBBi-7_P1Kv1F621GdAQCLcB/s1600/tree.png)

HelloWorld.js

Creamos el componente HelloWorld y devolvemos el código html

```babel
import React from 'react';
import ReactDOM from 'react-dom';

class HelloWorld extends React.Component{
  render(){
    return <div>Hello world!</div>
  }
}
```

app.js

En este archivo primero le pasamos a ReactDOM que tenemos que renderizar y el segundo sería donde lo
queremos mostar

```babel
ReactDOM.render(
  <HelloWorld />,
  document.getElementById('container')
);

```

index.html

```javascript

<!DOCTYPE html>
  <head>
    <title>HelloWorld</title>
  </head>
  <body>
    <div id="container"></div>

    <script type="text/javascript" src="build/bundle.js"></script>
  </body>
</html>

```
