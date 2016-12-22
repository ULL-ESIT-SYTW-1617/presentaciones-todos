# 3. Cómo funciona el DOM virtual

El secreto de ReactJS para tener un performance muy alto, es que implementa algo llamado Virtual DOM y en vez de renderizar todo el DOM en cada cambio, que es lo que normalmente se hace, este hace los cambios en una copia en memoria y después usa un algoritmo para comparar las propiedades de la copia en memoria con las de la versión del DOM y así aplicar cambios exclusivamente en las partes que varían.

Esto puede sonar como mucho trabajo, pero en la práctica es mucho más eficiente que el método tradicional pues si tenemos una lista de dos mil elementos en la interfaz y ocurren diez cambios, es más eficiente aplicar diez cambios, ubicar los componentes que tuvieron un cambio en sus propiedades y renderizar estos diez elementos, que aplicar diez cambios y renderizar dos mil elementos.

Son más pasos a planear y programar, pero ofrece una mejor experiencia de usuario y una planeación muy lineal.

Lo que ha hecho que React se vuelva trending es su velocidad de renderizado de vistas. Eso es posible gracias a un Virtual DOM que genera React con cada componente que creamos y el algoritmo de Diff que básicamente lo que hace es marcar que elementos dentro de nuestro DOM Virtual tienen cambios para renderizar solo ellos y no tener que revisar y repintar el DOM entero de nuestra página. Dónde más tiempo se pierde en una aplicación web es en el renderizado y pintado del DOM. React evita eso y por eso es tan rápido.

![](https://2.bp.blogspot.com/-RQfQ5914fhY/WFeua7-RPvI/AAAAAAAAAB8/aQsqilpCDMY1UBVWpbtZYxn7iJ7bCP8OACLcB/s1600/react-js.jpg)
