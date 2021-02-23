function showTodo() {
	$(
		"#Procesador, #Cooler, #RAM, #GPU, #Almacenamiento, #Mouse, #Teclados, #Gabinetes, #Monitor, #Fuente, #Motherboard"
	).show(true);
}

$("#TodosBtn").click(showTodo);

$("#MotherboardBtn").click(function () {
	showTodo();
	$(
		"#Procesador, #Cooler, #RAM, #GPU, #Almacenamiento, #Mouse, #Teclados, #Gabinetes, #Monitor, #Fuente "
	).fadeOut();
	$("#Motherboard").show(true);
});

$("#ProcesadorBtn").click(function () {
	showTodo();
	$(
		"#Motherboard, #Cooler, #RAM, #GPU, #Almacenamiento, #Mouse, #Teclados, #Gabinetes, #Monitor, #Fuente "
	).fadeOut();
	$("#Procesador").show(true);
});

$("#CoolerBtn").click(function () {
	showTodo();
	$(
		"#Motherboard, #Procesador, #RAM, #GPU, #Almacenamiento, #Mouse, #Teclados, #Gabinetes, #Monitor, #Fuente "
	).fadeOut();
	$("#Cooler").show(true);
});

$("#RAMBtn").click(function () {
	showTodo();
	$(
		"#Motherboard, #Procesador, #Cooler, #GPU, #Almacenamiento, #Mouse, #Teclados, #Gabinetes, #Monitor, #Fuente "
	).fadeOut();
	$("#RAM").show(true);
});

$("#GPUBtn").click(function () {
	showTodo();
	$(
		"#Motherboard, #Procesador, #Cooler, #RAM, #Almacenamiento, #Mouse, #Teclados, #Gabinetes, #Monitor, #Fuente "
	).fadeOut();
	$("#GPU").show(true);
});

$("#AlmacenamientoBtn").click(function () {
	showTodo();
	$(
		"#Motherboard, #Procesador, #Cooler, #RAM, #GPU, #Mouse, #Teclados, #Gabinetes, #Monitor, #Fuente "
	).fadeOut();
	$("#Almacenamiento").show(true);
});

$("#MouseBtn").click(function () {
	showTodo();
	$(
		"#Motherboard, #Procesador, #Cooler, #RAM, #GPU, #Almacenamiento, #Teclados, #Gabinetes, #Monitor, #Fuente "
	).fadeOut();
	$("#Mouse").show(true);
});

$("#TecladosBtn").click(function () {
	showTodo();
	$(
		"#Motherboard, #Procesador, #Cooler, #RAM, #GPU, #Almacenamiento, #Mouse, #Gabinetes, #Monitor, #Fuente "
	).fadeOut();
	$("#Teclados").show(true);
});

$("#GabinetesBtn").click(function () {
	showTodo();
	$(
		"#Motherboard, #Procesador, #Cooler, #RAM, #GPU, #Almacenamiento, #Mouse, #Teclados, #Monitor, #Fuente "
	).fadeOut();
	$("#Gabinetes").show(true);
});

$("#MonitorBtn").click(function () {
	showTodo();
	$(
		"#Motherboard, #Procesador, #Cooler, #RAM, #GPU, #Almacenamiento, #Mouse, #Teclados, #Gabinetes, #Fuente "
	).fadeOut();
	$("#Monitor").show(true);
});

$("#FuenteBtn").click(function () {
	showTodo();
	$(
		"#Motherboard, #Procesador, #Cooler, #RAM, #GPU, #Almacenamiento, #Mouse, #Teclados, #Gabinetes, #Monitor "
	).fadeOut();
	$("#Fuente").show(true);
});
