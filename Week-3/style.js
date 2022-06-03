var obj = { num: 6 };

function add(a, b){
  return this.num + a + b;
}

//The call() and apply() are very similar methods. They both execute the bound function on the object immediately.

const resultCall  = add.call(obj, 3, 5);
const resultApply = add.apply(obj, [3, 5]);

//The bind() method does not execute the function right away. Instead, it creates and returns a bound function that can be executed later.

const funcBind    = add.bind(obj, 3, 5)
const resultBind  = funcBind();

console.log(resultCall, resultApply, resultBind);