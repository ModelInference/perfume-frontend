//For Debuging purpose and local usage
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

//Printing and Graphing the invariants

var graph = new joint.dia.Graph;

var paper = new joint.dia.Paper({
    el: $('#myholder'),
    width: 600,
    height: 600,
    model: graph
});

function drawGraph(){
    var space = 10;
    for(var i=0; i<alwaysPrecedes.length; i++){
        $("#alwaysPrecedes").append("<tr><td>" + alwaysPrecedes[i].predicates[0] + "<--" + 
            alwaysPrecedes[i].predicates[1] + "</td></tr>")
        var box1 = new joint.shapes.basic.Rect({
        position: { x: 20, y: 10 +space},
        size: { width: 100, height: 30 },
        attrs: { rect: { fill: 'blue' }, text: { text: alwaysPrecedes[i].predicates[0], fill: 'white' } }
        });
        var box2 = new joint.shapes.basic.Rect({
        position: { x: 420, y: 10 +space},
        size: { width: 100, height: 30 },
        attrs: { rect: { fill: 'blue' }, text: { text: alwaysPrecedes[i].predicates[1], fill: 'white' } }
        });
        var link = new joint.dia.Link({
        source: { id: box1.id },
        target: { id: box2.id }
        }); 
        link.attr({
        '.connection': { stroke: 'blue' },
        '.marker-source': { fill: 'red', d: 'M 10 0 L 0 5 L 10 10 z' },
        }); 
        graph.addCells([box1,box2,link]);
        space +=50;
    }
    for(var i=0; i<alwaysFollowedBy.length; i++){
        $("#alwaysFollowedBy").append("<tr><td>" + alwaysFollowedBy[i].predicates[0] + "-->" + 
            alwaysFollowedBy[i].predicates[1] + "</td></tr>")
        var box1 = new joint.shapes.basic.Rect({
        position: { x: 20, y: 10 +space},
        size: { width: 100, height: 30 },
        attrs: { rect: { fill: 'blue' }, text: { text: alwaysFollowedBy[i].predicates[0], fill: 'white' } }
        });
        var box2 = new joint.shapes.basic.Rect({
        position: { x: 420, y: 10 +space},
        size: { width: 100, height: 30 },
        attrs: { rect: { fill: 'blue' }, text: { text: alwaysFollowedBy[i].predicates[1], fill: 'white' } }
        });
        var link = new joint.dia.Link({
        source: { id: box2.id },
        target: { id: box1.id }
        }); 
        link.attr({
        '.connection': { stroke: 'blue' },
        '.marker-source': { fill: 'red', d: 'M 10 0 L 0 5 L 10 10 z' },
        }); 
        graph.addCells([box1,box2,link]);
        space +=50;
    }
}


// function getInvaraints(data) {
// var alwaysPrecedes = "";
// var alwaysFollowedBy = "";
// var constraintText="";
// for (var i = 0; i < invariant.invariants.length; i++) {
//     if(invariant.invariants[i].invariantType === "AlwaysPrecedes"){
//       alwaysPrecedes = invariant.invariants[i].predicates[0] + " <--- " + invariant.invariants[i].predicates[1] + " " + constraintText;
//       constraintText = "";
//       for (var j = 0; j < invariant.invariants[i].constraints.length; j++) {
//           constraintText += invariant.invariants[i].constraints[j] + "\n"; //Add information about bounds
//       }
//       $("#alwaysPrecedes").append("<tr><td>" + alwaysPrecedes + "</td></tr>");
//     }else if(invariant.invariants[i].invariantType === "AlwaysFollowedBy"){
//       constraintText = "";
//       for (var j = 0; j < invariant.invariants[i].constraints.length; j++) {
//           constraintText += invariant.invariants[i].constraints[j] + "\n"; //Add information about bounds
//       }
//       alwaysFollowedBy = invariant.invariants[i].predicates[0] + " ---> " + invariant.invariants[i].predicates[1] + " " + constraintText;
//       $("#alwaysFollowedBy").append("<tr><td>" + alwaysFollowedBy + "</td></tr>");
// 	}
// 	}
// }
getPredicates(null);
drawGraph();
