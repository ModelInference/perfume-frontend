// highlightTextArea input box highlighter

function escapeRegExp(str) {
  return str.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
}

// given an array of strings, highlight matching text
function highlight(strings) {
    var regexps = strings.map(escapeRegExp);
    $('#logtext').highlightTextarea('setWords', regexps);
    prevHighlightedStrings = strings;
}

// pass in array of event objects, where each object has a traceID and a eventIndex
// example: [ {traceID: 1, eventIndex: 2}, {traceID: 2, eventIndex: 4} ]
function highlightEvents(events) {
    var lineNumbers = getLineNumbersForArray(events); // traverseData.js
    var lines = getLines(lineNumbers); // form.js
    highlight(lines);
}

function unhighlight() {
	$('#logtext').highlightTextarea('setWords', '');
}

var prevHighlightedStrings = [''];

function rehighlight() {
    highlight(prevHighlightedStrings);
}

function removeHighlightedLines(){
    if(prevHighlightedStrings.length !== 1 && prevHighlightedStrings[0] !== ''){
        removeLines(prevHighlightedStrings); // form.js
        prevHighlightedStrings = [''];
        rehighlight();
        fetchModel(); // index.js
    }
}

// get it setup upon startub
$('#logtext').highlightTextarea({
    resizable: true
});

// these are deleted after setup, so we need to manually put them in
$('#logtext').resizable('option', 'maxWidth', 500);
$('#logtext').resizable('option', 'maxWidth', 500);
$('.highlightTextarea').css('width', '100%');
$('.ui-wrapper').css('width', '100%');
$('.ui-resizable').css('width', '100%');
$('.highlightTextarea-container').css('width', '100%');