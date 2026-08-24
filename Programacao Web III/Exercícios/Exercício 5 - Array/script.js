//Atividade 1
function escolhas() {
    const equipes = ["Ferrari", "Mercedes", "McLaren", "RedBull", "Audi"]
    let resultado = document.getElementById("escolha")

    resultado.value = ""

    for (let i = 0; i < equipes.length; i++) {
        resultado.value += `Minha escolha ${i + 1} é ${equipes[i]} \n`
    }
}

//Atividade 2
function quadrado() {
    const numeros = [1, 2, 3, 4, 5]
    const quadrados = numeros.map(function(numero) {return numero ** 2})
    let resultado = document.getElementById("quadrado") 

    resultado.value = ""

    for (let i = 0; i < quadrados.length; i++) {
        resultado.value += `O quadrado de ${numeros[i]} é ${quadrados[i]} \n`
    }
}