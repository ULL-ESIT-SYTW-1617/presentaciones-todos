# 2. Threejs

Es una biblioteca liviana escrita en JavaScript para crear y mostrar gráficos animados por ordenador en 3D en un navegador Web y puede ser utilizada con el elemento canvas de HTML5, SVG ó WebGL.
Esta biblioteca permite realizar complejas animaciones 3D que se muestran en el navegador sin el esfuerzo que se requiere la instalación de el plugin.

## Características

* Renderizadores: Canvas, SVG y WebGL.

* Efectos: anaglifo, bizco y la barrera de paralaje.

* Escenas: añadir y eliminar objetos en tiempo de ejecución; niebla.

* Cámaras: perspectiva y ortográfica; controladores: trackball, FPS, trayectoria y otras.

* Animación: armaduras, cinemática directa, cinemática inversa, morphing y fotogramas clave.

* Luces: ambiente, dirección, luz de puntos y espacios, sombras: emite y recibe.

* Materiales: Lambert, Phong, sombreado suave, texturas y otras.

* Shaders: el acceso a las capacidades del OpenGL Shading Language (GLSL): reflejos en la lente, pase profundo y una extensa biblioteca de post-procesamiento

* Objetos: mallas, partículas, sprites, líneas, cintas, huesos y otros.

* Geometría: plano, cubo, esfera, toroide, texto en 3D y otras; modificadores: torno, extrusión y tubo.

* Cargadores de datos: binario, imagen, JSON y escena.

* Utilidades: conjunto completo de funciones matemáticas en 3D, incluyendo tronco, matriz Quaternian, UVs y otras.

* Exportación e importación: utilidades para crear archivos compatibles con JSON Three.js desde: Blender, openCTM, FBX, Max, y OBJ.

* Soporte: La documentación de la API se encuentra en construcción, foro público y wiki en pleno funcionamiento.

### Ejemplo de gráficas

![imagen1](https://threejs.org/examples/#webgl_animation_cloth)

![imagen2]( https://threejs.org/examples/#webgl_geometry_cube)

![imagen3]( https://threejs.org/examples/#webgl_lights_hemisphere)

[Página Threejs con más ejemplos de gráficas](https://threejs.org/examples/)

## Instalación

Para ello accedemos al siguiente link y nos descargamos el comprimido que contendra

### Referenciandole en nuestro html

Para que funcione correctamente threjjs debemos incluir en nuestro html, las libreria anteriormente descargada:

```.html

<html>
<head>
<title>Iniciando con Three.js</title>
<style>canvas { width: 100%; height: 100% }</style>
</head>
<body>
<script src="three.min.js"></script> <!--Incluyendo la biblioteca-->
</body>
</html>


```

## Como funciona

Una vez hemos referenciado el javascript lo siguiente que haremos será introducir nuestras funciones como en el siguiente código:

```javascript

//Escena
var scene = new THREE.Scene(); // Crea el objeto de la escena

//Cámara
var camera = new THREE.PerspectiveCamera(
75, // Ángulo de "grabación" de abajo hacia arriba en grados.
window.innerWidth/window.innerHeight, // Relación de aspecto de la ventana de la cámara(Ejemplo: 16:9).
0.1, // Plano de recorte cercano (más cerca no se renderiza).
1000 // Plano de recorte lejano (más lejos no se renderiza).
);

camera.position.z = 5; //Enviar la cámara hacia atrás para poder ver la geometría. Por defecto es z = 0.
//Renderizador
var renderer = new THREE.WebGLRenderer({antialias:true}); // Utilizar el renderizador WebGL.
renderer.setSize(window.innerWidth, window.innerHeight); // Renderizador del tamaño de la ventana.
document.body.appendChild(renderer.domElement); // Añadir el renderizador al elemento DOM body.

//Geometría
var geometry = new THREE.CubeGeometry(1,1,1); // Crear geometría cúbica con dimensiones(x, y, z).
var material = new THREE.MeshLambertMaterial({color: 0xFF0000}); // Crear el material para la
// geometría y darle color rojo.
var cube = new THREE.Mesh(geometry, material); // Crear una malla que agrupará la geometría
// y el material creados anteriormente.
scene.add(cube); // Añadir la malla al objeto escena.
//Luz (requerida para el material MeshLambertMaterial)
var light = new THREE.PointLight( 0xFFFF00 ); // Luz proveniente de un punto en el espacio,
// semejante al sol.
light.position.set( -10, 5, 10 ); // Localización de la luz. (x, y, z).
scene.add( light ); // Añadir la luz al objeto escena.
// Función para renderizar
var render = function () {
requestAnimationFrame(render); // la renderización ocurrirá continuamente si la escena está visible.

cube.rotation.x += 0.03; //Velocidad de rotación en el eje x
cube.rotation.y += 0.03; //Velocidad de rotación en el eje y

renderer.render(scene, camera); //Renderizar escena cada vez que se ejecuta la función "render()".
};

render();

```

[Página con ejemplos de como desarollar la estructura](https://threejs.org/examples/)
Una vez en la página para ver el código le damos a view source

[Pequeños ejemplos de prueba](https://github.com/ULL-ESIT-SYTW-1617/presentaciongraphics/settings)
