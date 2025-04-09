document.addEventListener("DOMContentLoaded", () => {
    // Background Circle Animation on Page Load
    gsap.to(".background-circle", {
        duration: 1.5,
        width: "100%",
        height: "100%",
        ease: "power2.in",
        opacity:"0.5",
    });

    // Page Load Transition Effect
    gsap.to(".page-transition", {
        duration: 1.5,
        scale: 0,
        ease: "power2.out",
        opacity:"1",
    });
});

document.getElementById("nextPage").addEventListener("click", () => {
    // Page Exit Animation
    gsap.to(".page-transition", {
        duration: 1,
        scale: 3,
        ease: "power2.in",
        onComplete: () => {
            window.location.href ="about.html"; // Navigate after animation
        }
    });
});


// const roles = ["Web Developer", "UI/UX Designer", "Frontend Developer", "React.js Expert", "WordPress Developer"];
// let roleIndex = 0;
// let charIndex = 0;
// const typingText = document.querySelector(".typing-text");

// function typeEffect() {
//     if (charIndex < roles[roleIndex].length) {
//         typingText.innerHTML += roles[roleIndex].charAt(charIndex);
//         charIndex++;
//         setTimeout(typeEffect, 100);
//     } else {
//         setTimeout(eraseEffect, 1500);
//     }
// }

// function eraseEffect() {
//     if (charIndex > 0) {
//         typingText.innerHTML = roles[roleIndex].substring(0, charIndex - 1);
//         charIndex--;
//         setTimeout(eraseEffect, 50);
//     } else {
//         roleIndex = (roleIndex + 1) % roles.length;
//         setTimeout(typeEffect, 500);
//     }
// }

// // Start the typing animation when the page loads
// document.addEventListener("DOMContentLoaded", () => {
//     setTimeout(typeEffect, 500);
// });
// const menuToggle = document.getElementById("menuToggle");
// const sidebar = document.querySelector(".sidebar");

// menuToggle.addEventListener("click", () => {
//     if (sidebar.style.right === "0px") {
//         sidebar.style.right = "-70px";
//     } else {
//         sidebar.style.right = "0px";
//     }
// });

    

       
