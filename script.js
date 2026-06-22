const prizes = document.querySelectorAll(".prize");

prizes.forEach((prize) => {
    let isDragging = false;
    let offsetX = 0;
    let offsetY = 0;

    prize.addEventListener("mousedown", (e) => {
        isDragging = true;

        const rect = prize.getBoundingClientRect();
        offsetX = e.clientX - rect.left;
        offsetY = e.clientY - rect.top;

        prize.style.zIndex = Date.now(); // jispe click karo wo upar aa jaye
        prize.style.cursor = "grabbing";
    });

    document.addEventListener("mousemove", (e) => {
        if (!isDragging) return;

        prize.style.left = `${e.clientX - offsetX}px`;
        prize.style.top = `${e.clientY - offsetY}px`;
    });

    document.addEventListener("mouseup", () => {
        isDragging = false;
        prize.style.cursor = "grab";
    });

    prize.addEventListener("dragstart", (e) => {
        e.preventDefault();
    });
});