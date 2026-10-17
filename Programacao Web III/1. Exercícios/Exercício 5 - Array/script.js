//Atividade 1
function escolhas() {
    const equipes = ["Ferrari", "Mercedes", "McLaren", "RedBull", "Racing Bulls", "Alpine", "Hass", "Audi", "Williams", "Aston Martin", "Cadillac"]
    let resultado = document.getElementById("escolha")

    resultado.value = ""

    for (let i = 0; i < equipes.length; i++) {
        resultado.value += `Minha escolha ${i + 1} é ${equipes[i]}. \n`
    }
}

//Atividade 2
function quadrado() {
    const numeros = []
    let tamanhoLista = 11

    for (let i = 0; i < tamanhoLista; i++) {
        let numero = Math.floor(Math.random() * 100) 
        numeros.push(numero)
    }

    const quadrados = numeros.map(function (numero) { return Math.pow(numero, 2) })
    let resultado = document.getElementById("quadrado")

    resultado.value = ""

    for (let i = 0; i < quadrados.length; i++) {
        resultado.value += `O quadrado de ${numeros[i]} é ${quadrados[i]}. \n`
    }
}

//Atividade 3
function romanos() {
    const listaNumeros = []
    let tamanhoLista = 11

    for (let i = 0; i < tamanhoLista; i++) {
        let numero = Math.floor(Math.random() * 100)
        listaNumeros.push(numero)
    }
    
    const valores = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1]
    const romanos = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"]

    let resultado = document.getElementById("romano")
    resultado.value = ""

    for (let j = 0; j < listaNumeros.length; j++) {
        let numeroAtual = listaNumeros[j]
        let textoRomano = ""

        for (let i = 0; i < valores.length; i++) {
            while (numeroAtual >= valores[i]) {
                textoRomano += romanos[i];
                numeroAtual -= valores[i];
            }
        }

        resultado.value += `${listaNumeros[j]} em romano é: ${textoRomano}\n`
    }
}