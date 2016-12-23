
function calcular() {
    $('#salida').removeClass("happy-face");
    $('#salida').removeClass("bad-face");
	var puntosSquad = document.getElementById("punto_squad").value;
	var maxPuntos = document.getElementById("max_puntos").value;
	var porcentajeSquad = (100 * puntosSquad) / maxPuntos;
    console.log(porcentajeSquad)
    var message = "Pueden hacerlo mejor";
    var face = "bad-face";
	if (porcentajeSquad >= 80) {
		message = "Muy bien squad!";
        face = "happy-face";
	}
    //console.log(message, face)
    document.getElementById("message").innerHTML = message;
    $('#salida').addClass(face)
}