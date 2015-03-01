var data = { "log": [], "partitions": [], "invariants": [] };

var mode = "form";

function fetchModel (id) {
    //graph.clear();
    data = { "log": [], "partitions": [], "invariants": [] }
    var parameters =  {logfile:$("#logtext").val(),
            args:$("#argsfield").val(),
        };
    //old:
    // $.ajax({type:"POST", url:"json.php", data:parameters}).done(function(model) {console.log(model); data=model; revealModel();}).error(function(model) {alert("An error occured. Please try again later."); alert(model.responseText);});
    //new (jsonp, still same machine)
    // $.ajax({type:"POST", url:"json.php", data:parameters, dataType:'jsonp'}).done(function(model) {model = JSON.parse(model); console.log(model); data=model; revealModel();}).error(function(model) {alert("An error occured. Please try again later."); alert(model.responseText);});
    //real new (jsonp, different machines)
    $.ajax({type:"POST", url:"http://kramer.nss.cs.ubc.ca/perfume/json.php", data:parameters, dataType:'jsonp'}).done(function(model) {model = JSON.parse(model); console.log(model); data=model; revealModel();}).error(function(model) {alert("An error occured. Please try again later."); alert(model.responseText);});
    return parameters;
};

function revealForm() {
    if  (mode != "form")
        $("#form").toggle();
    if (mode == "model") {
        $("#model").toggle();
    }
    if (mode == "invariant") {
        //graph.clear();
        $("#invariant").toggle();
    }
    mode = "form";
}

function revealModel() {
    if  (mode != "model")
        $("#model").toggle();
    if (mode == "form")
        $("#form").toggle();
    if (mode == "invariant")
        $("#invariant").toggle();
    mode = "model";
    drawModel(data);
    drawCanvas();
}

function drawCanvas() {
    var c = document.getElementById("legend");
    var ctx = c.getContext("2d");
    ctx.strokeStyle = "#FF0000";
    ctx.beginPath();
    ctx.moveTo(0,45);
    ctx.lineTo(50,45);
    ctx.stroke();
    ctx.closePath();
    ctx.beginPath();
    ctx.fillText("Longest Path", 60,50);
    ctx.strokeStyle = "#0000FF";
    ctx.moveTo(130,45);
    ctx.lineTo(180,45);
    ctx.stroke();
    ctx.fillText("Shortest Path", 190,50);
    ctx.closePath();
    ctx.beginPath();
    ctx.strokeStyle = "#FF00FF";
    ctx.moveTo(280,45);
    ctx.lineTo(330,45);
    ctx.stroke();
    ctx.fillText("Longest and shortest Path", 340,50);
    ctx.closePath();
};

function revealInvariant() {
    if  (mode != "invariant")
        $("#invariant").toggle();
    if (mode == "model")
        $("#model").toggle();
    if (mode == "form")
        $("#form").toggle();
    mode = "invariant";
    drawInvariants(data);
}

function clearForm()  {
    $("#logtext").val('');
    $("#args").val('');
}

