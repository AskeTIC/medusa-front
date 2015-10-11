//LIBRERIAS U OBJETOS
var socket = io.connect('http://localhost:3030', { 'forceNew': true });

//EVENTOS
socket.on('conexion-realizada', function(data){
	alert(data);
});

socket.on('data-sensor1' function(data) {  
	console.log(data);
	render(data);
});

//FUNCIONES
function render (data) {  
	var html = data.map(function(elem, index) {
		return(`<p>elem</p>`);
  	}).join("<br/>");

  	document.getElementById('body').innerHTML = html;
}
