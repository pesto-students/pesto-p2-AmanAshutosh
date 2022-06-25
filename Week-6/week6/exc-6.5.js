const findPair = (arr, diff) => {
    arr.sort((a,b) => a-b);
    let i = 0, j = 1;
    while(i < arr.length && j < arr.length) {
        if(i !== j && arr[j] - arr[i] === diff) {
            return [arr[i], arr[j]];
        } else if (arr[j] - arr[i] < diff) {
            j++;
        } else {
            i++;
        }
    }
    return [-1, -1];
}

//Time complexityu: O(n log n )
// Space Complexity : O(1)
