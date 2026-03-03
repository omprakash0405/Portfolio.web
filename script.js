// Typing Effect
const roles = ["Creative Developer", "UI Designer", "Game Builder"];
let i = 0, j = 0, current = "", isDeleting = false;

function typeEffect(){
  current = roles[i];
  document.querySelector(".typing").textContent = current.substring(0,j);

  if(!isDeleting && j < current.length){
    j++;
  } else if(isDeleting && j > 0){
    j--;
  } else{
    isDeleting = !isDeleting;
    if(!isDeleting){
      i = (i + 1) % roles.length;
    }
  }

  setTimeout(typeEffect,100);
}

typeEffect();

// Scroll reveal
const cards = document.querySelectorAll(".card");
window.addEventListener("scroll",()=>{
  cards.forEach(card=>{
    const rect = card.getBoundingClientRect();
    if(rect.top < window.innerHeight - 100){
      card.style.opacity="1";
      card.style.transform="translateY(0)";
    }
  });
});

// Skill animation on scroll
const skillBars = document.querySelectorAll(".skill-progress");

window.addEventListener("scroll",()=>{
  skillBars.forEach(bar=>{
    const rect = bar.getBoundingClientRect();
    if(rect.top < window.innerHeight - 50){
      bar.style.width = bar.getAttribute("data-width");
    }
  });
});
