<?php
require "database.php";
$id=$_GET["id_hotel"];
$sql=$database->prepare("DELETE from hotel where id_hotel=:id");
$sql->bindParam(":id",$id);
$sql->execute();
header("location:listerH.php")
?>