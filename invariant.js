var invariant = { "log": [ { "traceID": 0, "events": [ { "eventIndex": 0, "eventType": "c", "timestamp": 0 }, { "eventIndex": 1, "eventType": "e", "timestamp": 3 }, { "eventIndex": 2, "eventType": "f", "timestamp": 4 } ] }, { "traceID": 1, "events": [ { "eventIndex": 0, "eventType": "a", "timestamp": 10 }, { "eventIndex": 1, "eventType": "c", "timestamp": 13 }, { "eventIndex": 2, "eventType": "e", "timestamp": 14 }, { "eventIndex": 3, "eventType": "f", "timestamp": 17 } ] }, { "traceID": 2, "events": [ { "eventIndex": 0, "eventType": "b", "timestamp": 20 }, { "eventIndex": 1, "eventType": "d", "timestamp": 21 }, { "eventIndex": 2, "eventType": "e", "timestamp": 25 }, { "eventIndex": 3, "eventType": "g", "timestamp": 29 } ] }, { "traceID": 3, "events": [ { "eventIndex": 0, "eventType": "d", "timestamp": 30 }, { "eventIndex": 1, "eventType": "e", "timestamp": 34 }, { "eventIndex": 2, "eventType": "g", "timestamp": 35 } ] }, { "traceID": 4, "events": [ { "eventIndex": 0, "eventType": "d", "timestamp": 40 }, { "eventIndex": 1, "eventType": "e", "timestamp": 41 }, { "eventIndex": 2, "eventType": "g", "timestamp": 45 } ] }, { "traceID": 5, "events": [ { "eventIndex": 0, "eventType": "d", "timestamp": 50 } ] } ], "partitions": [ { "eventType": "c", "events": [ { "traceID": 0, "eventIndex": 0 } ] }, { "eventType": "e", "events": [ { "traceID": 2, "eventIndex": 2 }, { "traceID": 4, "eventIndex": 1 } ] }, { "eventType": "f", "events": [ { "traceID": 0, "eventIndex": 2 }, { "traceID": 1, "eventIndex": 3 } ] }, { "eventType": "a", "events": [ { "traceID": 1, "eventIndex": 0 } ] }, { "eventType": "b", "events": [ { "traceID": 2, "eventIndex": 0 } ] }, { "eventType": "d", "events": [ { "traceID": 2, "eventIndex": 1 }, { "traceID": 5, "eventIndex": 0 } ] }, { "eventType": "g", "events": [ { "traceID": 2, "eventIndex": 3 }, { "traceID": 3, "eventIndex": 2 }, { "traceID": 4, "eventIndex": 2 } ] }, { "eventType": "c", "events": [ { "traceID": 1, "eventIndex": 1 } ] }, { "eventType": "e", "events": [ { "traceID": 0, "eventIndex": 1 } ] }, { "eventType": "d", "events": [ { "traceID": 3, "eventIndex": 0 }, { "traceID": 4, "eventIndex": 0 } ] }, { "eventType": "e", "events": [ { "traceID": 3, "eventIndex": 1 } ] }, { "eventType": "e", "events": [ { "traceID": 1, "eventIndex": 2 } ] } ], "invariants": [ { "invariantType": "AlwaysFollowedBy", "predicates": [ "a", "c" ], "constraints": [ "lowerbound=3" ] }, { "invariantType": "AlwaysFollowedBy", "predicates": [ "a", "c" ], "constraints": [ "upperbound=3" ] }, { "invariantType": "AlwaysFollowedBy", "predicates": [ "a", "e" ], "constraints": [ "lowerbound=4" ] }, { "invariantType": "AlwaysFollowedBy", "predicates": [ "a", "e" ], "constraints": [ "upperbound=4" ] }, { "invariantType": "AlwaysFollowedBy", "predicates": [ "a", "f" ], "constraints": [ "lowerbound=7" ] }, { "invariantType": "AlwaysFollowedBy", "predicates": [ "a", "f" ], "constraints": [ "upperbound=7" ] }, { "invariantType": "AlwaysFollowedBy", "predicates": [ "c", "e" ], "constraints": [ "lowerbound=1" ] }, { "invariantType": "AlwaysFollowedBy", "predicates": [ "c", "e" ], "constraints": [ "upperbound=3" ] }, { "invariantType": "AlwaysFollowedBy", "predicates": [ "c", "f" ], "constraints": [ "lowerbound=4" ] }, { "invariantType": "AlwaysFollowedBy", "predicates": [ "c", "f" ], "constraints": [ "upperbound=4" ] }, { "invariantType": "AlwaysPrecedes", "predicates": [ "c", "f" ], "constraints": [ "lowerbound=4" ] }, { "invariantType": "AlwaysPrecedes", "predicates": [ "c", "f" ], "constraints": [ "upperbound=4" ] }, { "invariantType": "AlwaysPrecedes", "predicates": [ "e", "f" ], "constraints": [ "lowerbound=1" ] }, { "invariantType": "AlwaysPrecedes", "predicates": [ "e", "f" ], "constraints": [ "upperbound=3" ] }, { "invariantType": "AlwaysPrecedes", "predicates": [ "e", "g" ], "constraints": [ "lowerbound=1" ] }, { "invariantType": "AlwaysPrecedes", "predicates": [ "e", "g" ], "constraints": [ "upperbound=4" ] }, { "invariantType": "AlwaysPrecedes", "predicates": [ "d", "g" ], "constraints": [ "lowerbound=5" ] }, { "invariantType": "AlwaysPrecedes", "predicates": [ "d", "g" ], "constraints": [ "upperbound=8" ] }, { "invariantType": "AlwaysFollowedBy", "predicates": [ "b", "e" ], "constraints": [ "lowerbound=5" ] }, { "invariantType": "AlwaysFollowedBy", "predicates": [ "b", "e" ], "constraints": [ "upperbound=5" ] }, { "invariantType": "AlwaysFollowedBy", "predicates": [ "b", "d" ], "constraints": [ "lowerbound=1" ] }, { "invariantType": "AlwaysFollowedBy", "predicates": [ "b", "d" ], "constraints": [ "upperbound=1" ] }, { "invariantType": "AlwaysFollowedBy", "predicates": [ "b", "g" ], "constraints": [ "lowerbound=9" ] }, { "invariantType": "AlwaysFollowedBy", "predicates": [ "b", "g" ], "constraints": [ "upperbound=9" ] } ] }; 

//Organizing the data into managable arrays

var alwaysPrecedes = [];
var alwaysFollowedBy = [];

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

function getPredicates(data){
    for(var i=0; i<invariant.invariants.length; i++){
        if(invariant.invariants[i].invariantType === "AlwaysPrecedes"){
            if(checkExistsPrecedes(invariant.invariants[i]) === false){alwaysPrecedes.push(invariant.invariants[i]);}
        }
        if(invariant.invariants[i].invariantType === "AlwaysFollowedBy"){
            if(checkExistsFollowed(invariant.invariants[i]) === false){alwaysFollowedBy.push(invariant.invariants[i]);}
        }
    }
}
getPredicates(null);
//Printing and Graphing the invariants

var leftCol = [];
var midCol = [];
var rightCol = [];

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

function getCol(data){
    for(var i=0; i<alwaysPrecedes.length; i++){
        $("#alwaysPrecedes").append("<tr><td>" + alwaysPrecedes[i].predicates[0] +" <-- "+
            alwaysPrecedes[i].predicates[1] + "</td></tr>");
        if(checkExistsCol(leftCol, alwaysPrecedes[i].predicates[0]) === false){
            leftCol.push(alwaysPrecedes[i].predicates[0]);
        }
    }
    for(var i=0; i<alwaysFollowedBy.length; i++){
        $("#alwaysFollowedBy").append("<tr><td>" + alwaysFollowedBy[i].predicates[0] +" --> "+
            alwaysFollowedBy[i].predicates[1] + "</td></tr>");
        if(checkExistsCol(rightCol, alwaysFollowedBy[i].predicates[1]) === false){
            rightCol.push(alwaysFollowedBy[i].predicates[1]);
        }
    }
    for(var i=0; i<alwaysPrecedes.length; i++){
        if(checkExistsCol(midCol, alwaysPrecedes[i].predicates[1])===false){
            midCol.push(alwaysPrecedes[i].predicates[1]);
        }
    }
    for(var i=0; i<alwaysFollowedBy.length; i++){
        if(checkExistsCol(midCol, alwaysFollowedBy[i].predicates[0])===false){
            midCol.push(alwaysFollowedBy[i].predicates[0]);
        }
    }
    leftCol.sort();
    midCol.sort();
    rightCol.sort();
}

getCol(null);
var path = [];
var left = [];
var right = [];
var mid = [];
window.onload = function() {  
    var offset = 0;
    // var left = [];
    // var mid = [];
    // var right = [];
    // var path = [];
    var paper = Raphael("holder", 600, 600);
    var attr = {font: "50px Helvetica", opacity: 0.5};
    for(var i=0; i<leftCol.length;i++){
        var dot = paper.text(50,40+offset, leftCol[i]).attr(attr);
        var property = {
            "dot":dot,
            "x":50,
            "y":40+offset,
            "content": leftCol[i]
        };
        left.push(property);
        offset +=70;
    }
    offset = 0;
    for(var i=0; i<midCol.length;i++){
        var dot = paper.text(250,40+offset, midCol[i]).attr(attr);
        var property = {
            "dot":dot,
            "x":250,
            "y":40+offset,
            "content": midCol[i]
        };
        mid.push(property);
        offset +=70;
    }
    offset = 0;
    for(var i=0; i<rightCol.length;i++){
        var dot = paper.text(450,40+offset, rightCol[i]).attr(attr);
        var property = {
            "dot":dot,
            "x":450,
            "y":40+offset,
            "content": rightCol[i]
        };
        right.push(property);
        offset +=70;
    }
    function findNode(node, array){
        var myNode;
        for(var i=0; i<array.length;i++){
            if(array[i].content === node){
                myNode = array[i];
            }
        }
        return myNode;
    }
    var hoverIn = function() {
        this.attr({"stroke": "#E3E3E3"});
    };
    var hoverOut = function() {
        this.attr({"stroke": "#000"});    
    };
    for(var i=0; i<alwaysPrecedes.length;i++){
        var leftNode = findNode(alwaysPrecedes[i].predicates[0], left);
        var rightNode = findNode(alwaysPrecedes[i].predicates[1],mid);
        var link = paper.path(["M",leftNode.x+15,leftNode.y,"L",rightNode.x-15,rightNode.y]).attr("stroke-width",2);
        leftNode.dot.hover(hoverIn,hoverOut,link,link);
        rightNode.dot.hover(hoverIn,hoverOut,link,link);
        path.push(link);
    }
    for(var i=0; i<alwaysFollowedBy.length;i++){
        var leftNode = findNode(alwaysFollowedBy[i].predicates[0], mid);
        var rightNode = findNode(alwaysFollowedBy[i].predicates[1], right);
        var link = paper.path(["M",leftNode.x+15,leftNode.y,"L",rightNode.x-15,rightNode.y]).attr("stroke-width",2);
        leftNode.dot.hover(hoverIn,hoverOut,link,link);
        rightNode.dot.hover(hoverIn,hoverOut,link,link);
        path.push(link);
    }

}


// function getInvaraints(data) {
// var alwaysPrecedes = "";
// var alwaysFollowedBy = "";
// var constraintText="";
// for (var i = 0; i < invariant.invariants.length; i++) {
//     if(invariant.invariants[i].invariantType === "AlwaysPrecedes"){
//       alwaysPrecedes = invariant.invariants[i].predicates[0] + " <--- " + invariant.invariants[i].predicates[1] + " " + constraintText;
//       constraintText = "";
//       for (var j = 0; j < invariant.invariants[i].constraints.length; j++) {
//           constraintText += invariant.invariants[i].constraints[j] + "\n"; //Add information about bounds
//       }
//       $("#alwaysPrecedes").append("<tr><td>" + alwaysPrecedes + "</td></tr>");
//     }else if(invariant.invariants[i].invariantType === "AlwaysFollowedBy"){
//       constraintText = "";
//       for (var j = 0; j < invariant.invariants[i].constraints.length; j++) {
//           constraintText += invariant.invariants[i].constraints[j] + "\n"; //Add information about bounds
//       }
//       alwaysFollowedBy = invariant.invariants[i].predicates[0] + " ---> " + invariant.invariants[i].predicates[1] + " " + constraintText;
//       $("#alwaysFollowedBy").append("<tr><td>" + alwaysFollowedBy + "</td></tr>");
// 	}
// 	}
// }
