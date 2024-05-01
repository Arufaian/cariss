let birthdayCard = document.querySelector(".birthdayCard");
let cardFonts = document.querySelector(".cardFonts");
let happy = document.querySelector(".happy");
let cardSfx = new Audio(
  "../assets/Page Flip Sound Effect No copyrhgt ...sound effect LNC.mp3"
);

birthdayCard.addEventListener("click", function () {
  this.classList.toggle("rotate");
  cardFonts.classList.toggle("open");

  setTimeout(() => {
    happy.classList.toggle("invisible");
  }, 120);
  cardSfx.play();
});
