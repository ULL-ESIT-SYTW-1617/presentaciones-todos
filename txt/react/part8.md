# 8. State

Podríamos definirlo como una representación del componente en un punto en el tiempo, una instantánea del componente. El state de un componente se iniciará con un valor por defecto pero este valor si podrá mutar durante la vida del componente.

No tenemos porque definir estados para un componente, son opcionales, y al contrario que ocurre con las props, un componente puede gestionar su propio state. Pero debemos ser cautos a la hora de utilizar estados ya que su uso, citando a la propia docu, aumenta la complejidad y reduce la previsibilidad. Se debe evitar tener demasiados componentes con estados, sobre todo tratándose de aplicaciones grandes.

La manera habitual de informar a un componente React que sus datos han cambiado, es a través de la llamada al método setState(). Este método recibe un objeto JavaScript plano, combina los nuevos datos en el state y re-renderizará el componente. Cuando el render finalize se ejecutará un callback si ha sido especificado.

El estado del componente se almacena en la propiedad state y está formado por aquella información
que sí es gestionada y modificada directamente por el componente. Cada vez que se realiza un cambio
en el estado del componente como respuesta a una acción del usuario (o a algún otro factor externo),
ReactJS se encarga de renderizar nuevamente el componente por completo. Puesto que un componente
contener otros componentes, en el proceso de renderizado se volverán a crear estos componentes
con la nueva información. Es posible (y habitual)
que el estado mutable de un componente sean propiedades inmutables de sus componentes hijos.

```babel

this.setState( { key: 'value' } );

```

Ejemplo básico de inicializar los valores como una propiedad de inicialización

```babel
import React from 'react';

class MyComponent extends React.Component{
  constructor(props){
    super(props);
    this.state = {name:'Jose',
                  edad: '22'};
  }
  render(){
    return <div>Me llamo {this.state.name} y tengo {this.state.edad}</div>;
  }
};

export default MyComponent;

```

Si queremos setear nuestro state en un futuro con alguna acción, es donde el método this.setState entra en escena, este es el método principal que se utiliza para hacer cambios en la interfaz de usuario.
