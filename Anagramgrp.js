//Anagram(same letters in diferent order) Grouping
function groupAnagrams(words) {
    let map = {};
    for (let word of words) {
        let key = word.split("").sort().join("");
        if (!map[key]) {
            map[key] = [];
        }
        map[key].push(word);
    }
    return Object.values(map);
}
console.log(groupAnagrams(['eat','tea','tan','ate','nat','bat']));