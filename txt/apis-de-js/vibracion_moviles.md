# 6. API de vibración de móviles

## Descripción

La mayoría de los dispositivos modernos pueden vibrar a través del hardware, esto permite que a través del código de software se pueda emitir estas vibraciones. La Vibration API  ofrece a las aplicaciones web la capacidad de acceder a este hardware en caso este lo soporte, caso contrario el dispositivo no hace nada.

Vibración se puede describir como un patrón de prender y apagar pulsos, los cuales pueden variar en longitud. El patrón puede consistir de un sólo número que indica cuantos milisegundos vibrará, o un arreglo de enteros describiendo un patrón de vibraciones y pausas. La vibración es controlada por un solo método:

```Javascript
  navigator.vibrate(500); // 500ms de vibración
```

Dicho método devuelve false si el dispositivo en cuestión no soporta la vibración

```Javascript
  if ('vibrate' in navigator)
    navigator.vibrate(500); // 500ms de vibración
```

La vibración puede ser simple, como en el ejemplo anterior o en patrones:

```Javascript
  if ('vibrate' in navigator)
    navigator.vibrate([100,30,100,30,100,200,200,30,200,30,200,200,100,30,100,30,100]);
    // Patrón de vibración de S.O.S.
```

## Uso

* Su uso principal es para las notificaciones de aplicaciones
* También se usa en juegos o explosiones en multimedia
* Como es lógico se pide un uso responsable de esta API, ya que gasta batería del usuario o puede resultar incómodo.
