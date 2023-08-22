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
