# 7. NodeJS API

## Console

El módulo console proporciona una consola de depuración simple que es similar al mecanismo de consola de JavaScript proporcionado por los navegadores web.

Proporciona tres métodos:

* El .log, que es el generico
* El .error, para gestión de errores
* El .warn, para gestionar las advertencias o warnings.

```Javascript
console.log('hello world');

/*Prints: hello world, to stdout*/


console.error(new Error('Whoops, something bad happened'));

/*Prints: [Error: Whoops, something bad happened], to stderr*/

const name = 'Will Robinson';
console.warn(`Danger ${name}! Danger!`);

/*Prints: Danger Will Robinson! Danger!, to stderr*/
```

## Errores

Node.js admite varios mecanismos para gestionar errores que se producen mientras se está ejecutando una aplicación, esta módule proporciona métodos para gestionar y manejar dichos errores.

Proporciona varios métodos:

* El Try - Catch.
* Las funciones callback de error.
* Una clase de Error, que no indica ninguna circunstancia específica de por qué se produjo el error. Los objetos de error detallan el punto en el código en el que se instanció el error y proporciona una descripción de texto del error.

```Javascript
const fs = require('fs');
fs.readFile('a file that does not exist', (err, data) => {
  if (err) {
    console.error('There was an error reading the file!', err);
    return;
  }
});

try {
  const m = 1;
  const n = 0;
  const x = m / n;
} catch (err) {
    console.error('Error, n is 0');
}

const myObject = {};
Error.captureStackTrace(myObject);
myObject.stack  // similar to `new Error().stack`
```

### Códigos de error

* EACCES: Permiso denegado

* EADDRINUSE: Dirección o puerto ya en uso.

* ECONNREFUSED: Conexión rechazada por el host

* ECONNRESET: Conexión fue forzosamente cerrada por un par. Esto normalmente resulta de una pérdida de la conexión en el conector remoto debido a un tiempo de espera o reinicio.

* EEXIST: Se le proporciona un fichero que no existe.

* EISDIR: La aplicación esperaba un fichero, pero se le proporcionó un directorio.

* EMFILE: Se ha alcanzado el número máximo de descriptores de archivos permitidos en el sistema y las peticiones para otro descriptor no se pueden cumplir hasta que se haya cerrado al menos uno.

* ENOENT: El fichero o directorio requerido no existe.

* ENOTDIR (Not a directory): A component of the given pathname existed, but was not a directory as expected. Commonly raised by fs.readdir.

* ENOTEMPTY: Se requería un directorio vacío, pero contenía ficheros.

* EPERM: Se ha intentado realizar una operación que requiere permisos elevados

* EPIPE: Una escritura en un pipe, socket o FIFO para el que no hay proceso para leer los datos.

* ETIMEDOUT: Una solicitud de conexión o envío falló porque la parte conectada no respondió correctamente después de un período de tiempo.

## Assert

El módulo assert proporciona un conjunto simple de pruebas. El módulo está diseñado para su uso interno por Node.js, pero puede utilizarse en el código de aplicación via require ('assert'). Sin embargo, assert no es un marco de pruebas, y no está destinado a ser utilizado como una biblioteca de aserción de propósito general.

```Javascript
const assert = require('assert');

assert(true);
/*OK*/
assert(1);
/*OK*/
assert(false);
/*throws "AssertionError: false == true"*/
assert(0);
/*throws "AssertionError: 0 == true"*/
assert(false, 'it\'s false');
/*throws "AssertionError: it's false"*/
```

## Crypto

El módulo Crypto proporciona una una herramienta para encriptar con las funciones OpenSSL hash, HMAC, cipher, decipher, firmar y certificar funciones.

```Javascript
const crypto = require('crypto');

const secret = 'abcdefg';
const hash = crypto.createHmac('sha256', secret)
                   .update('I love cupcakes')
                   .digest('hex');
console.log(hash);
```

## Child Process

El módulo Child Process proporciona una herramienta para ejecutar comandos shell en Javascript

```Javascript
const spawn = require('child_process').spawn;
const ls = spawn('ls', ['-lh', '/usr']);

ls.stdout.on('data', (data) => {
  console.log(`stdout: ${data}`);
});

ls.stderr.on('data', (data) => {
  console.log(`stderr: ${data}`);
});

ls.on('close', (code) => {
  console.log(`child process exited with code ${code}`);
});
```

## Process

El objeto process proporciona información sobre el proceso Node.js actual y control sobre él. Como global, siempre está disponible para las aplicaciones Node.js sin necesidad de require ().

```Javascript
process.argv;
process.cwd();
process.env.VAR;
process.chdir(directory);
process.getuid();
process.getegid();
process.cpuUsage();
process.kill(pid, signal);
```

## Readline

El módulo readline proporciona una interfaz para leer datos de la entrada estándar una línea a la vez.

```Javascript
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What do you think of Node.js? ', (answer) => {
  /*TODO: Log the answer in a database*/
  console.log(`Thank you for your valuable feedback: ${answer}`);

  rl.close();
});
```
