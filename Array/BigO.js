const movies = [
    "Spider-Man: Into the Spider-Verse",
    "Coco",
    "The Princess Bride",
    "Interstellar",
    "Mad Max: Fury Road",
    "Avengers"
  ];

  const numbers = ['a', 'b', 'c', 'd', 'e'];	



const findValue = (arr) => {
    let t0 = performance.now();	 // o(1)
    // O(n)
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 'Coco') {	
            console.log('Found it!');	
        }
    }
    let t1 = performance.now();  // o(1)
    let totaltime = t1 - t0;  // o(1)
    console.log('totaltime:', totaltime);
}


// rule worst case cenario. always thinks that the item is at the last of the data set
// so it will take the longest time to run so it will run all over the data even if it has found the element
// less efficient
const findMe = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        console.log('running...');
        if (arr[i] == 'Coco') {
            console.log('Found it!');
        }
    }
}


// more efficient because was it found the element it will break out of the loop and exit the function
const findMeBetter = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        console.log('running...');
        if (arr[i] == 'Coco') {
            console.log('Found it!');
            break; // used only inside a loop.
        } 
    }
    console.log('running ends');
}

const findFirstMiddleElement = (arr) => {
    const middle = Math.floor(arr.length / 2);
    console.log(arr[middle]);
}




// findFirstMiddleElement(movies);
// findMeBetter(movies); 
// printPiers(numbers);