$(document).ready(function() {
    $("#parselog").click( function() {
        getInvaraints(null);
    });
    $("#clear").click( function() {
        
    });

});

function fetchGraph() {
    $.ajax()
}

function drawGraph(graphData) {
    var FSA = new Raphael(document.getElementById('holder'), 720, 480);

 
}

function getInvaraints(data) {
//Debugging code, example json. Parameter data will be used in final version
var invariant ={"log":[{"traceID":0,"events":[{"eventIndex":0,"eventType":"c","timestamp":0},{"eventIndex":1,"eventType":"e","timestamp":3},{"eventIndex":2,"eventType":"f","timestamp":4}]},{"traceID":1,"events":[{"eventIndex":0,"eventType":"a","timestamp":10},{"eventIndex":1,"eventType":"c","timestamp":13},{"eventIndex":2,"eventType":"e","timestamp":14},{"eventIndex":3,"eventType":"f","timestamp":17}]},{"traceID":2,"events":[{"eventIndex":0,"eventType":"b","timestamp":20},{"eventIndex":1,"eventType":"d","timestamp":21},{"eventIndex":2,"eventType":"e","timestamp":25},{"eventIndex":3,"eventType":"g","timestamp":29}]},{"traceID":3,"events":[{"eventIndex":0,"eventType":"d","timestamp":30},{"eventIndex":1,"eventType":"e","timestamp":34},{"eventIndex":2,"eventType":"g","timestamp":35}]},{"traceID":4,"events":[{"eventIndex":0,"eventType":"d","timestamp":40},{"eventIndex":1,"eventType":"e","timestamp":41},{"eventIndex":2,"eventType":"g","timestamp":45}]},{"traceID":5,"events":[{"eventIndex":0,"eventType":"d","timestamp":50}]}],"partitions":[{"eventType":"c","events":[{"traceID":0,"eventIndex":0}]},{"eventType":"e","events":[{"traceID":2,"eventIndex":2},{"traceID":4,"eventIndex":1}]},{"eventType":"f","events":[{"traceID":0,"eventIndex":2},{"traceID":1,"eventIndex":3}]},{"eventType":"a","events":[{"traceID":1,"eventIndex":0}]},{"eventType":"b","events":[{"traceID":2,"eventIndex":0}]},{"eventType":"d","events":[{"traceID":2,"eventIndex":1},{"traceID":5,"eventIndex":0}]},{"eventType":"g","events":[{"traceID":2,"eventIndex":3},{"traceID":3,"eventIndex":2},{"traceID":4,"eventIndex":2}]},{"eventType":"c","events":[{"traceID":1,"eventIndex":1}]},{"eventType":"e","events":[{"traceID":0,"eventIndex":1}]},{"eventType":"d","events":[{"traceID":3,"eventIndex":0},{"traceID":4,"eventIndex":0}]},{"eventType":"e","events":[{"traceID":3,"eventIzndex":1}]},{"eventType":"e","events":[{"traceID":1,"eventIndex":2}]}],"invariants":[{"invariantType":"AlwaysFollowedBy","predicates":["a","c"],"constraints":["lowerbound = 3"]},{"invariantType":"AlwaysFollowedBy","predicates":["a","c"],"constraints":["upperbound = 3"]},{"invariantType":"AlwaysFollowedBy","predicates":["a","e"],"constraints":["lowerbound = 4"]},{"invariantType":"AlwaysFollowedBy","predicates":["a","e"],"constraints":["upperbound = 4"]},{"invariantType":"AlwaysFollowedBy","predicates":["a","f"],"constraints":["lowerbound = 7"]},{"invariantType":"AlwaysFollowedBy","predicates":["a","f"],"constraints":["upperbound = 7"]},{"invariantType":"AlwaysFollowedBy","predicates":["c","e"],"constraints":["lowerbound = 1"]},{"invariantType":"AlwaysFollowedBy","predicates":["c","e"],"constraints":["upperbound = 3"]},{"invariantType":"AlwaysFollowedBy","predicates":["c","f"],"constraints":["lowerbound = 4"]},{"invariantType":"AlwaysFollowedBy","predicates":["c","f"],"constraints":["upperbound = 4"]},{"invariantType":"AlwaysPrecedes","predicates":["c","f"],"constraints":["lowerbound = 4"]},{"invariantType":"AlwaysPrecedes","predicates":["c","f"],"constraints":["upperbound = 4"]},{"invariantType":"AlwaysPrecedes","predicates":["e","f"],"constraints":["lowerbound = 1"]},{"invariantType":"AlwaysPrecedes","predicates":["e","f"],"constraints":["upperbound = 3"]},{"invariantType":"AlwaysPrecedes","predicates":["e","g"],"constraints":["lowerbound = 1"]},{"invariantType":"AlwaysPrecedes","predicates":["e","g"],"constraints":["upperbound = 4"]},{"invariantType":"AlwaysPrecedes","predicates":["d","g"],"constraints":["lowerbound = 5"]},{"invariantType":"AlwaysPrecedes","predicates":["d","g"],"constraints":["upperbound = 8"]},{"invariantType":"AlwaysFollowedBy","predicates":["b","e"],"constraints":["lowerbound = 5"]},{"invariantType":"AlwaysFollowedBy","predicates":["b","e"],"constraints":["upperbound = 5"]},{"invariantType":"AlwaysFollowedBy","predicates":["b","d"],"constraints":["lowerbound = 1"]},{"invariantType":"AlwaysFollowedBy","predicates":["b","d"],"constraints":["upperbound = 1"]},{"invariantType":"AlwaysFollowedBy","predicates":["b","g"],"constraints":["lowerbound = 9"]},{"invariantType":"AlwaysFollowedBy","predicates":["b","g"],"constraints":["upperbound = 9"]}]};

var msg = "";
 for (var i = 0; i < invariant.invariants.length; i++) {
        var inv = invariant.invariants[i];
        msg = inv.invariantType.replace(/([A-Z])/g, ' $1');
        msg =  inv.predicates[0] + " is" + msg + " " + inv.predicates[1];
        $("#invarianttab").append(msg+"<br>");
     }
}

