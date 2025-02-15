# Dutch-National-Flag-Algorithm

** Sorting an Array of Red, Green, and Blue Balls using Dutch National Flag Algorithm ** 

Problem Statement

Given an array of balls in three different colors: Red (R), Green (G), and Blue (B), sort them in increasing order such that:

All B (Blue) balls come first.

Followed by G (Green) balls.

All R (Red) balls come last.

The sorting must be done in O(n) time complexity and O(1) space complexity (i.e., in-place sorting).

 # Constraints
 
Time Complexity: O(n)

Space Complexity: O(1) (No extra memory usage)

Sorting Order: B → G → R

# Approach: Dutch National Flag Algorithm

This problem is solved using the Dutch National Flag Algorithm, which efficiently sorts three distinct elements in a single pass using a three-pointer approach.

Steps to Solve:

Use three pointers:

low → Tracks the position for B (Blue).

mid → Traverses the array and processes elements.

high → Tracks the position for R (Red).

Traverse the array:

If the current element is B: Swap it with low and move low & mid forward.

If the current element is G: It is in the correct position, move mid forward.

If the current element is R: Swap it with high and move high backward.

Continue until mid crosses high, ensuring all elements are correctly placed.

# Complexity Analysis

Time Complexity: O(n) (Each element is processed only once)

Space Complexity: O(1) (Sorting is done in-place)

# Why is This Approach Efficient?

✅ Avoids Sorting Algorithms (which take O(n log n))

✅ Processes Each Element Only Once

✅ Does Not Use Extra Memory (In-Place Sorting)


