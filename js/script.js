const searchInput = document.getElementById("searchInput");
const faders = document.querySelectorAll(".fade-in");


searchInput.addEventListener("keyup", function () {
    const filter = searchInput.value.toLowerCase();
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

document.addEventListener("DOMContentLoaded", function () {
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