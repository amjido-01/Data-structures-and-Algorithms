const arr = ['a', 'b', 'c', 'd', 'e'];	
const numsArr = [1,2,3,4,5];


const printPier = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            console.log(arr[i], arr[j])
        }
    }
}


const printPiers = (arr, arr2) => {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr2.length; j++) {
            console.log(arr[i], arr2[j])
        }
    }
}


const printSumOfPiers = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            console.log(arr[i] + arr[j])
        }        
    }
}

// printPier(arr)
printSumOfPiers(numsArr)
// printPiers(arr, numsArr)