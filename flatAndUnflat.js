//flatten
function flatten(obj, parentKey = "", result = {}) {
    for (let key in obj) {
        let newKey = parentKey
            ? parentKey + "." + key
            : key;
        // Checking if value is an object or array
        if (
            typeof obj[key] === "object" &&
            obj[key] !== null
        ) {
            flatten(obj[key], newKey, result);
        }
        // Storing primitive value
        else {
            result[newKey] = obj[key];
        }
    }
    return result;
}
//unflatten
function unflatten(obj) {
    let result = {};
    for (let key in obj) {
        const keys = key.split(".");
        let current = result;
        for (let i = 0; i < keys.length; i++) {
            const part = keys[i];
            const nextPart = keys[i + 1];
            // Last key
            if (i === keys.length - 1) {
                current[part] = obj[key];
            }
            else {
                // Decide whether next should be Array or Object
                if (!current[part]) {
                    if (!isNaN(nextPart)) {
                        current[part] = [];
                    } else {
                        current[part] = {};
                    }
                }
                current = current[part];
            }
        }
    }
    return result;
}

//testing
const object = {
    a: {
        b: {
            c: 1
        }
    }
};
const flat = flatten(object);
console.log(flat);
const original = unflatten(flat);
console.log(original);

//test 2(arrays)
const objs = {
    user: {
        hobbies: ["Coding", "Music"]
    }
};
const flat2 = flatten(objs);
console.log(flat2);
const original2 = unflatten(flat2);
console.log(original2);

//test3(objects inside arrays)
const obj3 = {
    users: [
        {
            name: "John",
            age: 20
        },
        {
            name: "Alice",
            age: 22
        }
    ]
};
const flat3 = flatten(obj3);
console.log(flat3);
const original3 = unflatten(flat3);
console.log(original3);