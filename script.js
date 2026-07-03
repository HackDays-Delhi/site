const prize1 = document.getElementById("prize1");
const prize2 = document.getElementById("prize2");
const prize3 = document.getElementById("prize3");
const prize4 = document.getElementById("prize4");
const prizee = document.getElementById("prizee");
const where = document.getElementById("where");
const when = document.getElementById("when");
const timeline = document.getElementById("timeline");
const venue = document.getElementById("venue");
const sponsors = document.getElementById("sponsors");
const indiagate = document.getElementById("indiagate");
const wave = document.getElementById("wave");
const timel = document.getElementById("timel");
const time1 = document.getElementById("time1");
const when1 = document.getElementById("when1");
const timo = document.getElementById("timo");
const cam = document.getElementById("cam");
const container = document.getElementById("container");
const timelineContent = document.getElementById("timeline-content");
const sponimg = document.getElementById("sponimg");

function countdown() {
    const now = new Date();
    const event = new Date("2026-07-25T09:00:00");
    const diff = event - now;
    const day = diff / (1000 * 60 * 60 * 24);
    const days = Math.floor(day);
    const hour = (day - days) * 24;
    const hours = Math.floor(hour);
    const min = (hour - hours) * 60;
    const mins = Math.floor(min);
    const sec = (min - mins) * 60;
    const secs = Math.floor(sec);
    time1.textContent = `${days}d  ${hours}h  ${mins}m  ${secs}s`;
}
setInterval(countdown, 1000);

function hideAll() {
    // Reset Prizes
    prize1.classList.remove("rig1", "dis");
    prize2.classList.remove("right", "dis");
    prize3.classList.remove("right", "dis");
    prize4.classList.remove("rig1", "dis");

    // Reset Hero elements
    indiagate.classList.remove("add");
    timel.classList.remove("show");
    time1.classList.remove("show");
    when1.classList.remove("show");

    // Reset Container & Overlays
    container.classList.remove("show");
    timelineContent.classList.remove("show");
    sponimg.classList.remove("show");
    cam.classList.remove("show");

    // Reset Wave
    wave.classList.remove("wavenew");
    // Trigger reflow for animation
    void wave.offsetWidth;
    wave.classList.add("wavenew");
}

prizee.onclick = () => {
    hideAll();
};

where.onclick = () => {
    hideAll();
    indiagate.classList.add("add");
    prize1.classList.add("rig1");
    prize2.classList.add("right");
    prize3.classList.add("right");
    prize4.classList.add("rig1");
};

venue.onclick = () => {
    hideAll();
    indiagate.classList.add("add");
    prize1.classList.add("rig1");
    prize2.classList.add("right");
    prize3.classList.add("right");
    prize4.classList.add("rig1");
};

when.onclick = () => {
    hideAll();
    timel.classList.add("show");
    time1.classList.add("show");
    when1.classList.add("show");
    prize1.classList.add("rig1");
    prize2.classList.add("right");
    prize3.classList.add("right");
    prize4.classList.add("rig1");
};

timeline.onclick = () => {
    hideAll();
    timo.textContent = "Timeline";
    container.classList.add("show");
    timelineContent.classList.add("show");
    cam.classList.add("show");
    prize1.classList.add("dis");
    prize2.classList.add("dis");
    prize3.classList.add("dis");
    prize4.classList.add("dis");
};

sponsors.onclick = () => {
    hideAll();
    timo.textContent = "Sponsors";
    container.classList.add("show");
    sponimg.classList.add("show");
    cam.classList.add("show");
    prize1.classList.add("dis");
    prize2.classList.add("dis");
    prize3.classList.add("dis");
    prize4.classList.add("dis");
};
