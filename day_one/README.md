# Shifted Binary Search 

Write a function that receives as input a sorted array of integers and a target integer; 
the function should find the target element in the input array using some form of the 
binary search algorithm. 

The caveat is that the array has been rotated at some random index. So for example, the input
might look like this:
```
[19, 27, 28, 33, 39, 41, 46, 49, 2, 5, 6, 10, 13, 14, 15, 17] 
```

instead of:
```
[2, 5, 6, 10, 13, 14, 15, 17, 19, 27, 28, 33, 39, 41, 46, 49]
```

Note how the last eight elements of the sorted array have been moved to the front,
but otherwise, the array is entirely sorted. 

Your function should search the input array for the target element using some form
of binary search and return the index of the element in the array or -1 if the element
is not contained in the array.

## Example
Input: `[19, 27, 28, 33, 39, 41, 46, 49, 2, 5, 6, 10, 13, 14, 15, 17], 33`

Expected output: `3`