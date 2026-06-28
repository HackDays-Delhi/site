const prizes = document.querySelectorAll(".prize");
const where = document.getElementById("where");
const prize2 = document.getElementById("prize2");
const prize3 = document.getElementById("prize3");
const prize4 = document.getElementById("prize4");
const timeline = document.getElementById("timeline")
const indiagate = document.getElementById("indiagate");
const wave = document.getElementById("wave");
const when = document.getElementById("when");
const time1 = document.getElementById("time1");
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
    time1.textContent=`${days}d  ${hours}h  ${mins}m  ${secs}s`;
}
setInterval(countdown,1000);
where.onclick = () => {
    wave.classList.remove("wavenew");
    indiagate.classList.add("add");
    prize2.classList.add("right");
    prize3.classList.add("right");
    prize1.classList.add("rig1");
    prize4.classList.add("rig1");
    wave.classList.add("wavenew");
    timel.classList.remove("show");
    time1.classList.remove("show");
    when1.classList.remove("show");
    timo.classList.remove("show");
    prize2.classList.remove("dis");
    prize3.classList.remove("dis");
    prize1.classList.remove("dis");
    prize4.classList.remove("dis");

}

prizee.onclick = () => {
    wave.classList.remove("wavenew");
    indiagate.classList.remove("add");
    prize2.classList.remove("right");
    prize3.classList.remove("right");
    prize1.classList.remove("rig1");
    prize4.classList.remove("rig1");
    wave.classList.add("wavenew");
    timel.classList.remove("show");
    time1.classList.remove("show");
    when1.classList.remove("show");
    timo.classList.remove("show");
    prize2.classList.remove("dis");
    prize3.classList.remove("dis");
    prize1.classList.remove("dis");
    prize4.classList.remove("dis");
    }


when.onclick = () => {
    wave.classList.remove("wavenew");
    indiagate.classList.remove("add");
    timel.classList.add("show");
    prize2.classList.add("right");
    prize3.classList.add("right");
    prize1.classList.add("rig1");
    prize4.classList.add("rig1");
    wave.classList.add("wavenew");
    time1.classList.add("show");
    when1.classList.add("show");
    timo.classList.remove("show");
    prize2.classList.remove("dis");
    prize3.classList.remove("dis");
    prize1.classList.remove("dis");
    prize4.classList.remove("dis");
    
}

timeline.onclick = () => {
    wave.classList.remove("wavenew");
    indiagate.classList.remove("add");
    prize2.classList.add("dis");
    prize3.classList.add("dis");
    prize1.classList.add("dis");
    prize4.classList.add("dis");
    wave.classList.add("wavenew");
    timel.classList.remove("show");
    time1.classList.remove("show");
    when1.classList.remove("show");
    timo.classList.add("show");
    }

