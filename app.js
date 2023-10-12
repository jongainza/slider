const slides = document.querySelectorAll(".slide");
const prevBtn = document.querySelector(".prevBtn");
const nextBtn = document.querySelector(".nextBtn");

slides.forEach(function (slide, index) {
  slide.style.left = `${index * 100}%`;
});

let counter = 0;
nextBtn.addEventListener("click", function () {
  counter++;
  carrousel();
});
prevBtn.addEventListener("click", function () {
  counter--;
  carrousel();
});

function carrousel() {
  // working with slides

  //   if (counter === slides.length) {
  //     counter = 0;
  //   }
  //   if (counter < 0) {
  //     counter = slides.length - 1;
  //   }

  if (counter > 0) prevBtn.style.display = "inline-block";

  if (counter <= 0) prevBtn.style.display = "none";

  if (counter >= slides.length - 1) nextBtn.style.display = "none";

  if (counter < slides.length - 1) nextBtn.style.display = "inline-block";

  slides.forEach(function (slide) {
    slide.style.transform = `translateX(-${counter * 100}%)`;
  });
}
prevBtn.style.display = "none";
