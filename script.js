var x = new Date();
var hour = x.getHours();
var min = x.getMinutes();
var sec = x.getSeconds();
var time = hour + ":" + min;
var day = x.getDate();
var month = x.getMonth();
var year = x.getFullYear();
var date = day + "/" + month + "/" + year;
				
if(hour < 11)
	{
		var greet = "Morning";
	}
else if(hour < 15)
	{
		var greet = "Afternoon";
	}
else if(hour < 18)
	{
		var greet = "Evening";
	}
else if(hour < 24)
	{
		var greet = "Night";
	}
				
function runCmd() {
var x = document.getElementById("myTxt");
var y = document.getElementById("H1")
 if (x.value.includes("Online")) 
 { 
  y.innerHTML = "System Online";
  x.value = " ";
  }
  else if (x.value.includes("Time"))
  {
  y.innerHTML = "The time is " + time;
  x.value = " ";
  }
  else if (x.value.includes("Date"))
  {
  y.innerHTML = "The date is " + date;
  x.value = " ";
  }
  else if (x.value.includes("Hi"))
  {
  y.innerHTML = "Hi, Sir";
  x.value = " ";
  }
  else if (x.value.includes("Hello"))
  {
  y.innerHTML = "Hello, Sir";
  x.value = " ";
  }
  else if (x.value.includes("Hey"))
  {
  y.innerHTML = "Good " + greet + " , Sir";
  x.value = "";
  }
  else {
   y.innerHTML = "Command Not Clear!";
   x.value = " ";
    } }
