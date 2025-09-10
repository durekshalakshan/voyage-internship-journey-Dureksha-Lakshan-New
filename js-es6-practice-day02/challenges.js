// 1. Reverse a string
const reverseString = (str) => str.split("").reverse().join("");
console.log("1. Reverse String:", reverseString("hello"));

// 2. Factorial
const factorial = (n) => (n === 0 ? 1 : n * factorial(n - 1));
console.log("2. Factorial:", factorial(5));

// 3. Check Prime
const isPrime = (n) => {
  if (n < 2) return false;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return true;
};
console.log("3. Is Prime 7?", isPrime(7));

// 4. Max in array (reduce)
const numbers2 = [5, 10, 3, 8, 22];
const max = numbers2.reduce((a, b) => (a > b ? a : b));
console.log("4. Max number:", max);

// 5. Palindrome check
const isPalindrome = (str) => str === str.split("").reverse().join("");
console.log("5. Palindrome 'madam'?", isPalindrome("madam"));

// 6. Fibonacci sequence (iterative)
const fibonacci = (n) => {
  const seq = [0, 1];
  for (let i = 2; i < n; i++) {
    seq.push(seq[i - 1] + seq[i - 2]);
  }
  return seq;
};
console.log("6. Fibonacci (first 10):", fibonacci(10));

// 7. Find duplicates in array
const findDuplicates = (arr) => arr.filter((item, idx) => arr.indexOf(item) !== idx);
console.log("7. Duplicates:", findDuplicates([1, 2, 3, 2, 4, 5, 1]));

// 8. Anagram check
const isAnagram = (str1, str2) =>
  str1.split("").sort().join("") === str2.split("").sort().join("");
console.log("8. Anagram (listen/silent)?", isAnagram("listen", "silent"));

// 9. Count vowels in string
const countVowels = (str) => (str.match(/[aeiou]/gi) || []).length;
console.log("9. Count vowels:", countVowels("beautiful"));

// 10. Flatten nested array
const flatten = (arr) => arr.reduce((flat, val) => flat.concat(Array.isArray(val) ? flatten(val) : val), []);
console.log("10. Flatten array:", flatten([1, [2, [3, 4]], 5]));
