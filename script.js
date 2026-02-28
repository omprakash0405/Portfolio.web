// Typing Effect
const words = ["B.Tech Student", "Full Stack Developer", "Problem Solver", "Tech Enthusiast"];
let i = 0;
let j = 0;
let currentWord = "";
let isDeleting = false;

function type() {
currentWord = words[i];

if (!isDeleting) {
document.getElementById("typing").textContent = currentWord.substring(0, j++);
if (j > currentWord.length) {
isDeleting = true;
setTimeout(type, 1000);
return;
}
} else {
document.getElementById("typing").textContent = currentWord.substring(0, j--);
if (j === 0) {
isDeleting = false;
i = (i + 1) % words.length;
}
}
setTimeout(type, isDeleting ? 50 : 100);
}

type();


// Scroll Reveal
function reveal() {
let reveals = document.querySelectorAll(".reveal");

for (let i = 0; i < reveals.length; i++) {
let windowHeight = window.innerHeight;
let elementTop = reveals[i].getBoundingClientRect().top;
let elementVisible = 100;

if (elementTop < windowHeight - elementVisible) {
reveals[i].classList.add("active");
}
}
}

window.addEventListener("scroll", reveal);
