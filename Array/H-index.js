// const citations = [3,0,6,1,5]
const citations = [1,3,1]

function hIndex(citations) {
    // rotate to get and sort the array to get the highest value;
    citations.sort((a, b) => b - a)
    // [6, 5, 3, 1, 0]
    // [3,1,1]
    let higestIndex = 0;
    for (let i = 0; i < citations.length; i++) {
        if (citations[i] >= i + 1) {
            higestIndex += 1
        } else {
            // if not break
            break;
        }
    }
    return higestIndex;
} 

const result = hIndex(citations)
console.log(result)