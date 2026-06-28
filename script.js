const prizes = document.querySelectorAll(".prize");
const where = document.getElementById("where");
const prize2 = document.getElementById("prize2");
const prize3 = document.getElementById("prize3");
const prize4 = document.getElementById("prize4");
const indiagate = document.getElementById("indiagate");
const wave = document.getElementById("wave");
const when = document.getElementById("when");
const time1 = document.getElementById("time1");
const now = new Date();
const event = new Date("2026-07-25T09:00:00");
const diff = event - now;
const day = diff / (1000 * 60 * 60 * 24);
const days = Math.floor(day);
const hour = (day - days) * 24
const hours = Math.floor(hour)
const min = (hour - hours) * 60
const mins = Math.floor(min)
const sec = (min - mins) * 60
const secs = Math.floor(sec)
where.onclick = () => {
    wave.classList.remove("wavenew");
    indiagate.classList.add("add");
    prize2.classList.add("right");
    prize3.classList.add("right");
    prize1.classList.add("rig1");
    prize4.classList.add("rig1");
    wave.classList.add("wavenew");
    timel.classList.remove("show");
    time1.classList.remove("show")

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
    time1.classList.remove("show")
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
    
}



