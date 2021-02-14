let panelBody = $("#modal-body-panel");
let panelFooter = $("#modal-footer-panel");

renderBtnInfo = () => {
	$("#infoPanel").addClass("fas fa-info-circle");
	$("#infoPanel").attr({
		"data-toggle": "tooltip",
		title:
			"Aquí podrás ver y modificar tus datos. También ver tus compus armadas que hayas guardado!",
	});
};

renderPanelBody = () => {
	let body = $("<section></section>").append(`
		<ul class="nav nav-tabs" role="tablist">
			<li class="nav-item">
			<a class="nav-link active" data-toggle="tab" href="#home">Datos personales</a>
			</li>
			<li class="nav-item">
			<a class="nav-link" data-toggle="tab" href="#menu1">Listas guardadas</a>
			</li>
		</ul>

		<div class="tab-content">
			<div id="home" class="container tab-pane active">
			<label for="usuarioPanel">Usuario:</label>
				<input type="text" class="form-control form-control-sm" id="usuarioPanel" value=${sessionStorage.getItem(
					"nombreUsuario"
				)}>
				<label for="mailPanel">Email:</label>
				<input type="email" class="form-control form-control-sm" id="mailPanel" value=${sessionStorage.getItem(
					"mailUsuario"
				)}>
			</div>
			<div id="menu1" class="container tab-pane fade">
			</div>
		</div>
       `);
	$(body).addClass("container-fluid");

	panelBody.append(body);
};

// footer del modal

renderPanelFooter = () => {
	let btnGuardar = $("<button></button>").text("Guardar");
	$(btnGuardar).addClass("btn btn-outline-success btn-sm");
	$(btnGuardar).click(function () {
		sessionStorage.clear();
		sessionStorage.setItem("nombreUsuario", $("#usuarioPanel").val());
		sessionStorage.setItem("mailUsuario", $("#mailPanel").val());
		document.location.reload(true);
	});
	let btnSalir = $("<button></button>").text("Salir");
	$(btnSalir).addClass("btn btn-outline-danger btn-sm");
	$(btnSalir).attr({
		"data-dismiss": "modal",
	});

	panelFooter.append(btnSalir);
	panelFooter.append(btnGuardar);
};

renderPanelFooter();
renderPanelBody();
renderBtnInfo();
