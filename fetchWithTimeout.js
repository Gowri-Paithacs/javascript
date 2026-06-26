async function fetchWithTimeout(url, ms) {
    // Fetch request
    const fetchPromise = fetch(url);
    // Timeout promise
    const timeoutPromise = new Promise((_, reject) => {
        setTimeout(() => {
            reject(new Error("Request timed out"));
        }, ms);
    });
    // Whichever finishes first wins
    const response = await Promise.race([
        fetchPromise,
        timeoutPromise
    ]);
    // Check if response is OK
    if (!response.ok) {
        throw new Error("Request Failed");
    }
    // Convert to JSON
    return response.json();
}
fetchWithTimeout("https://jsonplaceholder.typicode.com/posts/1",3000)
.then(data => console.log(data))
.catch(error => console.log(error.message));