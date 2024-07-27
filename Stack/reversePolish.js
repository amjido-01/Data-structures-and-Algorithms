const tokens1 = ["2","1","+","3","*"]
// let tokens = ["10","6","9","3","+","-11","*","/","*","17","+","5","+"]
let tokens = ["4","13","5","/","+"]
var evalRPN = function(tokens) {
    const stack = []
    for (let token of tokens) {
        let parsedVal = parseInt(token)
        console.log(parsedVal, "parsed");
        if (!isNaN(parsedVal)) {
            stack.push(parsedVal)
            console.log(stack);
        } else {
            let right = stack.pop()
            let left = stack.pop()
            if (token === "+") {
                stack.push(left + right)
            } else if (token === "-") {
                stack.push(left - right)
            } else if (token === "*") {
                stack.push(left * right)
            } else if (token === "/") {
                stack.push(parseInt(left / right))
                console.log(stack.push(parseInt(left / right)), "hello");
            } else {
                return "Invalid input"
            }
        }
    }
    console.log(stack)
    return stack[0]
}
let result = evalRPN(tokens);
console.log(result)