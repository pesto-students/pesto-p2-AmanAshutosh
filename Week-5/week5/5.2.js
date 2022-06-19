function isVowel(char) {
    return"aeiou".includes(char);
}

function vowelCount(str) {
    const vowelMap = new Map(); 
    for(let char of str) {
        let lowerCaseChar = char.toLowerCase();
        if (isVowel(lowerCaseChar)) {
            if(vowelMap.has(lowerCaseChar)) { 
                vowelMap.set(lowerCaseChar,vowelMap.get(lowerCaseChar) + 1);
            } else {
                vowelMap.set(lowerCaseChar,1);
            }
        }
    }
    return vowelMap;
}

const myName = `ASHUTOSHAMAN`;
const myMap = vowelCount(myName);
console.log(myMap);