//Longest palindromic substring Without regex or .reverse(), find the longest palindromic substring in O(n²) using expand-around-center.
function longestPalindrome(str) {
    let longest = "";
    for (let i = 0; i < str.length; i++) {
        let left = i;
        let right = i;
        while (
            left >= 0 &&
            right < str.length &&
            str[left] === str[right]
        ) {
            let palindrome = str.slice(left, right + 1);
            if (palindrome.length > longest.length) {
                longest = palindrome;
            }
            left--;
            right++;
        }
        left = i;
        right = i + 1;
        while (
            left >= 0 &&
            right < str.length &&
            str[left] === str[right]
        ) {
            let palindrome = str.slice(left, right + 1);
            if (palindrome.length > longest.length) {
                longest = palindrome;
            }
            left--;
            right++;
        }
    }
    return longest;
}
console.log(longestPalindrome("babad"));
console.log(longestPalindrome("racecar"));
console.log(longestPalindrome("abacaba"));