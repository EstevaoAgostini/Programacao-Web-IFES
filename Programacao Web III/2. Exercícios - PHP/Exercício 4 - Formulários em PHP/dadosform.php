<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Dados Form</title>
</head>
<body>
    <?php 
    date_default_timezone_set("America/Bahia");

    $nome = $_POST["nome"];
    $email = $_POST["email"];
    $cpf = $_POST["cpf"];
    $hora_cadastro = date("d/m/Y H:i:s", $_SERVER["REQUEST_TIME"]);

    if (empty($nome) || empty($email) || empty($cpf)){
        echo "Todos os dados devem ser informados!";
    } elseif (strlen($cpf) != 11) {
        echo "Informe CPF válido!";
    } else {
        echo "<h1>Dados Cadastrados!</h1> <br> Dados do Cliente <br><br>";
        echo "<h1>Nome: $nome</h1> <br>";
        echo "<h1>Email: $email</h1> <br>";
        echo "<h1>CPF: $cpf</h1> <br>";
        echo "Horário do Cadastro: $hora_cadastro <br>";
    }

    ?>
</body>
</html>