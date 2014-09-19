<?php
//Database connection info
//static $cmd = "script.bat";

switch ($_GET["function"]) {
		case "write_url":
			write_url($_GET["data"]);
			break;
             
}



function write_url($data){
    
   
    $filewrite = fopen("data.txt","a");
   

    fwrite($filewrite, "$data\n" );

    fclose($filewrite);
    echo $finalString;

}

?>
