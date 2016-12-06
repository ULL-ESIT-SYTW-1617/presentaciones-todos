# 10. Ventajas de Meteor

- **Recarga automática**
No es necesario recargar la ventana del navegador cada vez que cambiamos un archivo de código.
Esto es posible gracias a que Meteor hace un seguimiento de todos los archivos en el directorio del proyecto, y los actualiza automáticamente en el navegador cada vez que detecta un cambio en alguno de ellos, conservando incluso el estado de la aplicación entre dos refrescos.

- **Facilidad a la hora de añadir nuevos paquetes o frameworks**
Meteor libra al usuario desarrollador de tener que introducir manualmente ficheros típicos de CSS y Javascript(librerías) y de los problemas ocasionados en algunos casos por redireccionarlos mal. Únicamente tenemos que añadirlos con la herramienta de línea de comandos **meteor**.

- **Ejecución de ficheros organizada.**
Con el objetivo de evitar problemas de sincronización, Meteor carga los ficheros de la siguiente forma:
    1.  Todos los archivos en el directorio *lib/*
    2.  Los archivos con nombre main.* se cargarán siempre después de todos los demás.
    3.  Todo se carga por orden alfabético en función del nombre del fichero.

- **No tenemos que indicar a Meteor dónde se encuentra un archivo**.
Su sistema de búsqueda de ficheros encuentra eficientemente los recursos que se requieren sin necesidad de indicarlo manualmente.
