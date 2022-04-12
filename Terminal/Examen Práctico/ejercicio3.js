let string = "Hola como estas"

let word = [];
for(let i = 0; i < string.length; i++) {
	if (string[i].toLowerCase() === "o") word.push(i);
 }
 console.log(word.length)