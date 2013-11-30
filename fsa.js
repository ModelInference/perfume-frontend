var graph = new joint.dia.Graph;
//Test data
var data = { "log": [ { "traceID": 0, "events": [ { "eventIndex": 0, "eventType": "c", "timestamp": 0 }, { "eventIndex": 1, "eventType": "e", "timestamp": 3 }, { "eventIndex": 2, "eventType": "f", "timestamp": 4 } ] }, { "traceID": 1, "events": [ { "eventIndex": 0, "eventType": "a", "timestamp": 10 }, { "eventIndex": 1, "eventType": "c", "timestamp": 13 }, { "eventIndex": 2, "eventType": "e", "timestamp": 14 }, { "eventIndex": 3, "eventType": "f", "timestamp": 17 } ] }, { "traceID": 2, "events": [ { "eventIndex": 0, "eventType": "b", "timestamp": 20 }, { "eventIndex": 1, "eventType": "d", "timestamp": 21 }, { "eventIndex": 2, "eventType": "e", "timestamp": 25 }, { "eventIndex": 3, "eventType": "g", "timestamp": 29 } ] }, { "traceID": 3, "events": [ { "eventIndex": 0, "eventType": "d", "timestamp": 30 }, { "eventIndex": 1, "eventType": "e", "timestamp": 34 }, { "eventIndex": 2, "eventType": "g", "timestamp": 35 } ] }, { "traceID": 4, "events": [ { "eventIndex": 0, "eventType": "d", "timestamp": 40 }, { "eventIndex": 1, "eventType": "e", "timestamp": 41 }, { "eventIndex": 2, "eventType": "g", "timestamp": 45 } ] }, { "traceID": 5, "events": [ { "eventIndex": 0, "eventType": "d", "timestamp": 50 } ] } ], "partitions": [ { "eventType": "c", "events": [ { "traceID": 0, "eventIndex": 0 } ] }, { "eventType": "e", "events": [ { "traceID": 2, "eventIndex": 2 }, { "traceID": 4, "eventIndex": 1 } ] }, { "eventType": "f", "events": [ { "traceID": 0, "eventIndex": 2 }, { "traceID": 1, "eventIndex": 3 } ] }, { "eventType": "a", "events": [ { "traceID": 1, "eventIndex": 0 } ] }, { "eventType": "b", "events": [ { "traceID": 2, "eventIndex": 0 } ] }, { "eventType": "d", "events": [ { "traceID": 2, "eventIndex": 1 }, { "traceID": 5, "eventIndex": 0 } ] }, { "eventType": "g", "events": [ { "traceID": 2, "eventIndex": 3 }, { "traceID": 3, "eventIndex": 2 }, { "traceID": 4, "eventIndex": 2 } ] }, { "eventType": "c", "events": [ { "traceID": 1, "eventIndex": 1 } ] }, { "eventType": "e", "events": [ { "traceID": 0, "eventIndex": 1 } ] }, { "eventType": "d", "events": [ { "traceID": 3, "eventIndex": 0 }, { "traceID": 4, "eventIndex": 0 } ] }, { "eventType": "e", "events": [ { "traceID": 3, "eventIndex": 1 } ] }, { "eventType": "e", "events": [ { "traceID": 1, "eventIndex": 2 } ] } ], "invariants": [ { "invariantType": "AlwaysFollowedBy", "predicates": [ "a", "c" ], "constraints": [ "lowerbound=3" ] }, { "invariantType": "AlwaysFollowedBy", "predicates": [ "a", "c" ], "constraints": [ "upperbound=3" ] }, { "invariantType": "AlwaysFollowedBy", "predicates": [ "a", "e" ], "constraints": [ "lowerbound=4" ] }, { "invariantType": "AlwaysFollowedBy", "predicates": [ "a", "e" ], "constraints": [ "upperbound=4" ] }, { "invariantType": "AlwaysFollowedBy", "predicates": [ "a", "f" ], "constraints": [ "lowerbound=7" ] }, { "invariantType": "AlwaysFollowedBy", "predicates": [ "a", "f" ], "constraints": [ "upperbound=7" ] }, { "invariantType": "AlwaysFollowedBy", "predicates": [ "c", "e" ], "constraints": [ "lowerbound=1" ] }, { "invariantType": "AlwaysFollowedBy", "predicates": [ "c", "e" ], "constraints": [ "upperbound=3" ] }, { "invariantType": "AlwaysFollowedBy", "predicates": [ "c", "f" ], "constraints": [ "lowerbound=4" ] }, { "invariantType": "AlwaysFollowedBy", "predicates": [ "c", "f" ], "constraints": [ "upperbound=4" ] }, { "invariantType": "AlwaysPrecedes", "predicates": [ "c", "f" ], "constraints": [ "lowerbound=4" ] }, { "invariantType": "AlwaysPrecedes", "predicates": [ "c", "f" ], "constraints": [ "upperbound=4" ] }, { "invariantType": "AlwaysPrecedes", "predicates": [ "e", "f" ], "constraints": [ "lowerbound=1" ] }, { "invariantType": "AlwaysPrecedes", "predicates": [ "e", "f" ], "constraints": [ "upperbound=3" ] }, { "invariantType": "AlwaysPrecedes", "predicates": [ "e", "g" ], "constraints": [ "lowerbound=1" ] }, { "invariantType": "AlwaysPrecedes", "predicates": [ "e", "g" ], "constraints": [ "upperbound=4" ] }, { "invariantType": "AlwaysPrecedes", "predicates": [ "d", "g" ], "constraints": [ "lowerbound=5" ] }, { "invariantType": "AlwaysPrecedes", "predicates": [ "d", "g" ], "constraints": [ "upperbound=8" ] }, { "invariantType": "AlwaysFollowedBy", "predicates": [ "b", "e" ], "constraints": [ "lowerbound=5" ] }, { "invariantType": "AlwaysFollowedBy", "predicates": [ "b", "e" ], "constraints": [ "upperbound=5" ] }, { "invariantType": "AlwaysFollowedBy", "predicates": [ "b", "d" ], "constraints": [ "lowerbound=1" ] }, { "invariantType": "AlwaysFollowedBy", "predicates": [ "b", "d" ], "constraints": [ "upperbound=1" ] }, { "invariantType": "AlwaysFollowedBy", "predicates": [ "b", "g" ], "constraints": [ "lowerbound=9" ] }, { "invariantType": "AlwaysFollowedBy", "predicates": [ "b", "g" ], "constraints": [ "upperbound=9" ] } ] }; 

var paper = new joint.dia.Paper({
    el: $('#paper'),
    width: 1200,
    height: 1600,
    gridSize: 1,
    model: graph
});

//Constructor for state objects. Borrowed from the FSA demo, added in eventType and events attributes.
function state(x, y, eventdata) {
        
    var cell = new joint.shapes.fsa.State({
        position: { x: x, y: y },
        size: { width: 50, height: 50 },
        attrs: { text : { text: eventdata.eventType }}
    });
    cell.eventType = eventdata.eventType;
    cell.events = [];
    for (var i = 0; i < eventdata.events.length; i ++) {
        cell.events.push(eventdata.events[i]);
    }
    return cell;
};

//Constructor for transition objects. Borrowed from the FSA demo.
function link(source, target, label, vertices) {
    
    var cell = new joint.shapes.fsa.Arrow({
        source: { id: source.id },
        target: { id: target.id },
        labels: [{ position: .5, attrs: { text: { text: label || '', 'font-weight': 'bold' } } }],
        vertices: vertices || []
    });
    graph.addCell(cell);
    return cell;
}

//Uses the partitions array to decide what states are generated. 
//Location is part of my algorthim. 
//Essentially the system is arranged as a grid, using the average of
//Linked states try to appear in the same column
//Vertical postion is determined by average of it's point in a trace
function generateStates(data) {
    var states = [];
    var startx = 10;
    var starty = 120;
    for (var i = 0; i < data.partitions.length; i++  ){
            var VertMultiplier = getStateVerticalPositionMultiplier(data.partitions[i]);
            var HorizMultiplier = parseInt( getStateHorizontalPositionMultiplier(data.partitions[i]) );

            states.push(state(100*HorizMultiplier+15, starty*VertMultiplier+100-(15*HorizMultiplier), data.partitions[i]));
            startx += 100;
            if (startx > 550 ){
                startx = 10;
            }
        }
    for (var i = 0; i < states.length; i++) {
        graph.addCell(states[i]);
    }
    graph.addCell(init);
    graph.addCell(term);
    return states;
}

//Uses the average number of transitions a state has to determine it's vertical location
function getStateVerticalPositionMultiplier(state) {
    sum  = 0;
    items = 0;
    for (var i = 0; i < data.log.length; i++) {
        for (var j = 0; j < data.log[i].events.length; j++) {
            if(isMatchingState(state, i ,data.log[i].events[j])) {
                sum += j;
                items++;
            }
        }
    }
    return sum/items;
}
//Finds trace it belongs to to find which column it belongs in.
function getStateHorizontalPositionMultiplier(state) {
        for (var i = 0; i < state.events.length; i++) {
            return state.events[i].traceID;
        }
        return 1;
}

function generateTransitions(data) {
    for (var i = 0; i < data.log.length; i++) {
        var trace = data.log[i];
        link(init, findState(i, trace.events[0]), '');
        link(findState(i, trace.events[trace.events.length - 1]), term, ''); //Last state in trace
        for (var j = 0; j < trace.events.length - 1; j++) {
            var sourceEvent = trace.events[j];
            var targetEvent = trace.events[j+1];
            link(findState(i, sourceEvent), findState(i, targetEvent));
        }
    }

}


function findState(traceid, eventData) {
    for (var i = 0; i < states.length; i++) {
        if(isMatchingState(states[i], traceid, eventData))
            return states[i];
    }
    return null;
}

function isMatchingState(state, traceid, eventData) {
    for (var i = 0; i < state.events.length; i++) {
         if (state.eventType == eventData.eventType) {
            if (state.events[i].traceID == traceid) {
                if (state.events[i].eventIndex == eventData.eventIndex) {
                    return true;
                }
            }
        }
    }
    return false;
}

var init  = state(10, 10, { "eventType": "init", "events": [] });
var term = state(600, 550, {"eventType": "term", "events": [] });
var states = generateStates(data);
generateTransitions(data);
$(".link-tools").empty(); //Gets rid of ability to delete states.

