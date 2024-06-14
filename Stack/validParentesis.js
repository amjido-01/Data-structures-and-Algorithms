var isValid = function(s) {
   let stack = []
   for(let i = 0; i < s.length; i++) {
    if (s[i] === "(" || s[i] === "[" || s[i] === "{") {
        stack.push(s[i])
        console.log(stack)
    } else {
        if (stack.length === 0 || (s[i] === ")" && stack[stack.length - 1] !== "(") || (s[i] === "]" && stack[stack.length-1] !== "[") || (s[i] === "}" && stack[stack.length-1] !== "{")) {
            return false
        }
        stack.pop()
    }
   }
   return stack.length === 0
};

const res = isValid("({[]})")
console.log(res)