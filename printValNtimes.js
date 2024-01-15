const printHyNtimes = (n) => {
    let hyArr = [];
    for (let i = 0; i < n; i++) {
        hyArr[i] = 'hy';
    }
    return hyArr;
}

const result = printHyNtimes(7);
console.log(result);