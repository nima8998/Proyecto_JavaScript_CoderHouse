let panel = $("#leftSection__usuario");

registro = (event) => {
	if (event.which == 13 || event.keyCode == 13) {
		let nombreUsuario = $("#nombreUsuario");
		sessionStorage.setItem("nombreUsuario", $(nombreUsuario).val());
		let mailUsuario = $("#mailUsuario");
		sessionStorage.setItem("mailUsuario", $(mailUsuario).val());
		document.location.reload(true);
	} else if (event.which == 27 || event.keycode == 27) {
		$("#modal").hide();
	}
};

$("#form").keypress(registro);

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
		$("#leftSection__usuario").append(bienvenida);
		$("#btnIngresar").css("display", "none");
		$("#btnSalir").css("display", "block");
		$("#btnPanelUsuario").css("display", "block");
	}
};

checkOut = () => {
	if (!sessionStorage.getItem("nombreUsuario")) {
		$("#btnSalir").css("display", "none");
		$("#btnPanelUsuario").css("display", "none");
		$("#guardarLista").css("display", "none");
	}
};

// renderizar botones del panel de usuario con jquery

renderBtn = () => {
	let ingresoBtn = $("<button></button>").text("Ingresar");
	$(ingresoBtn).addClass("btn btn-primary btn-sm");
	$(ingresoBtn).attr({
		"data-toggle": "modal",
		"data-target": "#modalIngreso",
		id: "btnIngresar",
	});
	let salirBtn = $("<button></button>").text("Salir");
	$(salirBtn).addClass("btn btn-danger btn-sm");
	$(salirBtn).attr({
		id: "btnSalir",
		onclick: "checkOutLog()",
	});
	let panelBtn = $("<button></button>").text("Tu perfil");
	$(panelBtn).addClass("btn btn-secondary btn-sm");
	$(panelBtn).attr({
		id: "btnPanelUsuario",
		"data-toggle": "modal",
		"data-target": "#modalPanel",
	});
	let guardarBtn = $("<button></button>").text("Guardar Lista");
	$(guardarBtn).addClass("btn btn-success btn-sm");
	$(guardarBtn).attr({
		id: "guardarLista",
	});

	panel.append(ingresoBtn);
	panel.append(salirBtn);
	panel.append(panelBtn);
	panel.append(guardarBtn);
};

renderBtn();
checkIn();
checkOut();
