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
    $("#invars").empty();
    for (var i = 0; i < inv.length; i++) {
        var type = inv[i].invariantType;
        var bounds = "";
        if (inv[i].constraints !== undefined) {
            for (var j = 0; j < inv[i].constraints.length; j++) {
                bounds += "<br>" + inv[i].constraints[j];
            }
        }
        if (inv[i].predicates[0] !== undefined && inv[i].predicates[1] !== undefined  )
            if (inv[i].invariantType == "AlwaysFollowedBy") {
                $("#"+type).append("<tr><td>" + inv[i].predicates[0] +" &rarr; "+ inv[i].predicates[1] + " " + bounds + "</td></tr>");
            }
            if (inv[i].invariantType == "AlwaysPrecedes"){
                $("#"+type).append("<tr><td>" + inv[i].predicates[0] +" &larr; "+ inv[i].predicates[1] + " " + bounds + "</td></tr>");
            }
            if (inv[i].invariantType == "NeverFollowedBy"){
                $("#"+type).append("<tr><td>" + inv[i].predicates[0] +" &#8603; "+ inv[i].predicates[1] + " " + bounds + "</td></tr>");
            }
    }
}
//Splits the predicates into the 3 columns and prints the them
// function getCol(data){
//     for(var i=0; i<alwaysPrecedes.length; i++){
//         $("#alwaysPrecedes").append("<tr><td>" + alwaysPrecedes[i].predicates[0] +" <i class='icon-arrow-left'></i> "+
//             alwaysPrecedes[i].predicates[1] + " " + alwaysPrecedes[i].constraints[0] + "</td></tr>");
//         if(checkExistsCol(leftCol, alwaysPrecedes[i].predicates[0]) === false){
//             leftCol.push(alwaysPrecedes[i].predicates[0]);
//             leftCol.constraints.push(alwaysPrecedes[i].constraints);
//         }
//     }
//     for(var i=0; i<alwaysFollowedBy.length; i++){
//         $("#alwaysFollowedBy").append("<tr><td>" + alwaysFollowedBy[i].predicates[0] +" <i class='icon-arrow-right'></i>  "+
//             alwaysFollowedBy[i].predicates[1] + "</td></tr>");
//         if(checkExistsCol(rightCol, alwaysFollowedBy[i].predicates[1]) === false){
//             rightCol.push(alwaysFollowedBy[i].predicates[1]);
//             rightCol.constraints.push(alwaysFollowedBy.constraints);
//         }
//     }
//     for(var i=0; i<alwaysPrecedes.length; i++){
//         if(checkExistsCol(midCol, alwaysPrecedes[i].predicates[1])===false){
//             midCol.push(alwaysPrecedes[i].predicates[1]);
//             midCol.constraints.push(alwaysPrecedes[i].constraints);
//         }
//     }
//     for(var i=0; i<alwaysFollowedBy.length; i++){
//         if(checkExistsCol(midCol, alwaysFollowedBy[i].predicates[0])===false){
//             midCol.push(alwaysFollowedBy[i].predicates[0]);
//             midCol.constraints.push(alwaysFollowedBy[i].constraints);
//         }
//     }
//     leftCol.sort();
//     midCol.sort();
//     rightCol.sort();
// }

//Main graphing 
 var left = [];
    var mid = [];
    var right = [];
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
    for(var i=0; i<leftCol.length;i++){
        var dot = paper.text(50,100+offset, leftCol[i]).attr(attr);
        var property = {
            "dot":dot,
            "x":50,
            "y":100+offset,
            "content": leftCol[i],
            "constraints":leftCol.constraints[i]
        };
        left.push(property);
        offset +=70;
    }
    //Draw the mid column of the graph
    offset = 0;
    for(var i=0; i<midCol.length;i++){
        var dot = paper.text(250,100+offset, midCol[i]).attr(attr);
        var property = {
            "dot":dot,
            "x":250,
            "y":100+offset,
            "content": midCol[i],
            "constraints":midCol.constraints[i]
        };
        mid.push(property);
        offset +=70;
    }
    offset = 0;
    //Draw the right column of the graph
    for(var i=0; i<rightCol.length;i++){
        var dot = paper.text(450,100+offset, rightCol[i]).attr(attr);
        var property = {
            "dot":dot,
            "x":450,
            "y":100+offset,
            "content": rightCol[i],
            "constraints":rightCol.constraints[i]
        };
        right.push(property);
        offset +=70;
    }
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
    for(var i=0; i<alwaysPrecedes.length;i++){
        var leftNode = findNode(alwaysPrecedes[i].predicates[0], left);
        var rightNode = findNode(alwaysPrecedes[i].predicates[1],mid);
        // var link = paper.path(["M",leftNode.x+15,leftNode.y,"L",rightNode.x-15,rightNode.y]).attr("stroke-width",2);
        var link = arrow(leftNode.x+15,leftNode.y,rightNode.x-15,rightNode.y,7);
        //For the predicates
        leftNode.dot.hover(hoverInLetter,hoverOutLetter,leftNode.dot,leftNode.dot);
        leftNode.dot.hover(hoverInLetter,hoverOutLetter,rightNode.dot,rightNode.dot);
        rightNode.dot.hover(hoverInLetter,hoverOutLetter,leftNode.dot,leftNode.dot);
        rightNode.dot.hover(hoverInLetter,hoverOutLetter,rightNode.dot,rightNode.dot);
        //For links and arrows etc..
        leftNode.dot.hover(hoverIn,hoverOut,link[0],link[0]);
        rightNode.dot.hover(hoverIn,hoverOut,link[0],link[0]);
        leftNode.dot.hover(hoverIn,hoverOut,link[1],link[1]);
        rightNode.dot.hover(hoverIn,hoverOut,link[1],link[1]);
        leftNode.dot.click(function(){
            var text = paper.text(200, 40, leftNode.constraints[0]+ " " + leftNode.constraints[1]).attr({font: "20px Helvetica"});
        });
        path.push(link);
    }
    //Drawing the always followed by
    for(var i=0; i<alwaysFollowedBy.length;i++){
        var leftNode = findNode(alwaysFollowedBy[i].predicates[0], mid);
        var rightNode = findNode(alwaysFollowedBy[i].predicates[1], right);
        var link = arrow(leftNode.x+15,leftNode.y,rightNode.x-15,rightNode.y,7);
        //For the predicates
        leftNode.dot.hover(hoverInLetter,hoverOutLetter,leftNode.dot,leftNode.dot);
        leftNode.dot.hover(hoverInLetter,hoverOutLetter,rightNode.dot,rightNode.dot);
        rightNode.dot.hover(hoverInLetter,hoverOutLetter,leftNode.dot,leftNode.dot);
        rightNode.dot.hover(hoverInLetter,hoverOutLetter,rightNode.dot,rightNode.dot);
        //For links and arrows etc..
        leftNode.dot.hover(hoverIn,hoverOut,link[0],link[0]);
        rightNode.dot.hover(hoverIn,hoverOut,link[0],link[0]);
        leftNode.dot.hover(hoverIn,hoverOut,link[1],link[1]);
        rightNode.dot.hover(hoverIn,hoverOut,link[1],link[1]);
        leftNode.dot.click(function(){
            paper.text(200, 40, leftNode.constraints[0]+ " " + leftNode.constraints[1]).attr({font: "20px Helvetica"});
        });
        path.push(link);
    }

}
