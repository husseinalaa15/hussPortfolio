<!DOCTYPE html>
<html ng-app="RapApp">
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
      <link rel="stylesheet" href="style.css">

  	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
		<script src="app\lib\angular.min.js" ></script>
    <script src="app\lib\angular-route.min" ></script>
    <script src="app\lib\angular-animate.min" ></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.4.0/angular-route.min.js"></script>
    <script src="app\app.js" ></script>





	<title>
		Heezy
	</title>
<link rel="icon" href="media/logo.png" type="image/gif" size="16x16">

</head>
<body>
  <button style="font-size:30px;"  class="btn fas fa-angle-up" id="scroll"></button>
<button style="font-size:20px;"  class="btn fas fa-music" id="music"></button>

<div class="container   ">
<audio src="" muted="muted" style="display: none;"  class="container" controls id="audioPlayer">
  Sorry , your Browser doesn't support Html5.
</audio>

  <ul id="playlist"class="pt-3 text-center container " >
    <div class="col-lg-12    ">
    <li class="current-song"><a href="media/song1.mp3"> 1:MC Eiht - Streiht Up Menace  </a>   </li>
    <li>  <a href="media/song2.mp3">2:Fivio Foreign - 13 Going On 30   </a>   </li>
    <li>  <a href="media/song3.mp3">3:DDG - Moonwalking in Calabasas  </a>    </li>
  </div>
  </ul>
</div>
<!--<nav class="navbar navbar-expand-sm bg-dark navbar-dark sticky-top">
  <a class="navbar-img" href="#"><img src="media/logoh.png" width=";" height="110px"></a>
  <ul class="navbar-nav">
    <li class="nav-item">
      <a class="nav-link" href="news.php">News</a>
    </li>
    <li class="nav-item">
<div>

  <input type="checkbox" class="checkbox" id="checkbox" name="">
  <label for="checkbox" class="labelc">
    <i class="fas fa-moon"></i>
    <i class="fas fa-sun"></i>
      <div class="ball"></div>

  </label>
</div>
    </li>
  </ul>
</nav>-->
<div class="pos">
  <ul class="  navbar ">
     <li class="nav-item">
      <a class="nav-link  navlink" href="home.php">Home</a>
    </li>
    <li class="nav-item" >
      <a class="nav-link navlink" href="news.php">News</a>
    </li>
     <li class="nav-item dropdown"  >
      <a class="nav-link navlink   dropdown-toggle"  data-toggle="dropdown"  id="dropdownMenuButton" >Hip Hop Culture</a>
      <div class="dropdown-menu dropdown-content " aria-labelledby="dropdownMenuButton">
                <a class="dropdown-item" href="#">Store</a>
               <a  class="dropdown-item tatt"href="#">Tattoos</a>
                <a class="dropdown-item" href="#">Concerts</a>
      </div>
    </li>

    <li class="nav-item dropdown"  >
      <a class="nav-link navlink   dropdown-toggle"  data-toggle="dropdown"  id="dropdownMenuButton" >Rap</a>
      <div class="dropdown-menu dropdown-content " aria-labelledby="dropdownMenuButton">
                <a class="dropdown-item" href="#">Studios</a>
               <a  class="dropdown-item"href="#">Rare Tracks</a>
                <a class="dropdown-item" href="#">Underrated Tracks</a>
      </div>
    </li>




 <li class="nav-item" >
      <a class="nav-link navlink" href="hot.php">Hot10</a>
    </li>

    <li class="nav-item" >
      <a class="nav-link navlink" href="store.php">About us</a>
    </li>

<li class="nav-item" >
      <a class=" text-white facebook" href="store.php"><i class="fab fa-facebook-f"></i></a>
      <a class=" instagram " href="store.php"><i class="fab fa-instagram"></i></a>
      <a class=" twitter " href="store.php"><i class="fab fa-twitter"></i></a>

    </li>
        <li class="nav-item">
    <div>

  <input type="checkbox" class="checkbox" id="checkbox" name="">
  <label for="checkbox" class="labelc">
    <i class="fas fa-moon"></i>
    <i class="fas fa-sun"></i>
      <div class="ball"></div>

  </label>
</div>
    </li>

  </ul>

</div>
