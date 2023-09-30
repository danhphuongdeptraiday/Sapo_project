// Get language for page
let page_language = localStorage.getItem("Language");

let vie_flag = document.querySelector(".vie");
let eng_flag = document.querySelector(".england");
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
  brand_name: "TUONG LAN AGREX",
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

if (page_language == "ENG") {
  let menu_item = document.querySelectorAll(".item_container .item");
  // let brand_name = document.querySelector(".brand_name");
  // brand_name.innerText = header_eng.brand_name;
  for (let i = 0; i < menu_item.length; i++) {
    if (i == 0) {
      menu_item[i].querySelector("div").innerText = header_eng.main_page_item;
    } else if (i == 1) {
      menu_item[i].querySelector("a div").innerText = header_eng.about_us;
      let list_drop_eng = menu_item[i].querySelectorAll(".drop_down div");
      for (let i = 0; i < list_drop_eng.length; i++) {
        list_drop_eng[i].innerText = header_eng.drop_down_list[i];
      }
    } else if (i == 2) {
      // menu_item[i].querySelector("div").innerText = header_eng.news;
      menu_item[i].querySelector("div").innerText = header_eng.process;
    } else if (i == 3) {
      menu_item[i].querySelector("div").innerText = header_eng.product;
      // } else if (i == 4) {
    }
  }

  vie_flag.style.display = "none";
  eng_flag.style.display = "block";
}

console.log(vie_flag);

vie_flag.addEventListener("click", function () {
  vie_flag.style.display = "block";
  if (vie_flag.style.display == "block") {
    vie_flag.style.display = "none";
    eng_flag.style.display = "block";
    localStorage.setItem("Language", "ENG");
    window.location.reload();
  }
});

eng_flag.addEventListener("click", function () {
  eng_flag.style.display = "block";
  if (eng_flag.style.display == "block") {
    vie_flag.style.display = "block";
    eng_flag.style.display = "none";
    localStorage.setItem("Language", "VIE");
    window.location.reload();
  }
});
