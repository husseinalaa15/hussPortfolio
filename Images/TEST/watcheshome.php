<!DOCTYPE html>
<html>
<head>

	<title>Watches Club</title>
	<meta charset="utf-8">
  	<meta name="viewport" content="width=device-width, initial-scale=1">
  	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css">
  	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
  	<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
  	<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js"></script>
	<style>
		
		body{

			background-image: url(bg1.jpg);
			background-size: 100%;
			background-attachment: fixed;
			font-family: sans-serif;
			margin-top: 5%;	
		}

		

		h1 , h4{

				text-align: center;
				padding: 2px;
				letter-spacing: 1px;

		}

		p{

				text-align: center;
				padding: 2px;
				letter-spacing: 1px;
				font-weight: bold;
  				font-size:17px;


		}

		

		.carousel-inner img {
     		width: 100%;
     		height: 600px;
 		 	max-height: 600px;
 		 	
 		 	border-radius: 50px;
  			}

  		

  		.container2{
  			width:100%;
  			background-color: #f1fcfc	;
  			
  		}

  		.test-inner img{
  			width:7%;
  			height: 100px;
  			max-height: 100px;
  			border-radius: 60px;
  			margin-left: 55px;
  			margin-bottom: 20px;
  			margin-top: 20px;

  		}
  		.test-inner{
  			padding-bottom: 10%;
  		}
  		
  		.carousel-caption{
  			color:grey;
  		}

  		h2{

  			color:black;
  			
  			
  			font-weight: bold;
  			
  			margin-bottom: 3%;
  			margin-left: 3%;
  		}
  		.footer{
  			color:#232b2b;
  			font-size:15px;
  		}



	</style>

</head>
<body >

	<!--		NAV BAR 		-->

	<nav class="navbar navbar-expand-sm bg-dark navbar-dark fixed-top">
  <ul class="navbar-nav">
    <li class="nav-item active">
      <a class="nav-link" href="watcheshome.html">Home</a>
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
      <a class="nav-link " href="contactus.html">Contact Us</a>
    </li>
  </ul>
</nav>

<!--		WELCOME 		-->

	<div class="container1 p-3  my-3 border ">
	<h1>Welcome To Watches Club </h1>
	<h4>Please <a href="#"> Register </a> or <a href="#">Log in</a> </h4>
	</div>

<!--		PARAGRAPH		-->


<div class="container2 p-3   my-3 border ">

	<p>We Provie the best watches in the Middle East.</p>
	<p>You can see our Products from here </p>
	<center><button class="btn btn-secondary">Products</button></center>
	<br>
</div>

<div id="ph" class="carousel slide" data-ride="carousel"  >

  <!-- The slideshow 	CAROUSEL  		 -->

  <div class="carousel-inner">
    
<!--		SLIDE 1 		-->

    <div class="carousel-item active">
      <img src="bg.jpg" alt="rolex" width="1000" height="500">
       <div class="carousel-caption">
        <h3>Rolex</h3>
        <p>we have discounts up to 40%</p>
      </div>   
    </div>
    
<!--		SLIDE 2			-->

    <div class="carousel-item">
      <img src="w1.jpg" alt="rolex2" width="1000" height="500">
	 <div class="carousel-caption">
        <h3>Rolex</h3>
        <p>we have discounts up to 40%</p>
      </div>   
    </div>
 
<!--		SLIDE 3			-->

    <div class="carousel-item">
      <img src="omega.jpeg" alt="omega" width="1000" height="500">
 	 <div class="carousel-caption">
        <h3>Omega</h3>
        <p>we have discounts up to 40%</p>
      </div>  
    </div>
    
<!--		SLIDE 4			-->

    <div class="carousel-item">
      <img src="w3.jpg" alt="uboat" width="1000" height="500">
	 <div class="carousel-caption">
        <h3>U-Boat</h3>
        <p>we have discounts up to 40%</p>
      </div>   
    </div>

    <!--		EL SLIDES CONTROL		-->
  <ul class="carousel-indicators">
    <li data-target="#ph" data-slide-to="0" class="active"></li>
    <li data-target="#ph" data-slide-to="1"></li>
    <li data-target="#ph" data-slide-to="2"></li>
    <li data-target="#ph" data-slide-to="3"></li>
  </ul>


  <!-- 		Left and right controls		 -->


  <a class="carousel-control-prev" href="#ph" data-slide="prev">
    <span class="carousel-control-prev-icon"></span>
  </a>
  <a class="carousel-control-next" href="#ph" data-slide="next">
    <span class="carousel-control-next-icon"></span>
  </a>
</div>
  </div>
</div>

<hr>
<br>

<h2>our customers’ feedbacks!</h2>

<br>

<div id="tes" class="carousel slide  " data-ride="carousel"  >
<div class="carousel-caption">
	
      </div> 
   <!--			 OUR CUSTOMER'S SAY  		-->

  <div class="container3 bg-light my-1 border">

  <div class="test-inner ">

    <div class="carousel-item active">

<!--		SLIDE 1 		-->


    <div class="carousel-caption">
    <p>Great customer service.</p>
    <h6>- Katherine M. -</h6>
      </div> 
      <img src="pp1.jpg" alt="pp1" width="1000" height="500">
        
    </div>

<!--		SLIDE 2 		-->



    <div class="carousel-item">
      <img src="pp2.jpg" alt="pp3" width="1000" height="500">
	 <div class="carousel-caption">
        <p>They are  very good company, I have bought a rolex and it works really good Thank you </p>
        <h6>- Amanda Jackson -</h6>
      </div>   
    </div>


<!--		SLIDE 3		-->



    <div class="carousel-item">
      <img src="pp3.jpg" alt="pp3" width="1000" height="500">
 	 <div class="carousel-caption">
        <p>Thanks for delivering my order very quickly and efficiently. You are such a professional organization.</p>
        <h6>- Anne P. - </h6>
        
      </div>  
    </div>
      
    </div>
  
</div>
  </div>
<br>

<!--THIS IS THE FOOTER --> 

 <div class="jumbotron text-center " style="margin-bottom:0">
  <p class="footer">For any Problems please <a class="nav-link" href="contactus.html" >Contact Us </a> 01150370370</p>
</div>




  
 

</body>
</html>