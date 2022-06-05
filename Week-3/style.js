function createStack() {
    const items1 = [];
    function push(ashu){
        items1.push(ashu) 
        console.log(items1);
        
    }
    return {
        pushpa:function(ram){
            push(ram)
        }
     
    };

    
}

const stack = createStack();
console.log(stack);
 stack.pushpa(10);
stack.pushpa(5);

// stack.pop();// => 5
// stack.items;// => [10]
// console.log(stack.items);
stack.items1 = [10, 100, 1000];// Encapsulationbroken!
console.log(stack);
stack.pushpa(7);