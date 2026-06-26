//Implement Array.prototype.reduce() from scratch
Array.prototype.myReduce = function (callback, initialValue) {
    let result = initialValue;
    for (let i = 0; i < this.length; i++) {
        result = callback(result, this[i]);
    }
    return result;
};
// Testing
console.log(
    [1, 2, 3].myReduce((sum, num) => sum + num, 0)
);