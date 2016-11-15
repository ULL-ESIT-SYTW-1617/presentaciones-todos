# 8. Operador bind

El operador bind (`::`) es una nueva característica que está en Proposal, que nos permite vincular el entorno de una función a otra.

Básicamente es azúcar sintático para `.bind`:

```JavaScript
class Test {
  constructor () {
    this.text = 'Mi Texto'
  }

  getText () {
    return this.text
  }
}

let test = new Test()
let func = test.getText

try {
  console.log(func())
} catch(err) {
  console.log('Error!')
}


func = test.getText.bind(test)
console.log(func())
```

Para vincular el entorno, nombramos la instancia con el operador nuevo, seguido del método.

```JavaScript
class Test {
  constructor () {
    this.text = 'Mi Texto'
  }

  getText () {
    return this.text
  }
}

let test = new Test()
const func = test::test.getText
console.log(func())
```

Podemos resumir esto, ya que la instancia también es el mismo objeto en el que se encuentra la función:

```JavaScript
class Test {
  constructor () {
    this.text = 'Mi Texto'
  }

  getText () {
    return this.text
  }
}

let test = new Test()
const func = ::test.getText
console.log(func())
```
