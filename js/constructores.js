// constructor mothers
function Motherboards(marca, modelo, socket, chipset) {
	this.marca = marca;
	this.modelo = modelo;
	this.socket = socket;
	this.chipset = chipset;
}

// array de los objetos.mothersIntel

let motherboardsIntel = [];

// array de los objetos.mothersAMD

let motherboardsAMD = [];

// constructor procesadores

function Procesadores(marca, modelo, socket, frecuencia, watts) {
	this.marca = marca;
	this.modelo = modelo;
	this.socket = socket;
	this.frecuencia = frecuencia;
	this.watts = watts;
}

// array de proces INTEL

let procesadoresIntel = [];

// array de proces AMD

let procesadoresAMD = [];

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
