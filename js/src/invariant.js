//Preloaded invariants for debugging purpose
//Organizing the data into managable arrays

var types = ["AlwaysFollowedBy", "AlwaysPrecedes", "NeverFollowedBy"];

var alwaysPrecedes = [];  
var alwaysFollowedBy = [];
var neverFollowedBy = [];
var neverPrecedes = [];

//To get rid of the duplicates in the invariants
function checkExistsPrecedes(data){
    var result = false;
    for(var i=0; i<alwaysPrecedes.length;i++){
        if(alwaysPrecedes[i].predicates[0] === data.predicates[0] && alwaysPrecedes[i].predicates[1] === data.predicates[1]){
            alwaysPrecedes[i].constraints.push(data.constraints[0]);
            result = true;
            break;
        }
    }
    return result;
}
//To get rid of the duplicates in the invariants
function checkExistsFollowed(data){
    var result = false;
    for(var i=0; i<alwaysFollowedBy.length;i++){
        if(alwaysFollowedBy[i].predicates[0] === data.predicates[0] && alwaysFollowedBy[i].predicates[1] === data.predicates[1]){
            alwaysFollowedBy[i].constraints.push(data.constraints[0]);
            result = true;
            break;
        }
    }
    return result;
}
//Push the predicates into thier corresponding array
function getPredicates(data){
    for(var i=0; i<data.invariants.length; i++){
        if(data.invariants[i].invariantType === "AlwaysPrecedes"){
            if(checkExistsPrecedes(data.invariants[i]) === false){alwaysPrecedes.push(data.invariants[i]);}
        }
        if(data.invariants[i].invariantType === "AlwaysFollowedBy"){
            if(checkExistsFollowed(data.invariants[i]) === false){alwaysFollowedBy.push(data.invariants[i]);}
        }
    }
}

//Split the predicates into 3 arrays for easier management
var leftCol = [];
leftCol.constraints = [];
var midCol = [];
midCol.constraints = [];
var rightCol = [];
rightCol.constraints = [];

function checkExistsCol(col, data){
    var result = false;
    for(var i=0; i<col.length;i++){
        if(col[i]=== data){
            result = true;
            break;
        }
    }
    return result;
}

function getCol(data) {
    var inv = data.invariants;
    var upperbound = "";
    var lowerbound = "";
    $("#invars").empty();
    for (var i = 0; i < inv.length; i++) {
        var type = inv[i].invariantType;
        var bounds = "";
        if (inv[i].constraints !== undefined) {
         for (var j = 0; j < inv[i].constraints.length; j++) {
                if (inv[i].constraints[j].match("upperbound") )
                    upperbound =  inv[i].constraints[j];
                if (inv[i].constraints[j].match("lowerbound") )
                    lowerbound =  inv[i].constraints[j];
            }
        }
        upperbound = upperbound.replace("upperbound", "");
        lowerbound = lowerbound.replace("lowerbound", "");
        upperbound = upperbound.replace("=", "");
        lowerbound = lowerbound.replace("=", "");
        console.log(bounds);
        if (inv[i].predicates[0] !== undefined && inv[i].predicates[1] !== undefined  )
            if (inv[i].invariantType == "AlwaysFollowedBy") {
                $("#"+type).append("<tr><td>" + inv[i].predicates[0] +"</td><td>&rarr;</td><td>"+ inv[i].predicates[1] + "</td><td> " + upperbound + "</td><td>" + lowerbound + "<td></tr>");
            }
            if (inv[i].invariantType == "AlwaysPrecedes") {
                $("#"+type).append("<tr><td>" + inv[i].predicates[0] +"</td><td>&larr;</td><td>"+ inv[i].predicates[1] + "</td><td> " + upperbound + "</td><td>" + lowerbound + "<td></tr>");
            }
            if (inv[i].invariantType == "NeverFollowedBy") {
                $("#"+type).append("<tr><td>" + inv[i].predicates[0] +"</td><td>&#8603;</td><td>"+ inv[i].predicates[1] + "</td><td> " + upperbound + "</td><td>" + lowerbound + "<td></tr>");
            }
    }
}

//Main graphing 
 // var left = [];
 //    var mid = [];
 //    var right = [];
function drawInvariants(data) {  
    getPredicates(data);
    getCol(data);
    var offset = 0;
    // var left = [];
    // var mid = [];
    // var right = [];
    var path = [];
    var paper = Raphael("holder", 600, 600);
    var attr = {font: "50px Helvetica", opacity: 0.5};
    //Draw the left column of the graph
    //Function to find the predicate in given array
    function findNode(node, array){
        var myNode;
        for(var i=0; i<array.length;i++){
            if(array[i].content === node){
                myNode = array[i];
            }
        }
        return myNode;
    }
    //Functions to take care of the hover effect
    var hoverIn = function() {
        this.attr({"stroke": "#ff0000","stroke-width":4});
    };
    var hoverInLetter = function(){
        this.attr({"opacity": 1});
    };
    var hoverOutLetter = function(){
        this.attr({"opacity":0.5})
    };
    var hoverOut = function() {
        this.attr({"stroke": "#E3E3E3","stroke-width":2}); 
    };
    //Draw arrows between the predicates
    var arrow = function (x1, y1, x2, y2, size) {
        var angle = Math.atan2(x1-x2,y2-y1);
        angle = (angle / (2 * Math.PI)) * 360;
        var arrowPath = paper.path("M" + x2 + " " + y2 + " L" + (x2 - size) + " " + (y2 - size) + " L" + (x2 - size) + " " + (y2 + size) + " L" + x2 + " " + y2).attr("stroke","#E3E3E3").rotate((90+angle),x2,y2);
        var linePath = paper.path(["M", x1,y1,"L",x2,y2]).attr({"stroke-width":2,"stroke":"#E3E3E3"});
        return [linePath,arrowPath];
    }
    //Drawing the always precedes
}
