let nombreUsuario = prompt("Ingresa tu nombre...");

let impresionUsuario = (document.getElementById(
	"nombreUsuario"
).innerHTML = nombreUsuario);

document
	.getElementById("bienvenidaUsuario")
	.append(
		`Bienvenido ${nombreUsuario}. Elige tu PC ideal para saber cuantos watts y $$$ te costará.`
	);
