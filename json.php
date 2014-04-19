<?php

function main(){

$a = $_POST['args'];
$jsonFile = "/tmp/jsonargs.txt";
$logfile = "/tmp/log.txt";
$logfh =  fopen($logfile, 'w') or die("can't open file");
fwrite($logfh, $_POST["logfile"]);
fclose($logfh);

$jsonfh = fopen($jsonFile, 'w') or die("can't open file");
fwrite($jsonfh, $a);
fwrite($jsonfh, "\n");
fwrite($jsonfh, "-o /tmp/json\n");
fwrite($jsonfh, "-j\n");
fclose($jsonfh);
$output = shell_exec(' ./perfume.sh -c /tmp/jsonargs.txt ' . "/tmp/log.txt 2>&1");
$json = file_get_contents('/tmp/json.json');

$outputfh = fopen("/tmp/jsonout.txt", 'w') or die("can't open file");
fwrite($outputfh, $output);

if ($json === "")  {
    header('HTTP/1.1 500 Internal Server Error');
    header('Content-Type: application/json; charset=UTF-8');
    die( json_encode(array( message => $output)));
    }
else {
        header('Content-Type: application/json');
        echo $json;
    }
}

main();

?>
