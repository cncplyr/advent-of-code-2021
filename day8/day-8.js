let day8part1 = (input) => {
  return input.split('\n').map(r => r.split(' | ')[1]).filter(r => !!r).map(r => r.split(' ')).flat(1).filter(r => r.length === 2 || r.length === 3 || r.length === 4 || r.length === 7).length;
}

let day8part2 = (input) => {
    const rows = input.split('\n').filter(r => !!r);
    
    let sum = 0;
    
    rows.forEach(r => {
        const dict = {}
    
        const inputs = r.split(' | ')[0].split(' ').sort((a, b) => a.length - b.length).map(r => r.split('').sort().join(''));
        const outputs = r.split(' | ')[1].split(' ').map(r => r.split('').sort().join(''));
       
       // Find 1, 4, 7, 8
        dict[1] = inputs[0];
        dict[4] = inputs[2];
        dict[7] = inputs[1];
        dict[8] = inputs[inputs.length - 1];
        
        // Find 2, 3 and 5
        inputs.filter(r => r.length === 5).forEach(r => {
            if (noMatch(r, dict[1]).length === 3) {
                dict[3] = r;
            } else {
                if (noMatch(r, dict[4]).length === 2) {
                    dict[5] = r;
                } else {
                    dict[2] = r;
                }
            }
        });
        
        // Find 0, 6, 9
        inputs.filter(r => r.length === 6).forEach(r => {
            if (noMatch(r, dict[1]).length === 5) {
                dict[6] = r;
            } else {
                if (noMatch(r, dict[4]).length === 3) {
                    dict[0] = r;
                } else {
                    dict[9] = r;
                }
            }
        });
        
        const flippedDict = flipDict(dict);
        
        const result = +outputs.map(o => flippedDict[o]).reduce((a,n) => a += n);
        console.log(outputs + ' ' + result);
        sum += result;
    });
    
    return sum;
}

let noMatch = (left, right) => {
    return left.split('').filter(i => right.indexOf(i) === -1).join('');
}

let flipDict = (dict) => {
    let result = {}
    
    Object.keys(dict).map((k) => {
        result[dict[k]] = k
    });
    
    return result;
}
