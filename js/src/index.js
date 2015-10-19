var data = { "log": [], "partitions": [], "invariants": [] };

function fetchModel (id) {
    data = { "log": [], "partitions": [], "invariants": [] }
    var parameters =  {logfile:$("#logtext").val(),
            args:$("#argsfield").val(),
        };
    $.ajax({type:"POST", url:"http://kramer.nss.cs.ubc.ca/perfume/json.php", data:parameters}).done(function(model) {data=model; revealModel();}).error(function(model) {alert("An error occured. Please try again later."); alert(model.responseText);});
    return parameters;
};

function revealModel() {
    drawModel(data);
    drawCanvas();
    drawInvariants(data);
    handleExpand(1);
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

function clearForm()  {
    $("#logtext").val('');
    $("#args").val('');
}

var $container;

//kwicks multi-page view

$(function() {
    //upon initialization
    $container = $('.kwicks').kwicks({
        maxSize : '95%',
        spacing : 5
    });
    handleExpand(0);

    //whenever clicked
    $('#expand-controls a').click(function(e) {
        e.preventDefault();
        var selectedIndex = $(this).data('index');
        handleExpand(selectedIndex);
    });
});

function handleExpand(selectedIndex) {
    var currentIndex = $container.kwicks('expanded');
    //revert back to viewing all
    if(selectedIndex === currentIndex) {
        $container.kwicks('expand', -1);
    }
    //view selected one
    else {
        $container.kwicks('expand', selectedIndex);
    }
}
