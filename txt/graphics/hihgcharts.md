# 1. Highcharts

Highcharts en una librería escrita en JavaScript para generar gráficos interactivos en aplicaciones Web. Soporta varios tipos de gráficos como líneas, columnas, barras, pie, burbujas, cascada etc...

## Características

* Compatibilidad con todos los exploradores modernos de escritorio y móviles.

* Libre para usus no comerciales.

* Es Software libre

* Está escrito puramente en JavaScript

* Soporta varios tipos de gráficos

* Sintaxis de configuración sencilla

* Es dinámico

* Múltiples ejes

* Tiene tooltips:

_pequeñas etiquetas emergentes que se muestran cuando el cursor del ratón queda parado durante unos instantes encima de un componente visual de una ventana._

* Ejes para fechas

* Exportación a imágenes, PDF e impresión.

* Carga de datos externa

* Gráficos polares

* Gráficos invertidos

* Rotación de etiquetas

### Ejemplo de gráficas

![highcharts](http://www.highcharts.com/media/com_demo/images/highcharts/line-basic-default.svg)

![imagen2](http://www.highcharts.com/media/com_demo/images/highcharts/columnrange-default.svg)

![imagen3](http://www.highcharts.com/media/com_demo/images/highcharts/pie-gradient-default.svg)

[Página HighChart con más ejemplos de gráficas](http://www.highcharts.com/demo)

## Instalación

### Referenciandole en nuestro html

Para que funcione correctamente highcharts debemos incluir en nuestro html, las librerias de jquery e hihgcharts:

```.html

<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
<script src="http://code.highcharts.com/highcharts.js"></script>

```

### Paquete NPM

También la instalación puede llevarse a cabo a través de paquetes npm

Instalamos el paquete a tráves del comando:

```.html
npm install highcharts
```

Cargamos en nuestro js:

```javascript

var Highcharts = require('highcharts');

```

Y de la siguiente manera es como cargariamos el modulo:

```javascript

require('highcharts/modules/exporting')(Highcharts);

var chart = Highcharts.chart('container', {
series: [{
data: [1, 3, 2, 4]
}],
// ... more options - see http://api.highcharts.com/highcharts
});
```

## Como funciona

Una vez tenemos nuestro paquete instalado, crearemos la etiqueta para representar la gráfica en nuestro html:

```.html

<div id="myChart" style="width:100%; height:400px;" ></div>
```

y en nuestro js, introduciremos el siguiente código:

```javascript

$('#myChart').highcharts({
chart: {//ES el cuadro que genera
plotBackgroundColor: null,//Color de fondo
plotBorderWidth: null,//esta en 1 y se hace 0 y ya no tenemos la linea del borde
plotShadow: false,
type: 'pie'//tipo
},
title: {
text: 'Browser market shares January, 2015 to May, 2015'//titulo de nuestro marco
},
subtitle:{
text: 'Subitulo'
},
tooltip: {
pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'//es el nombre de la serie que lo tenemos mas abajoy podemos mostrar por ejemplo //{point.y}
},
plotOptions: {
pie: {
allowPointSelect: true,
cursor: 'pointer',//forma del cursor
depth: 10,
dataLabels: {
enabled: false,//true por defecto, opciones mostrando los nombres
format: '<b>{point.name}</b>: {point.percentage:.1f} %',
style: {
color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
}
},// showInlegend : true
}
},
series: [{ //estos serian los datos de nuestra bbdd
name: 'Pepe',//Nombre cuando ponemos el cursor encima se oscurece
colorByPoint: true,
data: [{
name: 'Microsoft Internet Explorer',
y: 56.33
}, {
name: 'Chrome',
y: 24.03,
sliced: true,
selected: true
}, {
name: 'Firefox',
y: 10.38
}, {
name: 'Safari',
y: 4.77
}, {
name: 'Opera',
y: 0.91
}, {
name: 'Proprietary or Undetectable',
y: 0.2
}]
}]
});
```

[Página con ejemplos de como desarollar la estructura](http://api.highcharts.com/highcharts/chart)

[Pequeños ejemplos de prueba](https://github.com/ULL-ESIT-SYTW-1617/presentaciongraphics/settings)
