// let page_language = localStorage.getItem("Language");
let footer_brand_name = document.querySelector(".footer_container .title");
let footer_location = document.querySelectorAll(".footer_location");

let footer_map_title = document.querySelector(".footer_details_left h2");
let footer_copy_right = document.querySelector(".copy_right");
let footer_eng = {
  footer_brand_name:
    "TUONG LAN AGRICULTURAL AND FOODSTUFFS PROCESSING EXPORT COMPANY LIMITED (TUONG LAN AGREX., LTD)",
  footer_location:
    "TRAI TRUNG VILLAGE, YEN MY TOWN, YEN MY DISTRICT, HUNG YEN PROVINCE",
  footer_office: `<b>Hanoi Office: </b> NO. 49, LE DAI THANH STREET, HAI BA DISTRICT
    TRUNG. HANOI`,
  footer_map_title: "MAP",
  footer_copy_right:
    "COPYRIGHT BELONGS TO TUONG LAN ARGEX CO., LTD | SUPPLIED BY SAPO",
};

if (page_language == "ENG") {
  footer_brand_name.innerText = footer_eng.footer_brand_name;
  footer_location[0].innerText = footer_eng.footer_location;
  footer_location[2].innerHTML = footer_eng.footer_office;
  footer_map_title.innerText = footer_eng.footer_map_title;
  footer_copy_right.innerText = footer_eng.footer_copy_right;
}
