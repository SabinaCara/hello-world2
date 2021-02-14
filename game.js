let x = 3
let y = function(z) { return z + 3 }
let z = y(x)

function setContent(content) {
    document.getElementById("content").textContent = content
}

function adder(a) {
    return function(b) {
        return a + b
    }
}

let add3 = adder(3)
add3(7)
add3(19)

window.onload = function() {
    let clicks = 0
    document.getElementById("button").onclick = function() {
        clicks++
        setContent("you clicked me " + clicks + " times")
    }
}