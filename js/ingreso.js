registro = (event) => {
	if (event.which == 13 || event.keyCode == 13) {
		let nombreUsuario = $("#nombreUsuario");
		sessionStorage.setItem("nombreUsuario", $(nombreUsuario).val());
		let mailUsuario = $("#mailUsuario");
		sessionStorage.setItem("mailUsuario", $(mailUsuario).val());
		document.forms[0].submit();
	} else if (event.which == 27 || event.keycode == 27) {
		$("#modal").hide();
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
		)} !`;
		document.getElementById("leftSection__usuario").appendChild(bienvenida);
		$("#btnIngresar").css("display", "none");
		$("#btnSalir").css("display", "block");
	}
};

checkOut = () => {
	if (!sessionStorage.getItem("nombreUsuario")) {
		$("#btnSalir").css("display", "none");
	}
};

checkIn();
checkOut();
