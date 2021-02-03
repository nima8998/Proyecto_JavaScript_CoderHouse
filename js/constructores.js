// constructor mothers
Motherboards = (marca, modelo, socket, chipset) => {
	this.marca = marca;
	this.modelo = modelo;
	this.socket = socket;
	this.chipset = chipset;
};

// array de los objetos.mothersIntel

let motherboardsIntel = [];

// array de los objetos.mothersAMD

let motherboardsAMD = [];

// constructor procesadores

Procesadores = (marca, modelo, socket, frecuencia, watts) => {
	this.marca = marca;
	this.modelo = modelo;
	this.socket = socket;
	this.frecuencia = frecuencia;
	this.watts = watts;
};

// array de proces INTEL

let procesadoresIntel = [];

// array de proces AMD

let procesadoresAMD = [];

// constructor coolers

Cooler = (marca, modelo, watts) => {
	this.marca = marca;
	this.modelo = modelo;
	this.watts = watts;
};

let cooler = [];

// constructor ram

Ram = (marca, modelo, watts) => {
	this.marca = marca;
	this.modelo = modelo;
	this.watts = watts;
};

let ram = [];

// teclados

Gpu = (marca, modelo, watts) => {
	this.marca = marca;
	this.modelo = modelo;
	this.watts = watts;
};

let gpu = [];

// almacenamiento

Almac = (marca, modelo, tipo, watts) => {
	this.marca = marca;
	this.tipo = tipo;
	this.modelo = modelo;
	this.watts = watts;
};

let almac = [];

// almacenamiento

Mouse = (marca, modelo) => {
	this.marca = marca;
	this.modelo = modelo;
};

let mouse = [];

// teclados

Teclado = (marca, modelo, watts) => {
	this.marca = marca;
	this.modelo = modelo;
	this.watts = watts;
};

let teclado = [];

// gabinete

Gabinete = (marca, modelo) => {
	this.marca = marca;
	this.modelo = modelo;
};

let gabinete = [];

// monitores

Monitores = (marca, modelo, watts) => {
	this.marca = marca;
	this.modelo = modelo;
	this.watts = watts;
};

//
//
//
//

// OBJETOS \\

// motherboards AMD
motherboardsIntel.push(new Motherboards("asrock", "a520m_ac", "am4", "a520"));
motherboardsIntel.push(new Motherboards("msi", "b450m_pro_m2", "am4", "b450"));
motherboardsIntel.push(new Motherboards("msi", "b550", "am4", "b550"));

// mothers INTEL
motherboardsAMD.push(
	new Motherboards("asus", "prime_h310m_r2.0", "1151", "h310")
);
motherboardsAMD.push(new Motherboards("gigabyte", "b460m", "1200", "b460"));
motherboardsAMD.push(
	new Motherboards("gigabyte", "z490_vision", "1200", "z490")
);

// procesadores AMD
procesadoresAMD.push(new Procesadores("amd", "r3_4350g", "am4", "3.8ghz", 65));
procesadoresAMD.push(new Procesadores("amd", "r5_4650g", "am4", "4.2ghz", 65));
procesadoresAMD.push(new Procesadores("amd", "r7_3800x", "am4", "4.5ghz", 105));

// procesadores INTEL
procesadoresIntel.push(
	new Procesadores("intel", "i3_10100", "1200", "4.3ghz", 65)
);
procesadoresIntel.push(
	new Procesadores("intel", "i5_10400f", "1200", "4.3ghz", 65)
);
procesadoresIntel.push(
	new Procesadores("intel", "i7_10700f", "1200", "4.8ghz", 65)
);

// Cooler

cooler.push(new Cooler("id_cooling", "se_903", 2.4));
cooler.push(new Cooler("id_cooling", "auraflow_x120", 2.4));
cooler.push(new Cooler("id_cooling", "pinkflow_240", 3));

// ram

ram.push(new Ram("geil", "evo_x_2", 1.35));
ram.push(new Ram("oloy", "marhawk_black", 1.35));
ram.push(new Ram("Team", "t-force", 1.2));

// gpu

gpu.push(new Gpu("nvidia geforce", "rtx_3090", 350));
gpu.push(new Gpu("nvidia geforce", "geforce_rtx_3070", 220));
gpu.push(new Gpu("nvidia msi", "1060_ti", 130));
gpu.push(new Gpu("radeon", "5600_xt", 150));

// almac

almac.push(new Almac("seagate", "barracuda 2tb", "hdd", 8));
almac.push(new Almac("adata", "su650", "ssd", 1.7));
almac.push(new Almac("adata", "su630", "ssd", 2));

// mouse

mouse.push(new Mouse("glorious", "model D glossy"));
mouse.push(new Mouse("logitech", "g600"));

// teclados

teclado.push(new Teclado("logitech", "k600_touch", 3.4));
teclado.push(new Teclado("marvo", "scorpion kg916", 4.5));
teclado.push(new Teclado("nisuta", "nskbgz_61", 5));

// gabinete

gabinete.push(new Gabinete("deepcool", "matrexx_55"));
gabinete.push(new Gabinete("cougar", "gemin_x"));
gabinete.push(new Gabinete("pure_base", "500DX"));

// monitores

monitores.push(new Monitores("LG", "29wl500", 20));
monitores.push(new Monitores("lg", "34gl750", 55));
monitores.push(new Monitores("lg", "22mn430h", 20));
monitores.push(new Monitores("samsung", "f390", 25));
