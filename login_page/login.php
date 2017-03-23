<?php
	$flag=0;
	$un=$_POST['un'];
	$pass=$_POST['pass'];
	$conn=mysqli_connect("localhost","root","","college");
	$query=mysqli_query($conn,"SELECT * FROM student");
	while ($row=mysqli_fetch_array($query)) {
		if($row['username']==$un && $row['password']==$pass)
		{
			$flag=1;
			header('Location: main.html');
		}
	}
	if($flag==0)
		{
			echo 'Invalid username or password. '.'<a href="login.html">LogIn</a> Again<br>';
			echo "<span>New User? </span><a href='signup.html'>SignUp</a><span> Here</span>";
		}
?>