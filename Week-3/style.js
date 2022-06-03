function createIncrement() {
 let count = 0;
 function increment() {
     count++;
    }
let message = `Count is ${count}`;

function log() {
    console.log(message);
}
return[increment,log];
}
const[increment,log] =createIncrement();
increment();
increment();
increment();
log();// What is logged?

// " Count is 0 "      
//  is logged its because according to closures as closer has Access to 
// its own scope.
// to the variables of the outer function.
// the global variables.
