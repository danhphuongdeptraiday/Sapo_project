let about_us_eng = {
  over_intro: "GENERAL INTRODUCTION",
  history_description: [
    "Established in May 2006, TUONG LAN AGREX CO., LTD is proud to be one of the leading enterprises in the field of rice production, processing and export in Vietnam. As a long-time member of the Vietnam Food Association, in recent times, the company's products have conquered demanding markets such as the United States, Canada, European countries, Australia, and Singapore. , etc... and many other countries in the Asia-Pacific region. Our goal is to become the leading supplier of high quality rice from Vietnam. We are committed to origin, strict quality criteria and reasonable prices to customers around the world. TUONG LAN ARGEX CO., LTD would like to sincerely thank you for your interest and always welcome you to our company.",
    "Currently, in order to meet the need for clean and safe rice for Vietnamese family meals, TUONG LAN AGREX CO.,LTD expands and develops the domestic market. Our goal is to become the leading supplier of high quality rice in Vietnam. We are committed to origin, strict quality criteria and reasonable prices to domestic consumers.",
    "TUONG LAN ARGEX CO., LTD would like to sincerely thank you for your interest and always welcome you to our company.",
  ],
};

console.log(about_us_eng.history_description);

let over_intro = document.querySelector(".over_intro");
let history_description_p = document.querySelectorAll(".history_description p");
console.log(history_description_p);
if (page_language == "ENG") {
  over_intro.innerText = about_us_eng.over_intro;
  for (let i = 0; i < about_us_eng.history_description.length; i++) {
    history_description_p[i].innerText = about_us_eng.history_description[i];
  }
}
