# Dhoni Fan - Problem Statement  

Alex, a huge Dhoni fan, loves the number 7. He has an array of size `N` and wants to find all the subarrays that contain the number `7` at least once.  

## Problem Approach  

To solve the problem, the goal is to iterate through all possible subarrays of the given array and check whether the subarray contains the number `7`. If it does, we count that subarray as valid.  

### Initial Approach: Brute Force  
1. **Iterate through each subarray**:  
   - Start from each index `i` of the array.  
   - For each starting index `i`, iterate from `i` to the end of the array (`j`), creating subarrays `arr[i...j]`.  

2. **Check for the presence of `7`**:  
   - Use the `includes(7)` method to verify if the number `7` exists in the current subarray.  

3. **Count valid subarrays**:  
   - Increment the counter if the subarray contains `7`.  

4. **Output the count**:  
   - Print the final count of subarrays containing `7`.  

#### Code for Brute Force Approach  

```javascript
// Read the size of the array
input = input.trim().split("\n");
const N = parseInt(input[0].trim());

// Read the array elements
const arr = input[1].split(" ").map(Number);

// Initialize count
let count = 0;

// Iterate through each subarray
for (let i = 0; i < N; i++) {
    for (let j = i; j < N; j++) {
        if (arr.slice(i, j + 1).includes(7)) {
            count++;
        }
    }
}

// Output the count
console.log(count);
```
### Time Complexity and Space Complexity  
- **Time Complexity**: `O(N^2)` because we are iterating through all subarrays.  
- **Space Complexity**: `O(1)` for counting (excluding the temporary subarray slice).  

### Sample Input and Output  

#### Example 1  
**Input:**  
3
1 7 2 


**Output:**  
4






---

## Optimized Solution  

The brute force approach iterates over all subarrays, making it inefficient for large arrays. We can optimize the solution by leveraging the positions of the number `7` to calculate subarray counts directly.

### Optimized Approach  
1. **Identify the positions of `7` in the array**:  
   - Traverse the array and store the indices where `7` appears.  

2. **Calculate the contribution of each occurrence of `7`**:  
   - For each index `i` where `arr[i] == 7`:  
     - Count subarrays starting before or at `i`: `(i + 1)` subarrays.  
     - Count subarrays ending after or at `i`: `(N - i)` subarrays.  

3. **Count valid subarrays**:  
   - Multiply the two counts from step 2 to get the total contribution of `arr[i]`.  
   - Add this to the overall count.

### Code Implementation  

```javascript
// Read the input
input = input.trim().split("\n");
const N = parseInt(input[0].trim());
const arr = input[1].split(" ").map(Number);

// Initialize count
let count = 0;

// Find indices of 7
for (let i = 0; i < N; i++) {
    if (arr[i] === 7) {
        count += (i + 1) * (N - i);
    }
}

// Output the count
console.log(count);
```

# Prime Substring Problem

## Problem Statement

You're given a string `str` of length `N`. Count the number of substrings whose length is a prime number.

### Approach

To solve the problem, we iterate through each possible substring of the string, calculate its length, and check if the length is a prime number.

### Key Concepts:

1. **Substrings**: A substring is any contiguous portion of a string. If a string has a length `N`, there are `N * (N + 1) / 2` possible substrings.
  
2. **Prime Number**: A prime number is a number greater than 1 that has no divisors other than 1 and itself. For this problem, we need to check whether the length of a substring is prime.

### Detailed Explanation

1. **Function to Check if a Number is Prime**:
   - To determine if the length of a substring is prime, we define a helper function `isPrime(num)` that returns `true` if `num` is prime, and `false` otherwise.
   - This function checks divisibility of `num` by all integers from `2` to `sqrt(num)` for efficiency.

2. **Iterating Through Substrings**:
   - For each starting index `i` and ending index `j` in the string, we calculate the length of the substring (`j - i + 1`).
   - If the length is prime, we increment the counter.
  
3. **Final Count**:
   - After processing all substrings, the final count is the number of substrings whose length is prime.

### Code

```javascript
// Function to check if a number is prime
function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false; 
    }
    return true;
}

// Read the string and its length
const N = parseInt(prompt("Enter length of the string:")); 
const str = prompt("Enter the string:");

// Initialize count
let count = 0;

// Iterate through each substring
for (let i = 0; i < N; i++) {
    for (let j = i; j < N; j++) {
        if (isPrime(j - i + 1)) {
            count++; // If length is prime, increment count
        }
    }
}

// Output the count
console.log(count);
```

# Sum of Subarray

## Problem Statement

Given an array of `N` integers and a single integer `K`, determine if there exists a subarray with a sum equal to `K`.

## Approach

We aim to find a subarray whose sum is equal to `K`. To optimize the solution, we use a **hash set** to store the running sums encountered so far. This allows us to efficiently check if the required subarray exists in linear time.

---

### Optimized Approach

1. **Use a Running Sum**:
   - Maintain a `currentSum` variable to store the cumulative sum of the array as we iterate through it.

2. **Check for Subarray Condition**:
   - If `currentSum` is equal to `K`, then a valid subarray starts from the beginning of the array.
   - If `currentSum - K` exists in the set of previously seen sums, it means there is a subarray with a sum equal to `K`.

3. **Update the Set**:
   - Add the current running sum (`currentSum`) to the set for future checks.

4. **Return Result**:
   - If the condition is met at any point, return `"Yes"`.
   - If the loop completes without finding a valid subarray, return `"No"`.

---

### Code

```javascript
// Bruteforce solution
let nums =[1,2,3,4,3],k=7
let count=0
for (let i=0;i<nums.length;i++){
    let sum=0
    for (let j=i;j<nums.length;j++){
        sum+=nums[j]
        if(sum===k){
            console.log(i,j) // to print the indices of subarrays
            count++          // to count number of subarrays
        }
    }
}
console.log(count)

```

```javascript
// Function to check if a subarray with sum K exists using the prefix sum approach
function subarraySum(arr, K) {
    const prefixSums = new Map(); // Map to store prefix sums and their frequencies
    let currentSum = 0;

    for (let num of arr) {
        currentSum += num;

        // Check if subarray exists
        if (currentSum === K) {
            return "Yes";
        }
        if (prefixSums.has(currentSum - K)) {
            return "Yes";
        }

        // Update prefix sum map
        prefixSums.set(currentSum, (prefixSums.get(currentSum) || 0) + 1);
    }

    return "No"; // No valid subarray found
}

// Driver code
// Read the number of test cases
const T = parseInt(prompt("Enter number of test cases:"));

for (let t = 0; t < T; t++) {
    const [N, K] = prompt("Enter N and K:").split(" ").map(Number);
    const arr = prompt("Enter array elements:").split(" ").map(Number);
    console.log(subarraySum(arr, K));
}

```
# Problem: Compete with Neighbour

## Problem Statement:
Given a list of integers, count how many integers are larger than their neighbors.

## Approach:

We will iterate through the list and compare each element to its two immediate neighbors. For each element, if it is greater than both its previous and next neighbors, we count it as an integer that is larger than its neighbors.

### Key Steps:
1. **Iterate through the array**: We will loop through the list starting from index 1 and ending at `length - 2` because the first and last elements do not have two neighbors to compare.
2. **Compare with neighbors**: For each element, compare it with its previous (`arr[i - 1]`) and next (`arr[i + 1]`) elements.
3. **Count the larger elements**: If an element is greater than both its neighbors, increment the count.

### Function to count integers larger than their neighbors:

```javascript
function countLargerThanNeighbors(arr) {
    let count = 0;
    for (let i = 1; i < arr.length - 1; i++) {
        if (arr[i] > arr[i - 1] && arr[i] > arr[i + 1]) {
            count++;
        }
    }
    return count;
}
```

# Problem: Birthday Gift

## Problem Statement:
You have two strings as gifts. Determine if the gifts are similar, ignoring case.

## Approach:

We will compare the characters of both strings at each index, but we will ignore the case of the characters. If all characters match (ignoring case), the gifts are considered "Angry." Otherwise, they are "Not Angry."

### Key Steps:
1. **Iterate through the strings**: We will loop through the characters of both strings one by one.
2. **Compare characters ignoring case**: For each pair of characters at the same index in both strings, convert both characters to lowercase and compare them.
3. **Return the result**: If any pair of characters do not match (ignoring case), we return "Not Angry." If all characters match, we return "Angry."

### Function to check if the gifts are similar:

```javascript
function checkGifts(string1, string2) {
    for (let i = 0; i < string1.length; i++) {
        if (string1[i].toLowerCase() !== string2[i].toLowerCase()) {
            return "Not Angry";
        }
    }
    return "Angry";
}
```

# Problem: Catch that 420!

## Problem Statement:
Given an integer `N`, determine if the string "420" is present in it.

## Approach:

The solution involves the following steps:
1. **Convert the integer to a string**: Convert the given integer `N` to its string representation so we can search for the substring "420."
2. **Check for the presence of "420"**: Use the `.includes()` method on the string representation of `N` to check if the substring "420" is present.
3. **Output the result**: If "420" is found, output "Caught." Otherwise, output "Escaped."

### Function to check for "420":

```javascript
// Read the integer
const N = parseInt(prompt("Enter a number:"));

// Check if "420" is present
if (N.toString().includes("420")) { 
    console.log("Caught");
} else { 
    console.log("Escaped");
}
```