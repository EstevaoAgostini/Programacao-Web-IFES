
//ATIVIDADE 1
function calcularLanches() {
    const idadeAtual = document.getElementById("idadeAtual").value
    const idadeEsperada = document.getElementById("idadeEsperada").value
    const lanchesPorDia = document.getElementById("lanchesPorDia").value
    const anos = idadeEsperada - idadeAtual
    const dias = anos * 365
    const total = dias * lanchesPorDia
    const resultadoLanche = document.getElementById("LancheVitalicio");
    resultadoLanche.value = `Você precisará de ${total} lanches para durar até a velhice de ${idadeEsperada} anos.`
}
//ATIVIDADE 2
function calcularCircunferencia() {
    const raioCirculo = document.getElementById("raioCirculo").value
    const resultado2 = document.getElementById("resultado2")
    const circunferencia = 2 * Math.PI * raioCirculo
    const area = Math.PI * raioCirculo * raioCirculo
    const resultadoCirculo = document.getElementById("circunferencia")
    resultadoCirculo.value = `A circunferência tem ${circunferencia.toFixed(2)}\n` + `A área é: ${area.toFixed(2)}`
}
//ATIVIDADE 3
function traduzirIdioma() {
    const escolhaIdioma = document.getElementById("escolhaIdioma").value

    let traducao;
    if (escolhaIdioma === "fr") {
        traducao = "Bonjour tout le monde!"
    } else if (escolhaIdioma === "es") {
        traducao = "¡Hola, Mundo!"
    } else if (escolhaIdioma === "it") {
        traducao = "Ciao mondo!"
    } else if (escolhaIdioma === "ru") {
        traducao = "Привет, мир!"
    } else if (escolhaIdioma === "la") {
        traducao = "Salve, mundo!"
    } else if (escolhaIdioma === "su") {
        traducao = "Hej världen!"
    } else {
        traducao = "Hello, World!"
    }

    const resultadoOM = document.getElementById("olamundo")
    resultadoOM.value = `Tradução: ${traducao}`
}
//ATIVIDADE 4
function gerarPadrao() {
    let resultado = ''
    for (let i = 1; i <= 8; i += 1) {
        for (let j = 1; j <= i; j += 1) {
            resultado += j + ' '
        }
        resultado += '\n'
    }
    const resultadoPadrao = document.getElementById("padrao")
    resultadoPadrao.value = resultado

}
