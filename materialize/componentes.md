# 5. Componentes

Disponemos de diferentes componentes para añadir a nuestra página web. Botones, notificaciones, caminos, tarjetas, etiquetas, formularios,...

## Notificaciones

```html
<h6>notificacion <span class="new badge black">10</span></h6>
```

Podemos cambiar el color a la notificacion, cambiando **black** por otro color.

## Botones

Tenemos una gran amplitud de botones. Podemos elegir su tamaño (pequeño, mediano, grande), añadirle iconos,
cambiarlo de color,...

Algunos ejemplo:

```html
<a class="waves-effect waves-light btn #2196f3 blue"><i class="material-icons left">input</i>Botón</a>
<a class="btn disabled">Button</a>
<a class="btn-floating btn-large waves-effect waves-light red"><i class="material-icons">add</i></a>
```

## Caminos

```html
<nav>
    <div class="nav-wrapper #2196f3 blue">
        <div class="col s12">
            <a href="#!" class="breadcrumb">Uno</a>
            <a href="#!" class="breadcrumb">Dos</a>
            <a href="#!" class="breadcrumb">Tres</a>
        </div>
    </div>
</nav>
```

## Etiquetas

```html
<div class="chip">
    Etiqueta
    <i class="close material-icons">close</i>
</div>
```

## Tarjetas

```html
<div class="card">
    <div class="card-image waves-effect waves-block waves-light">
        <img class="activator" src="ruta_imagen">
    </div>
    <div class="card-content">
        <span class="card-title activator grey-text text-darken-4">Texto<i class="material-icons right">more_vert</i></span>
        <p><a href="#">Texto</a></p>
    </div>
    <div class="card-reveal">
        <span class="card-title grey-text text-darken-4">Texto<i class="material-icons right">close</i></span>
        <p>Texto</p>
    </div>
</div>
```

## Formularios

```html
<form class="col s12">
    <div class="row">
        <div class="input-field col s6">
        <i class="material-icons prefix">account_circle</i>
        <input id="icon_prefix" type="text" class="validate">
        <label for="icon_prefix">First Name</label>
        </div>
        <div class="input-field col s6">
            <i class="material-icons prefix">phone</i>
            <input id="icon_telephone" type="tel" class="validate">
            <label for="icon_telephone">Telephone</label>
        </div>
        <div class="input-field col s12">
            <input id="email" type="email" class="validate">
            <label for="email" data-error="wrong" data-success="right">Email</label>
        </div>
    </div>
</form>
```

## Iconos

Tenemos un gran abanico de iconos. Podemos elegir diferentes tamaños (tiny, small, medium, large) y colores.

```html
<div class="row">
    <div class=" col s12 m12 l12">
        <i class="large material-icons red-text text-accent-3">invert_colors</i>
        <i class="medium material-icons blue-text text-darken-2">stay_primary_landscape</i>
        <i class="small material-icons purple-text text-darken-2">vpn_key</i>
        <i class="tiny material-icons yellow-text text-darken-2">replay</i>
    </div>
</div>
```