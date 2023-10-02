// let page_language = localStorage.getItem("Language");
let footer_brand_name = document.querySelector(".footer_container .title");
let footer_location = document.querySelectorAll(".footer_location");

let footer_map_title = document.querySelector(".footer_details_left h2");
let footer_copy_right = document.querySelector(".copy_right");
let footer_office_taiwan = document.getElementById("taiwan_location");
let factory2 = document.getElementById("factory2");
let footer_eng = {
  footer_brand_name:
    "TUONG LAN AGRICULTURAL AND FOODSTUFFS  PROCESSING EXPORT COMPANY LIMITED (TUONG LAN AGREX CO., LTD)",
  footer_location:
    "<b>HEADQUARTER: </b> TRAI TRANG COMMUNE, YEN MY DISTRICT, HUNG YEN PROVINCE, VIET NAM",
  footer_office: `<b>HANOI OFFICE: </b> NO. 49, LE DAI HANH STREET, LE DAI HANH WARD HAI BA TRUNG DISTRICT, HANOI, VIETNAM`,
  factory2:
    "<b>FACTORY NO.2: </b> NO. 68, NATIONAL HIGHWAY 80, THANH PHU HAMLET, TAN BINH COMMUNE, CHAU THANH, DONG THAP PROVINCE, VIETNAM",
  footer_office_taiwan:
    "<b>TAIWAN OFFICE: </b>NO.7, LANE 65 GUOYONG ROAD, FENGSHAN DISTRICT, KAOHSIUNG CITY, TAIWAN",
  // footer_map_title: "MAP",
  footer_copy_right:
    "COPYRIGHT BELONGS TO TUONG LAN ARGEX CO., LTD | SUPPLIED BY SAPO",
};

if (page_language == "ENG") {
  footer_brand_name.innerText = footer_eng.footer_brand_name;
  footer_location[0].innerHTML = footer_eng.footer_location;
  footer_location[2].innerHTML = footer_eng.footer_office;
  // footer_map_title.innerText = footer_eng.footer_map_title;
  footer_copy_right.innerText = footer_eng.footer_copy_right;
  footer_office_taiwan.innerHTML = footer_eng.footer_office_taiwan;
  factory2.innerHTML = footer_eng.factory2;
}
