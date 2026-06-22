const prizes = document.querySelectorAll(".prize");
const where = document.getElementById("where");
const prize2 = document.getElementById("prize2");
const indiagate = document.getElementById("indiagate");

prizes.forEach((prize) => {
    let offsetX = 0;
    let offsetY = 0;
    let dragging = false;

    prize.addEventListener("pointerdown", (e) => {
        dragging = true;

        const rect = prize.getBoundingClientRect();
        offsetX = e.clientX - rect.left;
        offsetY = e.clientY - rect.top;

        prize.style.cursor = "grabbing";
        prize.style.zIndex = Date.now();

        prize.setPointerCapture(e.pointerId);
    });

    prize.addEventListener("pointermove", (e) => {
        if (!dragging) return;

        prize.style.left = `${e.clientX - offsetX}px`;
        prize.style.top = `${e.clientY - offsetY}px`;
    });

    prize.addEventListener("pointerup", () => {
        dragging = false;
        prize.style.cursor = "grab";
    });
});

where.onclick = () => {
    prize2.classList.remove("rightr");
    prize3.classList.remove("rightr");
    prize1.classList.remove("rig1r");
    prize4.classList.remove("rig1r");
    
    prize2.classList.add("right");
    prize3.classList.add("right");
    prize1.classList.add("rig1");
    prize4.classList.add("rig1");
    indiagate.classList.add("anii");

}

prizee.onclick = () => {
    prize2.classList.add("rightr");
    prize3.classList.add("rightr");
    prize1.classList.add("rig1r");
    prize4.classList.add("rig1r");
    indiagate.classList.remove("aniir");
    prize2.classList.remove("right");
    prize3.classList.remove("right");
    prize1.classList.remove("rig1");
    prize4.classList.remove("rig1");
    indiagate.classList.remove("anii");
}


