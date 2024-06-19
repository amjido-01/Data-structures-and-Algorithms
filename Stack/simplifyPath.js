function simplifyPath(path) {
    let stack = []
    let directories = path.split("/")
    for (let dir of directories) {
        if (dir === "." || !dir) {
            continue
        } else if (dir === "..") {
            if (stack.length > 0) {
                stack.pop()
            }
        } else {
            stack.push(dir)
            console.log(stack);
        }
    }
    return "/" + stack.join("/")
}

console.log(simplifyPath("/.../a/../b/c/../d/./"))