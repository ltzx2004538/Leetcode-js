// Given a string s, find the length of the longest substring without repeating characters.

const str = 'pwdswdabc';

const lengthOfLongestSubstringBySet = (s) => {
	const set = new Set();
	let max = (l = r = 0);
  
	while (r < s.length) {
		//判断set中是否含有这个值
		//若没有重复则添加这个字母进入set
		if (!set.has(s[r])) {
			set.add(s[r]);
			r++;
			max = Math.max(max, set.size);
		} 
		//若为重复值则从set最初开始删除，直到删掉这个重复值
		else {
			set.delete(s[l++]);
		}
	}
	return max;
};

const lengthOfLongestSubstringByMap = (s) => {
	const mostRecent = new Map(); // Stores the most recent idx
	let startIdx = 0; //从哪个字母开始计算
	let res = 0;
	//pwdswdabc
	for (let i = 0; i < s.length; i++) {
		if (mostRecent.has(s[i]) && mostRecent.get(s[i]) >= startIdx) {
			res = Math.max(res, i - startIdx); //(0, 4)
			startIdx = mostRecent.get(s[i]) + 1;
		}
		mostRecent.set(s[i], i);
		console.log("startIndex " + startIdx);
		console.log(mostRecent)
	}
	return Math.max(res, s.length - startIdx);
	};

	console.log(lengthOfLongestSubstringBySet(str));
	console.log(lengthOfLongestSubstringByMap(str));

	//set对象中的值为唯一值