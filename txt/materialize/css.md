# 4. CSS

En este apartado, hablaremos de algunos de los elementos de css que nos ofrece Materialize para facilitarnos su uso.

## Colores

Materialize nos ofrece una gran paleta de colores, donde podemos elegir los que queramos para cualquier elemento de la página web. Un ejemplo de su uso sería:

```html
<footer class="page-footer #212121 grey darken-2">
    <div class="container">
        <div class="row">
            <div class="col l6 s12">
            <h5 class="white-text">Sistemas y Tecnologías Web</h5>
            <p class="grey-text text-lighten-4">Universidad de La Laguna</p>
            </div>
            <div class="col l4 offset-l2 s12">
                <ul>
                    <li><a class="grey-text text-lighten-3" href="https://github.com/ULL-ESIT-SYTW-1617/presentaciones-todos.git">Repositorio Presentación</a></li>
                    <li><a class="grey-text text-lighten-3" href="https://ull-esit-sytw-1617.github.io/presentaciones-todos/">Book Presentación</a></li>
                    <li><a class="grey-text text-lighten-3" href="http://alu0100767421.github.io/">Alexander Cole Mora</a></li>
                </ul>
            </div>
        </div>
    </div>
    <div class="footer-copyright">
        <div class="container">
            © 2016 Alexander Cole Mora. Derechos Reservados
            <a class="grey-text text-lighten-4 right" href="http://materializecss.com/">Materialize</a>
        </div>
    </div>
</footer>
```

Aquí estamos diciendo que el **footer** va a tener el color **#212121 grey darken-2**

## Class Container

Disponemos una class container que nos permite centrar el contenido de la página. Se adapta perfectamente a los diferentes tamaños de pantalla. Solamente hay que añadir en la class (normalmente de un div) la clase container

```html
    <div class="container">
        <div class="row">
            <div class="col l6 s12">
              <h1 class="white-text">Estoy dentro de una class container</h1>
            </div>
        </div>
    </div>
```

## Imágenes y vídeos

Las imágenes y los vídeos en Materialize, son responsivos. Añadimos la clase predefinida y conseguiremos que se adapte a las diferentes pantallas.
Para las imágenes debemos de poner la class **responsive-img**

```html
<img class="responsive-img" src="ruta_imagen">
```

Para los vídeos, tenemos dos opciones:

* Youtube

```html
<div class="video-container">
    <iframe width="853" height="480" src="//www.youtube.com/embed/ID_VIDEO?rel=0" frameborder="0" allowfullscreen></iframe>
</div>
```

* Vídeos propios

```html
<video class="responsive-video" controls>
   <source src="ruta_video" type="video/mp4">
</video>
```

## Otras opciones

### Tablas

Esta sería una tabla básica de Materialize. Hay muchas opciones, simplemente buscamos en la documentación oficial de Materialize y encontraremos la que más se ajuste a lo que buscamos.

```html
<table  class="responsive-table highlight">
   <thead>
       <tr>
           <th data-field="peli">Peliculas</th>
           <th data-field="genero">Género</th>
           <th data-field="country">País</th>
       </tr>
   </thead>
   <tbody>
       <tr>
           <td>Assasin Creed</td>
           <td>Ficción</td>
           <td>USA</td>
       </tr>
       <tr>
           <td>Doctor Strange</td>
           <td>Ficción</td>
           <td>USA</td>
       </tr>
       <tr>
           <td>Yo antes de ti</td>
           <td>Romántica</td>
           <td>Reino Unido</td>
       </tr>
   </tbody>
</table>
```

### Alineado

Tenemos tres formas de alinear: **centrado**, **izquierda** y **derecha**

```html
<div>
  <h5 class="left-align">Se alinea a la izquierda</h5>
</div>
<div>
  <h5 class="right-align">Se alinea a la derecha</h5>
</div>
<div>
  <h5 class="center-align">Se alinea al centro</h5>
</div>
```

## Sombras

También podemos poner sombras a nuestros elementos:

```html
<div class="col s12 m2">
  <p class="z-depth-1">Sombre nivel 1</p>
</div>
<div class="col s12 m2">
  <p class="z-depth-2">Sombra nivel 2</p>
</div>
<div class="col s12 m2">
  <p class="z-depth-3">Sombra nivel 3/p>
</div>
<div class="col s12 m2">
  <p class="z-depth-4">Sombra nivel 4</p>
</div>
<div class="col s12 m2">
  <p class="z-depth-5">Sombra nivel 5</p>
</div>
```