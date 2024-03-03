function isHappy(n) {
    function getSquareSum(n) {
        let sum = 0;
        while (n > 0) {
            let digit = n % 10
            sum += digit * digit
            n = Math.floor(n / 10)
        }
        return sum
    }

    let seen = new Set()
    while(n !== 1 && !seen.has(n)) {
        seen.add(n)
        n = getSquareSum(n)
    }
    return n === 1;
}

const res = isHappy(2)
console.log(res);