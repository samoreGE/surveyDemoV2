var totalOutcomes=0;
var totalStudents=10;
var tempOutcomesArray = ['This is test outcome 1!', 'This is another outcome! (it\'s the second one)', '3rd outcome is the charm!', 'Ok, maybe we add another outcome here at the end.'];

addOutcomesFromArray(tempOutcomesArray);
refreshAll();

$('.number-box').keyup(function () { 
	refreshAll();
});
$('.number-box').on("change", function () { 
	refreshAll();
});

function addOutcomesFromArray(outcomeArray) {
	console.log("addOutcomesFromArray("+outcomeArray+")");
	var i;
	for (i = 0; i < outcomeArray.length; i++) {
		console.log("i="+i);
		addNewOutcome(outcomeArray[i]);
	}
}


function refreshAll() {
	console.log("refreshAll()");
	var i;
	for (i = 0; i < totalOutcomes; i++) {
		console.log("i="+i);
		refresh(i);
	}
}

function addNewOutcome(outcomeText) {
	console.log("addNewOutcome()");
	addOutcome(totalOutcomes, outcomeText);
	totalOutcomes++;
	refreshAll();
	console.log("totalOutcomes="+totalOutcomes);
}

function refresh(num) {
	console.log("refresh("+num+")");
	$("#sum"+num).val(getSumOf(num)+"/"+totalStudents);
}

function addOutcome(num, outcomeText) {
	console.log("addOutcome("+num+")");
	var newOutcome = $("<tr class=\"outcome-row\" id=\"outcome"+num+"\">");
	newOutcome.html("\
		<th scope=\"row\" class=\"outcome-text\" id=\"question"+num+"\">"+outcomeText+"</th>\
		<td class=\'outcome-item\'><input type=\'number\' min=\"0\" class=\'number-box\' id=\'str"+num+"\'/></td>\
		<td class=\'outcome-item\'><input type=\'number\' min=\"0\" class=\'number-box\' id=\'sat"+num+"\'/></td>\
		<td class=\'outcome-item\'><input type=\'number\' min=\"0\" class=\'number-box\' id=\'ng"+num+"\'/></td>\
		<td class=\'outcome-item\'><input type=\'number\' min=\"0\" class=\'number-box\' id=\'unsat"+num+"\'/></td>\
		<td class=\'outcome-item\'><input type=\'number\' min=\"0\" class=\'number-box\' id=\'na"+num+"\'/></td>\
		<td class=\'outcome-item\'><input type=\'text\' min=\"0\" class=\'number-box sum-box\' id=\'sum"+num+"\' disabled /></td>");
	$("#outcomes").append(newOutcome);
}

function getSumOf(num) {
	console.log("getSumOf("+num+")");
	var str=Number($("#str"+num).val());
	console.log("str"+num+"="+str);
	var sat=Number($("#sat"+num).val());
	console.log("sat"+num+"="+sat);
	var ng=Number($("#ng"+num).val());
	console.log("ng"+num+"="+ng);
	var unsat=Number($("#unsat"+num).val());
	console.log("unsat"+num+"="+unsat);
	var na=Number($("#na"+num).val());
	console.log("na"+num+"="+na);	
	var sum=Number(str+sat+ng+unsat+na);
	return sum;
}