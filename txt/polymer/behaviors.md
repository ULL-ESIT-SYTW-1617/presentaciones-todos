# Qué es un behavior

Un behavior, es la manera de extender un custom element para compartir el código entre diferentes componentes de Polymer. Esta manera de compartir código permite añadir nuevas características al componente que se este desarrollando utilizando lo que otro desarrollador haya realizado en un componente totalmente distinto. 
Para añadir un behavior a un elemento que se está creando, se tiene que añadir las siguientes líneas.

```javascript
Polymer({
  is: 'nombreElemento',
  behaviors: [SuperBehavior]
});
```
En caso de que como desarrollador se quiera crear un propio behavior, sólo hay que crear un nuevo documento html `mi-behavior.html` el cual sólo contendrá código javascript para añadir las funciones que se exportarán a los elementos que usen el behavior. La sintaxis para crear un behavior estándar es poner como mayúscula la primera letra del mismo. A continuación, se muestra un ejemplo de la creación de un behaviour.


//todo ejemplo behavior
