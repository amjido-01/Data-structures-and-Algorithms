function convert(s, numRows) {
    if (numRows === 1) return s; 
  
    const rows = Array(numRows).fill(''); // Array to store characters in each row
    // ['PAHG', 'APLSIN', 'YIRI']
    let currentRow = 0;   // 1, 2, 1, 0, 1, 2, 1, 0, 1, 2, 1, 0
    let goingDown = true; // T, F, F, T, F, F, T, F, F, F, T
  
    for (let i = 0; i < s.length; i++) {
      rows[currentRow] += s[i]; // Add character to current row
      //  P, A, Y, P, A, L, I, S, H, I, R, I, N, G
      //  0  1  2  3  4  5  6  7  8  9  10  11 12

      // Determine next row based on zigzag pattern
      currentRow = goingDown ? currentRow + 1 : currentRow - 1;
  
      // Change direction at boundaries
      if (currentRow === 0 || currentRow === numRows - 1) {
        goingDown = !goingDown;
      }
    }
    console.log(rows);
  
    return rows.join('');
  }

  const res = convert('PAYPALISHIRING', 3)
  console.log(res)

  