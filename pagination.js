async function pagination(url) {
    let allUsers = [];
    let page=1;
    let limit = 10;
    while (true) {
        const response = await fetch(`${url}?_page=${page}&_limit=${limit}`);
        if (!response.ok) {
            throw new Error("Request Failed");
        }
        // Converting response to JSON
        const data = await response.json();
        // Adding users to final array
        allUsers.push(...data);
        // Checking if all users are fetched
        if (data.length === 0) {
            break;
        }
        // Moving to next page
        page++;
    }
    return allUsers;
}
//fetching
pagination("https://jsonplaceholder.typicode.com/users")
    .then(users => console.log(users))
    .catch(error => console.log(error.message));