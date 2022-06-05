function createStack() {
    const items1 = [];
    function push(x){
        items1.push(x)
        console.log(items1);
    }
    return {
       push:function(y){
           push(y)
       }
        
    };
}
const stack = createStack();
console.log(stack);

stack.push(10);
stack.push(5);
stack.items = [10, 100, 1000]; //encapsulation broken!

console.log(stack);
stack.push(10);
console.log(stack);



  