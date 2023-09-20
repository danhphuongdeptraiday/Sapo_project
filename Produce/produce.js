let produce_page = {
  produce_process_title: "SAFE RICE PRODUCTION PROCESS",
  heading_define: [
    "CHOOSE RICE GROWING MATERIAL AREAS",
    "RICE PRODUCTION",
    "EVALUATION OF GLOBAL G.A.P CERTIFICATION",
    "PRESERVE",
  ],
  tuong_lan_introduce_container:
    "TUONG LAN ARGEX CO., LTD would like to sincerely thank you for your interest and always welcome you to our company.",
};
let produce_process_title = document.querySelector(".produce_process_title");
let heading_define = document.querySelectorAll(".heading_define");
let tuong_lan_introduce_container = document.querySelector(
  ".tuong_lan_introduce_container"
);

if (page_language == "ENG") {
  produce_process_title.innerText = produce_page.produce_process_title;

  for (let i = 0; i < produce_page.heading_define.length; i++) {
    heading_define[i].innerText = produce_page.heading_define[i];
  }
  tuong_lan_introduce_container.innerText =
    produce_page.tuong_lan_introduce_container;
}
