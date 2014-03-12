var graph = new joint.dia.Graph;
//Test data

var data = { "log": [ { "traceID": 0, "events": [ { "eventIndex": 0, "eventType": "c", "timestamp": 0 }, { "eventIndex": 1, "eventType": "e", "timestamp": 3 }, { "eventIndex": 2, "eventType": "f", "timestamp": 4 } ] }, { "traceID": 1, "events": [ { "eventIndex": 0, "eventType": "a", "timestamp": 10 }, { "eventIndex": 1, "eventType": "c", "timestamp": 13 }, { "eventIndex": 2, "eventType": "e", "timestamp": 14 }, { "eventIndex": 3, "eventType": "f", "timestamp": 17 } ] }, { "traceID": 2, "events": [ { "eventIndex": 0, "eventType": "b", "timestamp": 20 }, { "eventIndex": 1, "eventType": "d", "timestamp": 21 }, { "eventIndex": 2, "eventType": "e", "timestamp": 25 }, { "eventIndex": 3, "eventType": "g", "timestamp": 29 } ] }, { "traceID": 3, "events": [ { "eventIndex": 0, "eventType": "d", "timestamp": 30 }, { "eventIndex": 1, "eventType": "e", "timestamp": 34 }, { "eventIndex": 2, "eventType": "g", "timestamp": 35 } ] }, { "traceID": 4, "events": [ { "eventIndex": 0, "eventType": "d", "timestamp": 40 }, { "eventIndex": 1, "eventType": "e", "timestamp": 41 }, { "eventIndex": 2, "eventType": "g", "timestamp": 45 } ] }, { "traceID": 5, "events": [ { "eventIndex": 0, "eventType": "d", "timestamp": 50 } ] } ], "partitions": [ { "eventType": "c", "events": [ { "traceID": 0, "eventIndex": 0 } ] }, { "eventType": "e", "events": [ { "traceID": 2, "eventIndex": 2 }, { "traceID": 4, "eventIndex": 1 } ] }, { "eventType": "f", "events": [ { "traceID": 0, "eventIndex": 2 }, { "traceID": 1, "eventIndex": 3 } ] }, { "eventType": "a", "events": [ { "traceID": 1, "eventIndex": 0 } ] }, { "eventType": "b", "events": [ { "traceID": 2, "eventIndex": 0 } ] }, { "eventType": "d", "events": [ { "traceID": 2, "eventIndex": 1 }, { "traceID": 5, "eventIndex": 0 } ] }, { "eventType": "g", "events": [ { "traceID": 2, "eventIndex": 3 }, { "traceID": 3, "eventIndex": 2 }, { "traceID": 4, "eventIndex": 2 } ] }, { "eventType": "c", "events": [ { "traceID": 1, "eventIndex": 1 } ] }, { "eventType": "e", "events": [ { "traceID": 0, "eventIndex": 1 } ] }, { "eventType": "d", "events": [ { "traceID": 3, "eventIndex": 0 }, { "traceID": 4, "eventIndex": 0 } ] }, { "eventType": "e", "events": [ { "traceID": 3, "eventIndex": 1 } ] }, { "eventType": "e", "events": [ { "traceID": 1, "eventIndex": 2 } ] } ], "invariants": [ { "invariantType": "AlwaysFollowedBy", "predicates": [ "a", "c" ], "constraints": [ "lowerbound=3" ] }, { "invariantType": "AlwaysFollowedBy", "predicates": [ "a", "c" ], "constraints": [ "upperbound=3" ] }, { "invariantType": "AlwaysFollowedBy", "predicates": [ "a", "e" ], "constraints": [ "lowerbound=4" ] }, { "invariantType": "AlwaysFollowedBy", "predicates": [ "a", "e" ], "constraints": [ "upperbound=4" ] }, { "invariantType": "AlwaysFollowedBy", "predicates": [ "a", "f" ], "constraints": [ "lowerbound=7" ] }, { "invariantType": "AlwaysFollowedBy", "predicates": [ "a", "f" ], "constraints": [ "upperbound=7" ] }, { "invariantType": "AlwaysFollowedBy", "predicates": [ "c", "e" ], "constraints": [ "lowerbound=1" ] }, { "invariantType": "AlwaysFollowedBy", "predicates": [ "c", "e" ], "constraints": [ "upperbound=3" ] }, { "invariantType": "AlwaysFollowedBy", "predicates": [ "c", "f" ], "constraints": [ "lowerbound=4" ] }, { "invariantType": "AlwaysFollowedBy", "predicates": [ "c", "f" ], "constraints": [ "upperbound=4" ] }, { "invariantType": "AlwaysPrecedes", "predicates": [ "c", "f" ], "constraints": [ "lowerbound=4" ] }, { "invariantType": "AlwaysPrecedes", "predicates": [ "c", "f" ], "constraints": [ "upperbound=4" ] }, { "invariantType": "AlwaysPrecedes", "predicates": [ "e", "f" ], "constraints": [ "lowerbound=1" ] }, { "invariantType": "AlwaysPrecedes", "predicates": [ "e", "f" ], "constraints": [ "upperbound=3" ] }, { "invariantType": "AlwaysPrecedes", "predicates": [ "e", "g" ], "constraints": [ "lowerbound=1" ] }, { "invariantType": "AlwaysPrecedes", "predicates": [ "e", "g" ], "constraints": [ "upperbound=4" ] }, { "invariantType": "AlwaysPrecedes", "predicates": [ "d", "g" ], "constraints": [ "lowerbound=5" ] }, { "invariantType": "AlwaysPrecedes", "predicates": [ "d", "g" ], "constraints": [ "upperbound=8" ] }, { "invariantType": "AlwaysFollowedBy", "predicates": [ "b", "e" ], "constraints": [ "lowerbound=5" ] }, { "invariantType": "AlwaysFollowedBy", "predicates": [ "b", "e" ], "constraints": [ "upperbound=5" ] }, { "invariantType": "AlwaysFollowedBy", "predicates": [ "b", "d" ], "constraints": [ "lowerbound=1" ] }, { "invariantType": "AlwaysFollowedBy", "predicates": [ "b", "d" ], "constraints": [ "upperbound=1" ] }, { "invariantType": "AlwaysFollowedBy", "predicates": [ "b", "g" ], "constraints": [ "lowerbound=9" ] }, { "invariantType": "AlwaysFollowedBy", "predicates": [ "b", "g" ], "constraints": [ "upperbound=9" ] } ] }; 
var abc_model = { "log": [ { "traceID": 0, "events": [ { "eventIndex": 0, "eventType": "c", "timestamp": 0 }, { "eventIndex": 1, "eventType": "e", "timestamp": 3 }, { "eventIndex": 2, "eventType": "f", "timestamp": 4 } ] }, { "traceID": 1, "events": [ { "eventIndex": 0, "eventType": "a", "timestamp": 10 }, { "eventIndex": 1, "eventType": "c", "timestamp": 13 }, { "eventIndex": 2, "eventType": "e", "timestamp": 14 }, { "eventIndex": 3, "eventType": "f", "timestamp": 17 } ] }, { "traceID": 2, "events": [ { "eventIndex": 0, "eventType": "b", "timestamp": 20 }, { "eventIndex": 1, "eventType": "d", "timestamp": 21 }, { "eventIndex": 2, "eventType": "e", "timestamp": 25 }, { "eventIndex": 3, "eventType": "g", "timestamp": 29 } ] }, { "traceID": 3, "events": [ { "eventIndex": 0, "eventType": "d", "timestamp": 30 }, { "eventIndex": 1, "eventType": "e", "timestamp": 34 }, { "eventIndex": 2, "eventType": "g", "timestamp": 35 } ] }, { "traceID": 4, "events": [ { "eventIndex": 0, "eventType": "d", "timestamp": 40 }, { "eventIndex": 1, "eventType": "e", "timestamp": 41 }, { "eventIndex": 2, "eventType": "g", "timestamp": 45 } ] }, { "traceID": 5, "events": [ { "eventIndex": 0, "eventType": "d", "timestamp": 50 } ] } ], "partitions": [ { "eventType": "c", "events": [ { "traceID": 0, "eventIndex": 0 } ] }, { "eventType": "e", "events": [ { "traceID": 2, "eventIndex": 2 }, { "traceID": 4, "eventIndex": 1 } ] }, { "eventType": "f", "events": [ { "traceID": 0, "eventIndex": 2 }, { "traceID": 1, "eventIndex": 3 } ] }, { "eventType": "a", "events": [ { "traceID": 1, "eventIndex": 0 } ] }, { "eventType": "b", "events": [ { "traceID": 2, "eventIndex": 0 } ] }, { "eventType": "d", "events": [ { "traceID": 2, "eventIndex": 1 }, { "traceID": 5, "eventIndex": 0 } ] }, { "eventType": "g", "events": [ { "traceID": 2, "eventIndex": 3 }, { "traceID": 3, "eventIndex": 2 }, { "traceID": 4, "eventIndex": 2 } ] }, { "eventType": "c", "events": [ { "traceID": 1, "eventIndex": 1 } ] }, { "eventType": "e", "events": [ { "traceID": 0, "eventIndex": 1 } ] }, { "eventType": "d", "events": [ { "traceID": 3, "eventIndex": 0 }, { "traceID": 4, "eventIndex": 0 } ] }, { "eventType": "e", "events": [ { "traceID": 3, "eventIndex": 1 } ] }, { "eventType": "e", "events": [ { "traceID": 1, "eventIndex": 2 } ] } ], "invariants": [ { "invariantType": "AlwaysFollowedBy", "predicates": [ "a", "c" ], "constraints": [ "lowerbound=3" ] }, { "invariantType": "AlwaysFollowedBy", "predicates": [ "a", "c" ], "constraints": [ "upperbound=3" ] }, { "invariantType": "AlwaysFollowedBy", "predicates": [ "a", "e" ], "constraints": [ "lowerbound=4" ] }, { "invariantType": "AlwaysFollowedBy", "predicates": [ "a", "e" ], "constraints": [ "upperbound=4" ] }, { "invariantType": "AlwaysFollowedBy", "predicates": [ "a", "f" ], "constraints": [ "lowerbound=7" ] }, { "invariantType": "AlwaysFollowedBy", "predicates": [ "a", "f" ], "constraints": [ "upperbound=7" ] }, { "invariantType": "AlwaysFollowedBy", "predicates": [ "c", "e" ], "constraints": [ "lowerbound=1" ] }, { "invariantType": "AlwaysFollowedBy", "predicates": [ "c", "e" ], "constraints": [ "upperbound=3" ] }, { "invariantType": "AlwaysFollowedBy", "predicates": [ "c", "f" ], "constraints": [ "lowerbound=4" ] }, { "invariantType": "AlwaysFollowedBy", "predicates": [ "c", "f" ], "constraints": [ "upperbound=4" ] }, { "invariantType": "AlwaysPrecedes", "predicates": [ "c", "f" ], "constraints": [ "lowerbound=4" ] }, { "invariantType": "AlwaysPrecedes", "predicates": [ "c", "f" ], "constraints": [ "upperbound=4" ] }, { "invariantType": "AlwaysPrecedes", "predicates": [ "e", "f" ], "constraints": [ "lowerbound=1" ] }, { "invariantType": "AlwaysPrecedes", "predicates": [ "e", "f" ], "constraints": [ "upperbound=3" ] }, { "invariantType": "AlwaysPrecedes", "predicates": [ "e", "g" ], "constraints": [ "lowerbound=1" ] }, { "invariantType": "AlwaysPrecedes", "predicates": [ "e", "g" ], "constraints": [ "upperbound=4" ] }, { "invariantType": "AlwaysPrecedes", "predicates": [ "d", "g" ], "constraints": [ "lowerbound=5" ] }, { "invariantType": "AlwaysPrecedes", "predicates": [ "d", "g" ], "constraints": [ "upperbound=8" ] }, { "invariantType": "AlwaysFollowedBy", "predicates": [ "b", "e" ], "constraints": [ "lowerbound=5" ] }, { "invariantType": "AlwaysFollowedBy", "predicates": [ "b", "e" ], "constraints": [ "upperbound=5" ] }, { "invariantType": "AlwaysFollowedBy", "predicates": [ "b", "d" ], "constraints": [ "lowerbound=1" ] }, { "invariantType": "AlwaysFollowedBy", "predicates": [ "b", "d" ], "constraints": [ "upperbound=1" ] }, { "invariantType": "AlwaysFollowedBy", "predicates": [ "b", "g" ], "constraints": [ "lowerbound=9" ] }, { "invariantType": "AlwaysFollowedBy", "predicates": [ "b", "g" ], "constraints": [ "upperbound=9" ] } ] }; 
var test_bandwith_model = {"log":[{"traceID":0,"events":[{"eventIndex":0,"eventType":"test bandwidth","timestamp":31200.0},{"eventIndex":1,"eventType":"narrowband","timestamp":31202.0},{"eventIndex":2,"eventType":"query","timestamp":31205.7},{"eventIndex":3,"eventType":"query","timestamp":31208.9},{"eventIndex":4,"eventType":"OK","timestamp":31209.7}]},{"traceID":1,"events":[{"eventIndex":0,"eventType":"test bandwidth","timestamp":31200.1},{"eventIndex":1,"eventType":"broadband","timestamp":31200.8},{"eventIndex":2,"eventType":"query","timestamp":31202.1},{"eventIndex":3,"eventType":"query","timestamp":31208.3},{"eventIndex":4,"eventType":"problem","timestamp":31208.8}]},{"traceID":2,"events":[{"eventIndex":0,"eventType":"test bandwidth","timestamp":31200.2},{"eventIndex":1,"eventType":"broadband","timestamp":31200.9},{"eventIndex":2,"eventType":"query","timestamp":31202.2},{"eventIndex":3,"eventType":"query","timestamp":31203.6},{"eventIndex":4,"eventType":"OK","timestamp":31204.1}]},{"traceID":3,"events":[{"eventIndex":0,"eventType":"test bandwidth","timestamp":31200.3},{"eventIndex":1,"eventType":"narrowband","timestamp":31202.3},{"eventIndex":2,"eventType":"query","timestamp":31206.0},{"eventIndex":3,"eventType":"OK","timestamp":31206.8}]}],"partitions":[{"eventType":"test bandwidth","events":[{"traceID":0,"eventIndex":0},{"traceID":1,"eventIndex":0},{"traceID":2,"eventIndex":0},{"traceID":3,"eventIndex":0}]},{"eventType":"broadband","events":[{"traceID":1,"eventIndex":1},{"traceID":2,"eventIndex":1}]},{"eventType":"narrowband","events":[{"traceID":0,"eventIndex":1},{"traceID":3,"eventIndex":1}]},{"eventType":"query","events":[{"traceID":0,"eventIndex":3},{"traceID":0,"eventIndex":2},{"traceID":3,"eventIndex":2}]},{"eventType":"OK","events":[{"traceID":2,"eventIndex":4},{"traceID":3,"eventIndex":3},{"traceID":0,"eventIndex":4}]},{"eventType":"problem","events":[{"traceID":1,"eventIndex":4}]},{"eventType":"query","events":[{"traceID":1,"eventIndex":3},{"traceID":1,"eventIndex":2},{"traceID":2,"eventIndex":2},{"traceID":2,"eventIndex":3}]}],"invariants":[{"invariantType":"NeverFollowedBy","predicates":["test bandwidth"]},{"invariantType":"AlwaysPrecedes","predicates":["test bandwidth","narrowband"]},{"invariantType":"AlwaysFollowedBy","predicates":["test bandwidth","query"]},{"invariantType":"AlwaysPrecedes","predicates":["test bandwidth","query"]},{"invariantType":"AlwaysPrecedes","predicates":["test bandwidth","OK"]},{"invariantType":"AlwaysPrecedes","predicates":["test bandwidth","broadband"]},{"invariantType":"AlwaysPrecedes","predicates":["test bandwidth","problem"]},{"invariantType":"NeverFollowedBy","predicates":["narrowband","test bandwidth"]},{"invariantType":"NeverFollowedBy","predicates":["narrowband"]},{"invariantType":"AlwaysFollowedBy","predicates":["narrowband","query"]},{"invariantType":"AlwaysFollowedBy","predicates":["narrowband","OK"]},{"invariantType":"NeverFollowedBy","predicates":["narrowband","broadband"]},{"invariantType":"NeverFollowedBy","predicates":["narrowband","problem"]},{"invariantType":"NeverFollowedBy","predicates":["query","test bandwidth"]},{"invariantType":"NeverFollowedBy","predicates":["query","narrowband"]},{"invariantType":"AlwaysPrecedes","predicates":["query","OK"]},{"invariantType":"NeverFollowedBy","predicates":["query","broadband"]},{"invariantType":"AlwaysPrecedes","predicates":["query","problem"]},{"invariantType":"NeverFollowedBy","predicates":["OK","test bandwidth"]},{"invariantType":"NeverFollowedBy","predicates":["OK","narrowband"]},{"invariantType":"NeverFollowedBy","predicates":["OK","query"]},{"invariantType":"NeverFollowedBy","predicates":["OK"]},{"invariantType":"NeverFollowedBy","predicates":["OK","broadband"]},{"invariantType":"NeverFollowedBy","predicates":["OK","problem"]},{"invariantType":"NeverFollowedBy","predicates":["broadband","test bandwidth"]},{"invariantType":"NeverFollowedBy","predicates":["broadband","narrowband"]},{"invariantType":"AlwaysFollowedBy","predicates":["broadband","query"]},{"invariantType":"NeverFollowedBy","predicates":["broadband"]},{"invariantType":"AlwaysPrecedes","predicates":["broadband","problem"]},{"invariantType":"NeverFollowedBy","predicates":["problem","test bandwidth"]},{"invariantType":"NeverFollowedBy","predicates":["problem","narrowband"]},{"invariantType":"NeverFollowedBy","predicates":["problem","query"]},{"invariantType":"NeverFollowedBy","predicates":["problem","OK"]},{"invariantType":"NeverFollowedBy","predicates":["problem","broadband"]},{"invariantType":"NeverFollowedBy","predicates":["problem"]},{"invariantType":"AlwaysFollowedBy","predicates":["INITIAL","test bandwidth"]},{"invariantType":"AlwaysFollowedBy","predicates":["INITIAL","query"]}]}

var init  = state(10, 10, { "eventType": "init", "events": [{ "traceID": 0, "eventIndex": 0 }] });
var term = state(500, 550, {"eventType": "term", "events": [{ "traceID": 0, "eventIndex": 0 }] });
var states = generateStates(data);
var links = generateTransitions(data);

var paper = new joint.dia.Paper({
    el: $('#paper'),
    width: 1200,
    height: 1600,
    gridSize: 1,
    model: graph
});


//Constructor for transition objects. Borrowed from the FSA demo.
function link(source, target, label, vertices) {
    if (source.id == target.id) {
        vertices = [{ x:source.attributes.position.x+70, y:source.attributes.position.y-40 }, { x:source.attributes.position.x+70, y:source.attributes.position.y+40 }];
    }
    var w = parseInt(label,10);
    if (label == "0") 
        label = "";
    var cell = new joint.shapes.fsa.Arrow({
        source: { id: source.id },
        target: { id: target.id },
        labels: [{ position: .5, attrs: { text: { text: label || '', 'font-weight': 'bold' } } }],
        vertices: vertices || []
    });
    cell.weight = w;
    return cell;
}

function generateTransitions(data) {
    var links = [];
    var prevTime = 0;
    for (var i = 0; i < data.log.length; i++) {
        var trace = data.log[i];
        if (getLinkByPathId(init.id, findState(i, trace.events[0]).id, links) === null)
            links.push(link(init, findState(i, trace.events[0]), String(0) ));
        if (getLinkByPathId(findState(i, trace.events[trace.events.length - 1]).id, term.id, links) === null)
            links.push(link(findState(i, trace.events[trace.events.length - 1]), term, String(0))); //Last state in trace
        for (var j = 0; j < trace.events.length - 1; j++) {
            var sourceEvent = trace.events[j];
            var targetEvent = trace.events[j+1];
            var sourceState = findState(i, sourceEvent);  
            var targetState = findState(i, targetEvent);
            if(getLinkByPathId(sourceState.id, targetState.id, links) === null) { 
                var timestamp = parseInt(trace.events[j+1].timestamp, 10);
                prevTime = parseInt(trace.events[j].timestamp, 10);
                var weight = String(timestamp - prevTime);
                links.push(link(sourceState, targetState, weight));
            }
        }
    }
    return links;
}

//Constructor for state objects. Borrowed from the FSA demo, added in eventType and events attributes.
function state(x, y, eventdata) {
        
    var cell = new joint.shapes.fsa.State({
        position: { x: x, y: y },
        size: { width: 50, height: 50 },
        attrs: {  text : { text: eventdata.eventType }},
    });
    cell.eventType = eventdata.eventType;
    cell.events = [];
    for (var i = 0; i < eventdata.events.length; i ++) {
        cell.events.push(eventdata.events[i]);
    }
    return cell;
};

//Uses the partitions array to decide what states are generated. 
//Location is part of my algorthim. 
//Essentially the system is arranged as a grid, using the average of
//Linked states try to appear in the same column
//Vertical postion is determined by average of it's point in a trace
function generateStates(data) {
    //Find size of largest label
    var states = [];
    var startx = 10;
    var starty = 120;
    for (var i = 0; i < data.partitions.length; i++  ){
            var VertMultiplier = getStateVerticalPositionMultiplier(data.partitions[i]);
            var HorizMultiplier = parseInt( getStateHorizontalPositionMultiplier(data.partitions[i]) );

            states.push(state(100*HorizMultiplier+15, starty*VertMultiplier+100-(20*(HorizMultiplier-1)), data.partitions[i]));
            startx += 100;
            if (startx > 550 ){
                startx = 10;
            }
        }
    return states;
}

function generateGradients(max) {
    lengths = [];
    var svg = d3.select("svg");
    for (var i = 0; i < states.length; i++) {
    lengths = searchForShortestAndLongestPath(states[i].id);
    var minPath  = lengths[0];
    var maxPath  = lengths[1];
    var grad = svg.append("linearGradient").attr("id", "grad" + states[i].id)
        .attr("x1", "0%").attr("x2", "0%").attr("y1", "100%").attr("y2", "0%");
        grad.append("stop").attr("offset", toPercent(minPath/max)).style("stop-color", "lightblue");
        grad.append("stop").attr("offset",toPercent(maxPath/max) ).style("stop-color", "white");
    states[i].attributes.attrs.circle.fill =  "url(#grad"+states[i].id + ")";
    }
}

function toPercent(num) {
    return String(Math.floor(num*100)) + "%";
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

function draw() {
    graph.clear();
    for (var i = 0; i < states.length; i++) {
        graph.addCell(states[i]);
    }
    graph.addCell(init);
    graph.addCell(term);
    for (i = 0; i < links.length; i++) {
        graph.addCell(links[i]);
    }
}

function getPathsTo(target) {}

function isStateinList(li, state) {
    for (var i = 0; i < li.length; i++) {
        if (state.id == li[i].id)
            return true;
    }
    return false;
}

function searchForShortestAndLongestPath(target) {
    var max = 0;
    var min = 99999999999999999;
    var frontier = [];
    var initFrontier = findLinksfromState(init.id);
    var maxPath;
    var minPath;
    var statesFound = [];
    for (var i = 0; i < initFrontier.length; i++) {
        frontier.push({path: [], link: initFrontier[i], weight : initFrontier[i].weight});
    }
    while(frontier.length > 0) {
        var curLink = frontier[0].link;
        var weight = frontier[0].weight;
        var pathTo = _.clone(frontier[0].path);
        frontier.splice(0,1);
        if (curLink.attributes.target.id == target) {
            if (weight > max) {
                max = weight;
                maxPath = pathTo;
            }
            if (weight < min) {
                min = weight;
                minPath = pathTo;   
            }
        }
        else {
            var nextStates = findLinksfromState(curLink.attributes.target.id);
                pathTo.push(curLink.attributes.target.id)
            for (i = 0; i < nextStates.length; i++) { 
                if (!isStateinList(statesFound, nextStates[i])) {
                    frontier.push({path: pathTo, link: nextStates[i], weight : weight + nextStates[i].weight});
                    statesFound.push(nextStates[i]);
                }
            }
        }
    }
    return [min, max, minPath, maxPath];
}


function findLinksfromState(stateId) {
    return _.filter(links, function(link) {return link.attributes.source.id == stateId;});
}

function getLinkByPathId(source, target, links) {
    for (var i = 0; i < links.length; i++) {
        if (links[i].attributes.source.id == source && links[i].attributes.target.id == target)
            return links[i];
    }
    return null;
}

//Gets a link object by it's id. 
function getLinkbyId(id) {
    for (var i = 0; i < links.length; i++) {
        if (links[i].id == id)
            return links[i];
    }
    return null;
}

function drawModel(data) {

    init  = state(10, 10, { "eventType": "init", "events": [{ "traceID": 0, "eventIndex": 0 }] });
    term = state(500, 550, {"eventType": "term", "events": [{ "traceID": 0, "eventIndex": 0 }] });
    states = generateStates(data);
    links = generateTransitions(data);
        
    var pathLengths = searchForShortestAndLongestPath(term.id);
    var maxPath = pathLengths[3];
    var minPath = pathLengths[2];

    var l = getLinkByPathId(init.id, pathLengths[3][0],links);
    l.attr({'.connection': { stroke: 'red' }});
    for (var i = 1; i < pathLengths[3].length; i++) {
        l = getLinkByPathId(pathLengths[3][i-1], pathLengths[3][i], links);
        l.attr({'.connection': { stroke: 'red' }});
    }
    l = getLinkByPathId(pathLengths[3][pathLengths[3].length-1], term.id, links);
    l.attr({'.connection': { stroke: 'red' }});

    l = getLinkByPathId(init.id, pathLengths[2][0], links);
    l.attr({'.connection': { stroke: 'green' }});
    for (i = 1; i < pathLengths[2].length; i++) {
        l = getLinkByPathId(pathLengths[2][i-1], pathLengths[2][i], links);
        l.attr({'.connection': { stroke: 'green' }});
    }
    l = getLinkByPathId(pathLengths[2][pathLengths[2].length-1], term.id, links);
    l.attr({'.connection': { stroke: 'green' }});

    // generateGradients(pathLengths[1]);
    // $(".marker-vertex-remove").empty(); //Gets rid of ability to delete states.
    var svg = d3.select("svg");
    var grad = svg.append("linearGradient").attr("id", "grad")
        .attr("x1", "0%").attr("x2", "0%").attr("y1", "100%").attr("y2", "0%");
        grad.append("stop").attr("offset", "50%").style("stop-color", "blue");
        grad.append("stop").attr("offset", "80%").style("stop-color", "white");
    draw();
    // $(".tool-remove").empty();
    // $(".link-tools").remove();
    // $(".marker-arrowheads").remove();
}

