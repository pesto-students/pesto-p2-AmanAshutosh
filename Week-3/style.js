let sum = 0;
const calc=(n)=>{
    for(let i=0;i<=n;i++){
        sum+=i;
    }
    return sum;
}

const memoize=(fun)=>{
    let cache={};
    return function(...args){
        let n=args[0];
        if(n in cache){
            console.log("cache");
            return cache[n];
        }else{
            console.log("Calculating first time")
           let result = fun(n);
           cache[n]=result;
           return result;
        }
    }
}
console.time();
const efficient=memoize(calc);
console.log(efficient(5));
console.timeEnd();





