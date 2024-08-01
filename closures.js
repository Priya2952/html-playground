function makeAdder(x) {
    return function(y){
        return x+y
    }
}

let add5 = makeAdder(5)
console.log(add5(10))

let add100 = makeAdder(100)
console.log(add100(150))