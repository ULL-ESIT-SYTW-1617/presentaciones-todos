# 9. Validación de propiedades con propTypes

Los componentes en React están diseñados para poder agruparlos en componentes más grandes y ser reutilizados, ya sea en el mismo proyecto, en otros proyecto o por otros desarrolladores. Por lo tanto es una buena práctica definir explícitamente las propiedades que acepta un componentes, cuáles son requeridas y los tipos de dato de cada una.

Este es el propósito propTypes de un componente, y entre otras cosas nos ayudará a:
– Revisar rápidamente cuáles son las propiedades que debemos pasar a un componente
– Cuándo hay un error, React mostrará un mensaje en la consola indicando qué propiedades faltan y qué método generó el problema.

El objeto propTypes se define como una propiedad en el constructor de la clase, en el siguiente ejemplo tenemos un componente Titulo que recibe una propiedad nombre que se muestra dentro de un encabezado.

Para especificar que esa propiedad debe ser cadena indicamos el tipo PropTypes.string.isRequired, la última parte isRequired es opcional y con ella especificamos si es una propiedad obligatoria.

```javascript
class Titulo extends React.Component {
  render () {
    return (
      <h1>{ this.props.nombre }</h1>
    );
  }
}

Titulo.propTypes = {
  nombre: React.PropTypes.string.isRequired
};

ReactDOM.render(<Titulo nombre="Título " />, document.getElementById('root'));

```