const prizes = document.querySelectorAll(".prize");

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