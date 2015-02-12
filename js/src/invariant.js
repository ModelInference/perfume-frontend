//Preloaded invariants for debugging purpose
//Organizing the data into managable arrays

var alwaysPrecedes = [];
var alwaysFollowedBy = [];
var neverFollowedBy = [];

//To get rid of the duplicates in the invariants
function checkForDuplicate(data, array){
    var result = false;
    for(var i=0; i<array.length;i++){
        if(array[i].predicates[0] === data.predicates[0] && array[i].predicates[1] === data.predicates[1]){
            array[i].constraints.push(data.constraints[0]);
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
            if(checkForDuplicate(data.invariants[i], alwaysPrecedes) === false){alwaysPrecedes.push(data.invariants[i]);}
        }
        if(data.invariants[i].invariantType === "AlwaysFollowedBy"){
            if(checkForDuplicate(data.invariants[i], alwaysFollowedBy) === false){alwaysFollowedBy.push(data.invariants[i]);}
        }
        if(data.invariants[i].invariantType === "NeverFollowedBy"){
            if(checkForDuplicate(data.invariants[i], neverFollowedBy) === false){neverFollowedBy.push(data.invariants[i]);}
        }
    }
}

function getCol(data) {
    var inv = data.invariants;
    var upperbound = "";
    var lowerbound = "";

    //removes all rows currently on the page, except for the first
    $("#AlwaysPrecedes").find("tr:not(:first)").remove();
    $("#AlwaysFollowedBy").find("tr:not(:first)").remove();
    $("#NeverFollowedBy").find("tr:not(:first)").remove();

    for (var i = 0; i < inv.length; i++) {
        var type = inv[i].invariantType;
        var bounds = "";
        if (inv[i].constraints !== undefined) {
         for (var j = 0; j < inv[i].constraints.length; j++) {
                if (inv[i].constraints[j].match("upperbound") )
                    upperbound =  inv[i].constraints[j];
                if (inv[i].constraints[j].match("lowerbound") )
                    lowerbound =  inv[i].constraints[j];
            }
        }
        upperbound = upperbound.replace("upperbound", "");
        lowerbound = lowerbound.replace("lowerbound", "");
        upperbound = upperbound.replace("=", "");
        lowerbound = lowerbound.replace("=", "");
        console.log(bounds);
        if (inv[i].predicates[0] !== undefined && inv[i].predicates[1] !== undefined) {
            if (inv[i].invariantType == "AlwaysFollowedBy") {
                $("#"+type).append("<tr><td>" + inv[i].predicates[0] +"</td><td>&rarr;</td><td>"+ inv[i].predicates[1] + "</td><td> " + upperbound + "</td><td>" + lowerbound + "<td></tr>");
            }
            if (inv[i].invariantType == "AlwaysPrecedes") {
                $("#"+type).append("<tr><td>" + inv[i].predicates[0] +"</td><td>&larr;</td><td>"+ inv[i].predicates[1] + "</td><td> " + upperbound + "</td><td>" + lowerbound + "<td></tr>");
            }
            if (inv[i].invariantType == "NeverFollowedBy") {
                $("#"+type).append("<tr><td>" + inv[i].predicates[0] +"</td><td>&#8603;</td><td>"+ inv[i].predicates[1] + "</td><td> " + upperbound + "</td><td>" + lowerbound + "<td></tr>");
            }
        }
    }
}

//Display invariants to the page
function drawInvariants(data) {
    getPredicates(data);
    getCol(data);
}
