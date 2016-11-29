# 5. API de notificaciones

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
