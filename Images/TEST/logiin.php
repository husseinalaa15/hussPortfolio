<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
  	<meta name="viewport" content="width=device-width, initial-scale=1">
  	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css">
  	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
  	<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
  	<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js"></script>
	<title>Login</title>
	<link rel="stylesheet" href="logiin.css"/>
</head>
<body>
	<nav class="navbar navbar-expand-sm bg-dark navbar-dark ">
  <ul class="navbar-nav">
    <li class="nav-item active">
      <a class="nav-link" href="watcheshome.php">Home</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="logiin.php">Log In</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="logiin.php">Register</a>
    </li>
    <li class="nav-item">
      <a class="nav-link " href="#">Products</a>
    </li>
    <li class="nav-item">
      <a class="nav-link " href="contactus.php">Contact Us</a>
    </li>
  </ul>
</nav>
<div class="card middle">	
	<div class="front">
		<div class="Hello">
			<h1>Hello, Join Us! </h1>
			<p>Enter your personal details </p>
		</div>
	</div>
	<div class="back">
		<div class="signup">
			<form action="#">
				<h1> Create Account </h1>
				<input type="text" placeholder="Name">
				<input type="email" placeholder="Email">
				<input type="password" placeholder="Password">
				<button>Sign Up</button>
			</form>
		</div>
	</div>
</div>

<div class="card middle2">	
	<div class="front2">
		<div class="welcome">
					<h1>Welcome Back!</h1>
					<p> To keep connected with us please log in </p>
					
				</div>
	</div>
	<div class="back2">
		<div class="signup">
			<form action="connect.php" method="POST">
				<h1> Sign In </h1>
				<input type="text" name="username" placeholder="username">
				<input type="password" name="password" placeholder="Password">
				<button>Sign In</button>
			</form>
		</div>
	</div>
</div>





</body>
</html>
