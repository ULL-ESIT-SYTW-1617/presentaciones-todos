# Libro de las presentaciones de SYTW curso 2016/17

[![Libro en gh-pages](https://img.shields.io/badge/Book-gh--pages-brightgreen.svg?style=flat-square)](http://ULL-ESIT-SYTW-1617.github.io/presentaciones-todos)

En este repositorio se almacenan por capítulos las distintas presentaciones de SYTW. En el directorio `txt` hay un directorio con el título de cada presentación.

| Título                   | Autor                             | Directorio                     | Fecha      | Enlace                                                                                      |
| ------------------------ | --------------------------------- | ------------------------------ | ---------- | ------------------------------------------------------------------------------------------- |
| Angular                  | Eric Rafael Ramos Suarez          | `txt/angular`                  | XX/XX/XXXX | [Enlace](http://ULL-ESIT-SYTW-1617.github.io/presentaciones-todos/angular)                  |
| APIs de JS               | Samuel Ramos Barroso              | `txt/apis-de-js`               | XX/XX/XXXX | [Enlace](http://ULL-ESIT-SYTW-1617.github.io/presentaciones-todos/apis-de-js)               |
| Audio y Vídeo en JS      | Constanza Polette Leon Baritussio | `txt/audio-y-video-en-js`      | XX/XX/XXXX | [Enlace](http://ULL-ESIT-SYTW-1617.github.io/presentaciones-todos/audio-y-video-en-js)      |
| Babel ES6, ES7 y ES8     | Daniel Ramos Acosta               | `txt/babel-es6-es7-y-es8`      | 17/11/2016 | [Enlace](http://ULL-ESIT-SYTW-1617.github.io/presentaciones-todos/babel-es6-es7-y-es8)      |
| Bootstrap                | Jacobo Rodicio Gonzalez           | `txt/bootstrap`                | XX/XX/XXXX | [Enlace](http://ULL-ESIT-SYTW-1617.github.io/presentaciones-todos/bootstrap)                |
| Canvas                   | Maria Nayra Rodriguez Perez       | `txt/canvas`                   | XX/XX/XXXX | [Enlace](http://ULL-ESIT-SYTW-1617.github.io/presentaciones-todos/canvas)                   |
| Angular                  | Edna Liliana Galiano Camacho      | `txt/cloud-9`                  | XX/XX/XXXX | [Enlace](http://ULL-ESIT-SYTW-1617.github.io/presentaciones-todos/cloud-9)                  |
| Edición de vídeo         | Rafael Herrero Álvarez            | `txt/edicion-de-video`         | XX/XX/XXXX | [Enlace](http://ULL-ESIT-SYTW-1617.github.io/presentaciones-todos/edicion-de-video)         |
| Graphics                 | Noe Leopoldo Campos Delgado       | `txt/graphics`                 | XX/XX/XXXX | [Enlace](http://ULL-ESIT-SYTW-1617.github.io/presentaciones-todos/graphics)                 |
| Juegos en JS             | Joshua Pérez García               | `txt/juegos-en-js`             | XX/XX/XXXX | [Enlace](http://ULL-ESIT-SYTW-1617.github.io/presentaciones-todos/juegos-en-js)             |
| Laravel                  | Merquis Jesús Cruz Veloz          | `txt/laravel`                  | XX/XX/XXXX | [Enlace](http://ULL-ESIT-SYTW-1617.github.io/presentaciones-todos/laravel)                  |
| Materialize              | Alexander Cole Mora               | `txt/materialize`              | XX/XX/XXXX | [Enlace](http://ULL-ESIT-SYTW-1617.github.io/presentaciones-todos/materialize)              |
| Meteor                   | Josue Toledo Castro               | `txt/meteor`                   | XX/XX/XXXX | [Enlace](http://ULL-ESIT-SYTW-1617.github.io/presentaciones-todos/meteor)                   |
| Parallax y Materialize 2 | Moises Yanes Carballo             | `txt/parallax-y-materialize-2` | XX/XX/XXXX | [Enlace](http://ULL-ESIT-SYTW-1617.github.io/presentaciones-todos/parallax-y-materialize-2) |
| PhantomJS                | Tania González Rodríguez          | `txt/phantomjs`                | XX/XX/XXXX | [Enlace](http://ULL-ESIT-SYTW-1617.github.io/presentaciones-todos/phantomjs)                |
| Polymer                  | Pedro Manuel Ramos Rodríguez      | `txt/polymer`                  | XX/XX/XXXX | [Enlace](http://ULL-ESIT-SYTW-1617.github.io/presentaciones-todos/polymer)                  |
| React                    | Jose Lucas Ruiz González          | `txt/react`                    | XX/XX/XXXX | [Enlace](http://ULL-ESIT-SYTW-1617.github.io/presentaciones-todos/react)                    |
| Shopify                  | Aitor Bernal Falcón               | `txt/shopify`                  | XX/XX/XXXX | [Enlace](http://ULL-ESIT-SYTW-1617.github.io/presentaciones-todos/shopify)                  |                 |

## Añadir tu capítulo

1. Hacer un fork
2. Crea una rama con tu nombre
3. Pasarle el lint al código (`npm run lint`)
4. Hacer un pull request

## Normas generales

1. En el README de cada uno, tiene que haber un `#` al principio con el título de la presentación, y dos listas (`*`) con el autor y la fecha.
2. Cada subcapítulo empieza con un `#`, y tiene que tener un número. El formato es `# <número>. <título>`. Por ejemplo: `# 2. Patata`.

## Tareas de npm

* `build`: Construir el Libro
* `clean`: Limpiar el repo
* `serve`: Abre un servidor en el puerto 8080
* `lint`: Pasa el lint a los markdown
