# 7. Javascript

Materialize nos ofrece una gran variedad de opciones para añadir a nuestra web. Entre ellas, encontramos Parallax, carrusel de imágenes, transiciones, diálogos,...

En este caso, hemos puesto dos ejemplo:

## Ampliación de imagen

Al pinchar sobre la imagen, aumentará su tamaño

```html
<img class="materialboxed" width="650" src="ruta_imagen">
```

## Pregables

```html
<ul class="collapsible" data-collapsible="accordion">
    <li>
        <div class="collapsible-header"><i class="material-icons">filter_drama</i>Primero</div>
        <div class="collapsible-body"><p>Hola Mundo</p></div>
    </li>
    <li>
        <div class="collapsible-header"><i class="material-icons">place</i>Segundo</div>
        <div class="collapsible-body"><p>Hola Mundo 2.</p></div>
    </li>
    <li>
        <div class="collapsible-header"><i class="material-icons">whatshot</i>Tercero</div>
        <div class="collapsible-body"><p>Hola Mundo 3</p></div>
    </li>
</ul>

```