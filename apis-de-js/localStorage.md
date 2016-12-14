# 4. API de almacenamiento local

Los dos mecanismos en el almacenamiento web son los siguientes:

* sessionStorage mantiene un área de almacenamiento separada para cada origen que está disponible por la duración de la sesión de la página (tanto si el navegador esta abierto como si no, incluyendo recargas de página y restablecimientos).
* localStorage hace lo mismo, pero persiste incluso cuando el navegador es cerrado y reabierto.

Estos mecanismos están disponibles mediante las propiedades:

```Javascript
Window.sessionStorage
Window.localStorage
```

Invocando uno de estos creará una instancia del objeto Storage, a través del cual los elementos de información pueden ser creados, recuperados y eliminados. sessionStorage y localStorage utilizan un objeto de almacenamiento diferente según su origen — funcionan y son controlados por separado.
