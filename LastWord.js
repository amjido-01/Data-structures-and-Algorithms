const words = 'Hello World';
const wordsTwo = "   fly me   to   the moon  "


const lengthOfLastWord = (sentence) => {
    const splited = sentence.split(" ");
    let arr = []

    for (let i = 0; i < splited.length; i++) {
        if (splited[i] !== '') {
            arr.push(splited[i])
        }
    }
    let last = arr.length-1
    return arr[last].length
}

const result = lengthOfLastWord(wordsTwo)
console.log(result);







// const lengthOfLastWord = function(s) {
//     const removeSpace = s.trim()
//     console.log(removeSpace, 'hello');
//     let splitWords = removeSpace.split(' ');
//     console.log(splitWords);

//     const lengthOfLast = splitWords[splitWords.length-1]
//     console.log(lengthOfLast.length);
// };

// lengthOfLastWord(wordsTwo)