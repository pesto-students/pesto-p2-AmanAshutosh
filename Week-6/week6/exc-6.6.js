const threeSumClosest = (nums, target) => {
    //sort the array;
    nums = nums.sort((a,b)=>a-b);
    
    //to store closestSum
    let closestSum = Infinity;
  
    //iterate the array
    for (let i = 0; i < nums.length; i ++) {
        //tracker
        let left = i + 1;
        let right = nums.length -1;
      
        //iterate till we have all the combinations
        while (left < right) {
            //sum of the triplets
            let sum = nums[i] + nums[left] + nums[right];
            
            // calc closestSum
            if (Math.abs(sum - target) < Math.abs(closestSum - target)) closestSum = sum;
          
            //update the tracker
            if (sum > target) {
                right --
            } else {
                left ++
            }
        }
    }
    return closestSum;
};

//Time Complexity:O(n ^ 2)
//Space Complexity:O(1)
