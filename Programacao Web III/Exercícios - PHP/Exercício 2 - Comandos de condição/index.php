<!DOCTYPE html>
<html lang="ptbr">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Exercício - 2</title>
</head>

<body>
    <?php
    $datetime = new DateTime("now", new DateTimeZone("America/Sao_Paulo"));
    $hora = $datetime->format('H');

    if ($hora >= 0 && $hora <= 12) {
        echo "<h1>Bom Dia!</h1>";
        echo '<img src="imgs/manha.jpg" alt="manha">';
    } elseif ($hora > 12 && $hora < 18) {
        echo "<h1>Boa Tarde!</h1>";
        echo '<img src="imgs/tarde.jpg" alt="tarde">';
    } else {
        echo "<h1>Boa Noite!</h1>";
        echo '<img src="imgs/noite.jpg" alt="noite">';
    }
    ?>
</body>

</html>