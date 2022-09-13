function toggleNav(x) {
    var x = window.matchMedia("(max-width: 600px)")
    var links = document.getElementById("hamburger");
    if (x.matches) {
        if (links.style.display === "block") {
            links.style.display = "none";
        } else {
            links.style.display = "block";
        }
    } else {
        links.style.display = "none";
    }
}

var x = window.matchMedia("(max-width: 600px)")
x.addEventListener("change", () => {
    toggleNav(x)
})
