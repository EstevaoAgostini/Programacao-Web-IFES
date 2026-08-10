const inicio = document.getElementById("inicioContainer");
const alunoContainer = document.getElementById("containerAluno");
const professorContainer = document.getElementById("containerProfessor");

function areaAluno() {
    alunoContainer.style.display = "block";
    professorContainer.style.display = "none";
}

function areaProfessor() {
    professorContainer.style.display = "block";
    alunoContainer.style.display = "none";
}

function criarAluno() {
    const nome = prompt("Digite o nome do aluno: ");
    const listaAluno = document.createElement("p");
    listaAluno.innerHTML = "Aluno: " + nome;
    document.getElementById("listaAlunos").appendChild(listaAluno);
}

function criarProfessor() {
    const nome = prompt("Digite o nome do professor: ");
    const listaProfessor = document.createElement("p");
    listaProfessor.innerHTML = "Professor: " + nome;
    document.getElementById("listaProfessores").appendChild(listaProfessor);
}