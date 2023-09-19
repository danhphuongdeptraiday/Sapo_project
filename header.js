let about_us_btn = document.querySelector(".about_us");
let drop_down = document.querySelector(".drop_down");
drop_down.style.display = "none";
about_us_btn.addEventListener("mouseover", function () {
  drop_down.style.display = "flex";
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

let header_eng = {
  main_page_item: "HOME PAGE",
  about_us: "ABOUT US",
  drop_down_list: [
    "GENERAL INTRODUCTION",
    "TUONG LAN FACTORY",
    "CERTIFICATIONS",
    "SAFE RICE PRODUCTION PROCESS",
  ],
  news: "NEWS",
  process: "SAFE RICE PRODUCTION PROCESS",
  product: "PRODUCT",
};

let menu_item = document.querySelectorAll(".item_container .item");
for (let i = 0; i < menu_item.length; i++) {
  if (i == 0) {
    menu_item[i].querySelector("div").innerText = header_eng.main_page_item;
  } else if (i == 1) {
    menu_item[i].querySelector("a").innerText = header_eng.about_us;
    let list_drop_eng = menu_item[i].querySelectorAll(".drop_down div");
    for (let i = 0; i < list_drop_eng.length; i++) {
      list_drop_eng[i].innerText = header_eng.drop_down_list[i];
    }
  } else if (i == 2) {
    menu_item[i].querySelector("div").innerText = header_eng.news;
  } else if (i == 3) {
    menu_item[i].querySelector("div").innerText = header_eng.process;
  } else if (i == 4) {
    menu_item[i].querySelector("div").innerText = header_eng.product;
  }
}
