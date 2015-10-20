//highlightTextArea input box highlighter

function escapeRegExp(str) {
  return str.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
}

function highlight(lines) {
    var regexps = lines.map(escapeRegExp);
    $('#logtext').highlightTextarea('setWords', regexps);
}

//pass in array of event objects, where each object has a traceID and a eventIndex
function highlightEvents(events) {
    var lineNumbers = [];
    for (var i=0; i<events.length; i++) {
        var newLineNumbers = getLineNumbers(events[i].traceID, events[i].eventIndex); //traverseData.js
        lineNumbers.push.apply(lineNumbers, newLineNumbers);
    }
    var lines = getLines(lineNumbers); //traverseData.js
    highlight(lines);
}

function unhighlight() {
	$('#logtext').highlightTextarea('setWords', '');
}

//get it setup upon startub
$('#logtext').highlightTextarea({
    resizable: true
});

//these are deleted after setup, so we need to manually put them in
$('#logtext').resizable('option', 'maxWidth', 500);
$('#logtext').resizable('option', 'maxWidth', 500);
$('.highlightTextarea').css('width', '100%');
$('.ui-wrapper').css('width', '100%');
$('.ui-resizable').css('width', '100%');
$('.highlightTextarea-container').css('width', '100%');