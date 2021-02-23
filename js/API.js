$("#dolar").click(function () {
	let api_url = "https://www.dolarsi.com/api/api.php?type=valoresprincipales";

	$.ajax({
		url: api_url,
		dataType: "json",
		success: function (result) {
			// console.log(result[0].casa.venta);
			$("#dolarCotizacion").text("$" + result[0].casa.venta);
		},
	});
});

// orden de la api de referencia

// [
// 	{
// 		casa: {
// 			compra: "88,830",
// 			venta: "94,830",
// 			agencia: "349",
// 			nombre: "Dolar Oficial",
// 			variacion: "0,060",
// 			ventaCero: "TRUE",
// 			decimales: "3",
// 		},
// 	},
// 	{
// 		casa: {
// 			compra: "142,000",
// 			venta: "147,000",
// 			agencia: "310",
// 			nombre: "Dolar Blue",
// 			variacion: "0",
// 			ventaCero: "TRUE",
// 			decimales: "3",
// 		},
// 	},
// 	{
// 		casa: {
// 			compra: "No Cotiza",
// 			venta: "0",
// 			agencia: "311",
// 			nombre: "Dolar Soja",
// 			variacion: "0",
// 			ventaCero: "TRUE",
// 			decimales: "3",
// 		},
// 	},
// 	{
// 		casa: {
// 			compra: "141,430",
// 			venta: "141,690",
// 			agencia: "312",
// 			nombre: "Dolar Contado con Liqui",
// 			variacion: "-0,580",
// 			ventaCero: "TRUE",
// 			decimales: "3",
// 		},
// 	},
// 	{
// 		casa: {
// 			compra: "138,120",
// 			venta: "137,870",
// 			agencia: "313",
// 			nombre: "Dolar Bolsa",
// 			variacion: "0,340",
// 			ventaCero: "TRUE",
// 			decimales: "3",
// 		},
// 	},
// 	{
// 		casa: {
// 			compra: "9.852,070",
// 			venta: "47.137,787",
// 			agencia: "399",
// 			nombre: "Bitcoin",
// 			variacion: "0,00",
// 			ventaCero: "TRUE",
// 			decimales: "3",
// 		},
// 	},
// 	{
// 		casa: {
// 			nombre: "Dolar turista",
// 			compra: "No Cotiza",
// 			venta: "156,47",
// 			agencia: "406",
// 			variacion: "0,06",
// 		},
// 	},
// 	{
// 		casa: {
// 			compra: "53,94",
// 			venta: "59,22",
// 			agencia: "302",
// 			nombre: "Dolar",
// 			decimales: "3",
// 		},
// 	},
// 	{
// 		casa: {
// 			nombre: "Argentina",
// 			compra: "1.497,00",
// 			venta: "0,60",
// 			mejor_compra: "True",
// 			mejor_venta: "False",
// 			fecha: "05/05/15",
// 			recorrido: "16:30",
// 			afluencia: {},
// 			agencia: "141",
// 			observaciones: {},
// 		},
// 	},
// ];
