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
            neverFollowedBy.push(data.invariants[i]);
        }
    }
}

//Go through invariant's constraints and find the upper and lower bounds
function findBounds(inv){
    for (var i = 0; i < inv.length; i++) {
        var upperbound = "";
        var lowerbound = "";

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

        //save upper and lower bound for use in getCol()
        inv[i].upperbound = upperbound;
        inv[i].lowerbound = lowerbound;
    }
}

//Post invariants to the page
function getCol() {

    //removes all rows currently on the page, except for the first
    $("#AlwaysPrecedes").find("tr:not(:first)").remove();
    $("#AlwaysFollowedBy").find("tr:not(:first)").remove();
    $("#NeverFollowedBy").find("tr:not(:first)").remove();

    //AlwaysPrecedes
    for (var i = 0; i < alwaysPrecedes.length; i++) {
        if (alwaysPrecedes[i].predicates[0] !== undefined && alwaysPrecedes[i].predicates[1] !== undefined) {
            $("#AlwaysPrecedes").append("<tr><td>" + alwaysPrecedes[i].predicates[0] +"</td><td>&rarr;</td><td>"+ alwaysPrecedes[i].predicates[1]
                + "</td><td> " + alwaysPrecedes[i].upperbound + "</td><td>" + alwaysPrecedes[i].lowerbound + "<td></tr>");
        }
    }

    //AlwaysFollowedBy
    for (var i = 0; i < alwaysFollowedBy.length; i++) {
        if (alwaysFollowedBy[i].predicates[0] !== undefined && alwaysFollowedBy[i].predicates[1] !== undefined) {
            $("#AlwaysFollowedBy").append("<tr><td>" + alwaysFollowedBy[i].predicates[0] +"</td><td>&rarr;</td><td>"+ alwaysFollowedBy[i].predicates[1]
                + "</td><td> " + alwaysFollowedBy[i].upperbound + "</td><td>" + alwaysFollowedBy[i].lowerbound + "<td></tr>");
        }
    }

    //NeverFollowedBy
    for (var i = 0; i < neverFollowedBy.length; i++) {
        if (neverFollowedBy[i].predicates[0] !== undefined && neverFollowedBy[i].predicates[1] !== undefined) {
            $("#NeverFollowedBy").append("<tr><td>" + neverFollowedBy[i].predicates[0] +"</td><td>&rarr;</td><td>"+ neverFollowedBy[i].predicates[1]
                + "</td><td> " + neverFollowedBy[i].upperbound + "</td><td>" + neverFollowedBy[i].lowerbound + "<td></tr>");
        }
    }

}

//Display invariants to the page
function drawInvariants(data) {
    getPredicates(data);
    findBounds(alwaysPrecedes);
    findBounds(alwaysFollowedBy);
    getCol(data);
}
