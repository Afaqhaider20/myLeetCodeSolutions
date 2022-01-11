// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

 

// Example 1:

// Input: strs = ["flower","flow","flight"]
// Output: "fl"
// Example 2:

// Input: strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.
 

// Constraints:

// 1 <= strs.length <= 200
// 0 <= strs[i].length <= 200
// strs[i] consists of only lowercase English letters if it is non-empty.

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {

    let sorted = strs.sort();

    let left = strs[0];
    let right = strs[strs.length -1]

    let pre = "";

    for(let i = 0; i < left.length && i < right.length; i++){
        if(left[i] === right[i]){
            pre += left[i];
        }else {
            return pre;
        }
    }
    return pre;
    
};

//Example usage
console.log(longestCommonPrefix(["flower","flow","flight"])); // Output: "fl"
console.log(longestCommonPrefix(["dog","racecar","car"])); // Output: ""
console.log(longestCommonPrefix(["apple","app","april"])); // Output: "ap"
console.log(longestCommonPrefix(["",""])); // Output: ""
console.log(longestCommonPrefix(["a","b","c"])); // Output: ""
console.log(longestCommonPrefix(["a","ab","abc"])); // Output: "a"
console.log(longestCommonPrefix(["a","ab","abc","abcd"])); // Output: "a"
console.log(longestCommonPrefix(["a","ab","abc","abcd","abcde"])); // Output: "a"
console.log(longestCommonPrefix(["a","ab","abc","abcd","abcde","abcdef"])); // Output: "a"