const tatkalbook = new Promise((resolve, reject) => {
    let bookingsuccess = false
    if (bookingsuccess)
        resolve(500)
    else
        reject()
})
tatkalbook.then((amt)=>console.log(`thanks buddy .i will transfer the ${amt}`))
.catch(() =>console.log("thanks for trying "))






