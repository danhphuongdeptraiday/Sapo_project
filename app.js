let about_us_btn = document.querySelector(".about_us");
let drop_down = document.querySelector(".drop_down");
drop_down.style.display = "none";
about_us_btn.addEventListener("mouseover", function () {
  drop_down.style.display = "flex";
  //   if (drop_down.style.display == "none") {
  //   } else {
  //     drop_down.style.display = "none";
  //   }
});

about_us_btn.addEventListener("mouseout", function () {
  if (drop_down.style.display == "flex") {
    drop_down.style.display = "none";
  }
});

drop_down.addEventListener("mouseover", function () {
  drop_down.style.display = "flex";
});

drop_down.addEventListener("mouseout", function () {
  drop_down.style.display = "none";
});

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides((slideIndex += n));
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}
