# 10. Export

Como complemento del `import` tenemos a `export`, que es la nueva sintaxis para exportar variables de un módulo. Antes se usaba `modules.exports` y lo igualábamos a lo que quisiéramos exportar, por ejemplo:

```JavaScript
function tareaImportante(a, b) {
  console.log('Soy tareaImportante')
  return a + b
}

module.exports = tareaImportante
```

## `default`

Usamos la palabra clave `default` para exportar algo por defecto, por ejemplo la función anterior:

```JavaScript
function tareaImportante(a, b) {
  console.log('Soy tareaImportante')
  return a + b
}

export default tareaImportante
```

O incluso, lo podemos poner todo seguido:

```JavaScript
export default function tareaImportante(a, b) {
  console.log('Soy tareaImportante')
  return a + b
}
```

A la hora de importarlo, directamente es el objecto retornado:

```JavaScript
import tareaImportante form './tareaImportante'
```

## Exportando múltiples elementos

Con `module.exports` teníamos que crear un objeto con los distintos elementos y exportarlo:

```JavaScript
function parte1() {
  console.log('parte1')
}

function parte2() {
  console.log('parte2')
}

function parte3() {
  console.log('parte3')
}

module.exports = {
  parte1,
  parte2,
  parte3
}
```

Usando los nuevos módulos, podemos poner un export al lado de la declaración de cada función:

```JavaScript
export function parte1() {
  console.log('parte1')
}

export function parte2() {
  console.log('parte2')
}

export function parte3() {
  console.log('parte3')
}
```

Cuando lo vayamos a importar, tenemos que especificar qué parte, no lo podemos importar todo de golpe:

```JavaScript
// import todo from '/.partes' no funciona!!
import {parte1, parte2, parte3} from './partes'
```

Si necesitamos importar todos los elementos, usamos otra sintaxis distinta:

```JavaScript
import * as partes from './partes'
```
