var states, links, init, term;

function generateStates(data) {
    for (var i = 0; i < data.partitions.length; i++) {
        var partition = data.partitions[i];
        var events = JSON.stringify(partition.events);
        states.push({partition: partition, label:"", shape:"circle", index:i+2, id:events});
    }
}


function link(source, target, label, data) {
    newLink = {source:source, target:target, label:"", data:data}
    if (source.index == init.index || target.index == term.index) {
        label = "";
        var smallest = 0;
        var largest = 0;
    }
    else {
        if (label instanceof Array)  {
            if (label.length === 1)  {
                var smallest = label[0];
                var largest = label[0];
            } else {
                var smallest = _.min(label, function (o) {return o;});
                var largest = _.max(label, function (o) {return o;});
            }
            var smallestStr = prettyPrintNumber(smallest);
            var largestStr = prettyPrintNumber(largest);
            if (smallest == largest)
                label = smallestStr;
            else
                label = "[" + smallestStr + ", " + largestStr + "]";
        } else {
            if (typeof label == "number")
                label = String(label);
        }
    }
    newLink.label = label;
    newLink.weight = smallest;
    newLink.largest = largest;
    return newLink;
}

function prettyPrintNumber (n) {
    n = n.toFixed(3);
    var ns = String(n);
    ns = roundString(ns); // index.js
    return ns;
}

function generateTransitions(data) {
    var labels = [];
    var transitionLabelMatrix = {};
    var linkInformation = [];
    for (i = 0; i < data.partitions.length; i++) {
        var partition = data.partitions[i];
        for (var j = 0; j < partition.events.length; j++) {
            var state = partition.events[j];
            var linkParams = createLink(data, state.traceID, state.eventIndex)
            for (var k = 0; k < linkParams.length; k++) {
                var linkIndex = findLinkInLinkInformation(linkInformation, linkParams[k][0], linkParams[k][1]);
                // we are creating a new transition
                if(linkIndex === -1) {
                    linkInformation.push(linkParams[k]);
                }
                // we are adding to an existing transition
                else {
                    if (typeof linkInformation[linkIndex][2] == "object") {
                        for (var l = 0; l < linkParams[k][2].length; l++) {
                            linkInformation[linkIndex][2].push(linkParams[k][2][l]); // resources
                            linkInformation[linkIndex][3].push(linkParams[k][3][l]); // event info
                        }
                    }
                }
            }
        }
    }
    //Create links
    for (var i = 0; i < linkInformation.length; i++) {
        links.push(link(linkInformation[i][0], linkInformation[i][1], linkInformation[i][2], linkInformation[i][3]));
    }
}

function findLinkInLinkInformation(linkInformation, start, end) {
    for (var i = 0; i < linkInformation.length; i++) {
        var link = linkInformation[i];
            if(start.index == link[0].index && link[1].index == end.index)
                return i;
    }
    return -1;
}

function createLink(data, traceID, eventIndex) {
    var ret = [];
    var placeholder = [];
    var trace = data.log[traceID].events;
    if (eventIndex == 0) {
        placeholder.push(init);
        placeholder.push(findState(traceID, trace[eventIndex]));
        placeholder.push(0);
        placeholder.push([{traceID:traceID, eventIndex:eventIndex}]);
        ret.push(placeholder);
    } else if (eventIndex == trace.length - 1){
        placeholder.push(findState(traceID, trace[eventIndex]));
        placeholder.push(term);
        placeholder.push(0);
        placeholder.push([{traceID:traceID, eventIndex:eventIndex}]);
        ret.push(placeholder);
    } else {
        placeholder.push(findState(traceID, trace[eventIndex-1]));
        placeholder.push(findState(traceID, trace[eventIndex]));
        placeholder.push([(trace[eventIndex].timestamp - trace[eventIndex-1].timestamp)]);
        placeholder.push([{traceID:traceID, eventIndex:eventIndex}]);
        ret.push(placeholder);
        placeholder = [];
        placeholder.push(findState(traceID, trace[eventIndex]));
        placeholder.push(findState(traceID, trace[eventIndex+1]));
        placeholder.push([(trace[eventIndex+1].timestamp - trace[eventIndex].timestamp)]);
        placeholder.push([{traceID:traceID, eventIndex:eventIndex}]);
        ret.push(placeholder);
    }
    return ret;
}

function findState(traceid, eventData) {
    for (var i = 0; i < states.length; i++) {
        if(isMatchingState(states[i].partition, traceid, eventData))
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

function searchForShortestAndLongestPath(target) {
    var max = 0;
    var min = 99999999999999999;
    var frontier = [];
    var initFrontier = _.filter(links, function(link) {return link.source.index == init.index;});
    var maxPath;
    var minPath;
    for (var i = 0; i < initFrontier.length; i++) {
        frontier.push({path: [], link: initFrontier[i], weight : initFrontier[i].weight, largest : initFrontier[i].largest});
    }
    while(frontier.length > 0) {
        var curr = frontier.shift();
        var curLink = curr.link;
        var weight = curr.weight;
        var largest = curr.largest;
        var pathTo = _.clone(curr.path);
        if (curLink.target.index == target) {
            if (largest > max) {
                max = largest;
                maxPath = _.clone(pathTo);
                maxPath.push(links.indexOf(curLink));
            }
            if (weight < min) {
                min = weight;
                minPath = _.clone(pathTo);
                minPath.push(links.indexOf(curLink));
            }
        }
        else {
            var nextStates = _.filter(links, function(link) {return link.source.index == curLink.target.index;});
            pathTo.push(links.indexOf(curLink));
            for (i = 0; i < nextStates.length; i++) {
                // make sure that we dont go in an infinite loop!
                var isPointingToAPrevPath = (pathTo.indexOf(links.indexOf(nextStates[i])) !== -1);
                if (!isPointingToAPrevPath) {
                    frontier.push({path: pathTo, link: nextStates[i], weight : weight + nextStates[i].weight, largest : largest + nextStates[i].largest});
                }
            }
        }
    }
    return { min:min, max:max, minpath:minPath, maxpath:maxPath };
}

function findCommonEvents(array1, array2) {
    return array1.filter(function(n) {
        for(var i=0; i<array2.length; i++){
            if(n.eventIndex === array2[i].eventIndex && n.traceID === array2[i].traceID){
                return true;
            }
        }
        return false;
    });
}

var lastClicked;
var lastClickedLabel;
function highlightModel(clicked, clickedLabel){
    // reset old ones
    if(lastClicked){
         $(lastClicked).css('opacity', '1.0');
         if(lastClickedLabel){
            $(lastClickedLabel).css('opacity', '1.0');
         }
    }

    // "highlight" new ones
    $(clicked).css('opacity', '0.5');
    if(clickedLabel){
        $(clickedLabel).css('opacity', '0.5');
    }

    // save last ones for next iteration
    lastClicked = clicked;
    lastClickedLabel = clickedLabel;
}

function drawModel(data) {
    var g = new dagreD3.graphlib.Graph({multigraph:true}).setGraph({});
    states = [];
    links = [];
    init = {partition: {eventType:"INITIAL",events:[]}, shape:"circle", label:"", index:0, nodeclass:"node-initterm"};
    term = {partition: {eventType:"TERMINAL",events:[]}, shape:"ellipse", label:"TERMINAL", index:1, nodeclass:"node-initterm"};
    states.push(init);
    states.push(term);
    generateStates(data);
    generateTransitions(data);
    var pathAnnotations = searchForShortestAndLongestPath(term.index);
    for (var i = 0; i < states.length; i++) {
        g.setNode(i.toString(), states[i]);
    }
    for (i = 0; i < links.length; i++) {
        var newLabel = links[i].source.partition.eventType + " " + links[i].label + '/' + i;
        var labelShadow = "text-shadow: 0 0 0.4em #fff, 0 0 0.4em #fff, 0 0 0.4em #fff, 0 0 0.4em #fff, 0 0 0.4em #fff, 0 0 0.4em #fff, 0 0 0.4em #fff, 0 0 0.4em #fff, 0 0 0.4em #fff, 0 0 0.4em #fff";
        
        var events = [];
        if(links[i].source.id) {
            if(links[i].source.id === undefined) { //top of model
                events = links[i].data;
            }
            else if(links[i].target.id === undefined) { //bottom of model
                events = JSON.parse(links[i].source.id);
            }
            else { //middle of model
                events = findCommonEvents(JSON.parse(links[i].source.id), links[i].data);
            }
        }
        var metadata = JSON.stringify(events) + '/edge/' + i;
        
        if (pathAnnotations.maxpath.indexOf(i) !== -1 && pathAnnotations.minpath.indexOf(i) !== -1) {
            g.setEdge(links[i].source.index.toString(), links[i].target.index.toString(), {label:newLabel, labelStyle:labelShadow, id:metadata, style:'stroke:fuchsia', arrowhead: "vee"});
        }
        else if (pathAnnotations.maxpath.indexOf(i) !== -1) {
            g.setEdge(links[i].source.index.toString(), links[i].target.index.toString(), {label:newLabel, labelStyle:labelShadow, id:metadata, style:'stroke:red', arrowhead: "vee"});
        }
        else if (pathAnnotations.minpath.indexOf(i) !== -1) {
            g.setEdge(links[i].source.index.toString(), links[i].target.index.toString(), {label:newLabel, labelStyle:labelShadow, id:metadata, style:'stroke:blue', arrowhead: "vee"});
        }
        else {
            g.setEdge(links[i].source.index.toString(), links[i].target.index.toString(), {label:newLabel, labelStyle:labelShadow, id:metadata, arrowhead: "vee"});
        }
    }
    var svg = d3.select("svg"),
    inner = svg.select("g");
    var zoom = d3.behavior.zoom().on("zoom", function() {
        inner.attr("transform", "translate(" + d3.event.translate + ")" +
                                    "scale(" + d3.event.scale + ")");
    });
    svg.call(zoom);
    var render = new dagreD3.render();
    render(inner, g);

    zoom.translate([75, 75])
        .event(svg);

    // edges and nodes
    $('g.edgePath, g.node').click(function() {
        var events = [];
        if(this.id) {
            var metadata = this.id.split('/');
            if(metadata[0] !== 'undefined'){
                events = $.parseJSON(metadata[0]);
                var label = $("[id$='label/" + metadata[2] + "']");
                highlightModel(this, label);
                console.log(links[metadata[2]]);
            }
            else {
                highlightModel();
            }
        }
        else {
            highlightModel();
        }
        highlightEvents(events); // highlightInput.js
    });

    // edge labels
    $('g.edgeLabel > g > text > tspan').text(function(){
        var labelText = $(this).text().split('/');

        // set the id so edges and nodes can find it
        if(labelText.length > 1 && labelText[1] !== '') {
            $(this).attr('id', 'label/' + labelText[1]);
        }

        $(this).click(function(){
            var events = [];
            if(labelText.length > 1 && labelText[1] !== '') {
                // highlight the text
                var edge = $("[id$='edge/" + labelText[1] + "']");
                if(edge.attr('id')){
                    var metadata = edge.attr('id').split('/');
                    if(metadata[0] !== 'undefined'){
                        events = $.parseJSON(metadata[0]);
                        highlightModel(edge, this); // highlight this and the edge on the model
                    }
                    else {
                        highlightModel();
                    }
                }
                else {
                    highlightModel();
                }
            }
            else {
                highlightModel();
            }
            highlightEvents(events); // highlightInput.js
        });
        return labelText[0];
    });
}
