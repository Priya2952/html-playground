let reachA = new Promise((resolve,reject) => {
    const reached = true
    if(reached)
        setTimeout(resolve,3000,"ramya reached")
    else
    reject("ramya not reached")
})

let reachB = new Promise((resolve,reject) => {
    const reached = true
    if(reached)
        setTimeout(resolve,1000,"priya reached")
    else
    reject("priya not reached")
})

let reachC = new Promise((resolve,reject) => {
    const reached = true
    if(reached)
        setTimeout(resolve,2000,"latha reached")
    else
    reject("latha not reached")
})

Promise.all([reachA,reachB,reachC])
.then((message)=>console.log(message))
.catch((message)=>console.log(message))

Promise.allSettled([reachA,reachB,reachC])
.then((message)=>console.log(message))
.catch((message)=>console.log(message))

Promise.any([reachA,reachB,reachC])
.then((message)=>console.log(message))
.catch((message)=>console.log(message))

Promise.race([reachA,reachB,reachC])
.then((message)=>console.log(message))
.catch((message)=>console.log(message))