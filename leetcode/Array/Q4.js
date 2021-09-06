//Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.

// The overall run time complexity should be O(log (m+n)).

//example 1
// Input: nums1 = [1,3], nums2 = [2]
// Output: 2.00000
// Explanation: merged array = [1,2,3] and median is 2.

//example 2
// Input: nums1 = [1,2], nums2 = [3,4]
// Output: 2.50000
// Explanation: merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5.

let nums1 = [1,2]
let nums2 = [3,4]

console.log(findMedian(nums1,nums2));
console.log(sortArray(nums1,nums2));

function findMedian(nums1,nums2){
	let i = j = 0;
	let set = [];
	while (i < nums1.length && j < nums2.length) {
		if (nums1[i] < nums2[j]) {
			set.push(nums1[i]);
			i++;
		}
		else {
			set.push(nums2[j]);
			j++;
		}
	}
	while (i< nums1.length) {
		set.push(nums1[i]);
		i++
	}
	while (j< nums2.length) {
		set.push(nums2[j]);
		j++
	}
	const totalNum = set.length
	if (set.length % 2 ===0){
		return (set[totalNum /2] + set[(totalNum/2) - 1])/2;
	}
	else {
		return set[(totalNum + 1)/2];
	}
}

function sortArray(nums1,nums2) {
	const nums = nums1.concat(nums2);
	nums.sort( (a,b) => {
		return a - b;
	})
	return nums;
}

//两表需要先排序
// 利用 i j 互相比较， 小的先push进入array 然后对比下一个
// js 中的sort 可以快速给数字array排序