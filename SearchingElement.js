const moviesArr = [
    "Spider-Man: Into the Spider-Verse",
    "Coco",
    "The Princess Bride",
    "Interstellar",
    "Mad Max: Fury Road",
    "Avengers"
  ];

  const searchMovie = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 'Coco') {
          console.log('fond it')
          break;
        }
    }
  }

  searchMovie(moviesArr)