# Given two words (begin_word and end_word), and a dictionary's word list, return the shortest transformation sequence from begin_word to end_word, such that:

# Only one letter can be changed at a time.
# Each transformed word must exist in the word list. Note that begin_word is not a transformed word.
# Note:

# Return None if there is no such transformation sequence.
# All words contain only lowercase alphabetic characters.
# You may assume no duplicates in the word list.
# You may assume begin_word and end_word are non-empty and are not the same.

# begin_word = "hit"
# end_word = "cog"
# return: ['hit', 'hot', 'cot', 'cog']

# begin_word = "sail"
# end_word = "boat"
# ['sail', 'bail', 'boil', 'boll', 'bolt', 'boat']

# beginWord = "hungry"
# endWord = "happy"
# None

def word_ladder(begin_word, end_word, visited=set()):
    queue = []
    queue.append([begin_word])
    while len(queue) > 0:
        word_list = queue.pop(0)
        last_word = word_list[-1]
        if last_word == end_word:
            return word_list
        if last_word not in visited:
            visited.add(last_word)
            neighbors = get_word_neighbors(last_word)
            for neighbor in neighbors:
                list_copy = word_list.copy()
                list_copy.append(neighbor)
                queue.append(list_copy)
    



def get_word_neighbors(word):
    neighbors = []
    for i in range(len(word)):
        letters = list(word)
        for char in 'abcdefghijklmnopqrstuvwxyz':
            letters_copy = list(letters)
            letters_copy[i] = char
            new_word = "".join(letters_copy)
            neighbors.append(new_word)
    return neighbors

print(word_ladder("hit", "cog"))
