# Telephone Words 

Write a function that takes up to four digits of a phone
number as a string, and returns a list of all of the words
that can be written on the phone with that number. The 
permuted words should maintain the same order as the input
digits. (You should return all permutations, not only English 
words.)
 
You're provided with a digits-to-letters mapping:
 
```python
digits_to_letters = {
  0: '0',
  1: '1',
  2: 'ABC',
  3: 'DEF',
  4: 'GHI',
  5: 'JKL',
  6: 'MNO',
  7: 'PQRS',
  8: 'TUV',
  9: 'WXYZ'
}
```
 
 For example, with the number `27`, our function should return 
 a list of all permutations that can be generated using the 
 `digits_to_letters` mapping:
 
 ```
 ['AP', 'AQ', 'AR', 'AS', 'BP', 'BQ', 'BR', 'BS', 'CP', 'CQ', 'CR', 'CS']
 ```