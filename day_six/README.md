# Task Scheduler

You are given a list of jobs IDs of jobs that must be completed, along with an array of dependencies 
where each dependency is a 2-element array that specifies that the first job is a prerequisite for 
the second job. Design an algorithm that finds an ordering of when the jobs may be completed. Note 
that there may be multiple correct orderings for a job list, or there may be none. 

For example, given this list of jobs:
```
[9, 4, 10, 13, 3, 5]
```
and this list of dependencies:
```
[[10, 3], [10, 4], [3, 9]]
```

One valid job ordering would be `[10, 13, 5, 3, 4, 9]`. 
