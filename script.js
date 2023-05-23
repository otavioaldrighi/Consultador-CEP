
function searchAddress() {
	const cep = document.getElementById("cep").value;
	const endereco = document.getElementById("address");

	const url = `https://viacep.com.br/ws/${cep}/json/`;

	fetch(url)
		.then(response => response.json())
		.then(data => {
			if (data.erro) {
				alert("CEP não encontrado!");
			} else {
				address.innerHTML = `
					<p><strong>Logradouro:</strong> ${data.logradouro}</p>
					<p><strong>Bairro:</strong> ${data.bairro}</p>
					<p><strong>Cidade:</strong> ${data.localidade}</p>
					<p><strong>Estado:</strong> ${data.uf}</p>
				`;
				address.style.display = "block";
			}
		})
		.catch(error => {
			alert("Erro ao buscar endereço!");
			console.error(error);
		});
}

function onlyNumbers(event) {
	// Obtém o código da tecla pressionada
	var codigoTecla = event.which || event.keyCode;

	// Verifica se a tecla pressionada é um número
	if (codigoTecla < 48 || codigoTecla > 57) {
	// Impede a digitação da tecla
	  event.preventDefault();
	}
}
