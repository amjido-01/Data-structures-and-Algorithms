const words = 'Hello World';
const wordsTwo = "   fly me   to   the moon  "

const lengthOfLastWord = function(s) {
    const removeSpace = s.trim()
    console.log(removeSpace);
    let splitWords = s.split(' ');
    console.log(splitWords);

    const lengthOfLast = splitWords[splitWords.length-1]
    console.log(lengthOfLast.length);
};

lengthOfLastWord(wordsTwo)