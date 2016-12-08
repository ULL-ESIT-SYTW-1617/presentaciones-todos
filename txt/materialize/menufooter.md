# 6. Menú y Footer

## Menú

Hay una gran variedad de menús. Utilizamos la etiquete **nav** de HTML5 para definirlo. Podemos elegir entre las opciones que nos concede materialize. Este es un el usado en la página de presentación:

```html
<nav class="nav-extended">
    <div class="nav-wrapper  #1e88e5 blue darken-3">
        <a href="#" class="brand-logo">Materialize</a>
        <a href="#" data-activates="mobile-demo" class="button-collapse"><i class="material-icons">menu</i></a>
        <ul id="nav-mobile" class="right hide-on-med-and-down">
            <li><a href="https://github.com/ULL-ESIT-SYTW-1617/presentaciones-todos.git">Repositorio Presentación</a></li>
            <li><a href="https://ull-esit-sytw-1617.github.io/presentaciones-todos/">Gitbook</a></li>
            <li><a href="http://alu0100767421.github.io/">Página del Autor</a></li>
        </ul>
        
        
        <!-- Este es el menú que se desplega para los moviles-->
        
        <ul class="side-nav" id="mobile-demo">
            <li><a href="https://github.com/ULL-ESIT-SYTW-1617/presentaciones-todos.git">Repositorio Presentación</a></li>
            <li><a href="https://ull-esit-sytw-1617.github.io/presentaciones-todos/">Gitbook</a></li>
            <li><a href="http://alu0100767421.github.io/">Página del Autor</a></li>
        </ul>
        
        <!-- Mi menú de abajo -->
        <ul class="tabs tabs-transparent  #000000 black">
            <li class="tab"><a href="#introduccion">Introducción</a></li>
            <li class="tab"><a href="#estructura">Estructura</a></li>
            <li class="tab"><a href="#css">CSS</a></li>
            <li class="tab"><a href="#componentes">Componentes</a></li>
        </ul>
    </div>
</nav>
```

Materialize nos ofrece la posibilidad de que cuando estemos utilizando una pantalla pequeña, podamos desplegar un menú desde la izquierda. Por eso, tenemos la clase **side-nav** y el id **mobile-demo**. No obstante, un un fichero **js** propio nuestro, debemos de añadir las siguientes líenas:

```Javascript
$( document ).ready(function(){
    $(".button-collapse").sideNav(); 
});

```


## Footer

Este es un ejemplo de footer:

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