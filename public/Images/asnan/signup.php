<!DOCTYPE html>
<html>
<head>
	<title>Sign Up </title>
	<meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js"></script>
  <link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />

  <link rel="stylesheet" href="style.css">

</head>
<body style="background-color: #ededed;">
<nav class="navbar navbar-expand-md bg-light navbar-light fixed-top">
  <!-- Brand -->
  <a class="navbar-brand" href="home.php"><img src="t.png" width="40px;"></a>

  <!-- Links --> 
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="collapsibleNavbar">
  <ul class="navbar-nav">
    <li class="nav-item">

      <a class="nav-link" href="login.php">Log in </a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="signup.php">Sign Up</a>
    </li>

    <!-- Dropdown -->
    <li class="nav-item dropdown">
      <a class="nav-link dropdown-toggle" href="#" id="navbardrop" data-toggle="dropdown">
        More
      </a>
      <div class="dropdown-menu">
        <a class="dropdown-item" href="order.php">Order</a>
        <a class="dropdown-item" href="#">Info</a>
        <a class="dropdown-item" href="#">Contact Us</a>
      </div>

    </li>
  </ul>
</div>
</nav>
<br>


<div class="su container   pt-5 my-5">
	<h2 style="font-size: 70px; font-weight: bold; padding:15px; padding-bottom: 20px; color:#ededed" class="text-center  text-black col-lg-12"> Sign Up </h2>
	<div class="form-inline p ">
  <div class="col-sm-6">
  <input style="width:100%;" class="form-control text-center " type="text" placeholder="First Name" name="">
  </div>
  <div class="col-sm-6">
  <input style="width:100%;" class="form-control text-center" type="text" placeholder="Last Name" name="">  
  </div>
  <div class="col-sm-12">
	<input style="width:100%;" class="form-control text-center" type="email" placeholder="Email" name="">
  </div>
  <div class="col-sm-6">
	<input style="width:100%;" class="form-control text-center" type="Password" placeholder="Password" name="">
  </div>
  <div class="col-sm-6">
	<input style="width:100%;" class="form-control text-center" type="Password" placeholder="Re-Enter Password" name="" reqiored>
  </div>
  <div class="col-sm-12">
  <input style="width:100%;" class="form-control text-center" type="text" placeholder="Address" name="" >
  </div>
  <div class="col-sm-12">
  <input style="width:100%;" class="form-control text-center" type="tel" placeholder="Phone Number" id="example-tel-input" required>
  </div>
  <div class="col-sm-12 pt-2">
  <center><button  type="submit" class="btn bs" >Sign Up</button></center>
  </div>
	<br>
	</div>
</div>





<!-- Footer -->
<footer class="page-footer font-small bg-dark">

  <!-- Copyright -->
  <div class="footer-copyright text-white text-center py-3">© 2020 Copyright:
    <a href="https://www.facebook.com/hussein.alaa.1272"> Hussein</a><Br>
    <a href="">hussein.alaa12199@gmail.com</a>
  </div>
  <!-- Copyright -->

</footer>
<!-- Footer -->
</body>
</html>