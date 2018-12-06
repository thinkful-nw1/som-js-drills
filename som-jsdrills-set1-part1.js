

console.log("Hi, my name is Harry and I'm 30 years old");


function createGreeting(){
	console.log("Hi, my name is Harry and I'm 30 years old");
}
createGreeting();



function createGreeting(){
	return "Hi, my name is Harry and I'm 30 years old";
}

const greeting1 = createGreeting();
console.log(greeting1)



function createGreeting(name, age){
	return "Hi, my name is " name + " and I'm " + age + " years old";
}


function createGreeting(name, age){
	const yearOf = 2016 - age;
	return "Hi, my name is " name + " and I was born in " + yearOf + " .";
}


function getYearOfBirth(age){
	return 2016 - age;
}

function createGreeting(name, age){
	if (name === undefined || age ===  undefined){
		throw 'Arguments not valid'
	}

	if (typeof name != 'string') {
		throw new TypeError();
	}

	if (typeof age == NaN || typeof age === 'string') {
		throw new TypeError();
	}

	const yob = getYearOfBirth(age);
	return "Hi, my name is " +  name + " and I was born in " + yob.toString() + " .";
};

function yearOfBirth(age){
	if (age < 0) {
		throw new Error("Age can not be negative.");
	}
	return age;
}

try {
	const greeting1 = createGreeting('James', 30)
} catch (error) {
	console.error(error.message)
}

