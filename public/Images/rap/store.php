<?php  include 'nav.php';	?>
<body>
<div class="container pt-5 mt-5">
  <div class="row">
    <div class="col-lg-12 text-center">
      <h1 class="storeheader">  Welcome At Store </h1>
    </div>
    <div class="col-lg-6 text-center">

    </div>
  </div>

  <div class="container bg-dark"  ng-controller:"storeController">
    <div class="row">
      <div class="col-lg-4">
        <div class="card " >
          <img class="card-img-top" src="media/wegz.jpg" alt="Card image">
          <div class="card-body text-center">
            <h4 class="card-title">{{products.name}}</h4>
            <p class="card-text">{{products.price}}</p>
            <a href="#" class="btn btn-primary">Add To Cart </a>
          </div>
        </div>
      </div>

      <div class="col-lg-4">
        <div class="card ">
          <img class="card-img-top" src="media/wegz.jpg" alt="Card image">
          <div class="card-body text-center">
            <h4 class="card-title">Loco T-shirt</h4>
            <p class="card-text">Price</p>
            <a href="#" class="btn btn-primary">Add To Cart </a>
          </div>
        </div>
      </div>

      <div class="col-lg-4">
        <div class="card ">
          <img class="card-img-top" src="media/wegz.jpg" alt="Card image">
          <div class="card-body text-center">
            <h4 class="card-title">Loco T-shirt</h4>
            <p class="card-text">Price</p>
            <a href="#" class="btn btn-primary">Add To Cart </a>
          </div>
        </div>
      </div>
    </div>

  </div>

</div>
</body>
