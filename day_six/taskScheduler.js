let tasks = [9, 4, 10, 13, 3, 5]
let dependencies = [[10, 3], [10, 4], [3,9], [13, 4], [5, 10], [5, 13]]

const taskScheduler = (tasks, dependencies) => {
    let graph = {}
    let preReqs = {}
    for(let job of tasks){
        graph[job] = []
        preReqs[job] = 0
    }
    for(let pair of dependencies){
        let [first, second] = pair
        graph[first].push(second)
        preReqs[second]++
    }

    let result = []
    let queue = []

    for(let job in preReqs){
        if(preReqs[job] === 0)
            queue.push(job)
    }
    
    while(queue.length > 0){
        let job = queue.shift()
        result.push(job)
        delete preReqs[job]
        for(let dependent of graph[job]){
            preReqs[dependent]--
            if(preReqs[dependent] === 0)
                queue.push(dependent)
        }
    }

    return result
}

console.log(taskScheduler(tasks, dependencies)) 