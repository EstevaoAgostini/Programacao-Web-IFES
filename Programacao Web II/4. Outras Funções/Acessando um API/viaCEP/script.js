document.getElementById("cep").addEventListener("blur", consultarCep);

async function consultarCep() {
    const cep = document.getElementById("cep").value;
    try {
        const resposta = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        const dados = await resposta.json();

        if (dados.erro) {
            throw new Error("CEP não encontrado");
        }

        document.getElementById("rua").value = dados.logradouro;
        document.getElementById("bairro").value = dados.bairro;
        document.getElementById("municipio").value = dados.localidade;

    } catch (e) {
        document.writeln("Erro: " + e.message);
    }
}