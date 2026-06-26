// Setting initial value if it doesn't exist
if (!localStorage.getItem("count")) {
    localStorage.setItem("count", 0);
}
function updateCounter() {
    const count = localStorage.getItem("count");
    document.getElementById("counter").textContent = count;
}
updateCounter();

document.getElementById("btn").addEventListener("click", function () {
    let count = Number(localStorage.getItem("count"));
    count++;
    localStorage.setItem("count", count);

    updateCounter();

});

window.addEventListener("storage", function (event) {
    if (event.key === "count") {
        updateCounter();
    }

});