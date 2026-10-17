<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Exercício 3</title>
    <link rel="stylesheet" href="style.css">
</head>

<body>

    <?php
    $clientes = [
        1 => 'Alberto Silva',
        2 => 'Bianca Duarte',
        3 => 'João Almeida',
        4 => 'Valéria Souza',
        5 => 'Augusto Silva'
    ];
    ?>

    <h1>Resultado Relatório de Clientes</h1>
    <table>
        <tr>
            <th>Código</th>
            <th>Nome</th>


            <?php foreach ($clientes as $codigo => $cliente) { ?>
        <tr>
            <td><?php echo $codigo; ?></td>
            <td><?php echo $cliente; ?></td>
        </tr>

    <?php } ?>
    </tr>
    </table>

</body>

</html>