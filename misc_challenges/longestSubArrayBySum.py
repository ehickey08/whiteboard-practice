def findLongestSubarrayBySum(s, arr):
    window_sum = 0
    start_pointer = 0

    for i, num in enumerate(arr):
        window_sum += num

        if window_sum > s:
            while window_sum > s:
                window_sum -= arr[start_pointer]
                start_pointer += 1

        if window_sum == s:
            end_pointer = i
            end_pointer += 1
            while end_pointer < len(arr) and arr[end_pointer] == 0:
                end_pointer += 1
            return [start_pointer + 1, end_pointer]

    return [-1]


testArr = [28, 68, 142, 130, 41, 14, 175, 2, 78, 16, 84, 14, 193, 25, 2, 193, 160, 71, 29, 28, 85, 76, 187, 99, 171, 88, 48, 5,
           104, 22, 64, 107, 164, 11, 172, 90, 41, 165, 143, 20, 114, 192, 105, 19, 33, 151, 6, 176, 140, 104, 23, 99, 48, 185, 49, 172, 65]

print(findLongestSubarrayBySum(1562, testArr))
