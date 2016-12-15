# 8. Presentación

A continuación adjunto el código que he generado durante la presentación con ejemplos de los componentes más utilizados y que personalmente veo de más utilidad:

~~~
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>Demo SYTW</title>
  <!-- css -->
  <link rel="stylesheet" href="css/bootstrap.min.css">
</head>
<body>

  <!-- Navbar -->
  <div class="container">
    <nav class="navbar navbar-inverse">
      <button class="btn btn-default navbar-btn">Acceso 1</button>
      <button class="btn btn-default navbar-btn">Acceso 2</button>

      <!-- dropdown -->
      <span class="dropdown">
        <button id="ext" class="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
          EXTENDIBLE
          <span class="caret"></span>
        </button>
        <!-- dropmenu -->
        <ul class="dropdown-menu" aria-labelledby="ext">
          <li><a href="">lolo</a></li>
          <li><a href="">lolo</a></li>
          <li><a href="">lolo</a></li>
          <li><a href="">lolo</a></li>
          <li class="divider" role="separator"></li>
          <li><a href="">lolo</a></li>
        </ul>
      </span>

      <!-- búsqueda -->
      <form role="search" class="navbar-form navbar-right">
        <div class="form-group">
          <input type="text" class="form-control" placeholder="Lo que sea">
        </div>
        <button class="btn btn-default" type="submit">Buscar</button>
      </form>
    </nav>
  </div>
  <!-- Final Navbar -->


  <!-- Jumbotron -->
  <div class="container">
    <div class="jumbotron">
      <h1>Bienvenido a la demo de BootStrap</h1>
      <p>...</p>
      <p><a href="#" class="btn btn-primary btn-lg" role="button">Learn more</a></p>
    </div>
  </div>
  <!-- Final Jumbotron -->

  <!-- Input groups -->
  <div class="container">
    <div class="input-group">
      <span id="i1" class="input-group-addon">@</span>
      <input type="text" class="form-control" placeholder="Username" aria-describedby="i1">
    </div>
    <br>
  </div>
  <div class="container">
    <div class="input-group">
      <input type="text" class="form-control" placeholder="Username" aria-describedby="i2">
      <span id="i2" class="input-group-addon">@ull.edu.es</span>
    </div>
  </div><br>
  <!-- Final Input groups -->

  <!-- Labels y Badges  -->
  <div class="container">
    <ul class="group-list">
      <li class="list-group-item">
        <span class="badge">3</span>
        Mensajes recibidos
      </li>
      <li class="list-group-item">
        <span class="glyphicon glyphicon-ok" aria-hidden="true"></span>
        Comprar GOFIOOOO
      </li>
      <li class="list-group-item">
        <span class="label label-warning">DEPRECATED!!!</span>
        gracefull 3.2.0
      </li>
    </ul>
  </div>
  <!-- Final Labels y Badges -->

  <!-- Thumbnails -->
  <div class="container">
    <div class="row">
      <div class="col-sm-6 col-md-4">
        <div class="thumbnail">
          <img src="http://ep00.epimg.net/sociedad/imagenes/2014/01/13/vidayartes/1389644564_955357_1389645231_noticia_normal.jpg" alt="">
          <div class="caption">
            <h3>Te veo!!!!</h3>
            <p>Aunque no lo creas...grgrgr</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- Final Thumbnails -->

  <!-- Principio Progress Bar -->
  <div class="container">
    <h4>Cuando acaba esto? Estamos al...</h4>
    <div class="progress">
      <div class="progress-bar" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style="width: 90%;">
        90%
      </div>
    </div>
  </div>
  <!-- Final Progress -->

  <!-- Pagination -->
  <div class="container">
  <nav aria-label="Page navigation">
    <ul class="pagination">
      <li>
        <a href="#" aria-label="Previous">
          <span aria-hidden="true">&laquo;</span>
        </a>
      </li>
      <li><a href="#">1</a></li>
      <li><a href="#">2</a></li>
      <li><a href="#">3</a></li>
      <li><a href="#">4</a></li>
      <li><a href="#">5</a></li>
      <li>
        <a href="#" aria-label="Next">
          <span aria-hidden="true">&raquo;</span>
        </a>
      </li>
    </ul>
  </nav>
  </div>
  <!-- Final Pagination -->

  <!-- Alerts -->
  <div class="container">
    <span class="alert alert-success">AL FIN!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!</span>
  </div>
  <!-- Final Alerts -->

  <!-- jquery -->
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
  <!-- javaScript -->
  <script src="js/bootstrap.min.js"></script>
</body>
</html>

~~~
