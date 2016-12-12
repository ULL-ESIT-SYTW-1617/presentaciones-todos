# 6. API de Dispositivos

## Vibración

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

## Batería

La API de Estado de Batería, también conocida como "Battery API", provee información acerca del sistema de carga de la batería y permite notificar mediante eventos que son enviados cuando el nivel de la batería cambia. Este puede ser usado para ajustar el uso de recursos por parte de una aplicación y evitar un gasto innecesario de energía cuando la batería esta baja o para guardar cambios en un archivo antes de que la batería se agote y así prevenir perdida de información.

```Javascript
var battery = navigator.battery || navigator.mozBattery || navigator.webkitBattery;

function updateBatteryStatus() {
  console.log("Battery status: " + battery.level * 100 + " %");

  if (battery.charging) {
    console.log("Battery is charging");
  }
}

battery.addEventListener("chargingchange", updateBatteryStatus);
battery.addEventListener("levelchange", updateBatteryStatus);
updateBatteryStatus();
```

## Acelerómetro

Cada vez más, los dispositivos habilitados portátiles son capaces de determinar su posición; Es decir, pueden reportar datos que indican cambios en su posición con relación a la atracción de la gravedad. En particular, los dispositivos manuales tales como teléfonos móviles pueden utilizar esta información para girar automáticamente la pantalla.

```Javascript
window.addEventListener('devicemotion', function(e) {
  document.getElementById('accelx').value = e.acceleration.x;
  document.getElementById('accely').value = e.acceleration.y;
  document.getElementById('accelz').value = e.acceleration.z;
});
```
