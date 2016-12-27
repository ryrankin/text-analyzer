/*
 * Takes an array of strings and returns number 
 * of non-empty strings.
 */
function getNumNonEmptyStrings(stringArray){

	var numStrings = 0;

	for (var i = 0; i < stringArray.length; i++) {
		if (stringArray[i] !== "") numStrings++;
	}

	return numStrings;
};

/*
 * Takes an array of words and returns the count 
 * of unique words.
 */
function getUniqueWordCount(words){

	var uniqueWords = [];
	for (var i=0; i < words.length; i++){
		if (words[i] !== "" && 
			uniqueWords.indexOf(words[i]) === -1){
			uniqueWords.push(words[i])
		}
	}
	return uniqueWords.length;

};

/*
 * Takes an array of words and returns the avg
 * word length.
 */
function getAverageWordLength(words){
	
	var numWords = getNumNonEmptyStrings(words);
	var lengthOfAllWords = 0;

	for(var i = 0; i < words.length; i++){
		lengthOfAllWords += words[i].length;
	}

	return lengthOfAllWords / numWords;
}

function getAverageSentenceLength(sentences){
	var numberOfSentences = getNumNonEmptyStrings(sentences)
	
	var numberOfWords = 0;
	for (var i = 0; i < sentences.length; i++){
		var words = sentences[i].split(" ");
		numberOfWords += getNumNonEmptyStrings(words);
	}
	return numberOfWords / numberOfSentences;
}

$(document).ready(function(){

	$('form').submit(function(event){
		
		event.preventDefault();

		var text = $('#user-text').val();
		var words = text.split(" ");
		var sentences = text.split(".");

		var numOfWords = getNumNonEmptyStrings(words);
		$('#word-count').html(numOfWords);

		var numOfUniqueWords = getUniqueWordCount(words);
		$('#unique-word').html(numOfUniqueWords);

		var averageWordLength = getAverageWordLength(words);
		$('#average-word-length').html(averageWordLength.toFixed(2) + " characters");

		var averageSentenceLength = getAverageSentenceLength(sentences);
		$('#average-sentence-length').html(averageSentenceLength.toFixed(2) + " words");

		$('dl').removeClass('hidden');



	});

});

//word count: 
//unique word count: of submitted text
//average word length: in characters of submitted text
//average sentence length: in characters of the submitted text