function Fib(n) {
    return ({
        [Symbol.iterator]: () => {
            let i = 1;
            let x1 = 0, x2 = 0;
            return {
                next: () => {
                    if (i++ <= n) {
                        [x1, x2] = [x2, (x1 + x2) || 1];
                        return {
                            value: x1,
                            done: false
                        };
                    } else {
                        return {
                            done: true
                        };
                    }
                }
            };
        }
    });
}
console.log("Fibonacci series is : ");
for (let num of Fib(7)) {
    console.log(num);
}


/*
Output is :-
Fibonacci series is : 
0
1
1
2
3
5
8
*/