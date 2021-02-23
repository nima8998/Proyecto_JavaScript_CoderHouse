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
	).hide(true);
	$("#Motherboard").show(true);
});

$("#ProcesadorBtn").click(function () {
	showTodo();
	$(
		"#Motherboard, #Cooler, #RAM, #GPU, #Almacenamiento, #Mouse, #Teclados, #Gabinetes, #Monitor, #Fuente "
	).hide(true);
	$("#Procesador").show(true);
});

$("#CoolerBtn").click(function () {
	showTodo();
	$(
		"#Motherboard, #Procesador, #RAM, #GPU, #Almacenamiento, #Mouse, #Teclados, #Gabinetes, #Monitor, #Fuente "
	).hide(true);
	$("#Cooler").show(true);
});

$("#RAMBtn").click(function () {
	showTodo();
	$(
		"#Motherboard, #Procesador, #Cooler, #GPU, #Almacenamiento, #Mouse, #Teclados, #Gabinetes, #Monitor, #Fuente "
	).hide(true);
	$("#RAM").show(true);
});

$("#GPUBtn").click(function () {
	showTodo();
	$(
		"#Motherboard, #Procesador, #Cooler, #RAM, #Almacenamiento, #Mouse, #Teclados, #Gabinetes, #Monitor, #Fuente "
	).hide(true);
	$("#GPU").show(true);
});

$("#AlmacenamientoBtn").click(function () {
	showTodo();
	$(
		"#Motherboard, #Procesador, #Cooler, #RAM, #GPU, #Mouse, #Teclados, #Gabinetes, #Monitor, #Fuente "
	).hide(true);
	$("#Almacenamiento").show(true);
});

$("#MouseBtn").click(function () {
	showTodo();
	$(
		"#Motherboard, #Procesador, #Cooler, #RAM, #GPU, #Almacenamiento, #Teclados, #Gabinetes, #Monitor, #Fuente "
	).hide(true);
	$("#Mouse").show(true);
});

$("#TecladosBtn").click(function () {
	showTodo();
	$(
		"#Motherboard, #Procesador, #Cooler, #RAM, #GPU, #Almacenamiento, #Mouse, #Gabinetes, #Monitor, #Fuente "
	).hide(true);
	$("#Teclados").show(true);
});

$("#GabinetesBtn").click(function () {
	showTodo();
	$(
		"#Motherboard, #Procesador, #Cooler, #RAM, #GPU, #Almacenamiento, #Mouse, #Teclados, #Monitor, #Fuente "
	).hide(true);
	$("#Gabinetes").show(true);
});

$("#MonitorBtn").click(function () {
	showTodo();
	$(
		"#Motherboard, #Procesador, #Cooler, #RAM, #GPU, #Almacenamiento, #Mouse, #Teclados, #Gabinetes, #Fuente "
	).hide(true);
	$("#Monitor").show(true);
});

$("#FuenteBtn").click(function () {
	showTodo();
	$(
		"#Motherboard, #Procesador, #Cooler, #RAM, #GPU, #Almacenamiento, #Mouse, #Teclados, #Gabinetes, #Monitor "
	).hide(true);
	$("#Fuente").show(true);
});
