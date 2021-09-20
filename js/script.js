function userLogin(){
	if(document.getElementById('username').value == "" || document.getElementById('password').value == ""){
		document.getElementById("error-message").style.display = "block";		
	}
	else{
		window.location.href = "question1.html";
	}
}