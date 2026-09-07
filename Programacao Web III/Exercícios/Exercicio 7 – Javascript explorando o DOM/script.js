var btnMenu = document.getElementById('btnMenu')
var menuLista = document.getElementById('menuLista')

btnMenu.onclick = function() {
    menuLista.classList.toggle('aberto')
};

var form = document.getElementById('formLogin')
var usuario = document.getElementById('usuario')
var senha = document.getElementById('senha')
var erroUsuario = document.getElementById('erroUsuario')
var erroSenha = document.getElementById('erroSenha')

form.onsubmit = function(evento) {
    evento.preventDefault()

    usuario.classList.remove('erro', 'sucesso')
    senha.classList.remove('erro', 'sucesso')

    erroUsuario.textContent = ''
    erroSenha.textContent = ''

    var valido = true

    if (usuario.value.trim() == '') {
        usuario.classList.add('erro')
        erroUsuario.textContent = 'Usuário deve ser preenchido!'
        valido = false
    }

    if (senha.value.trim() == '') {
        senha.classList.add('erro')
        erroSenha.textContent = 'Senha deve ser preenchida'
        valido = false
    } else if (senha.value.length < 6 || senha.value.length > 30) {
        senha.classList.add('erro')
        erroSenha.textContent = 'Senha deve ter entre 6 e 30 caracteres'
        valido = false
    }

    if (valido) {
        usuario.classList.add('sucesso')
        senha.classList.add('sucesso')
    }
};