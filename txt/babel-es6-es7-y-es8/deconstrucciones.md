# 4. Deconstrucciones

La asignación por deconstrucción es una expresión que nos permite extrer datos de Arrays u Objectos.

## Uso con objectos

Para usarlo con objetos necesitamos indicar los nombres de las claves que queramos extraer.

```JavaScript
function login (username, password) {
  // Hacer cosas
  console.log(username)
  console.log(password)
}


let argv = {
  username: 'Pepe',
  password: 'Patata'
  // Y otras cosas
}

let { username, password } = argv

login(username, password)
```

## Uso con arrays

Para usarlo con array, se usa de forma posicional:

```JavaScript
function login (username, password) {
  // Hacer cosas
  console.log(username)
  console.log(password)
}


let argv = [
  'Pepe',
  'Patata'
  // Y otras cosas
]

let [ username, password ] = argv

login(username, password)
```
