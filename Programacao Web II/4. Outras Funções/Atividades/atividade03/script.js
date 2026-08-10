function exibir(num) {
    document.write("A operação resultou em: " + num);
}

function soma(a, b, callback) {
    var op = a * b;
    callback(op);
}

soma(6, 3, exibir);
