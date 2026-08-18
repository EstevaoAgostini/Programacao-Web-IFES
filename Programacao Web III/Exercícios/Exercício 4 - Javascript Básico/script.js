
function calcularLanches() {
    const idadeAtual = document.getElementById("idadeAtual").value
    const idadeEsperada = document.getElementById("idadeEsperada").value
    const lanchesPorDia = document.getElementById("lanchesPorDia").value
    const anos = idadeEsperada - idadeAtual
    const dias = anos * 365
    const total = dias * lanchesPorDia
    window.alert(`Você precisará de ${total} lanches para durar até a velhice de ${idadeEsperada} anos.`)
}

function calcularCircunferencia() {
    const raioCirculo = document.getElementById("raioCirculo").value
    const resultado2 = document.getElementById("resultado2")
    const circunferencia = 2 * Math.PI * raioCirculo
    const area = Math.PI * raioCirculo * raioCirculo
    window.alert(`A circunferência tem ${circunferencia.toFixed(2)}\n` + `A área é: ${area.toFixed(2)}`)
}

function traduzirIdioma() {
    const escolhaIdioma = document.getElementById("escolhaIdioma").value

    let traducao;
    if (escolhaIdioma === "fr") {
        traducao = "Bonjour tout le monde!"
    } else if (escolhaIdioma === "es") {
        traducao = "¡Hola, Mundo!"
    } else {
        traducao = "Hello, World!"
    }

    window.alert(`Tradução: ${traducao}`)
}

function gerarPadrao() {
    let resultado = ''
    for (let i = 1; i <= 8; i += 1) {
        for (let j = 1; j <= i; j += 1) {
            resultado += j + ' '
        }
        resultado += '\n'
    }
    window.alert(resultado)
}