var hasCycle = function(head) {
    // try solving with O(1) constant space
    // try two pointers: slow and fast pointer
    // if slow and fast are equal, we must have a cyle
    
    // edge case
    if (!head) {
        return false
    }
    
    let slow = head
    let fast = head
    
    // keep walking until fast hits the tail
    // when working with fast, you need two tests
    while ( fast && fast.next !== null  ) {
        slow = slow.next
        fast = fast.next.next
        
        if ( slow === fast ) {
            return true
        }
    }
    
    return false
};

// not constant space, but O(n)
// how do I know that I am revisiting a node?
    // can we add a property of visited to each node?
    // we should either hit a visited node or node.next will be null (tail)
    // edge case: no nodes are passed in
    if ( !head ) {
        return false
    }
    let node = head
    while ( node.next !== null ) {
        if ( node.visited ) {
            return true
        }
        else{
            node.visited = true
            node = node.next
        } 
    }
    return false