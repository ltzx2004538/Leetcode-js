// Given n non-negative integers a1, a2, ..., an , 
// where each represents a point at coordinate (i, ai).
// n vertical lines are drawn such that the two endpoints of the line i is at (i, ai) and (i, 0). 
// Find two lines, which, together with the x-axis forms a container, such that the container contains the most water.
// Notice that you may not slant the container.

let nums = [1,8,6,2,5,4,8,3,7];

function maxArea (nums) {
	let area = 0;
	let i = 0;
	let j = nums.length -1;
	while (i < j) {
		const height = Math.min(nums[i], nums[j]);
		const width = j - i;
		area = Math.max(area, height * width);
		nums[i] <= nums[j] ? i++ : j--
	}
	return area;
}

console.log(maxArea(nums))

// 双指针法， i 从头开始往后 j 从后开始往前
// 新的值若比现有的值大则更新