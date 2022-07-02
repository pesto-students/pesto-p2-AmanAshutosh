//We know that the town judge is the only one whom everyone else trusts.
// Therefore, if create an array with indexes matching the number of people N provided,
// we can track the number of trusts a person receives by adding 1 to the index every time that person receives a trust. 
//Every time a person gives trust, we subtract 1. 
//In the end, the person who is the town judge, if he exists, will receive N-1 number of 1s from other people. 
//We need to find the index representing this person and return it.

var findJudge = function(N, trust) {
    let counts = new Array(N+1).fill(0)
    for(let [i,j] of trust){
        counts[i]--
        counts[j]++
    }
    for(let i = 1; i < counts.length; i++){
        if(counts[i] == N-1){
            return i
        }
    }
    return -1
};