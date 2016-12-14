# 5. APIS de audio, video y notificaciones

## API de notificaciones

La interface Notification de la Notifications API se usa para configurar y mostrar notificaciones de escritorio al usuario.

```JavaScript
 title = '¡Ha recibido un correo!';
     options = {
         body: 'Este es un aviso automático vía la API de notificación web.',
         tag: 'idmsg1',
         icon: 'http://www.emezeta.com/favicon.png'
     };
     Notification.requestPermission(function(status) {
         console.log('User Notification Permission: ' + status);
         new Notification(title, options);
     });
```

## API de Audio y video

HTML5 incorpora soporte multimedia a través de los elementos ```<audio>``` y ```<video>```, ofreciendo la posibilidad de añadir audio y video mediante dichas etiquetas.

```HTML
<button onClick="audio.play()">Play/Continue</button>
<button onClick="audio.pause()">Pause</button>
<script>
    var audio = new Audio(url);
</script>
```
