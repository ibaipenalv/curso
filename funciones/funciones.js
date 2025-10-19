/* Funciones para crear una cuenta atrás, en la página index */

function iniciarContador(){
	const fechaEvento = new Date("May 22, 2026 00:00:00").getTime();
	const contador = document.getElementById("contador");
	const intervalo = setInterval(() => {
		
		const ahora = new Date().getTime();
		const diferencia = fechaEvento - ahora;
		const dias = Math.floor(diferencia/(1000*60*60*24));
		contador.textContent = `Faltan ${dias} días para que empiece Expo Vacaciones!.`;
	}, 1000);
	
}

/* funcion para sugerir aleatoriamente un destino, en la página destinos*/

function sugerirDestino(){
	const destinos = ["españa","francia","grecia","italia","noruega","rusia"];
	const sugerencia = destinos[Math.floor(Math.random()*destinos.length)];
	const salida = document.getElementById("sugerencia");
	salida.textContent = `Tu destino ideal es: ${sugerencia}`;
	
	
}

/* función para que calcule el precio de las entradas, en la página entradas */

function calculadora(){
	const adultos = parseInt(document.getElementById("adultos").value) || 0;
	const ninos = parseInt(document.getElementById("ninos").value) || 0;
	const bebes = parseInt(document.getElementById("bebes").value) || 0;
	const precioAdulto = 62;
	const precioNino = 57;
	const precioBebe = 0;
	const total = (adultos * precioAdulto + ninos * precioNino + bebes * precioBebe) *0.9;
	const resultado = document.getElementById("resultado");
	resultado.textContent = `Precio total con descuento es: ${total}€`;
	
}

/* función para que cuando el formulario haya sido enviado, emita una respuesta, en la página contacto */

function envio(event){
	event.preventDefault();
	const nombre = document.getElementById("nombre").value;
	const formulario = document.querySelector("form");
	formulario.innerHTML = `<h3>Gracias por escribirnos ${nombre}</h3><p>te responderemos pronto</p>`;
	
}

/* función para que al pinchar sobre la imagen esta se amplie, en la página galeria de fotos */

function galeriaSimple(){
	const imagenes = document.querySelectorAll(".galeria img");
	const ampliada = document.getElementById("imagen-ampliada");
	imagenes.forEach(img => {
		img.addEventListener("click", () => {
			ampliada.src = img.src;
			ampliada.style.display = "block";
		});
	});
	ampliada.addEventListener("click", () => {
		ampliada.style.display = "none";
	});
}
