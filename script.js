var playerOne = new User;


var divForLetters = document.createElement("div");
//divForLetters.classlist.add("letterSize");

var fourLetterWord= "word";
var fiveLetterWord= "hello";
var sixLetterWord= "rotten";
var sevenLetterWord= "goodbye";
var eightletterWord= "statutes";
var nineLetterWord= "alliterate";
var tenLetterWord= "transition";

var wordArray = [];
var splitWordArray;

var wordFill = document.getElementById('wordFill')

var selection = document.getElementById('myList');
var letterInput = document.getElementById('letterInput');
var wordInput = document.getElementById('wordInput');


var numberButton = document.getElementById('numberButton');

var letterButton = document.getElementById('letterButton');

var wordButton = document.getElementById('wordButton');



var oneHundred= document.getElementById('oneHundred')
var twoHundred= document.getElementById('twoHundred')
var threeHundred= document.getElementById('threeHundred')
var fourHundred= document.getElementById('fourHundred')
var fiveHundred= document.getElementById('fiveHundred')



numberButton.addEventListener("click", difficultSelect)
	

function difficultSelect (){
	if (selection.value==="4"){

		wordArray.push(fourLetterWord);
		
		var splitWord = fourLetterWord.split("");
		splitWordArray=splitWord;

		for (var i = 0; i < splitWordArray.length; i++) {
			divForLetters.innerHTML+=splitWordArray[i];
		}
		divForLetters.classList.add("divSize");

		wordFill.append(divForLetters)

	}if (selection.value==="5"){

		wordArray.push(fiveLetterWord);
		
		var splitWord = fiveLetterWord.split("");
		splitWordArray=splitWord;

	}if (selection.value==="6"){

		wordArray.push(sixLetterWord);
		
		var splitWord = sixLetterWord.split("");
		splitWordArray=splitWord;

	}if (selection.value==="7"){

		wordArray.push(sevenLetterWord);
		
		var splitWord = sevenLetterWord.split("");
		splitWordArray=splitWord;

	}if (selection.value==="8"){

		wordArray.push(eightLetterWord);
		
		var splitWord = eightLetterWord.split("");
		splitWordArray=splitWord;

	}if (selection.value==="9"){

		wordArray.push(nineLetterWord);
		
		var splitWord = nineLetterWord.split("");
		splitWordArray=splitWord;

	}if (selection.value==="10"){

		wordArray.push(tenLetterWord);
		
		var splitWord = tenLetterWord.split("");
		splitWordArray=splitWord;

	}
}


letterButton.addEventListener("click",playerOne.letterCompare)

function letterCompare(){
	for (var i = 0; i < splitWordArray.length; i++) {
		if (letterInput.value=== splitWordArray[i]){
			
			console.log("correct")
			var guessedRight = true;
		} 
	}
	if (!guessedRight){
		playerOne.points+= -100
			if(playerOne.points= 400){
				fiveHundred.style.display="none"
			}else if(playerOne.points= 300){
				fourHundred.style.display="none"
			}else if(playerOne.points= 200){
				threeHundred.style.display="none"
			}else if(playerOne.points= 100){
				twoHundred.style.display="none"
			}else if(playerOne.points= 0){
				oneHundred.style.display="none"
			}
		}
		if(playerOne.points===0){
			popUp("you have failed")
		}

}






//user baser
function User (){
	this.letterCompare=letterCompare;
	//this.wordCompare=wordCompare;
	this.points= 500;
}
