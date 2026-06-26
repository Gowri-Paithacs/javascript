function deepDiff(a, b) {
    let result = {};
    // Getting all keys from both objects
    const keys = new Set([...Object.keys(a),...Object.keys(b)]);
    for (let key of keys) {
        // Key removed
        if (!(key in b)) {
            result[key] = {
                removed: a[key]
            };
        }
        // Key added
        else if (!(key in a)) {
            result[key] = {
                added: b[key]
            };
        }
        // Both values are objects
        else if (
            typeof a[key] === "object" &&
            typeof b[key] === "object" &&
            a[key] !== null &&
            b[key] !== null
        ) {
            const nestedDiff = deepDiff(a[key], b[key]);
            if (Object.keys(nestedDiff).length > 0) {
                result[key] = nestedDiff;
            }
        }
        // Value updated
        else if (a[key] !== b[key]) {
            result[key] = {
                from: a[key],
                to: b[key]
            };
        }
    }
    return result;
}
//Testing
const obj1 = {
    x: 1,
    y: {
        z: 2
    }
};
const obj2 = {
    x: 1,
    y: {
        z: 3
    },
    w: 4
};
console.log(deepDiff(obj1, obj2));