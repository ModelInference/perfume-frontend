//Preloaded invariants for debugging purpose
//Organizing the data into managable arrays

var abc_model = { "log": [ { "traceID": 0, "events": [ { "eventIndex": 0, "eventType": "c", "timestamp": 0 }, { "eventIndex": 1, "eventType": "e", "timestamp": 3 }, { "eventIndex": 2, "eventType": "f", "timestamp": 4 } ] }, { "traceID": 1, "events": [ { "eventIndex": 0, "eventType": "a", "timestamp": 10 }, { "eventIndex": 1, "eventType": "c", "timestamp": 13 }, { "eventIndex": 2, "eventType": "e", "timestamp": 14 }, { "eventIndex": 3, "eventType": "f", "timestamp": 17 } ] }, { "traceID": 2, "events": [ { "eventIndex": 0, "eventType": "b", "timestamp": 20 }, { "eventIndex": 1, "eventType": "d", "timestamp": 21 }, { "eventIndex": 2, "eventType": "e", "timestamp": 25 }, { "eventIndex": 3, "eventType": "g", "timestamp": 29 } ] }, { "traceID": 3, "events": [ { "eventIndex": 0, "eventType": "d", "timestamp": 30 }, { "eventIndex": 1, "eventType": "e", "timestamp": 34 }, { "eventIndex": 2, "eventType": "g", "timestamp": 35 } ] }, { "traceID": 4, "events": [ { "eventIndex": 0, "eventType": "d", "timestamp": 40 }, { "eventIndex": 1, "eventType": "e", "timestamp": 41 }, { "eventIndex": 2, "eventType": "g", "timestamp": 45 } ] }, { "traceID": 5, "events": [ { "eventIndex": 0, "eventType": "d", "timestamp": 50 } ] } ], "partitions": [ { "eventType": "c", "events": [ { "traceID": 0, "eventIndex": 0 } ] }, { "eventType": "e", "events": [ { "traceID": 2, "eventIndex": 2 }, { "traceID": 4, "eventIndex": 1 } ] }, { "eventType": "f", "events": [ { "traceID": 0, "eventIndex": 2 }, { "traceID": 1, "eventIndex": 3 } ] }, { "eventType": "a", "events": [ { "traceID": 1, "eventIndex": 0 } ] }, { "eventType": "b", "events": [ { "traceID": 2, "eventIndex": 0 } ] }, { "eventType": "d", "events": [ { "traceID": 2, "eventIndex": 1 }, { "traceID": 5, "eventIndex": 0 } ] }, { "eventType": "g", "events": [ { "traceID": 2, "eventIndex": 3 }, { "traceID": 3, "eventIndex": 2 }, { "traceID": 4, "eventIndex": 2 } ] }, { "eventType": "c", "events": [ { "traceID": 1, "eventIndex": 1 } ] }, { "eventType": "e", "events": [ { "traceID": 0, "eventIndex": 1 } ] }, { "eventType": "d", "events": [ { "traceID": 3, "eventIndex": 0 }, { "traceID": 4, "eventIndex": 0 } ] }, { "eventType": "e", "events": [ { "traceID": 3, "eventIndex": 1 } ] }, { "eventType": "e", "events": [ { "traceID": 1, "eventIndex": 2 } ] } ], "invariants": [ { "invariantType": "AlwaysFollowedBy", "predicates": [ "a", "c" ], "constraints": [ "lowerbound=3" ] }, { "invariantType": "AlwaysFollowedBy", "predicates": [ "a", "c" ], "constraints": [ "upperbound=3" ] }, { "invariantType": "AlwaysFollowedBy", "predicates": [ "a", "e" ], "constraints": [ "lowerbound=4" ] }, { "invariantType": "AlwaysFollowedBy", "predicates": [ "a", "e" ], "constraints": [ "upperbound=4" ] }, { "invariantType": "AlwaysFollowedBy", "predicates": [ "a", "f" ], "constraints": [ "lowerbound=7" ] }, { "invariantType": "AlwaysFollowedBy", "predicates": [ "a", "f" ], "constraints": [ "upperbound=7" ] }, { "invariantType": "AlwaysFollowedBy", "predicates": [ "c", "e" ], "constraints": [ "lowerbound=1" ] }, { "invariantType": "AlwaysFollowedBy", "predicates": [ "c", "e" ], "constraints": [ "upperbound=3" ] }, { "invariantType": "AlwaysFollowedBy", "predicates": [ "c", "f" ], "constraints": [ "lowerbound=4" ] }, { "invariantType": "AlwaysFollowedBy", "predicates": [ "c", "f" ], "constraints": [ "upperbound=4" ] }, { "invariantType": "AlwaysPrecedes", "predicates": [ "c", "f" ], "constraints": [ "lowerbound=4" ] }, { "invariantType": "AlwaysPrecedes", "predicates": [ "c", "f" ], "constraints": [ "upperbound=4" ] }, { "invariantType": "AlwaysPrecedes", "predicates": [ "e", "f" ], "constraints": [ "lowerbound=1" ] }, { "invariantType": "AlwaysPrecedes", "predicates": [ "e", "f" ], "constraints": [ "upperbound=3" ] }, { "invariantType": "AlwaysPrecedes", "predicates": [ "e", "g" ], "constraints": [ "lowerbound=1" ] }, { "invariantType": "AlwaysPrecedes", "predicates": [ "e", "g" ], "constraints": [ "upperbound=4" ] }, { "invariantType": "AlwaysPrecedes", "predicates": [ "d", "g" ], "constraints": [ "lowerbound=5" ] }, { "invariantType": "AlwaysPrecedes", "predicates": [ "d", "g" ], "constraints": [ "upperbound=8" ] }, { "invariantType": "AlwaysFollowedBy", "predicates": [ "b", "e" ], "constraints": [ "lowerbound=5" ] }, { "invariantType": "AlwaysFollowedBy", "predicates": [ "b", "e" ], "constraints": [ "upperbound=5" ] }, { "invariantType": "AlwaysFollowedBy", "predicates": [ "b", "d" ], "constraints": [ "lowerbound=1" ] }, { "invariantType": "AlwaysFollowedBy", "predicates": [ "b", "d" ], "constraints": [ "upperbound=1" ] }, { "invariantType": "AlwaysFollowedBy", "predicates": [ "b", "g" ], "constraints": [ "lowerbound=9" ] }, { "invariantType": "AlwaysFollowedBy", "predicates": [ "b", "g" ], "constraints": [ "upperbound=9" ] } ] }; 
var test_bandwith_model = {"log":[{"traceID":0,"events":[{"eventIndex":0,"eventType":"test bandwidth","timestamp":31200.0},{"eventIndex":1,"eventType":"narrowband","timestamp":31202.0},{"eventIndex":2,"eventType":"query","timestamp":31205.7},{"eventIndex":3,"eventType":"query","timestamp":31208.9},{"eventIndex":4,"eventType":"OK","timestamp":31209.7}]},{"traceID":1,"events":[{"eventIndex":0,"eventType":"test bandwidth","timestamp":31200.1},{"eventIndex":1,"eventType":"broadband","timestamp":31200.8},{"eventIndex":2,"eventType":"query","timestamp":31202.1},{"eventIndex":3,"eventType":"query","timestamp":31208.3},{"eventIndex":4,"eventType":"problem","timestamp":31208.8}]},{"traceID":2,"events":[{"eventIndex":0,"eventType":"test bandwidth","timestamp":31200.2},{"eventIndex":1,"eventType":"broadband","timestamp":31200.9},{"eventIndex":2,"eventType":"query","timestamp":31202.2},{"eventIndex":3,"eventType":"query","timestamp":31203.6},{"eventIndex":4,"eventType":"OK","timestamp":31204.1}]},{"traceID":3,"events":[{"eventIndex":0,"eventType":"test bandwidth","timestamp":31200.3},{"eventIndex":1,"eventType":"narrowband","timestamp":31202.3},{"eventIndex":2,"eventType":"query","timestamp":31206.0},{"eventIndex":3,"eventType":"OK","timestamp":31206.8}]}],"partitions":[{"eventType":"test bandwidth","events":[{"traceID":0,"eventIndex":0},{"traceID":1,"eventIndex":0},{"traceID":2,"eventIndex":0},{"traceID":3,"eventIndex":0}]},{"eventType":"broadband","events":[{"traceID":1,"eventIndex":1},{"traceID":2,"eventIndex":1}]},{"eventType":"narrowband","events":[{"traceID":0,"eventIndex":1},{"traceID":3,"eventIndex":1}]},{"eventType":"query","events":[{"traceID":0,"eventIndex":3},{"traceID":0,"eventIndex":2},{"traceID":3,"eventIndex":2}]},{"eventType":"OK","events":[{"traceID":2,"eventIndex":4},{"traceID":3,"eventIndex":3},{"traceID":0,"eventIndex":4}]},{"eventType":"problem","events":[{"traceID":1,"eventIndex":4}]},{"eventType":"query","events":[{"traceID":1,"eventIndex":3},{"traceID":1,"eventIndex":2},{"traceID":2,"eventIndex":2},{"traceID":2,"eventIndex":3}]}],"invariants":[{"invariantType":"NeverFollowedBy","predicates":["test bandwidth"]},{"invariantType":"AlwaysPrecedes","predicates":["test bandwidth","narrowband"]},{"invariantType":"AlwaysFollowedBy","predicates":["test bandwidth","query"]},{"invariantType":"AlwaysPrecedes","predicates":["test bandwidth","query"]},{"invariantType":"AlwaysPrecedes","predicates":["test bandwidth","OK"]},{"invariantType":"AlwaysPrecedes","predicates":["test bandwidth","broadband"]},{"invariantType":"AlwaysPrecedes","predicates":["test bandwidth","problem"]},{"invariantType":"NeverFollowedBy","predicates":["narrowband","test bandwidth"]},{"invariantType":"NeverFollowedBy","predicates":["narrowband"]},{"invariantType":"AlwaysFollowedBy","predicates":["narrowband","query"]},{"invariantType":"AlwaysFollowedBy","predicates":["narrowband","OK"]},{"invariantType":"NeverFollowedBy","predicates":["narrowband","broadband"]},{"invariantType":"NeverFollowedBy","predicates":["narrowband","problem"]},{"invariantType":"NeverFollowedBy","predicates":["query","test bandwidth"]},{"invariantType":"NeverFollowedBy","predicates":["query","narrowband"]},{"invariantType":"AlwaysPrecedes","predicates":["query","OK"]},{"invariantType":"NeverFollowedBy","predicates":["query","broadband"]},{"invariantType":"AlwaysPrecedes","predicates":["query","problem"]},{"invariantType":"NeverFollowedBy","predicates":["OK","test bandwidth"]},{"invariantType":"NeverFollowedBy","predicates":["OK","narrowband"]},{"invariantType":"NeverFollowedBy","predicates":["OK","query"]},{"invariantType":"NeverFollowedBy","predicates":["OK"]},{"invariantType":"NeverFollowedBy","predicates":["OK","broadband"]},{"invariantType":"NeverFollowedBy","predicates":["OK","problem"]},{"invariantType":"NeverFollowedBy","predicates":["broadband","test bandwidth"]},{"invariantType":"NeverFollowedBy","predicates":["broadband","narrowband"]},{"invariantType":"AlwaysFollowedBy","predicates":["broadband","query"]},{"invariantType":"NeverFollowedBy","predicates":["broadband"]},{"invariantType":"AlwaysPrecedes","predicates":["broadband","problem"]},{"invariantType":"NeverFollowedBy","predicates":["problem","test bandwidth"]},{"invariantType":"NeverFollowedBy","predicates":["problem","narrowband"]},{"invariantType":"NeverFollowedBy","predicates":["problem","query"]},{"invariantType":"NeverFollowedBy","predicates":["problem","OK"]},{"invariantType":"NeverFollowedBy","predicates":["problem","broadband"]},{"invariantType":"NeverFollowedBy","predicates":["problem"]},{"invariantType":"AlwaysFollowedBy","predicates":["INITIAL","test bandwidth"]},{"invariantType":"AlwaysFollowedBy","predicates":["INITIAL","query"]}]}

var init  = state(10, 10, { "eventType": "init", "events": [{ "traceID": 0, "eventIndex": 0 }] });
var term = state(500, 550, {"eventType": "term", "events": [{ "traceID": 0, "eventIndex": 0 }] });

var browser_model = {"log":[{"traceID":0,"events":[{"eventIndex":0,"eventType":"cache-page","timestamp":0.0},{"eventIndex":1,"eventType":"retrieve-page","timestamp":9.0},{"eventIndex":2,"eventType":"cache-image","timestamp":18.0},{"eventIndex":3,"eventType":"retrieve-image","timestamp":39.0},{"eventIndex":4,"eventType":"quit","timestamp":160.0}]},{"traceID":1,"events":[{"eventIndex":0,"eventType":"cache-page","timestamp":0.0},{"eventIndex":1,"eventType":"retrieve-page","timestamp":17.0},{"eventIndex":2,"eventType":"cache-image","timestamp":34.0},{"eventIndex":3,"eventType":"retrieve-image","timestamp":104.0},{"eventIndex":4,"eventType":"quit","timestamp":274.0}]},{"traceID":2,"events":[{"eventIndex":0,"eventType":"cache-page","timestamp":0.0},{"eventIndex":1,"eventType":"retrieve-page","timestamp":9.0},{"eventIndex":2,"eventType":"cache-image","timestamp":118.0},{"eventIndex":3,"eventType":"retrieve-image","timestamp":140.0},{"eventIndex":4,"eventType":"quit","timestamp":162.0}]},{"traceID":3,"events":[{"eventIndex":0,"eventType":"cache-page","timestamp":0.0},{"eventIndex":1,"eventType":"retrieve-page","timestamp":17.0},{"eventIndex":2,"eventType":"cache-image","timestamp":136.0},{"eventIndex":3,"eventType":"retrieve-image","timestamp":204.0},{"eventIndex":4,"eventType":"quit","timestamp":272.0}]},{"traceID":4,"events":[{"eventIndex":0,"eventType":"cache-image","timestamp":0.0},{"eventIndex":1,"eventType":"retrieve-image","timestamp":27.0},{"eventIndex":2,"eventType":"quit","timestamp":54.0}]},{"traceID":5,"events":[{"eventIndex":0,"eventType":"cache-image","timestamp":0.0},{"eventIndex":1,"eventType":"retrieve-image","timestamp":62.0},{"eventIndex":2,"eventType":"quit","timestamp":124.0}]}],"partitions":[{"eventType":"cache-page","events":[{"traceID":0,"eventIndex":0},{"traceID":1,"eventIndex":0},{"traceID":2,"eventIndex":0},{"traceID":3,"eventIndex":0}]},{"eventType":"retrieve-page","events":[{"traceID":3,"eventIndex":1},{"traceID":0,"eventIndex":1},{"traceID":2,"eventIndex":1},{"traceID":1,"eventIndex":1}]},{"eventType":"cache-image","events":[{"traceID":5,"eventIndex":0},{"traceID":2,"eventIndex":2},{"traceID":3,"eventIndex":2},{"traceID":4,"eventIndex":0}]},{"eventType":"retrieve-image","events":[{"traceID":1,"eventIndex":3},{"traceID":0,"eventIndex":3}]},{"eventType":"quit","events":[{"traceID":0,"eventIndex":4},{"traceID":3,"eventIndex":4},{"traceID":4,"eventIndex":2},{"traceID":5,"eventIndex":2},{"traceID":1,"eventIndex":4},{"traceID":2,"eventIndex":4}]},{"eventType":"cache-image","events":[{"traceID":0,"eventIndex":2},{"traceID":1,"eventIndex":2}]},{"eventType":"retrieve-image","events":[{"traceID":4,"eventIndex":1},{"traceID":3,"eventIndex":3},{"traceID":5,"eventIndex":1},{"traceID":2,"eventIndex":3}]}],"invariants":[{"invariantType":"NeverFollowedBy","predicates":["cache-page"]},{"invariantType":"AlwaysFollowedBy","predicates":["cache-page","retrieve-page"],"constraints":["lowerbound = 9.0"]},{"invariantType":"AlwaysFollowedBy","predicates":["cache-page","retrieve-page"],"constraints":["upperbound = 17.0"]},{"invariantType":"AlwaysPrecedes","predicates":["cache-page","retrieve-page"],"constraints":["lowerbound = 9.0"]},{"invariantType":"AlwaysPrecedes","predicates":["cache-page","retrieve-page"],"constraints":["upperbound = 17.0"]},{"invariantType":"AlwaysFollowedBy","predicates":["cache-page","cache-image"],"constraints":["lowerbound = 18.0"]},{"invariantType":"AlwaysFollowedBy","predicates":["cache-page","cache-image"],"constraints":["upperbound = 136.0"]},{"invariantType":"AlwaysFollowedBy","predicates":["cache-page","retrieve-image"],"constraints":["lowerbound = 39.0"]},{"invariantType":"AlwaysFollowedBy","predicates":["cache-page","retrieve-image"],"constraints":["upperbound = 204.0"]},{"invariantType":"AlwaysFollowedBy","predicates":["cache-page","quit"],"constraints":["lowerbound = 160.0"]},{"invariantType":"AlwaysFollowedBy","predicates":["cache-page","quit"],"constraints":["upperbound = 274.0"]},{"invariantType":"NeverFollowedBy","predicates":["retrieve-page","cache-page"]},{"invariantType":"NeverFollowedBy","predicates":["retrieve-page"]},{"invariantType":"AlwaysFollowedBy","predicates":["retrieve-page","cache-image"],"constraints":["lowerbound = 9.0"]},{"invariantType":"AlwaysFollowedBy","predicates":["retrieve-page","cache-image"],"constraints":["upperbound = 119.0"]},{"invariantType":"AlwaysFollowedBy","predicates":["retrieve-page","retrieve-image"],"constraints":["lowerbound = 30.0"]},{"invariantType":"AlwaysFollowedBy","predicates":["retrieve-page","retrieve-image"],"constraints":["upperbound = 187.0"]},{"invariantType":"AlwaysFollowedBy","predicates":["retrieve-page","quit"],"constraints":["lowerbound = 151.0"]},{"invariantType":"AlwaysFollowedBy","predicates":["retrieve-page","quit"],"constraints":["upperbound = 257.0"]},{"invariantType":"NeverFollowedBy","predicates":["cache-image","cache-page"]},{"invariantType":"NeverFollowedBy","predicates":["cache-image","retrieve-page"]},{"invariantType":"NeverFollowedBy","predicates":["cache-image"]},{"invariantType":"AlwaysFollowedBy","predicates":["cache-image","retrieve-image"],"constraints":["lowerbound = 21.0"]},{"invariantType":"AlwaysFollowedBy","predicates":["cache-image","retrieve-image"],"constraints":["upperbound = 70.0"]},{"invariantType":"AlwaysPrecedes","predicates":["cache-image","retrieve-image"],"constraints":["lowerbound = 21.0"]},{"invariantType":"AlwaysPrecedes","predicates":["cache-image","retrieve-image"],"constraints":["upperbound = 70.0"]},{"invariantType":"AlwaysFollowedBy","predicates":["cache-image","quit"],"constraints":["lowerbound = 44.0"]},{"invariantType":"AlwaysFollowedBy","predicates":["cache-image","quit"],"constraints":["upperbound = 240.0"]},{"invariantType":"AlwaysPrecedes","predicates":["cache-image","quit"],"constraints":["lowerbound = 44.0"]},{"invariantType":"AlwaysPrecedes","predicates":["cache-image","quit"],"constraints":["upperbound = 240.0"]},{"invariantType":"NeverFollowedBy","predicates":["retrieve-image","cache-page"]},{"invariantType":"NeverFollowedBy","predicates":["retrieve-image","retrieve-page"]},{"invariantType":"NeverFollowedBy","predicates":["retrieve-image","cache-image"]},{"invariantType":"NeverFollowedBy","predicates":["retrieve-image"]},{"invariantType":"AlwaysFollowedBy","predicates":["retrieve-image","quit"],"constraints":["lowerbound = 22.0"]},{"invariantType":"AlwaysFollowedBy","predicates":["retrieve-image","quit"],"constraints":["upperbound = 170.0"]},{"invariantType":"AlwaysPrecedes","predicates":["retrieve-image","quit"],"constraints":["lowerbound = 22.0"]},{"invariantType":"AlwaysPrecedes","predicates":["retrieve-image","quit"],"constraints":["upperbound = 170.0"]},{"invariantType":"NeverFollowedBy","predicates":["quit","cache-page"]},{"invariantType":"NeverFollowedBy","predicates":["quit","retrieve-page"]},{"invariantType":"NeverFollowedBy","predicates":["quit","cache-image"]},{"invariantType":"NeverFollowedBy","predicates":["quit","retrieve-image"]},{"invariantType":"NeverFollowedBy","predicates":["quit"]}]};

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
    $("#invars").html("<table id=\"AlwaysPrecedes\" border=\"\"><tr><th>Always Precedes</th></tr></table> <table id=\"AlwaysFollowedBy\" border=\"\"><tr><th>Always Followed By</th></tr></table> <table id=\"NeverFollowedBy\" border=\"\"><tr><th>Never Followed By</th></tr></table> ");
    for (var i = 0; i < inv.length; i++) {
        console.log(inv[i]);
        var type = inv[i].invariantType;
        var bounds = "";
        if (inv[i].constraints !== undefined) {
            for (var j = 0; j < inv[i].constraints.length; j++) {
                bounds += "<br>" + inv[i].constraints[j];
            }
        }
        if (inv[i].predicates[0] !== undefined && inv[i].predicates[1] !== undefined  )
            $("#"+type).append("<tr><td>" + inv[i].predicates[0] +" <i class='icon-arrow-left'></i> "+ inv[i].predicates[1] + " " + bounds + "</td></tr>");
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
