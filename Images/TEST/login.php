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
	<link rel="stylesheet" href="login.css"/>
</head>
<body>

	<div class="container" id="container">
		<div class="form-container sign-up-container">
			<form action="#">
				<h1> Create Account </h1>
				<input type="text" placeholder="Name">
				<input type="email" placeholder="Email">
				<input type="password" placeholder="Password">
				<button>Sign Up</button>
			</form>
		</div>
		<div class="form-container sign-in-container">
			<form action="#">
				<h1> Sign In </h1>
				<input type="email" placeholder="Email">
				<input type="password" placeholder="Password">
				<button>Sign In</button>
			</form>
		</div>
		<div class="overlay-container">
			<div class="overlay">
				<div class="overlay-panel overlay-left">
					<h1>Welcome Back!</h1>
					<p> To keep connected with us please log in </p>
					<button class="ghost " id="signin"  >Sign In </button>
				</div>
				<div class="overlay-panel overlay-right">
					<h1>Hello, Join Us! </h1>
					<p>Enter your personal details </p>
					<button class="ghost "id="signup">Sign Up</button>
				</div>
			</div>
		</div>
	</div>





</body>
</html>