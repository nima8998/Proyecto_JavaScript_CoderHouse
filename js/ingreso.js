registro = () => {
	if (event.which == 13 || event.keyCode == 13) {
		let nombreUsuario = document.getElementById("nombreUsuario");
		sessionStorage.setItem("nombreUsuario", nombreUsuario.value);
		let mailUsuario = document.getElementById("mailUsuario");
		sessionStorage.setItem("mailUsuario", mailUsuario.value);
		document.forms[0].submit();
	} else if (event.which == 27 || event.keycode == 27) {
		document.getElementById("modal").hidden = false;
	}
};

checkOutLog = () => {
	sessionStorage.clear();
	document.location.reload(true);
};

checkIn = () => {
	if (sessionStorage.getItem("nombreUsuario")) {
		let bienvenida = document.createElement("span");
		bienvenida.innerText = `Bienvenido ${sessionStorage.getItem(
			"nombreUsuario"
		)} ! Cuando termines de armar tu PC, podemos enviarte el listado a ${sessionStorage.getItem(
			"mailUsuario"
		)}`;
		document.getElementById("leftSection__usuario").appendChild(bienvenida);
		document.getElementById("btnIngresar").style.display = "none";
		document.getElementById("btnSalir").style.display = "block";
	}
};

checkOut = () => {
	if (!sessionStorage.getItem("nombreUsuario")) {
		document.getElementById("btnSalir").style.display = "none";
	}
};

checkIn();
checkOut();
