var data = { "log": [], "partitions": [], "invariants": [] }; 


var mode = "form";

function fetchModel (id) {
    var parameters =  {logfile:$("#logtext").val(),
            args:$("#argsfield").val(),
        };
    $.ajax({type:"POST", url:"json.php",data:parameters }).done(function(model) {console.log(model); data=model; revealModel();}).error(function(model) {alert("An error occured. Please try again later."); alert(model.responseText);}); 
    return parameters;
};

function revealForm() {
    if  (mode != "form")
        $("#form").toggle();
    if (mode == "model") 
        $("#model").toggle();
    if (mode == "invariant") 
        $("#invariant").toggle();
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
    ctx.strokeStyle = "#006400";
    ctx.moveTo(130,45);
    ctx.lineTo(180,45);
    ctx.stroke();
    ctx.fillText("Shortest Path", 190,50);
    ctx.closePath();
}

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

