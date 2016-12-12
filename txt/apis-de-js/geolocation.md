# 2. La API de geolocalización en JavaScript

## Descripción

Con la geolocalización podemos conocer la ubicación geográfica del usuario, siempre y cuando el navegador del usuario tenga implementada esta API y el usuario nos da el permiso de acceder a su ubicación.

Se puede acceder a la API mediante el objeto navigator

```Javascript
  navigator.geolocation.getCurrentPosition(getPos, getErr);
```

Con el siguiente código extraemos las coordenadas y las mostramos en un mapa.

```Javascript
  //getPos obtiene las coordenadas GPS (latitud y longitud)
  function getPos(position) {
    var lat = position.coords.latitude,
        lon = position.coords.longitude;
    var img = "http://maps.googleapis.com/maps/api/staticmap?center="+lat+","+lon+"&zoom=15&size=500x300&sensor=false";
    document.getElementById('mapa').innerHTML = "<img src='"+img+"'>";
     }
  // getErr identifica y muestra un mensaje de error (si ocurre)
  function getErr(err) {
    var errors = {
        PERMISSION_DENIED:    'Usuario ha denegado la geolocalización',
        POSITION_UNAVAILABLE: 'Localización no disponible',
        TIMEOUT:              'La operación ha tardado demasiado tiempo',
        UNKNOWN_ERROR:        'Error desconocido'
      };
        alert(errors[err]);
     }
```
