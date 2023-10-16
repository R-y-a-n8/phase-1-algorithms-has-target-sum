function hasTargetSum(arr, target) {
    const numSet = new Set(); // Create a set to store seen numbers
  
    for (let num of arr) {
      const complement = target - num; // Calculate the complement for the current number
  
      if (numSet.has(complement)) {
        return true; // Found a pair that adds up to the target
      }
  
      numSet.add(num); // Add the current number to the set
    }
  
    return false; // No pair adds up to the target
  }
  
  // Example usage:
  console.log(hasTargetSum([1, 2, 3, 4, 5], 9)); // Output: true (4 + 5 = 9)
  console.log(hasTargetSum([1, 2, 3, 4, 5], 10)); // Output: false (no pair adds up to 10)
  console.log(hasTargetSum([1, 2, 3, 4, 5], 6)); // Output: true (1 + 5 = 6)
  
  console.log(hasTargetSum([1, 2, 3, 4, 5], 8)); // Output: true (3 + 5 = 8)
console.log(hasTargetSum([1, 2, 3, 4, 5], 7)); // Output: true (2 + 5 = 7)
console.log(hasTargetSum([1, 2, 3, 4, 5], 12)); // Output: false (no pair adds up to 12)
console.log(hasTargetSum([1, 2, 3, 4, 5], 1)); // Output: false (no pair adds up to 1)

function hasTargetSum(arr, target) {
    const numSet = new Set();
  
    for (let num of arr) {
      const complement = target - num;
  
      if (numSet.has(complement)) {
        return true;
      }
  
      numSet.add(num);
    }
  
    return false;
  }
  