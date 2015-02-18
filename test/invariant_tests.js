test('Arrays exist after initialization', 3, function() {
	initialize();

	ok(alwaysPrecedes, "alwaysPrecedes exists!");
	ok(alwaysFollowedBy, "alwaysFollowedBy exists!");
	ok(neverFollowedBy, "neverFollowedBy exists!");
});

// test('initialize() clears tables except top row', 3, function() {
// 	$("#AlwaysPrecedes").append("<tr><td>" + "hello1" +"</td><td>&rarr;</td><td>"+ "hello1"
//                 + "</td><td> " + "hello1" + "</td><td>" + "hello1" + "<td></tr>");
// 	$("#AlwaysFollowedBy").append("<tr><td>" + "hello1" +"</td><td>&rarr;</td><td>"+ "hello1"
//                 + "</td><td> " + "hello1" + "</td><td>" + "hello1" + "<td></tr>");
// 	$("#NeverFollowedBy").append("<tr><td>" + "hello1" +"</td><td>&rarr;</td><td>"+ "hello1"
//                 + "</td><td> " + "hello1" + "</td><td>" + "hello1" + "<td></tr>");
// 	$("#AlwaysPrecedes").append("<tr><td>" + "hello1" +"</td><td>&rarr;</td><td>"+ "hello1"
//                 + "</td><td> " + "hello1" + "</td><td>" + "hello1" + "<td></tr>");
// 	$("#AlwaysFollowedBy").append("<tr><td>" + "hello1" +"</td><td>&rarr;</td><td>"+ "hello1"
//                 + "</td><td> " + "hello1" + "</td><td>" + "hello1" + "<td></tr>");
// 	$("#NeverFollowedBy").append("<tr><td>" + "hello1" +"</td><td>&rarr;</td><td>"+ "hello1"
//                 + "</td><td> " + "hello1" + "</td><td>" + "hello1" + "<td></tr>");
// 	$("#AlwaysPrecedes").append("<tr><td>" + "hello1" +"</td><td>&rarr;</td><td>"+ "hello1"
//                 + "</td><td> " + "hello1" + "</td><td>" + "hello1" + "<td></tr>");
// 	$("#AlwaysFollowedBy").append("<tr><td>" + "hello1" +"</td><td>&rarr;</td><td>"+ "hello1"
//                 + "</td><td> " + "hello1" + "</td><td>" + "hello1" + "<td></tr>");
// 	$("#NeverFollowedBy").append("<tr><td>" + "hello1" +"</td><td>&rarr;</td><td>"+ "hello1"
//                 + "</td><td> " + "hello1" + "</td><td>" + "hello1" + "<td></tr>");

// 	initialize();

// 	equal($("#AlwaysPrecedes").length, 1, "AlwaysPrecedes was cleared properly!");
// 	equal($("#AlwaysFollowedBy").length, 1, "AlwaysFollowedBy was cleared properly!");
// 	equal($("#NeverFollowedBy").length, 1, "NeverFollowedBy was cleared properly!");
// });