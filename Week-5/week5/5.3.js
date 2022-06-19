const hasDuplicate = arr => new Set(arr).size !== arr.length;

const myArray = ['p', 'r', 'a', 'd', 'y', 'u', 'm', 'n', 'a'];
const answer = hasDuplicate(myArray);
console.log(answer); //This will return true