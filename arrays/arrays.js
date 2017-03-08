// ---------------------------
// The Arrays You Will Work With
// ---------------------------
var numbers = [1,12,4,18,9,7,11,3,101,5,6];
var strings = ['this','is','a','collection','of','words'];
var instructors = [
    { firstname : 'JD', teaches : 'JavaScript'},
    { firstname : 'Tim', teaches : 'JavaScript'},
    { firstname : 'Brit', teaches : 'Ruby'},
    { firstname : 'Joe', teaches : 'iOS'},
    { firstname : 'Jake', teaches : 'JavaScript'},
    { firstname : 'Will', teaches : 'JavaScript'},
    { firstname : 'Calvin', teaches : 'JavaScript'},
    { firstname : 'James', teaches : 'Ruby'}
];



// ---------------------------
// 1. Find largest number
// ---------------------------
var largest = numbers.reduce(function(a, b){
	if (a > b){
		return a;
	} else {
		return b;
	};
});



// ---------------------------
// 2. Find longest string
// ---------------------------
var longest = strings.reduce(function(a, b){
	if (a.length > b.length){
		return a
	} else {
		return b
	}
});



// ---------------------------
// 3. Find even numbers
// ---------------------------
var evens = numbers.filter(function(value){
	return value % 2 == 0;
});

// ---------------------------
// 4. Find odd numbers
// ---------------------------
var odds = numbers.filter(function(value){
	return value % 2 ==1
});

// ---------------------------
// 5. Find words that contain `is`
// ---------------------------
var containIs = strings.filter(function(value){
	return value.includes("is");
});


// ---------------------------
// 5. Join Both Arrays Together
// ---------------------------
var bothArray = numbers.concat(strings);



// ---------------------------
// 6. Use the Instructors array and find all that teach JavaScript, 
//    then sort them alphabetically
// ---------------------------


var sortedJsTeachers = instructors.filter(function(value) {
    return (value.teaches === "JavaScript");
}).map(function(value) {
    return value.firstname;
}).sort();
