
var browserlog = "64.163.76.74, cache-page, 0\n164.163.76.74, retrieve-page, 9\n164.163.76.74, cache-image, 18\n164.163.76.74, retrieve-image, 39\n164.163.76.74, quit, 160 \n237.250.28.190, cache-page, 0\n237.250.28.190, retrieve-page, 17\n237.250.28.190, cache-image, 34\n237.250.28.190, retrieve-image, 104 \n237.250.28.190, quit, 274 \n130.78.242.94, cache-page, 0\n130.78.242.94, retrieve-page, 9\n130.78.242.94, cache-image, 118 \n130.78.242.94, retrieve-image, 140 \n130.78.242.94, quit, 162 \n177.176.181.25, cache-page, 0\n177.176.181.25, retrieve-page, 17\n177.176.181.25, cache-image, 136 \n177.176.181.25, retrieve-image, 204 \n177.176.181.25, quit, 272 \n195.88.181.89, cache-image, 0\n195.88.181.89, retrieve-image, 27\n195.88.181.89, quit, 54\n153.98.187.29, cache-image, 0\n153.98.187.29, retrieve-image, 62\n153.98.187.29, quit, 124";
var browserargs = "-r (?<ip>.+), (?<TYPE>.+), (?<DTIME>.+)\n-m \\\\k<ip>";

var connectionlog = "19.38.218.11 [31/May/2014:31200.0] \"GET HTTP/1.1 /test-bandwidth\"\n 19.38.218.11 [31/May/2014:31202.0] \"GET HTTP/1.1 /narrowband\"\n 19.38.218.11 [31/May/2014:31205.7] \"GET HTTP/1.1 /query\"\n 19.38.218.11 [31/May/2014:31208.9] \"GET HTTP/1.1 /query\"\n 19.38.218.11 [31/May/2014:31209.7] \"GET HTTP/1.1 /report-normal\"\n 95.39.21.28 [31/May/2014:31200.3] \"GET HTTP/1.1 /test-bandwidth\"\n 95.39.21.28 [31/May/2014:31202.3] \"GET HTTP/1.1 /narrowband\"\n 95.39.21.28 [31/May/2014:31206.0] \"GET HTTP/1.1 /query\"\n 95.39.21.28 [31/May/2014:31206.8] \"GET HTTP/1.1 /report-normal\"\n 210.82.199.247 [31/May/2014:31200.1] \"GET HTTP/1.1 /test-bandwidth\"\n 210.82.199.247 [31/May/2014:31200.8] \"GET HTTP/1.1 /broadband\"\n 210.82.199.247 [31/May/2014:31202.1] \"GET HTTP/1.1 /query\"\n 210.82.199.247 [31/May/2014:31208.3] \"GET HTTP/1.1 /query\"\n 210.82.199.247 [31/May/2014:31208.8] \"GET HTTP/1.1 /report-abnormal\"\n 130.78.242.94 [31/May/2014:31200.1] \"GET HTTP/1.1 /test-bandwidth\"\n 130.78.242.94 [31/May/2014:31200.7] \"GET HTTP/1.1 /broadband\"\n 130.78.242.94 [31/May/2014:31201.9] \"GET HTTP/1.1 /query\"\n 130.78.242.94 [31/May/2014:31208.0] \"GET HTTP/1.1 /query\"\n 130.78.242.94 [31/May/2014:31208.4] \"GET HTTP/1.1 /report-abnormal\"\n 38.151.1.182 [31/May/2014:31200.2] \"GET HTTP/1.1 /test-bandwidth\"\n 38.151.1.182 [31/May/2014:31200.8] \"GET HTTP/1.1 /broadband\"\n 38.151.1.182 [31/May/2014:31202.0] \"GET HTTP/1.1 /query\"\n 38.151.1.182 [31/May/2014:31203.3] \"GET HTTP/1.1 /query\"\n 38.151.1.182 [31/May/2014:31203.8] \"GET HTTP/1.1 /report-normal\"\n 37.161.90.108 [31/May/2014:31200.2] \"GET HTTP/1.1 /test-bandwidth\"\n 37.161.90.108 [31/May/2014:31200.9] \"GET HTTP/1.1 /broadband\"\n 37.161.90.108 [31/May/2014:31202.2] \"GET HTTP/1.1 /query\"\n 37.161.90.108 [31/May/2014:31203.6] \"GET HTTP/1.1 /query\"\n 37.161.90.108 [31/May/2014:31204.7]" ; 
var connectionargs = "-r (?<ip>) .+:(?<DTIME>.+)\\] \"GET HTTP/1.1 /(?<TYPE>.+)\" -m \\\\k<ip>" ;

var radiuslog = "0, 122.88.9.104, Access-Request\n64, 122.88.9.104, Access-Accept\n0, 102.24.169.15, Access-Request\n128, 102.24.169.15, Access-Accept\n0, 37.161.90.108, Access-Request\n64, 37.161.90.108, Access-Reject\n0, 91.83.112.9, Access-Request\n96, 91.83.112.9, Access-Reject\n0, 237.79.201.32, Access-Request\n2048, 237.79.201.32, Access-Challenge\n2144, 237.79.201.32, Access-Request\n2208, 237.79.201.32, Access-Reject\n0, 212.5.97.41, Access-Request\n3072, 212.5.97.41, Access-Challenge\n3184, 212.5.97.41, Access-Request\n3312, 212.5.97.41, Access-Reject\n0, 187.154.73.224, Access-Request\n64, 187.154.73.224, Access-Challenge\n192, 187.154.73.224, Access-Request\n320, 187.154.73.224, Access-Accept\n0, 46.8.192.199, Access-Request\n128, 46.8.192.199, Access-Challenge\n256, 46.8.192.199, Access-Request\n352, 46.8.192.199, Access-Accept\n" ;
var radiusargs = "-r (?<DTIME>.+), (?<ip>.+), (?<TYPE>.+)\n-m \\\\k<ip>";

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

