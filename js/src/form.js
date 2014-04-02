var abstractlog = "1 0 c\n 2 0 b\n 3 0 a\n 4 0 d\n 1 1 f\n 2 1 b\n 3 1 a\n 4 1 e\n 1 2 f\n 2 2 b\n 3 2 a\n 4 2 d";
var abstractargs = "-r ^(?<TYPE>),(?<TIME>),(?<trace>)\n 2 -m \\k<trace>" ;

var browserlog = "64.163.76.74, cache-page, 0\n 164.163.76.74, retrieve-page, 9\n 164.163.76.74, cache-image, 18\n 164.163.76.74, retrieve-image, 39\n 164.163.76.74, quit, 160 \n --\n 237.250.28.190, cache-page, 0\n 237.250.28.190, retrieve-page, 17\n 237.250.28.190, cache-image, 34\n 237.250.28.190, retrieve-image, 104 \n 237.250.28.190, quit, 274 \n --\n 130.78.242.94, cache-page, 0\n 130.78.242.94, retrieve-page, 9\n 130.78.242.94, cache-image, 118 \n 130.78.242.94, retrieve-image, 140 \n 130.78.242.94, quit, 162 \n --\n 177.176.181.25, cache-page, 0\n 177.176.181.25, retrieve-page, 17\n 177.176.181.25, cache-image, 136 \n 177.176.181.25, retrieve-image, 204 \n 177.176.181.25, quit, 272 \n --\n 195.88.181.89, cache-image, 0\n 195.88.181.89, retrieve-image, 27\n 195.88.181.89, quit, 54\n --\n 153.98.187.29, cache-image, 0\n 153.98.187.29, retrieve-image, 62\n 153.98.187.29, quit, 124";
var browserargs = "-r (?<ip>) .+:(?<DTIME>.+)\\] \"GET HTTP/1.1 /(?<TYPE>.+)\" -m \\k<ip>" ;

var connectionlog =   "\"19.38.218.11 [31/May/2014:31200.0] \"GET HTTP/1.1 /test-bandwidth\"\n 19.38.218.11 [31/May/2014:31202.0] \"GET HTTP/1.1 /narrowband\"\n 19.38.218.11 [31/May/2014:31205.7] \"GET HTTP/1.1 /query\"\n 19.38.218.11 [31/May/2014:31208.9] \"GET HTTP/1.1 /query\"\n 19.38.218.11 [31/May/2014:31209.7] \"GET HTTP/1.1 /report-normal\"\n 95.39.21.28 [31/May/2014:31200.3] \"GET HTTP/1.1 /test-bandwidth\"\n 95.39.21.28 [31/May/2014:31202.3] \"GET HTTP/1.1 /narrowband\"\n 95.39.21.28 [31/May/2014:31206.0] \"GET HTTP/1.1 /query\"\n 95.39.21.28 [31/May/2014:31206.8] \"GET HTTP/1.1 /report-normal\"\n 210.82.199.247 [31/May/2014:31200.1] \"GET HTTP/1.1 /test-bandwidth\"\n 210.82.199.247 [31/May/2014:31200.8] \"GET HTTP/1.1 /broadband\"\n 210.82.199.247 [31/May/2014:31202.1] \"GET HTTP/1.1 /query\"\n 210.82.199.247 [31/May/2014:31208.3] \"GET HTTP/1.1 /query\"\n 210.82.199.247 [31/May/2014:31208.8] \"GET HTTP/1.1 /report-abnormal\"\n 130.78.242.94 [31/May/2014:31200.1] \"GET HTTP/1.1 /test-bandwidth\"\n 130.78.242.94 [31/May/2014:31200.7] \"GET HTTP/1.1 /broadband\"\n 130.78.242.94 [31/May/2014:31201.9] \"GET HTTP/1.1 /query\"\n 130.78.242.94 [31/May/2014:31208.0] \"GET HTTP/1.1 /query\"\n 130.78.242.94 [31/May/2014:31208.4] \"GET HTTP/1.1 /report-abnormal\"\n 38.151.1.182 [31/May/2014:31200.2] \"GET HTTP/1.1 /test-bandwidth\"\n 38.151.1.182 [31/May/2014:31200.8] \"GET HTTP/1.1 /broadband\"\n 38.151.1.182 [31/May/2014:31202.0] \"GET HTTP/1.1 /query\"\n 38.151.1.182 [31/May/2014:31203.3] \"GET HTTP/1.1 /query\"\n 38.151.1.182 [31/May/2014:31203.8] \"GET HTTP/1.1 /report-normal\"\n 37.161.90.108 [31/May/2014:31200.2] \"GET HTTP/1.1 /test-bandwidth\"\n 37.161.90.108 [31/May/2014:31200.9] \"GET HTTP/1.1 /broadband\"\n 37.161.90.108 [31/May/2014:31202.2] \"GET HTTP/1.1 /query\"\n 37.161.90.108 [31/May/2014:31203.6] \"GET HTTP/1.1 /query\"\n 37.161.90.108 [31/May/2014:31204.7] \"GET HTTP/1.1 /report-normal\"";
var connectionargs = "-r (?<ip>.+), (?<TYPE>.+), (?<DTIME>.+) -s ^--$";

var logstring;
var argstring;

function writeAbstractModel() {
    logstring =  abstractlog ;
     argstring = abstractargs;
     write();
}

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

function write() {
    $("#logtext").val(logstring);
    $("#argsfield").val(argstring);
}

