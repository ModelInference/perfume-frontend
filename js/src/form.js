
var browserlog = "64.163.76.74, cache-page, 0\n164.163.76.74, retrieve-page, 9\n164.163.76.74, cache-image, 18\n164.163.76.74, retrieve-image, 39\n164.163.76.74, quit, 160 \n237.250.28.190, cache-page, 0\n237.250.28.190, retrieve-page, 17\n237.250.28.190, cache-image, 34\n237.250.28.190, retrieve-image, 104 \n237.250.28.190, quit, 274 \n130.78.242.94, cache-page, 0\n130.78.242.94, retrieve-page, 9\n130.78.242.94, cache-image, 118 \n130.78.242.94, retrieve-image, 140 \n130.78.242.94, quit, 162 \n177.176.181.25, cache-page, 0\n177.176.181.25, retrieve-page, 17\n177.176.181.25, cache-image, 136 \n177.176.181.25, retrieve-image, 204 \n177.176.181.25, quit, 272 \n195.88.181.89, cache-image, 0\n195.88.181.89, retrieve-image, 27\n195.88.181.89, quit, 54\n153.98.187.29, cache-image, 0\n153.98.187.29, retrieve-image, 62\n153.98.187.29, quit, 124";
var browserargs = "-r (?<ip>) .+:(?<DTIME>.+)\\] \"GET HTTP/1.1 /(?<TYPE>.+)\" -m \\k<ip>" ;

var connectionlog = "164.163.76.74, cache-page, 0\n164.163.76.74, retrieve-page, 9\n164.163.76.74, cache-image, 18\n164.163.76.74, retrieve-image, 39\n164.163.76.74, quit, 160\n237.250.28.190, cache-page, 0\n237.250.28.190, retrieve-page, 17\n237.250.28.190, cache-image, 34\n237.250.28.190, retrieve-image, 104\n237.250.28.190, quit, 274\n130.78.242.94, cache-page, 0\n130.78.242.94, retrieve-page, 9\n130.78.242.94, cache-image, 118\n130.78.242.94, retrieve-image, 140\n130.78.242.94, quit, 162\n177.176.181.25, cache-page, 0\n177.176.181.25, retrieve-page, 17\n177.176.181.25, cache-image, 136\n177.176.181.25, retrieve-image, 204\n177.176.181.25, quit, 272\n195.88.181.89, cache-image, 0\n195.88.181.89, retrieve-image, 27\n195.88.181.89, quit, 54\n153.98.187.29, cache-image, 0\n153.98.187.29, retrieve-image, 62\n153.98.187.29, quit, 124";
var connectionargs = "-r (?<ip>.+), (?<TYPE>.+), (?<DTIME>.+)\n-m \\\\k<ip>";

var radiuslog = "0, 122.88.9.104, Access-Request\n64, 122.88.9.104, Access-Accept\n0, 102.24.169.15, Access-Request\n128, 102.24.169.15, Access-Accept\n0, 37.161.90.108, Access-Request\n64, 37.161.90.108, Access-Reject\n0, 91.83.112.9, Access-Request\n96, 91.83.112.9, Access-Reject\n0, 237.79.201.32, Access-Request\n2048, 237.79.201.32, Access-Challenge\n2144, 237.79.201.32, Access-Request\n2208, 237.79.201.32, Access-Reject\n0, 212.5.97.41, Access-Request\n3072, 212.5.97.41, Access-Challenge\n3184, 212.5.97.41, Access-Request\n3312, 212.5.97.41, Access-Reject\n0, 187.154.73.224, Access-Request\n64, 187.154.73.224, Access-Challenge\n192, 187.154.73.224, Access-Request\n320, 187.154.73.224, Access-Accept\n0, 46.8.192.199, Access-Request\n128, 46.8.192.199, Access-Challenge\n256, 46.8.192.199, Access-Request\n352, 46.8.192.199, Access-Accept\n" 
var radiusargs = "-r (?<DTIME>.+), (?<ip>.+), (?<TYPE>.+)\n-m \\k<ip>";

var logstring;
var argstring;

function writeBrowserModel() {
    logstring = browserlog ;
    argstring = browserargs;
    write();
}

function writeConnectionModel() {
    logstring = connectionlog ;
    argstring = connectionargs;
    write();
}

function writeRadiusModel() {
    logstring = radiuslog ;
    argstring = radiusargs;
    write();
}
function write() {
    $("#logtext").val(logstring);
    $("#argsfield").val(argstring);
}

