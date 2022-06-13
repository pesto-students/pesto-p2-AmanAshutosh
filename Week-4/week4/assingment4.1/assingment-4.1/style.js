const promise = new Promise((resolve, reject) => {
    const randomNumber = Math.random() * 100; 
    if (randomNumber % 5 == 0) { // check if random no is divisable by 5
        resolve('It is resolve');
    } else {
        reject('It is rejected');
    }
});

promise
   .then((print) => { // then part is executed if promise got resolved
    console.log(print);
}).catch((print) => { // catch part is executed if the promise got rejected
    console.log(print);
});