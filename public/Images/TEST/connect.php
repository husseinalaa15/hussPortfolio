<?php

$connection = mysqli_connect("localhost", "root", "", "login");
if (!$connection) {
  die("Database connection failed: " . mysqli_connect_error());
}
if(isset($_POST['username'])){
	$uname=$_POST['username'];
	$pass=$_POST['password'];

	$sql="select *from loginform where user='".$uname."'AND pass ='".$pass."'limit 1";

	}

?>