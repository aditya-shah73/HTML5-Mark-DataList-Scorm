function userLogin(){
	if(document.getElementById('username').value == "" || document.getElementById('password').value == ""){
		document.getElementById("error-message").style.display = "block";		
	}
	else{
		window.location.href = "question1.html";
	}
}

function submitQuestion1(){
	window.location.href = "question2.html";	  	
}

function resetQuestion1(){
	document.getElementById('q1option1').checked=false;
	document.getElementById('q1option2').checked=false;
	document.getElementById('q1option3').checked=false;
	document.getElementById('q1option4').checked=false;
}

function submitQuestion2(){
	window.location.href = "question3.html";	  	
}

function resetQuestion2(){
	document.getElementById('q2option1').checked=false;
	document.getElementById('q2option2').checked=false;
	document.getElementById('q2option3').checked=false;
	document.getElementById('q2option4').checked=false;
}