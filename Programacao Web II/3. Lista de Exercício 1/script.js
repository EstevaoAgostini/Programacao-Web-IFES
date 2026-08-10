//Exercício 1 – Lanche Vitalício
function calcularLanches() {
    const idadeAtual = document.getElementById("idadeAtual").value;
    const idadeEsperada = document.getElementById("idadeEsperada").value;
    const lanchesPorDia = document.getElementById("lanchesPorDia").value;
    const resultado = document.getElementById("resultado");
    const anos = idadeEsperada - idadeAtual;
    const dias = anos * 365;
    const total = dias * lanchesPorDia;
    resultado.value = `Você precisará de ${total} lanches para durar até a velhice de ${idadeEsperada} anos.`
}
//Exercıcio 2 – Propriedades de um Cırculo
function calcularCircunferencia() {
    const raioCirculo = document.getElementById("raioCirculo").value;
    const resultado2 = document.getElementById("resultado2");
    const circunferencia = 2 * Math.PI * raioCirculo;
    const area = Math.PI * raioCirculo * raioCirculo;
    resultado2.value = `A circunferência tem ${circunferencia}\n` + `A área ${area}`;
}
//Exercıcio 3 – Tradutor de Ola Mundo
function traduzirIdioma() {
    const escolhaIdioma = document.getElementById("escolhaIdioma").value;
    const resultado3 = document.getElementById("resultado3");

    let traducao;
    if (escolhaIdioma === "pt") {
        traducao = "Olá, Mundo!";
    }
    if (escolhaIdioma === "en") {
        traducao = "Hello, World!";
    }
    if (escolhaIdioma === "es") {
        traducao = "¡Hola, Mundo!";
    }
    if (escolhaIdioma === "fr") {
        traducao = "Bonjour tout le monde!";
    }
    if (escolhaIdioma === "it") {
        traducao = "Ciao mondo!"
    }
    resultado3.value = traducao;
}
//Exercıcio 4 – Impressao de Padrao
function gerarPadrao() {
    let resultado = '';
    for (let i = 1; i <= 8; i += 1) {
        for (let j = 1; j <= i; j += 1) {
            resultado += j + ' ';
        }
        resultado += '\n';
    }
    document.getElementById('resultado4').textContent = resultado;
}
//Exercıcio 5 – Array de Escolhas
function arrayEscolhas() {
    // array com equipes de F1
    const escolhas = ["McLaren", "Ferrari", "Red Bull", "Mercedes", "Aston Martin", "Alpine", "Haas", "VCARB", "Williams", "Sauber "];

    const resultado5 = document.getElementById('resultado5');

    resultado5.rows = escolhas.length;
    resultado5.value = "";

    for (let i = 0; i < escolhas.length; i++) {
        resultado5.value += `Minha escolha ${i + 1} é ${escolhas[i]}.\n`;
    }
}
//Exercıcio 6 – Map com Quadrados de Valores
function quadrados() {
    const num = [1, 2, 3, 4, 5];
    const resultado6 = document.getElementById("resultado6");

    const quadrados = num.map(n => `${n} -> ${n ** 2}`);
    resultado6.rows = quadrados.length;
    resultado6.value = quadrados.join("\n");
}
//Exercıcio 7 – Conversao para Numeros Romanos
function romanos() {
    const valoresRomanos = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X"];
    const numero = parseInt(document.getElementById("numero").value);
    const resultado = document.getElementById("resultado7");

    if (numero >= 1 && numero <= 10) {
        resultado.value = valoresRomanos[numero - 1];
    }
}