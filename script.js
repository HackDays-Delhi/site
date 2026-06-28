const prizes = document.querySelectorAll(".prize");
const where = document.getElementById("where");
const prize2 = document.getElementById("prize2");
const prize3 = document.getElementById("prize3");
const prize4 = document.getElementById("prize4");
const indiagate = document.getElementById("indiagate");
const wave = document.getElementById("wave")
const when = document.getElementById("when")

where.onclick = () => {
    wave.classList.remove("wavenew")
    indiagate.classList.add("add")
    prize2.classList.add("right");
    prize3.classList.add("right");
    prize1.classList.add("rig1");
    prize4.classList.add("rig1");

    wave.classList.add("wavenew");
    timel.classList.remove("show");

}

prizee.onclick = () => {
    wave.classList.remove("wavenew")
    indiagate.classList.remove("add")
    prize2.classList.remove("right");
    prize3.classList.remove("right");
    prize1.classList.remove("rig1");
    prize4.classList.remove("rig1");
    wave.classList.add("wavenew");
    timel.classList.remove("show");
}

when.onclick = () => {
    wave.classList.remove("wavenew")
    indiagate.classList.remove("add");
    timel.classList.add("show");
    prize2.classList.add("right");
    prize3.classList.add("right");
    prize1.classList.add("rig1");
    prize4.classList.add("rig1");
    wave.classList.add("wavenew")
    
}


