
# 1. Introducción

## Canvas

Canvas es un elemento HTML incorporado en HTML5 que permite la generación de gráficos dinámicamente por medio del scripting. 
Entre otras cosas, permite la renderización interpretada dinámica de gráficos 2D y mapas de bits, 
asi como animaciones con estos gráficos.

El Canvas consiste en una región dibujable definida en el código HTML con atributos de altura y ancho. El usuario debe especificar sus dimensiones.
El código JavaScript puede acceder a la zona a través de un conjunto completo de funciones similares a las de otras APIs comunes de dibujo 2D, 
permitiendo así que los gráficos sean generados dinámicamente. 

Permite especificar un área de la página donde se puede, a través de scripts, dibujar y renderizar imágenes, 
lo que amplía notablemente las posibilidades de las páginas dinámicas y permite hacer cosas que hasta ahora estaban reservadas a los desarrolladores en Flash, 
con la ventaja que para usar canvas no será necesario ningún plugin en el navegador, lo que mejorará la disponibilidad de esta nueva aplicación. 

El **potencial de canvas** reside en su habilidad para actualizar su contenido en tiempo real. 
Si usamos esa habilidad para responder a eventos de usuario, 
podemos crear herramientas y juegos que anteriormente a la nueva especificación hubiesen requerido de un plugin externo 


### Usos del canvas

- Construcción de gráficos.
- Animaciones.
- Juegos
- Composición de imágenes.
- Logos.
- ...


### Elemento canvas

El elemento canvas posee 4 tipos de contexto:

- **2d**: Guía para la creación de objetos representados en dos dimensiones.
- **webgl**: Representaciones en tres dimensiones. Solo disponible a navegadores que soporten WebGL en su version 1 (OpenGL ES 2.0).
- **webgl2**: Representaciones en tres dimensiones. Solo disponible a navegadores que soporten WebGL en su version 2 (OpenGL ES 3.0).
- **bitmaprenderer**: Mapas de bits especiales para imágenes.


### Navegadores

En la actualidad este elemento está soportado por la gran mayoría de los navegadores actuales.

- Chrome
- Safari
- Firefox
- Opera
- Internet Explorer 10

El elemento canvas no es soportado a partir de la versión de Internet Explorer 8 y todas las anteriores.

![](http://mybroadband.co.za/news/wp-content/uploads/2016/04/Web-browsers-Chrome-Firefox-Safari-Edge-Opera-250x166.jpg)

