
function jediName(firstName, lastName){
	let combinedName = lastName.slice(0,3) + firstName.slice(0,2)
	return combinedName;
}


function beyond(num){
	if (num == Infinity) {

		console.log('And beyond');

	} else if (isFinite(num) && num >= 0) {

		console.log('To infinity');

	} else if (isFinite(num) && num < 0) {

		console.log('To negative infinity');

	} else	if (num === 0) {

		console.log('Staying');
	}
}


function decode(word){
	let result;
	if (!word.startsWith('a') || !word.startsWith('b') || !word.startsWith('c') || !word.startsWith('d')) {
		result = ' ';
	} 
	if (word.startsWith('a')) {
		result = word[1];
	} else if (word.startsWith('b')){
		result = word[2];
	} else if (word.startsWith('c')) {
		result = word[3];
	} else if (word.startsWith('d')) {
		result = word[4];
	}
	return result;
}

console.log(decode('cycle'))

message = 'craft block argon meter bells croon droop'
messageSplit = message.split(' ')

arr = []
for (var i = 0; i < messageSplit.length; i++) {
	arr.push(decode(messageSplit[i]));
	arr.join(' ').replace('  ', '')
}


function getDaysOfMonth(month, leapYear = false){
	months = ['January','February','March','April','May','June','July','August','September','October','November','December']
	let result;
	if (month == 'February' && leapYear) {
		result = 'February has 29 days.';
	} else {
		if (months.includes(month)) {
			switch(month){
				case months[0]: result = 'January has 31 days.';
				break;
				case months[1]: result = 'February has 28 days.';
				break;
				case months[2]: result = 'March has 31 days.';
				break;
				case months[3]: result = 'April has 30 days.';
				 break;
				case months[4]: result = 'May has 31 days.';
				 break;
				case months[5]: result = 'June has 30 days.';
				 break;
				case months[6]: result = 'July has 31 days.';
				 break;
				case months[7]: result = 'August has	31 days.';
				 break;
				case months[8]: result = 'September has 30 days.';
				 break;
				case months[9]: result = 'October has 31 days.';
				 break;
				case months[10]: result =  'November has 30 days.';
				 break;
				case months[11]: result = 'December has 31 days.';
			}
		} else {
		throw 'Must provide a valid month';	
	}
}
return result;
}



function rockPaperScissors(num){
	console.log("1. Rock\n2. Scissors\n3. Paper");

	if (num < 1 && num > 3) {
		throw 'Error. Choose only 1 or 2 or 3.';
	}

	const randomNo = Math.floor(Math.random() * 3 + 1);

	let result;
	if (randomNo === num) {
		result = "The result is a tie.";
	}
	if (randomNo === 1 && num === 2) {
		result = "Rock wins";
	} else {
		result = "Paper wins.";
	}

	if (randomNo === 2 && num === 1) {
		result = "Rock wins.";
	} else {
		result = "Scissors wins";
	}

	if (randomNo === 3 && num === 1) {
		result = "Paper wins.";
	} else {
		result = "Scissors wins";
	}

	return result;
}