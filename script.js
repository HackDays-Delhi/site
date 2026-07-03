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
const timo = document.getElementById("timo")
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
    cam.classList.remove("show");
    timo1.classList.remove("show");
    timo2.classList.remove("show");
    timo3.classList.remove("show");
    timo4.classList.remove("show");
    timo5.classList.remove("show");
    timo6.classList.remove("show");
    timo7.classList.remove("show");
    timo8.classList.remove("show");
    timo9.classList.remove("show");
    timo10.classList.remove("show");
    timo11.classList.remove("show");
    timo12.classList.remove("show");
    container.classList.remove("show");
    spon1.classList.remove("show");
    spon2.classList.remove("show");
    spon3.classList.remove("show");
    spon4.classList.remove("show");

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
    cam.classList.remove("show");
    timo1.classList.remove("show");
    timo2.classList.remove("show");
    timo3.classList.remove("show");
    timo4.classList.remove("show");
    timo5.classList.remove("show");
    timo6.classList.remove("show");
    timo7.classList.remove("show");
    timo8.classList.remove("show");
    timo9.classList.remove("show");
    timo10.classList.remove("show");
    timo11.classList.remove("show");
    timo12.classList.remove("show");
    container.classList.remove("show");
    spon1.classList.remove("show");
    spon2.classList.remove("show");
    spon3.classList.remove("show");
    spon4.classList.remove("show");
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
    cam.classList.remove("show");
    timo1.classList.remove("show");
    timo2.classList.remove("show");
    timo3.classList.remove("show");
    timo4.classList.remove("show");
    timo5.classList.remove("show");
    timo6.classList.remove("show");
    timo7.classList.remove("show");
    timo8.classList.remove("show");
    timo9.classList.remove("show");
    timo10.classList.remove("show");
    timo11.classList.remove("show");
    timo12.classList.remove("show");
    container.classList.remove("show");
    spon1.classList.remove("show");
    spon2.classList.remove("show");
    spon3.classList.remove("show");
    spon4.classList.remove("show");
    
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
    timo1.classList.add("show");
    timo2.classList.add("show");
    timo3.classList.add("show");
    timo4.classList.add("show");
    timo5.classList.add("show");
    timo6.classList.add("show");
    timo7.classList.add("show");
    timo8.classList.add("show");
    timo9.classList.add("show");
    timo10.classList.add("show");
    timo11.classList.add("show");
    timo12.classList.add("show");
    cam.classList.add("show");
    container.classList.add("show");
    timo.textContent = "Timeline";
    spon1.classList.remove("show");
    spon2.classList.remove("show");
    spon3.classList.remove("show");
    spon4.classList.remove("show");
    
    }


sponsors.onclick = () => {
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
    timo1.classList.remove("show");
    timo2.classList.remove("show");
    timo3.classList.remove("show");
    timo4.classList.remove("show");
    timo5.classList.remove("show");
    timo6.classList.remove("show");
    timo7.classList.remove("show");
    timo8.classList.remove("show");
    timo9.classList.remove("show");
    timo10.classList.remove("show");
    timo11.classList.remove("show");
    timo12.classList.remove("show");
    cam.classList.add("show");
    container.classList.add("show");
    timo.textContent = "Sponsors";
    spon1.classList.add("show");
    spon2.classList.add("show");
    spon3.classList.add("show");
    spon4.classList.add("show");

    
}

