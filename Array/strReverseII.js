var reverseStr = function(s, k) {
    let arr = s.split(''); // Convert the string to an array
    let n = arr.length;


  for (let i = 0; i < n; i += 2 * k) {
    console.log(i)
     // Get the segment to reverse
     let segment = arr.splice(i, k);
     console.log(arr, "h");
     console.log(segment, "g");
     // Reverse the segment
     segment.reverse();
     // Insert the reversed segment back into the array
    arr.splice(i, 0, ...segment);
    console.log(arr, "j");
     
 }

//  return arr.join('');
};
reverseStr("abcdefg", 2)


let test = [1, 2, 3, 4, 5, 6]
console.log(test.splice(1, 1))
for(let i = test.length - 1; i >= 0; i--) {
    // remove element at index 4
    // console.log(test.splice(1, 1))
}