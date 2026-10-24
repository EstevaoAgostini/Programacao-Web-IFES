<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Dados Form</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body class="bg-white">
    <div class="container mt-4" style="max-width: 800px;">
    <?php 
    date_default_timezone_set("America/Bahia");

    $nome = $_POST["nome"];
    $email = $_POST["email"];
    $cpf = $_POST["cpf"];
    $hora_cadastro = date("d/m/Y H:i:s", $_SERVER["REQUEST_TIME"]);

    if (empty($nome) || empty($email) || empty($cpf)){
        echo "<div class='alert alert-danger'>Todos os dados devem ser informados!</div>";
    } elseif (strlen($cpf) != 11) {
        echo "<div class='alert alert-warning'>Informe CPF válido!</div>";
    } else {
        echo "<h1 class='display-4 fw-light'>Dados Cadastrados!</h1> Dados do Cliente <br><br>";
        echo "<div class='bg-light border rounded p-2'>";
        echo "<h1 class='display-4 fw-light'>Nome: $nome</h1>";
        echo "<h1 class='display-4 fw-light'>Email: $email</h1>";
        echo "<h1 class='display-4 fw-light'>CPF: $cpf</h1>";
        echo "<small class='text-muted'>Horário do Cadastro: $hora_cadastro</small>";
        echo "</div>";
    }

    ?>
    </div>
</body>
</html>