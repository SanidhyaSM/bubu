document.addEventListener("DOMContentLoaded", function () {
    const noButton = document.getElementById("noButton");
    const yesButton = document.getElementById("yesButton");

    function createHeart(x, y) {
        const heart = document.createElement("div");
        heart.classList.add("heart");
        heart.style.left = `${x}px`;
        heart.style.top = `${y}px`;
        document.body.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 2000);
    }

    yesButton.addEventListener("click", function (event) {
        for (let i = 0; i < 10; i++) {
            setTimeout(() => createHeart(event.clientX, event.clientY), i * 100);
        }
    });

    noButton.addEventListener("mouseover", function () {
        const viewportWidth = window.innerWidth;
        const viewportHeight = window.innerHeight;
        console.log('h', viewportHeight, 'w', viewportWidth)
        const buttonRect = noButton.getBoundingClientRect();
        
        let newLeft, newTop;
        
        do {
            newLeft = Math.min(1400, Math.random() * (viewportWidth - buttonRect.width)-500);
            newTop = Math.min(800, Math.random() * (viewportHeight - buttonRect.height)-50);
            console.log(newLeft, newTop)
        } while (
            Math.abs(newLeft - buttonRect.left) < 50 &&
            Math.abs(newTop - buttonRect.top) < 50
        );
        
        noButton.style.position = "absolute";
        noButton.style.left = `${newLeft}px`;
        noButton.style.top = `${newTop}px`;
    });
});

// CSS for hearts effect
const style = document.createElement("style");
style.innerHTML = `
    .heart {
        position: fixed;
        font-size: 24px;
        color: red;
        animation: floatUp 2s linear;
    }

    @keyframes floatUp {
        0% { transform: translateY(0); opacity: 1; }
        100% { transform: translateY(-50vh); opacity: 0; }
    }
`;
document.head.appendChild(style);
