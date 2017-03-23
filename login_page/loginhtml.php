<!DOCTYPE html>
<html>
<head>
	<title>login</title>
</head>
<body>

<form method="post" action="login.php">
	Username: <input type="text" name="un" required><br>
	Password: <input type="Password" name="pass" required><br>
	<input type="submit" value="LogIn">
</form>
<p>New User?</p><a href="signup.html">SignUp</a>
</body>
</html>

<?php
	$flag=1;
	session_start();
	$flag=$_SESSION['f'];
	if($flag==0)
		echo "$flag Invalid username or password!";
?>