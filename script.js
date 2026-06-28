const prizes = document.querySelectorAll(".prize");
const where = document.getElementById("where");
const prize2 = document.getElementById("prize2");
const indiagate = document.getElementById("indiagate");
const wave = document.getElementById("wave")
const when = document.getElementById("when")

where.onclick = () => {
    wave.classList.remove("wavenew")
    prize2.classList.remove("rightr");
    prize3.classList.remove("rightr");
    prize1.classList.remove("rig1r");
    prize4.classList.remove("rig1r");
    indiagate.classList.remove("aniir");
    prize2.classList.add("right");
    prize3.classList.add("right");
    prize1.classList.add("rig1");
    prize4.classList.add("rig1");
    indiagate.classList.add("anii");
    wave.classList.add("wavenew")

}

prizee.onclick = () => {
    wave.classList.remove("wavenew")
    prize2.classList.add("rightr");
    prize3.classList.add("rightr");
    prize1.classList.add("rig1r");
    prize4.classList.add("rig1r");
    indiagate.classList.add("aniir");
    prize2.classList.remove("right");
    prize3.classList.remove("right");
    prize1.classList.remove("rig1");
    prize4.classList.remove("rig1");
    indiagate.classList.remove("anii");
    wave.classList.add("wavenew")
}

when.onclick = () => {
    wave.classList.remove("wavenew")
    prize2.classList.remove("rightr");
    prize3.classList.remove("rightr");
    prize1.classList.remove("rig1r");
    prize4.classList.remove("rig1r");
    indiagate.classList.add("aniir");
    indiagate.classList.remove("anii");
    prize2.classList.add("right");
    prize3.classList.add("right");
    prize1.classList.add("rig1");
    prize4.classList.add("rig1");
    indiagate.classList.add("anii");
    wave.classList.add("wavenew")
}


