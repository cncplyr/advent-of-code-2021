let day7part1 = (positions) => {
    let max = Math.max(...positions);
    let results = {}
    
    for (target = 0; target < max; target++) {
        let targetSum = 0;
        
        for (i = 0; i < positions.length; i++) {
            targetSum += Math.abs(positions[i] - target)
        }
        results[targetSum] = target;
    }
    
    return results;
}

let day7part2 = (positions) => {
    let max = Math.max(...positions);
    let results = {}
    
    for (target = 0; target < max; target++) {
        let targetSum = 0;
        
        for (i = 0; i < positions.length; i++) {
            let distance = Math.abs(positions[i] - target)
            targetSum += (distance * (1 + distance) / 2)
        }
        results[targetSum] = target;
    }
    
    return results;
}
