# 4. JSX

React utiliza una sintaxis basada en XML (similar al HTML) para construir sus componentes usando el Virtual DOM. Esta sintaxis se transcompila a JavaScript (Tal como lo hacen TypeScript o CoffeeScript), por lo que en el fondo sólo es JavaScript presentado de una forma un poco más "visual".

React plantea otra forma de construir vistas, diferente a los templates de toda la vida. Si bien no es la idea, los templates separan tecnologías, no preocupaciones (separation of concerns). Los componentes de React buscan enfocarse en la separación de preocupaciones propiamente dicha. Por lo tanto, en un principio esto puede parecer "mezclar JavaScript y HTML", o más genéricamente, "mezclar lógica y presentación", pero en realidad estamos agrupando la lógica y la presentación relacionadas en módulos independientes. Separación de preocupaciones.

## Diferencias de trabajar con JSX o sin JSX en React

Con JSX

```javascript

 class Componente extends React.Component {

    render() {
        return (
            <div>
                <h1>Hola, mundo!</h1>
            </div>
        );
    }

 };

```

En este ejemplo sencillo y puramente ilustrativo, se ve todo bastante similar.
Sin embargo, hay que destacar que esta sintaxis utiliza clases propias de JavaScript (disponibles a partir de ECMAScript 6) y no un sistema propio. Hoy por hoy es necesario utilizar un transcompilador para generar código compatible con motores de JavaScript que no reconocen las clases todavía, pero en el futuro esto es big deal, ya que utilizar clases nativas significa utilizar el estándar y además una ejecución más veloz.

Sin JSX

```javascript

 class Componente extends React.Component {
     render() {
        return (
            React.createElement("div", null,
                React.createElement("h1", null, "Hola, mundo!"),

            );
        );
    }

    };
```

## Cosas a tener en cuenta

* render debe devolver un único elemento html

* El atributo class de html es una palabra reservada de JavaScript, por lo que en JSX se utiliza className

* Las variables en JSX se ponen mediante llaves

```javascript
import React, { Component } from 'react';

export default class App extends Component {
  render() {
    var respuesta = 'Hola, ¡buenos días!'
    return (
      <div>
        <h1>Hola Mundo</h1>
        <p className="rojo">{respuesta}</p>
      </div>
    );
  }
}

```