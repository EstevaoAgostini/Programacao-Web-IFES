// ===== Menu dropdown =====
var btnMenu = document.getElementById('btnMenu');
var menuLista = document.getElementById('menuLista');

btnMenu.addEventListener('click', function () {
    menuLista.classList.toggle('aberto');
});

// ===== Validação do formulário de login =====
var form = document.getElementById('formLogin');
var campoUsuario = document.getElementById('usuario');
var campoSenha = document.getElementById('senha');
var erroUsuario = document.getElementById('erroUsuario');
var erroSenha = document.getElementById('erroSenha');
var resultado = document.getElementById('resultado');

function limparEstado(campo, msgEl) {
    campo.classList.remove('erro', 'sucesso');
    msgEl.textContent = '';
}

function marcarErro(campo, msgEl, texto) {
    campo.classList.remove('sucesso');
    campo.classList.add('erro');
    msgEl.textContent = texto;
}

function marcarSucesso(campo, msgEl) {
    campo.classList.remove('erro');
    campo.classList.add('sucesso');
    msgEl.textContent = '';
}

form.addEventListener('submit', function (evento) {
    evento.preventDefault();

    resultado.style.display = 'none';
    limparEstado(campoUsuario, erroUsuario);
    limparEstado(campoSenha, erroSenha);

    var usuario = campoUsuario.value.trim();
    var senha = campoSenha.value.trim();
    var valido = true;

    // Usuário não preenchido
    if (usuario === '') {
        marcarErro(campoUsuario, erroUsuario, 'Usuário deve ser preenchido!');
        valido = false;
    }

    // Senha não preenchida
    if (senha === '') {
        marcarErro(campoSenha, erroSenha, 'Senha deve ser preenchida');
        valido = false;
    } else if (senha.length < 6 || senha.length > 30) {
        // Senha preenchida, mas fora do tamanho permitido
        marcarErro(campoSenha, erroSenha, 'Senha deve ter entre 6 a 30 caracteres');
        valido = false;
    }

    if (valido) {
        marcarSucesso(campoUsuario, erroUsuario);
        marcarSucesso(campoSenha, erroSenha);

    }
});