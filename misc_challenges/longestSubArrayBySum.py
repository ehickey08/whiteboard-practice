def findLongestSubarrayBySum(s, arr):
    window_sum = 0
    start_pointer = 0

    for i, num in enumerate(arr):
        window_sum += num

        if window_sum > s:
            window_sum -= arr[start_pointer]
            start_pointer += 1

        if window_sum == s:
            end_pointer = i
            end_pointer += 1
            while end_pointer < len(arr) and arr[end_pointer] == 0:
                end_pointer += 1
            return [start_pointer + 1, end_pointer]

    return [-1]