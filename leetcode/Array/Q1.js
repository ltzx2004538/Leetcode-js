
let givenNums = [2,7,11,15,6];
let target = 13;

console.log(twoSum(givenNums,target));

function twoSum(nums,target){
   let results = [];
   let hash = {};
   for(let i = 0; i < nums.length; i++){
       let another = target - nums[i];
       if(hash.hasOwnProperty(nums[i])){
           results.push(hash[nums[i]],i);
           return results;
       }
       hash[another] = i;
   }
   return "no found"
}

//Obeject time complexity is O(1), use Object to avoid use 2 for loop;
//先计算 当前 i 于 目标数的差值
//i + 1 先去 hash表里找是否有对应差值
// 若是找到，直接返回
//没有则添加进表
//使用{}替代 []
