// Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] 
// such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.
// Notice that the solution set must not contain duplicate triplets.


let nums = [-1,0,1,2,-1,-4];

console.log(threeSums(nums));

function threeSums(nums) {
	if (nums.length < 3) return [];
	const output = [];
	nums.sort((a,b) => a - b);
	console.log(nums)
	for(let i = 0; i< nums.length - 2; i++) {
		if (i >0 && nums[i] === nums[i - 1]) continue
		let left = i + 1;
		let right = nums.length - 1;

		while (left < right) {
			const sum = nums[i] + nums[left] + nums[right];
			console.log(sum)
			if (sum === 0) {
				output.push([nums[i], nums[left], nums[right]]);
				left++;
				right--;
				while(left < right && nums[left]===nums[left-1]) left++
				while(left < right && nums[right]===nums[right+1]) right--
			}
			else if (sum > 0) {
				right --
			}
			else {
				left ++
			}
		}
	}
	return output
}

//采用双指针
//先sort array 这样可以方便查询
//通过当前数i， i+1， 末位数 的和 判断， 若sum < 0， 则需要一个大的数，反之需要小的数来移动指针
//通过比较指针前后的数来避免重复