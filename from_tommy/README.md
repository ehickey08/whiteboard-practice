1. Consider a method which accepts an integer value, and returns that value
multiplied by 321. Implement this method in two or more languages, observing
the following constraints:
A) the multiplication operator ('*') is not used.
B) the division operator ('/') is not used.
C) the function does not make use of loops.


2. Write a function which takes an array of integers, and places all occurrences of
the value 0 (zero) to the back of the list. Non-zero values are to appear in the
same relative order.
example input:
2 0 2 3 4 64 98 0 2 0
example output:
2 2 3 4 64 98 2 0 0 0
Give one solution that emphasizes clarity.
Give another solution that emphasizes speed.
You may use any languages you wish, but code the core logic yourself (please don't
use a library routine).


3. Describe how you might test the Unix 'ls' command, or the Windows 'dir' command.
=========================================================================
1) if access to source code, code instrumentation to ensure all branches of code are executed in test.
2) write a test matrix identifying all switches and switch combinations along with expected results.
3) create a functional test suite similar to the following (2 files: lstest.py , ls.py. ls.py is just a glorified wrapper to ls which traps the output for the unit test in lstest.py). This test suite should implement the test matrix. Only the '-a' switch is shown here. This test should be extended to handle various file sizes, ownership, dates, etc. But the suite must create the files/directories to create a known state.


4. Describe how you might test a remote controlled toy car.
white box unit testing (remote control / car)
module testing (remote control / car)
integration testing (remote control & car)
system testing (remote control & car & spec)


5. Describe five important qualities of software.
Choosing 5 from the various traits of importance to the various facets of software:
Usability:
Easy to use
User Experience
Performance
Engaging
Error Tolerant
Quality:
Maintainability
Reusability
Reliability
Security
Error Tolerant
System:
Readability
Testability
Maintainability
Reusability
Meta:
Correctness
Portability


6. Describe the value that testing frameworks provide, and provide an example from
your experience in which a testing framework failed to prevent or detect a flaw,
and how the tests were enhanced to address the problem. Describe any scenarios in
which you feel a testing framework can be more trouble than it is worth.


7. Do you have any hobby software projects? If so, describe.


8. What achievement in software development are you most proud of?


9. When designing a web-based API, describe the challenges and solutions encountered
when the service scales up from low user counts during development through millions
of users in production.
=================
This was the intro test that then led to an onsite interview and programming test.


The simplest one we'd ask was:
The factorial function can be defined as factorial(n) = n*(n-1)*(n-2)*...*1. Write an example factorial function.
You'd be surprised how many people would fail that one for even the most basic of cases (we didn't really worry about larger numbers).
