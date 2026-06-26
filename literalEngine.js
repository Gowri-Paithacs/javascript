//Implement a template literal engine 
function render(template, data) {
    let result = "";
    let i = 0;
    while (i < template.length) {
        let start = template.indexOf("{{", i);
        if (start === -1) {
            result += template.slice(i);
            break;
        }
        result += template.slice(i, start);
        let end = template.indexOf("}}", start);
        if (end === -1) {
            result += template.slice(start);
            break;
        }
        let key = template.slice(start + 2, end).trim();
        if (key in data) {
            result += data[key];
        } else {
            result += `[missing:${key}]`;
        }
        i = end + 2;
    }
    return result;
}
console.log(
    render("Hello {{name}}, {{count}} msgs", {
        name: "Arjun",
        count: 5
    })
);
console.log(
    render("Hi {{name}}, age {{age}}", {
        name: "Ali"
    })
);
