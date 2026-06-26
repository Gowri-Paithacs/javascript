function deepClone(obj, visited = new WeakMap()) {
    // Step 1: Returning primitive values directly
    if (obj === null || typeof obj !== "object") {
        return obj;
    }
    // Step 2: Handling circular references
    if (visited.has(obj)) {
        return visited.get(obj);
    }
    // Step 3: Handling Date
    if (obj instanceof Date) {
        return new Date(obj);
    }
    // Step 4: Handling Array
    if (Array.isArray(obj)) {
        const arr = [];
        visited.set(obj, arr);
        for (let item of obj) {
            arr.push(deepClone(item, visited));
        }
        return arr;
    }
    // Step 5: Handling Map
    if (obj instanceof Map) {
        const map = new Map();
        visited.set(obj, map);
        for (let [key, value] of obj) {
            map.set(
                deepClone(key, visited),
                deepClone(value, visited)
            );
        }
        return map;
    }
    // Step 6: Handling Set
    if (obj instanceof Set) {
        const set = new Set();
        visited.set(obj, set);
        for (let value of obj) {
            set.add(deepClone(value, visited));
        }
        return set;
    }
    // Step 7: Handling Normal Objects
    const clone = {};
    visited.set(obj, clone);
    for (let key in obj) {
        clone[key] = deepClone(obj[key], visited);
    }
    return clone;
}
//testing
const obj = {
    a: 1,
    b: {
        c: new Date(),
        d: new Set([1, 2])
    },
    map: new Map([
        ["name", "John"],
        ["age", 20]
    ])
};
obj.circular = obj;
const clone = deepClone(obj);
console.log(clone);
console.log(clone !== obj);               
console.log(clone.b !== obj.b);           
console.log(clone.b.c instanceof Date);   
console.log(clone.b.d instanceof Set);    
console.log(clone.map instanceof Map);    
console.log(clone.circular === clone); 