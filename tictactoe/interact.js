var cnt=0,flag=[0,0,0,0,0,0,0,0,0],x1,x2,y1,y2,temp1=0;
function chp1()
{
	if(temp1==0)
	{
	if(cnt%2==0)
	{
		x1=(document.getElementById('p1-ix').value);
		//y1=parseInt(document.getElementById('p1-iy').value);
		if(x1<0 || x1>8)
		{
			alert("Invalid Input enter valid coordinate");
		}
		//else if(y1<1 || y1>3)
		//{
		//	alert("Invalid Input-y");
		//}
		else
		{
			
			if(flag[x1]==0)
			{
			cnt++;	
			flag[x1]=1;
			document.getElementById(x1).src="img/tick.png";
			check();
			}
			else
			{
					alert("cannot overwrite there");
			}

			

		}
	}
	else
	{
		alert("It's player 2s turn!");
	}
}
else
{
	alert("Games has completed..Refresh browser to start new game...");
}
}

function chp2()
{
	if(temp1==0)
	{
	if(cnt%2!=0)
	{
		x2=parseInt(document.getElementById('p2-ix').value);
		//y2=parseInt(document.getElementById('p2-iy').value);
		if(x2<0 || x2>8)
		{
			alert("Invalid Input enter valid coordinate");
		}
		//else if(y1<1 || y1>3)
		//{
		//	alert("Invalid Input-y");
		//}
		else
		{
			
			if(flag[x2]==0)
			{	
			cnt++;
			flag[x2]=2;
			document.getElementById(x2).src="img/Cross.png";
			check();
			}
			else
			{
					alert("cannot overwrite there");
			}

		}
	}	
	else
	{
		alert("It's player 1s turn!");
	}
}
else{
	alert("Games has completed..Refresh browser to start new game...");	
}
}




function check()
{
	var n=1,ch=0;
	for(i=1;n<3;i++)
	{
		if(flag[i-1]==flag[i] && flag[i-1]!=0)
		{
			n++;
			continue;
		}
		else
		{
			ch=1;
			break;
		}
	}

	if(ch==0)
	{
		temp1=1;
		if(cnt%2==0)
		{
			document.getElementById("result").innerHTML="Circle Wins";
			return;
		}
		else
		{
			document.getElementById("result").innerHTML="star Wins";
			return;
		}
	}

	n=1;
	ch=0;
	for(i=4;n<3;i++)
	{
		if(flag[i-1]==flag[i] && flag[i-1]!=0)
		{
			n++;
			continue;
		}
		else
		{
			ch=1;
			break;
		}
	}

	if(ch==0)
	{
		temp1=1;
		if(cnt%2==0)
		{
			document.getElementById("result").innerHTML="Circle Wins";
			return;
		}
		else
		{
			document.getElementById("result").innerHTML="star Wins";
			return;
		}
	}

	n=1;
	ch=0;
	for(i=7;n<3;i++)
	{
		if(flag[i-1]==flag[i] && flag[i-1]!=0)
		{
			n++;
			continue;
		}
		else
		{
			ch=1;
			break;
		}
	}

	if(ch==0)
	{
		temp1=1;
		if(cnt%2==0)
		{
			document.getElementById("result").innerHTML="Circle Wins";
			return;
		}
		else
		{
			document.getElementById("result").innerHTML="star Wins";
			return;
		}
	}

	n=1;
	ch=0;
	for(i=1;n<3;i+=3)
	{
		if(flag[i-1]==flag[i+2] && flag[i-1]!=0)
		{
			n++;
			continue;
		}
		else
		{
			ch=1;
			break;
		}
	}

	if(ch==0)
	{
		temp1=1;
		if(cnt%2==0)
		{
			document.getElementById("result").innerHTML="Circle Wins";
			return;
		}
		else
		{
			document.getElementById("result").innerHTML="star Wins";
			return;
		}
	}

	n=1;
	ch=0;
	for(i=2;n<3;i+=3)
	{
		if(flag[i-1]==flag[i+2] && flag[i-1]!=0)
		{
			n++;
			continue;
		}
		else
		{
			ch=1;
			break;
		}
	}

	if(ch==0)
	{
		temp1=1;
		if(cnt%2==0)
		{
			document.getElementById("result").innerHTML="Circle Wins";
			return;
		}
		else
		{
			document.getElementById("result").innerHTML="star Wins";
			return;
		}
	}

	n=1;
	ch=0;
	for(i=3;n<3;i+=3)
	{
		if(flag[i-1]==flag[i+2] && flag[i-1]!=0)
		{
			n++;
			continue;
		}
		else
		{
			ch=1;
			break;
		}
	}

	if(ch==0)
	{
		temp1=1;
		if(cnt%2==0)
		{
			document.getElementById("result").innerHTML="Circle Wins";
			return;
		}
		else
		{
			document.getElementById("result").innerHTML="star Wins";
			return;
		}
	}

	n=1;
	ch=0;
	for(i=1;n<3;i+=4)
	{
		if(flag[i-1]==flag[i+3] && flag[i-1]!=0)
		{
			n++;
			continue;
		}
		else
		{
			ch=1;
			break;
		}
	}

	if(ch==0)
	{
		temp1=1;
		if(cnt%2==0)
		{
			document.getElementById("result").innerHTML="Circle Wins";
			return;
		}
		else
		{
			document.getElementById("result").innerHTML="star Wins";
			return;
		}
	}

	n=1;
	ch=0;
	for(i=3;n<3;i+=2)
	{
		if(flag[i-1]==flag[i+1] && flag[i-1]!=0)
		{
			n++;
			continue;
		}
		else
		{
			ch=1;
			break;
		}
	}

	if(ch==0)
	{
		temp1=1;
		if(cnt%2==0)
		{
			document.getElementById("result").innerHTML="Circle Wins";
			return;
		}
		else
		{
			document.getElementById("result").innerHTML="star Wins";
			return;
		}
	}
}
