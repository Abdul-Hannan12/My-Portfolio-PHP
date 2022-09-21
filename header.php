<?php
$page = basename($_SERVER['PHP_SELF']);  
?>
<!DOCTYPE html>
<html lang="en">

<head>

    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <link rel="stylesheet" href="styles/header.css">

</head>

<body>

    <nav>
        <ul>
            <li> <a class="btn <?php if($page == 'index.php'){echo "active";}?>" href=""> Home </a> </li>
            <li> <a class="btn <?php if($page == 'bio.php'){echo "active";}?>" href="bio.php"> Bio </a> </li>
            <li> <a class="btn <?php if($page == 'project.php'){echo "active";}?>" href=""> Projects </a> </li>
            <li> <a class="btn <?php if($page == 'contact.php'){echo "active";}?>" href=""> Contact </a> </li>
            <li> <a class="btn <?php if($page == 'blog.php'){echo "active";}?> disabled"> Blog </a> </li>
        </ul>
    </nav>
    
</body>

</html>