// using the data object, get relevant information

function getTrace(traceID){
    var traces = data.log;
    for(var i=0; i<traces.length; i++) {
        var trace = traces[i];
        if(trace.traceID === traceID) {
            return trace;
        }
    }
    return null;
}

function getEvents(traceID) {
    var trace = getTrace(traceID);
    if(trace !== null){
        return trace.events;
    }
    return null;
}

// returns either a specific event's line number, OR all line numbers for a trace if eventIndex is null
function getLineNumbers(traceID, eventIndex) {
    var lineNumbers = [];
    var events = getEvents(traceID);
    if(events != null) {
        for(var i=0; i<events.length; i++) {
            if(eventIndex === undefined || events[i].eventIndex === eventIndex){
                lineNumbers.push(events[i].logLine);
            }
        }
    }
    return lineNumbers;
}

function getLines(lineNumbers) {
    var allLines = $('textarea').val().split('\n'); // all lines, with the first line at index 0
    var selectedLines = [];

    for(var i=0; i<allLines.length; i++) {
        if(lineNumbers.indexOf(i+1) !== -1){ // line numbers in the log start at 1
            selectedLines.push(allLines[i]);
        }
    }

    return selectedLines;
}