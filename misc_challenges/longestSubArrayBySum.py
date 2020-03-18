def findLongestSubarrayBySum(s, arr):
    window_sum = 0
    start_pointer = 0
    best = [-1, -2]

    for i, num in enumerate(arr):
        window_sum += num

        while window_sum > s:
            window_sum -= arr[start_pointer]
            start_pointer += 1

        if window_sum == s:
            possible = [start_pointer + 1, i + 1]
            if (possible[1] - possible[0]) > (best[1] - best[0]):
                best = possible

    if best[0] != -1:
        return best
    else:
        return [-1]