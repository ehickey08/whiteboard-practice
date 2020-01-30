# Find the Start of Linked List Cycle 

Given the head of a singly linked list that may or may not contain a cycle, design an algorithm that returns 
a reference to the node that is the start of the cycle (assuming the list contains a cycle). If the list
doesn't contain a cycle, return the head of the linked list. 

![Linked List Cycle Examples](https://user-images.githubusercontent.com/4572868/73412447-89d94500-4300-11ea-84ec-06afcb22bb74.png)


[-21,10,17,8,4,26,5,35,33,-7,-16,27,-12,6,29,-12,5,9,20,14,14,2,13,-24,21,23,-21,5](cycles back to at index 24 which is -24)
                                                                        ^cycle starts
-24 -21
//they will equal each other at 21
-21 -21
10 21
17 -21
8 21
4 -21
26 21
5 -21
35 21
33 -21
-7 21
-16 -21
27 21
-12 -21
6 21
29 -21
-12 21
5 -21
9 21
20 -21
14 21
14 -21
2 21
13 -21
-24 21
21 -21
23 21