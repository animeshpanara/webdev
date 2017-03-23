<?php
	$flag=0;
	$un=$_POST['un'];
	$pass=$_POST['pass'];
	$cpass=$_POST['cpass'];
	if($pass==$cpass)
	{
		$conn=mysqli_connect("localhost","root","","college");
		$query=mysqli_query($conn,"SELECT * FROM student");
		while ($row=mysqli_fetch_array($query)) {
		if($row['username']==$un)
		{
			$flag=1;
			break;
		}
		}
		if($flag==0)
		{
			mysqli_query($conn,"INSERT INTO student (username,password) VALUES ('$un','$pass')");
			header('Location: login.html');
		}
		else
		{
			echo 'Such username already exists.Try with other username.<br>'.'<a href="signup.html">SignUp</a> Again';
			echo '<br>Already Registered? '.'<a href="signup.html">LogIn</a> Here';
		}
	}
	else
		echo "Password and Confirm-Password are not matching!Try Again.<br>".'<a href="signup.html">SignUp</a> Here';
?>