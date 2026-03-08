// PAGE DEVICE SEARCH
const pageSearch = document.getElementById("searchInput");
if (pageSearch) {
    pageSearch.addEventListener("keyup", function () {
        const filter = pageSearch.value.toLowerCase();
        const devices = document.querySelectorAll(".device-item");
        devices.forEach(function (device) {
            const text = device.innerText.toLowerCase();
            if (text.includes(filter)) {
                device.style.display = "block";
            } else {
                device.style.display = "none";
            }
        });
    });
}

// GLOBAL SITE SEARCH
const globalSearch = document.getElementById("globalSearch");
if (globalSearch) {
    globalSearch.addEventListener("keyup", function () {
        let value = globalSearch.value.toLowerCase();
        if (value.includes("iphone")) {
            window.location.href = "iphone.html";
        }
        if (value.includes("macbook")) {
            window.location.href = "macbook.html";
        }
        if (value.includes("ipad")) {
            window.location.href = "ipad.html";
        }
        if (value.includes("watch")) {
            window.location.href = "watch.html";
        }
        if (value.includes("stats")) {
            window.location.href = "stats.html";
        }
    });
}

// FADE IN ANIMATION
document.addEventListener("DOMContentLoaded", function () {
    const faders = document.querySelectorAll(".fade-in");
    const appearOptions = {
        threshold: 0.3
    };
    const appearOnScroll = new IntersectionObserver(function (entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }
        });
    }, appearOptions);
    faders.forEach(fader => {
        appearOnScroll.observe(fader);
    });
});