// Given an integer array nums of length n and an integer target, find three integers in nums such that the sum is closest to target.

// Return the sum of the three integers.

// You may assume that each input would have exactly one solution.

const nums = [-1,2,1,-4];

const target = -1;

console.log(threeSumCloset(nums, target));

function threeSumCloset (nums, target) {
	let result = 0;
	let closetDist = Number.MAX_VALUE;

	nums.sort( (a,b)=> {
		return a - b;
	});

	for( let i = 0; i< nums.length - 2; i++ ) {
		let left = i + 1;
		let right = nums.length -1;

		while (left < right) {
			sum = nums[i] + nums[left] + nums[right];
			let distance = Math.abs(sum - target);

			if(distance < closetDist) {
				result = sum;
				closetDist = distance;
			}

			if(sum === target) {
				return target
			}
			//need a smaller number
			else if (sum > target) {
				right--
			}
			//need a bigger number
			else {
				left++
			}
		}
	}
	return result;
}

//依旧采用 三指针 i left right
// 设置一个数为无穷大 Number Max_Value; 这样可以在第一次就更新
// 通过不断更新 

