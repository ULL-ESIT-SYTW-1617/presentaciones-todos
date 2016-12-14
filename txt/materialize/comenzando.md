# 2. Comenzando a utilizar Materialize

Debemos de **descargar** la versión de materialize que deseamos. Nos ofrecen dos, la **estándar** y otra con fuente con Sass. Descomprimimos el paquete y tendremos las siguientes carpetas: css, js y fonts. Esta estructura es básica. En ellos, tendremos los ficheros propios de materialize, a los que nosotros podemos añadir los que queramos. Es recomendable no tocar estos ficheros.

Si descargamos la versión estándar, tendremos la siguiente estructura:

    Website
     /css
     --materialize.css
     /fonts
     --/roboto
     /js
     --materialize.js

También podemos utilizar un instalador de paquetes como `npm` o `bower`.

## Configuración

Ahora toca crear nuestra página. Creamos nuestro primer fichero html. En la página de materialize podemos encontrar una plantilla. Podemos copiarla, pero atención, en el primer link del head, añade una "s" al http, si no tendrás un error. La plantilla correcta sería la siguiente:

```html
<!DOCTYPE html>
<html>
  <head>
    <!--Import Google Icon Font-->
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    <!--Import materialize.css-->
    <link type="text/css" rel="stylesheet" href="css/materialize.min.css"  media="screen,projection"/>

    <!--Let browser know website is optimized for mobile-->
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  </head>

  <body>
    <!--Import jQuery before materialize.js-->
    <script type="text/javascript" src="https://code.jquery.com/jquery-2.1.1.min.js"></script>
    <script type="text/javascript" src="js/materialize.min.js"></script>
  </body>
</html>
```
