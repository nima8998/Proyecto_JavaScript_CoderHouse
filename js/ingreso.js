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
