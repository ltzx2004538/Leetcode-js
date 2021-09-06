//Given a string s, return the longest palindromic substring in s.

const str = 'babad';

console.log(longestPalindrome(str));
// console.log(str.slice(0,2));
function longestPalindrome(str) {
	let res = '';
	if (str.length < 2) {
		return str
	}
	for (let i=0; i < str.length; i++) {
		for (let j = 0; j < 2; j++){
			let left = i;
			let right = i + j;

			while(left >=0 && right <= str.length && str[left] == str[right]) {
				console.log("left: " + left +" " + "right: " + right)
				left --;
				right ++;
			}

			let start = left + 1;
			let end = right;

			let subString = str.slice(start,end);
			console.log("/////////")
			console.log("start: " + start + " " + "end: " + end)
			console.log('subString: ' + subString)
			if(res.length < subString.length) {
				res = subString
			}
		}
	}
	return res;
};

