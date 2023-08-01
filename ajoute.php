
<form action="" method="GET">
    <input type="number" name="id_hotel" placeholder="id_hotel"><br><br>
    <input type="text" name="titre" placeholder="titre"><br><br>
    <input type="text" name="adreess" placeholder="adreess"><br><br>
    <input type="number" name="prix_par_nuit" placeholder="prix_par_nuit"><br><br>
    <input type="number" name="id_type" placeholder="id_type"><br><br>
    <input type="number" name="nombre_de_places" placeholder="nombre_de_places"><br><br>
    <button name="btn">save</button>
</form>
<?php
require "database.php";
if(isset($_GET["btn"])){
    $id=$_GET["id_hotel"];
    $titre=$_GET["titre"];
    $adreess=$_GET["adreess"];
    $Pnuit=$_GET["prix_par_nuit"];
    $id_type=$_GET["id_type"];
    $Nplace=$_GET["nombre_de_places"];
    $sql=$database->prepare("INSERT INTO hotel value(:id,:titre,:adreess,:Pnuit,:id_type,:Nplace)");
    $sql->bindParam(":id",$id);
    $sql->bindParam(":titre",$titre);
    $sql->bindParam(":adreess",$adreess);
    $sql->bindParam(":Pnuit",$Pnuit);
    $sql->bindParam(":id_type",$id_type);
    $sql->bindParam(":Nplace",$Nplace);
    if($sql->execute()){
        header("location:listerH.php");
    }
}
?>