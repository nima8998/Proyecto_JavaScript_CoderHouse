let baseDeDatos = [
	{
		id: "motherboardAMD",
		modelo: "Asrock. A520M AC",
		socket: "am4",
		watts: 35,
		image: "img/01motherboards/amd/Asrock_A520M_ac_AM4_a6a81c25.jpg",
	},
	{
		id: "motherboardAMD",
		modelo: "MSI. B450M PRO",
		socket: "am4",
		watts: 35,
		image: "img/01motherboards/amd/MSI_B450M_PRO-M2_MAX.jpg",
	},
	{
		id: "motherboardAMD",
		modelo: "MSI B550",
		socket: "am4",
		watts: 35,
		image:
			"img/01motherboards/amd/MSI_MPG_B550_Gaming_Carbon_Wifi_AM4_25ed9711.jpg",
	},
	{
		id: "motherboardINTEL",
		modelo: "ASUS. H310M",
		socket: "1151",
		watts: 35,
		image:
			"img/01motherboards/intel/ASUS_PRIME_H310M-R_R2.0_1151_OEM_770f9b92.jpg",
	},
	{
		id: "motherboardINTEL",
		modelo: "GIGABYTE. B560M",
		socket: "1200",
		watts: 35,
		image:
			"img/01motherboards/intel/Gigabyte_B460M-DS3H_AC_WiFi_Socket_1200_10th_Gen.jpg",
	},
	{
		id: "motherboardINTEL",
		modelo: "GIGABYTE. Z490 Vision",
		socket: "1200",
		watts: 35,
		image:
			"img/01motherboards/intel/Gigabyte_Z490_Vision_G_Socket_1200_10th_Gen.jpg",
	},
	{
		id: "procesadoresAMD",
		modelo: "R3 4350G",
		socket: "am4",
		watts: 65,
		image:
			"img/02procesadores/amd/AMD_Ryzen_3_PRO_4350G_4.0GHz_Turbo___Wraith_Stealth_Cooler_OEM.jpg",
	},
	{
		id: "procesadoresAMD",
		modelo: "R5 4650G",
		socket: "am4",
		watts: 65,
		image:
			"img/02procesadores/amd/AMD_Ryzen_5_PRO_4650G_4.2GHz_Turbo___Wraith_Stealth_Cooler_OEM.jpg",
	},
	{
		id: "procesadoresAMD",
		modelo: "R7 3800X",
		socket: "am4",
		watts: 105,
		image:
			"img/02procesadores/amd/AMD_RYZEN_7_3800X_4.5GHz_AM4_Wraith_Prism_RGB_Led_Cooler.jpg",
	},
	{
		id: "procesadoresINTEL",
		modelo: "i3 10100",
		socket: "1200",
		watts: 65,
		image:
			"img/02procesadores/intel/Intel_Core_i3_10100_4.3GHz__Turbo_10th_Gen_Socket_1200.jpg",
	},
	{
		id: "procesadoresINTEL",
		modelo: "i5 10400f",
		socket: "1200",
		watts: 65,
		image:
			"img/02procesadores/intel/Intel_Core_i5_10400F_4.3GHz_Turbo_1200_Comet_Lake.jpg",
	},
	{
		id: "procesadoresINTEL",
		modelo: "i7 10700f",
		socket: "1200",
		watts: 65,
		image:
			"img/02procesadores/intel/i7_10700F_4.8GHz_Turbo_Socket_1200_Comet_Lake.jpg",
	},
	{
		id: "coolers",
		modelo: "SE 903",
		watts: 3,
		image: "img/03cooler/AURAFLOW__X_120_Intel_1151___AMD_AM4.jpg",
	},
	{
		id: "coolers",
		modelo: "AURAFLOW x120",
		watts: 3,
		image: "img/03cooler/Cooler_CPU_ID-Cooling_SE-903-SD.jpg",
	},
	{
		id: "coolers",
		modelo: "PINKFLOW 240",
		watts: 3,
		image: "img/03cooler/CPU_ID-Cooling_PINKFLOW_240_ARGB.jpg",
	},
	{
		id: "ram",
		marca: "geil",
		modelo: "GEIL. EVOx2 3000mhz 8gb",
		watts: 2,
		image: "img/04ram/GeiL_DDR4_8GB_3000MHz_EVO_X_II_RGB.jpg",
	},
	{
		id: "ram",
		marca: "oloy",
		modelo: "OLOY. MARHAWK BLACK 3200mhz 8gb",
		watts: 2,
		image: "img/04ram/OLOy_DDR4_8GB_Warhawk_Black_RGB_3200MHz_CL16.jpg",
	},
	{
		id: "ram",
		marca: "Team",
		modelo: "TEAM T-FORCE. 2666mhz 8gb",
		watts: 1.2,
		image: "img/04ram/Team_DDR4_8GB_2666MHz_T-Force_Zeus.jpg",
	},
	{
		id: "gpu",
		marca: "nvidia geforce",
		modelo: "NVIDIA GEFORCE RTX 3090 24gb",
		watts: 350,
		image:
			"img/05gpu/EVGA_GeForce_RTX_3090_24GB_GDDR6X_XC3_ULTRA_ICX3_ARGB.jpg",
	},
	{
		id: "gpu",
		marca: "nvidia geforce",
		modelo: "GEFORCE RTX 3070 8gb",
		watts: 220,
		image: "img/05gpu/GeForce_RTX_3070_8GB_GDDR6_XC3_ULTRA.jpg",
	},
	{
		id: "gpu",
		marca: "nvidia msi",
		modelo: "NVIDIA GTX 1600 TI 6gb",
		watts: 130,
		image: "img/05gpu/GTX_1660_Ti_6GB_GDDR6_Ventus_XS_OC.jpg",
	},
	{
		id: "gpu",
		marca: "radeon",
		modelo: "RADEON RX 5600 6gb ",
		watts: 150,
		image: "img/05gpu/Radeon_RX_5600_XT_6GB_GDDR6_14Gbps_THICC_III_Pro.jpg",
	},
	{
		id: "almacenamiento",
		marca: "seagate",
		modelo: "Barracuda 2tb",
		watts: 8,
		image: "img/06ssd/Seagate_2TB_Barracuda_256MB_7.2K_RPM.jpg",
	},
	{
		id: "almacenamiento",
		marca: "adata",
		modelo: "SSD Adata su650",
		watts: 2,
		image: "img/06ssd/SSD_Adata_120GB_SU650SS_520MB.jpg",
	},
	{
		id: "almacenamiento",
		marca: "adata",
		modelo: "SSD Adata su630",
		watts: 2,
		image: "img/06ssd/SSD_Adata_960GB_Ultimate_SU630_520MB.jpg",
	},
	{
		id: "mouse",
		marca: "glorious",
		modelo: "Glorious Model D. Glossy",
		watts: 0,
		image: "img/07mouse/Glorious_Model_D__Glossy_White.jpg",
	},
	{
		id: "mouse",
		marca: "logitech",
		modelo: "Logitech g600",
		watts: 0,
		image: "img/07mouse/Logitech_G600_MMO_Gaming_Black_8200dpi.jpg",
	},
	{
		id: "teclados",
		marca: "logitech",
		modelo: "logitech k600",
		watts: 4,
		image: "img/08teclados/Logitech_K600_Touch_Wireless_Smart_TV_HTPC.jpg",
	},
	{
		id: "teclados",
		marca: "marvo",
		modelo: "Marvo. Scorpion kg916",
		watts: 5,
		image: "img/08teclados/Marvo_Scorpion_KG916_RGB_Rainbow_Switch_Blue.jpg",
	},
	{
		id: "teclados",
		marca: "nisuta",
		modelo: "Nisuta nskbgz 61",
		watts: 5,
		image:
			"img/08teclados/Nisuta_NSKBGZ61W_White_RGB_Gamer_61_Teclas_Switch_Outemu_Brown.jpg",
	},
	{
		id: "gabinetes",
		marca: "deepcool",
		modelo: "Deepcool Matrexx 55",
		watts: 0,
		image: "img/09gabinete/Deepcool_MATREXX_55_MESH_4_Fans_e2000e72-med.jpg",
	},
	{
		id: "gabinetes",
		marca: "cougar",
		modelo: "Cougar Gemin X",
		watts: 0,
		image: "img/09gabinete/Gabinete_Cougar_GEMINI_X.jpg",
	},
	{
		id: "gabinetes",
		marca: "pure_base",
		modelo: "Pure Base 500dx",
		watts: 0,
		image: "img/09gabinete/PURE_BASE_500DX_Black.jpg",
	},
	{
		id: "monitor",
		modelo: 'LG 29wl500 29" UltraWide',
		watts: 20,
		image:
			"img/10monitores/LG_29__29WL500_IPS_Ultra_Wide_HDMI_2560x1080_HDR10.jpg",
	},
	{
		id: "monitor",
		modelo: 'LG 34gl750 34" Curvo 144hz',
		watts: 55,
		image:
			"img/10monitores/LG_34__UltraGear_34GL750_Ultra_Wide_Curvo_144Hz_1ms.jpg",
	},
	{
		id: "monitor",
		modelo: 'LG 22" 22mn430h IPS ',
		watts: 20,
		image: "img/10monitores/Monitor_LG_22__22MN430H-B_HDMI_Full_HD_IPS.jpg",
	},
	{
		id: "monitor",
		modelo: 'Samsung 24" f390 Curvo',
		watts: 25,
		image: "img/10monitores/Monitor_Samsung_24___Curvo_F390.jpg",
	},
];

let listadoComponentes = document.getElementById("listadoComponentes");
let carrito = [];
let total = 0;
let listadoSeleccionados = document.getElementById("listadoSeleccionado");
let listadoWatts = document.getElementById("listadoWatts");
let recomendadoWatts = document.getElementById("recomendadoWatts");

// funcion para renderizar componentes en el listado

renderItems = () => {
	for (let i of baseDeDatos) {
		// estructura Card
		let card = document.createElement("section");
		card.className = "card";
		// body
		let body = document.createElement("article");
		body.className = "card-body";
		// imagen
		let imagen = document.createElement("img");
		imagen.className = "img-fluid";
		imagen.setAttribute("src", i["image"]);
		// titulo
		let titulo = document.createElement("p");
		titulo.className = "card-title";
		titulo.textContent = i["modelo"];
		// boton para agregar al carrito
		let botonAgregar = document.createElement("button");
		botonAgregar.classList.add("btn", "btn-outline-success");
		botonAgregar.textContent = "+";
		botonAgregar.setAttribute("id", i["modelo"]);
		botonAgregar.addEventListener("click", agregarAlCarrito);
		// insertamos
		body.appendChild(imagen);
		body.appendChild(titulo);
		body.appendChild(botonAgregar);
		card.appendChild(body);
		listadoComponentes.appendChild(card);
	}
};

function agregarAlCarrito() {
	carrito.push(this.getAttribute("id"));
	calcularWatts();
	renderizarCarrito();
}

renderizarCarrito = () => {
	listadoSeleccionados.textContent = "";
	let carritoSinDuplicados = [...new Set(carrito)];
	carritoSinDuplicados.forEach(function (item) {
		// levantamos el item de la base de datos que necesitamos
		let miItem = baseDeDatos.filter(function (itemBaseDatos) {
			return itemBaseDatos["modelo"] == item;
		});
		// cuenta cantidad por unidad
		let numeroUnidadesItem = carrito.reduce(function (total, itemId) {
			return itemId === item ? (total += 1) : total;
		}, 0);
		// creo elemento para la lista
		let miNodo = document.createElement("li");
		miNodo.textContent = `${miItem[0]["modelo"]} x ${numeroUnidadesItem} `;
		// boton para borrar
		let miBoton = document.createElement("button");
		miBoton.classList.add(
			"btn",
			"btn-outline-danger",
			"btn-block",
			"btnEliminar"
		);
		miBoton.textContent = "X";
		miBoton.setAttribute("item", item);
		miBoton.addEventListener("click", borrarItemCarrito);
		miNodo.appendChild(miBoton);
		listadoSeleccionados.appendChild(miNodo);
	});
};

function borrarItemCarrito() {
	// obtenemos el id que hay en el boton
	let id = this.getAttribute("item");
	// borra
	carrito = carrito.filter(function (carritoId) {
		return carritoId !== id;
	});
	// se vuelve a renderizar y recalcular los watts
	renderizarCarrito();
	calcularWatts();
}

function calcularWatts() {
	total = 0;
	for (let item of carrito) {
		// levantar watts de cada item del carrito
		let miItem = baseDeDatos.filter(function (itemBaseDatos) {
			return itemBaseDatos["modelo"] == item;
		});
		total += miItem[0]["watts"];
	}
	listadoWatts.textContent = total;

	if (total < 150) {
		recomendadoWatts.textContent = "~450w 80plus";
	} else if (total <= 300) {
		recomendadoWatts.textContent = "~500w 80plus";
	} else if (total > 300 && total < 500) {
		recomendadoWatts.textContent = "~600w 80plus";
	} else if (total >= 500) {
		recomendadoWatts.textContent = "+800 80plus";
	}
}

renderItems();
