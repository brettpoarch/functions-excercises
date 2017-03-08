// ---------------------
// Define a function max() that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in JavaScript.
// ---------------------

function max(a, b){
    if(a > b){
    	return a;
    } else {
    	return b;
    }
};

max (1, 2);
max (2, 1)
// ---------------------
// Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.
// ---------------------

function maxOfThree(a, b, c){
	if(a > b){
		if (a > c){
			return a;
		} else {
			return c;
		};
	} else {
		if (b > c){
			return b;
		} else {
			return c;
		};
	};
};

maxOfThree(1, 2, 3);
// ---------------------
// Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
// ---------------------

function isVowel(char){
    if(char == "a" || char == "e" || char == "i" || char == "o" || char == "u"){
    	return true;
    };
}

isVowel("a");

// ---------------------
// Write a function translate() that will translate a text into "Rovarspraket". That is, double every consonant and place an occurrence of "o" in between. For example, translate("this is fun") should return the string "tothohisos isos fofunon".
// ---------------------

function rovarspraket(phrase){
		newPhrase = ""
    for(var i = 0; i < phrase.length; i += 1){
    	if(phrase.charAt(i) !== "a" && phrase.charAt(i) !== "e" && phrase.charAt(i) !== "i" && phrase.charAt(i) !== "o" && phrase.charAt(i) !== "u" && phrase.charAt(i) !== " "){
    		newPhrase += phrase.charAt(i) + "o" + phrase.charAt(i);
    	} else {
    		newPhrase += phrase.charAt(i);
    	}; 
    }; return newPhrase;
};

rovarspraket("this is fun")
// ---------------------
// Define a function reverse() that computes the reversal of a string. For example, reverse("jag testar") should return the string "ratset gaj".
// ---------------------

function reverse(str){
    var arr = str.split("");
    arr.reverse();
    return str = arr.join("");
}

reverse("jag testar")
