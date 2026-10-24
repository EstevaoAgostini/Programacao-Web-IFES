<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Formulário</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
</head>

<body class="bg-light">
    <form method="post" class="container mt-5">

        <h1>Cadastro de Cliente</h1>
        Nome: <input type="text" name="nome" class="form-control mb-3">

        Email: <input type="text" name="email" class="form-control mb-3">

        CPF: <input type="text" name="cpf" class="form-control mb-3">

        <button type="submit" class="btn btn-primary">Enviar</button>

        <?php
        date_default_timezone_set("America/Bahia");

        if (isset($_POST["nome"]) && isset($_POST["email"]) && isset($_POST["cpf"])) {

            $nome = $_POST["nome"];
            $email = $_POST["email"];
            $cpf = $_POST["cpf"];
            $hora_cadastro = date("d/m/Y H:i:s",$_SERVER["REQUEST_TIME"]);

            if (empty($nome) || empty($email) || empty($cpf)) {
                echo "<div class='alert alert-danger'> Todos os dados devem ser informados!</div>";
            } elseif (strlen($cpf) != 11) {
                echo "<div class='alert alert-warning'>Informe CPF válido!</div>";
            } else {
                echo "<h1 class='display-4 fw-light'>Dados Cadastrados!</h1>";
                echo "Dados do Cliente <br><br>";
                echo "<div class='bg-light border rounded p-2'>";
                echo "<h1>Nome: $nome</h1>";
                echo "<h1>Email: $email</h1>";
                echo "<h1>CPF: $cpf</h1>";
                echo "<small class='text-muted'>Horário do Cadastro: $hora_cadastro</small>";
                echo "</div>";
            }
        }
        ?>
    </form>
</body>

</html>