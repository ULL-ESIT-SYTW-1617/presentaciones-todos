# 3. Funcionamiento

Materialize se fundamenta en la administración de las clases y los identificadores. Con ellas, podemos elegir que tipo de elemento queremos utilizar (menús, colecciones, formularios, tablas, alineaciones, colores,...)

Por ejemplo, para poner un parráfo de color rojo, hacemos lo siguiente:

```html
<p class="#f44336 red">Este parráfo ha cambiado de color de fondo</p>
```

Utilizamos la clase `#f44336 red` que nos ofrece Materialize para cambiar el color.

## Las columnas viven en las filas

Materialize funciona básicamente con dos clases, **row** y **col**. Siempre que pongamos una fila, es aconsejable poner una columna. No es recomendable poner una columna sin una fila antes.

Disponemos de 12 diferentes particiones que podemos administrar como queramos. Por ejemplo, podemos dividir una fila en 12,11,10,9,...1 columnas.

Disponemos además, tres diferentes tamaños dependiendo del tamaño de pantalla. Tenemos s(small), m(medium) y l(large).

```html
    <div class="row">
        <div class="col s12 m6 l6">
            <h4>Las columnas viven en las filas</h4>
        </div>
    </div>
    <div class="row">
        <div class="col s12 m4 l4">
            <p>
            Materialize funciona básicamente con dos clases, <b>row</b> y <b>col</b>. Siempre que pongamos una
            fila, es aconsejable poner una columna. Tampoco es recomendable poner una columna sin una fila antes.
            </p>
        </div>
        <div class="col s12 m4 l4">
            <p>
            Disponemos de 12 diferentes particiones que podemos administrar como queramos. Por ejemplo,
            podemos dividir una fila en 12,11,10,9,...1 columnas.
            </p>
        </div>
        <div class="col s12 m4 l4">
            <p>
            Disponemos además, tres diferentes tamaños dependiendo del tamaño de pantalla. Tenemos s(small),
            m(medium) y l(large).
            </p>
        </div>
    </div>
```

En el código anterior, podemos ver un ejemplo del uso de las clases row y col.