async function fetchWithRetry(url, options = {}) {
    // Number of retries
    const retries = options.retries || 3;

    // Starting delay
    let delay = 500;
    for (let attempt = 1; attempt <= retries; attempt++) {
        try {
            const response = await fetch(url);
            // If response is not OK, throw an error
            if (!response.ok) {
                throw new Error("Request Failed");
            }
            // Converting response to JSON
            const data = await response.json();
            return data;
        } catch (error) {
            console.log(`Attempt ${attempt} failed`);

            // If this is the last attempt, throw error
            if (attempt === retries) {
                throw error;
            }
            console.log(`Waiting ${delay}ms before retrying...`);

            // Waiting before retrying
            await new Promise(resolve =>
                setTimeout(resolve, delay)
            );

            // Doubling the delay
            delay *= 2;
        }
    }
}
fetchWithRetry("https://jsonplaceholder.typicode.com/posts/1",{ retries: 3 })
.then(data => console.log(data))
.catch(error => console.log(error));