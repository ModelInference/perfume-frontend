//Preloaded invariants for debugging purpose
var invariant = {
    "invariants": [
        {
            "invariantType": "AlwaysFollowedBy",
            "predicates": [
                "a",
                "c"
            ],
            "constraints": [
                "lowerbound=3"
            ]
        },
        {
            "invariantType": "AlwaysFollowedBy",
            "predicates": [
                "a",
                "c"
            ],
            "constraints": [
                "upperbound=3"
            ]
        },
        {
            "invariantType": "AlwaysFollowedBy",
            "predicates": [
                "a",
                "e"
            ],
            "constraints": [
                "lowerbound=4"
            ]
        },
        {
            "invariantType": "AlwaysFollowedBy",
            "predicates": [
                "a",
                "e"
            ],
            "constraints": [
                "upperbound=4"
            ]
        },
        {
            "invariantType": "AlwaysFollowedBy",
            "predicates": [
                "a",
                "f"
            ],
            "constraints": [
                "lowerbound=7"
            ]
        },
        {
            "invariantType": "AlwaysFollowedBy",
            "predicates": [
                "a",
                "f"
            ],
            "constraints": [
                "upperbound=7"
            ]
        },
        {
            "invariantType": "AlwaysFollowedBy",
            "predicates": [
                "c",
                "e"
            ],
            "constraints": [
                "lowerbound=1"
            ]
        },
        {
            "invariantType": "AlwaysFollowedBy",
            "predicates": [
                "c",
                "e"
            ],
            "constraints": [
                "upperbound=3"
            ]
        },
        {
            "invariantType": "AlwaysFollowedBy",
            "predicates": [
                "c",
                "f"
            ],
            "constraints": [
                "lowerbound=4"
            ]
        },
        {
            "invariantType": "AlwaysFollowedBy",
            "predicates": [
                "c",
                "f"
            ],
            "constraints": [
                "upperbound=4"
            ]
        },
        {
            "invariantType": "AlwaysPrecedes",
            "predicates": [
                "c",
                "f"
            ],
            "constraints": [
                "lowerbound=4"
            ]
        },
        {
            "invariantType": "AlwaysPrecedes",
            "predicates": [
                "c",
                "f"
            ],
            "constraints": [
                "upperbound=4"
            ]
        },
        {
            "invariantType": "AlwaysPrecedes",
            "predicates": [
                "e",
                "f"
            ],
            "constraints": [
                "lowerbound=1"
            ]
        },
        {
            "invariantType": "AlwaysPrecedes",
            "predicates": [
                "e",
                "f"
            ],
            "constraints": [
                "upperbound=3"
            ]
        },
        {
            "invariantType": "AlwaysPrecedes",
            "predicates": [
                "e",
                "g"
            ],
            "constraints": [
                "lowerbound=1"
            ]
        },
        {
            "invariantType": "AlwaysPrecedes",
            "predicates": [
                "e",
                "g"
            ],
            "constraints": [
                "upperbound=4"
            ]
        },
        {
            "invariantType": "AlwaysPrecedes",
            "predicates": [
                "d",
                "g"
            ],
            "constraints": [
                "lowerbound=5"
            ]
        },
        {
            "invariantType": "AlwaysPrecedes",
            "predicates": [
                "d",
                "g"
            ],
            "constraints": [
                "upperbound=8"
            ]
        },
        {
            "invariantType": "AlwaysFollowedBy",
            "predicates": [
                "b",
                "e"
            ],
            "constraints": [
                "lowerbound=5"
            ]
        },
        {
            "invariantType": "AlwaysFollowedBy",
            "predicates": [
                "b",
                "e"
            ],
            "constraints": [
                "upperbound=5"
            ]
        },
        {
            "invariantType": "AlwaysFollowedBy",
            "predicates": [
                "b",
                "d"
            ],
            "constraints": [
                "lowerbound=1"
            ]
        },
        {
            "invariantType": "AlwaysFollowedBy",
            "predicates": [
                "b",
                "d"
            ],
            "constraints": [
                "upperbound=1"
            ]
        },
        {
            "invariantType": "AlwaysFollowedBy",
            "predicates": [
                "b",
                "g"
            ],
            "constraints": [
                "lowerbound=9"
            ]
        },
        {
            "invariantType": "AlwaysFollowedBy",
            "predicates": [
                "b",
                "g"
            ],
            "constraints": [
                "upperbound=9"
            ]
        }
    ]
};

//Organizing the data into managable arrays

var alwaysPrecedes = [];  
var alwaysFollowedBy = [];

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
    for(var i=0; i<invariant.invariants.length; i++){
        if(invariant.invariants[i].invariantType === "AlwaysPrecedes"){
            if(checkExistsPrecedes(invariant.invariants[i]) === false){alwaysPrecedes.push(invariant.invariants[i]);}
        }
        if(invariant.invariants[i].invariantType === "AlwaysFollowedBy"){
            if(checkExistsFollowed(invariant.invariants[i]) === false){alwaysFollowedBy.push(invariant.invariants[i]);}
        }
    }
}
getPredicates(null);

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

//Splits the predicates into the 3 columns and prints the them
function getCol(data){
    for(var i=0; i<alwaysPrecedes.length; i++){
        $("#alwaysPrecedes").append("<tr><td>" + alwaysPrecedes[i].predicates[0] +" <i class='icon-arrow-left'></i> "+
            alwaysPrecedes[i].predicates[1] + "</td></tr>");
        if(checkExistsCol(leftCol, alwaysPrecedes[i].predicates[0]) === false){
            leftCol.push(alwaysPrecedes[i].predicates[0]);
            leftCol.constraints.push(alwaysPrecedes[i].constraints);
        }
    }
    for(var i=0; i<alwaysFollowedBy.length; i++){
        $("#alwaysFollowedBy").append("<tr><td>" + alwaysFollowedBy[i].predicates[0] +" <i class='icon-arrow-right'></i>  "+
            alwaysFollowedBy[i].predicates[1] + "</td></tr>");
        if(checkExistsCol(rightCol, alwaysFollowedBy[i].predicates[1]) === false){
            rightCol.push(alwaysFollowedBy[i].predicates[1]);
            rightCol.constraints.push(alwaysFollowedBy.constraints);
        }
    }
    for(var i=0; i<alwaysPrecedes.length; i++){
        if(checkExistsCol(midCol, alwaysPrecedes[i].predicates[1])===false){
            midCol.push(alwaysPrecedes[i].predicates[1]);
            midCol.constraints.push(alwaysPrecedes[i].constraints);
        }
    }
    for(var i=0; i<alwaysFollowedBy.length; i++){
        if(checkExistsCol(midCol, alwaysFollowedBy[i].predicates[0])===false){
            midCol.push(alwaysFollowedBy[i].predicates[0]);
            midCol.constraints.push(alwaysFollowedBy[i].constraints);
        }
    }
    leftCol.sort();
    midCol.sort();
    rightCol.sort();
}
getCol(null);

//Main graphing 
 var left = [];
    var mid = [];
    var right = [];
window.onload = function() {  
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
