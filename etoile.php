<?php
$username="youssef";
$password="youssef";
$servername="localhost";
$database=new PDO("mysql:host=$servername;dbname=regional",$username,$password);
$num=$_GET["selec"];


$sql=$database->prepare("SELECT * FROM typehotel where nombre_étoile=:num");
$sql->bindParam(":num",$num);
if($sql->execute()){
    $some=0;
    foreach($sql as $e){
        $some=$some+1;
    }
    echo $_SESSION["Netoile"]=$some;
}

?>