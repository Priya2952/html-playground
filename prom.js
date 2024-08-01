const tatkalbook = new Promise((resolve, reject) => {
    let bookingsuccess = true
    if (bookingsuccess)
        resolve()
    else
        reject()
})
tatkalbook.then(success)
.catch(failure)

function success(){
    console.log("Thanks buddy I will transfer the amount")
}
function failure(){
    console.log("Thanks for trying!!!!")
}