let form = document.querySelector('.form');
let name = document.getElementById('name');
let phone = document.getElementById('phone');
let email = document.getElementById('email');

function sendData(data){
	const XHR = new XMLHttpRequest(),
		  FD = new FormData();
		  
	for(name in data){
		FD.append(name, data[name]);
	}
  
	//Для проверки
	//XHR.open( 'POST', 'https://60376bfd5435040017722533.mockapi.io/formRej' );
	
	XHR.open('POST', 'https://60376bfd5435040017722533.mockapi.io/form');
	
	XHR.send(FD);
	
	XHR.onload = function (){
		console.log(XHR.status);
		if(XHR.status===201) alert("Успех!");
		else alert("Произошла ошибка!");
	};
		
}

form.addEventListener("submit", function (event) {
	event.preventDefault()
	sendData({
			'name':name.value,
			'phone':phone.value,
			'email':email.value});
});




