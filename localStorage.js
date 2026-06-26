const storage = {
    // Save data with expiry time
    setItem(key, value, ttl) {
        const data = {
            value: value,
            expiry: Date.now() + ttl
        };
        localStorage.setItem(key,JSON.stringify(data));
    },
    // Getting data
    getItem(key) {
        const item = localStorage.getItem(key);
        if (!item) {
            return null;
        }
        const data = JSON.parse(item);
        // Checking if expired
        if (Date.now() > data.expiry) {
            localStorage.removeItem(key);
            return null;
        }
        return data.value;
    }
};
// Testing
storage.setItem("token", "abc123", 60000);
console.log(storage.getItem("token"));