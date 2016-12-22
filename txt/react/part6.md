# 6. Propiedades y estado de los componentes React

Teniendo en cuenta que la principal función de un componente React es la de traducir datos y pintarlos en un HTML, podemos decir que tanto props como state constituyen los datos en bruto de dicho componente.
Tanto las props como el state son objetos JavaScript simples y los cambios en ambos desencadenan la ejecución del método render() del componente, entonces, ¿cuándo utilizamos props y cuándo  state?
La respuesta es sencilla. Si un componente va a necesitar modificar alguno de sus atributos en algún momento de su vida, entonces ese atributo debe formar parte de su estado, de lo contrario será una propiedad de dicho componente.

Cada componente puede tener uno o varios estados además de sus propiedades. Estos estados son intrínsecos al componente y no dependen de componentes superiores (si no, los pasaríamos por propiedades). Hay que tener en cuenta 3 cosas:

- Es mejor tener componentes sin estado (más reusables)

- Los estados se definen en el constructor de clase mediante this.state

- Si queremos modificar un estado, se debe utilizar el método this.setState (no se puede modificar directamente)
