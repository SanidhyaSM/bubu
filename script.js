document.addEventListener("DOMContentLoaded", function () {
    const noButton = document.getElementById("noButton");
    const container = document.querySelector(".container");

    noButton.addEventListener("mouseover", function () {
        const containerRect = container.getBoundingClientRect();
        const buttonRect = noButton.getBoundingClientRect();
        
        let newLeft, newTop;
        
        do {
            newLeft = Math.random() * (containerRect.width - buttonRect.width);
            newTop = Math.random() * (containerRect.height - buttonRect.height);
        } while (
            Math.abs(newLeft - buttonRect.left) < 50 &&
            Math.abs(newTop - buttonRect.top) < 50
        );
        
        noButton.style.position = "absolute";
        noButton.style.left = `${newLeft}px`;
        noButton.style.top = `${newTop}px`;
    });
});