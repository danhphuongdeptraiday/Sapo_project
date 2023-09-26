let about_us_eng = {
  over_intro: "GENERAL INTRODUCTION",
  history_description: [
    "Established in May 2006, TUONG LAN AGREX CO., LTD is proud to be one of the leading enterprises in the field of rice production, processing and export in Vietnam. As a long-time member of the Vietnam Food Association, in recent times, the company's products have conquered demanding markets such as the United States, Canada, European countries, Australia, and Singapore. , etc... and many other countries in the Asia-Pacific region. Our goal is to become the leading supplier of high quality rice from Vietnam. We are committed to origin, strict quality criteria and reasonable prices to customers around the world. TUONG LAN ARGEX CO., LTD would like to sincerely thank you for your interest and always welcome you to our company.",
    "Currently, in order to meet the need for clean and safe rice for Vietnamese family meals, TUONG LAN AGREX CO.,LTD expands and develops the domestic market. Our goal is to become the leading supplier of high quality rice in Vietnam. We are committed to origin, strict quality criteria and reasonable prices to domestic consumers.",
    "TUONG LAN ARGEX CO., LTD would like to sincerely thank you for your interest and always welcome you to our company.",
  ],

  certificate_heading: "Certificate",
  certificate_overview:
    "With many years of experience, diverse products, modern and synchronous machinery, factory and warehouse systems, we have received many domestic and international certificates, contributing to Affirming the quality of the company's production and products",
  certificate_iso: "1. ISO 9001 Certificate",
  certificate_safe_food: "2. Food safety and hygiene certification",
};

let address_data = {
  line1: [
    "",
    "Headquarter - Vietnam",
    "Factory No.02 - Vietnam",
    "Representative Office Hanoi - Vietnam",
    "Representative Office Kaohsiung - Taiwan",
  ],

  line2: [
    "Address",
    "Trai Trang Commune, Yen My District, Hung Yen Province, Vietnam",
    "No. 68, National Highway 80, Thanh Phu Hamlet, Tan Binh Commune, Chau Thanh, Dong Thap Province, Vietnam",
    "No. 49, Le Dai Hanh Street, Le Dai Hanh Ward, Hai Ba Trung District, Hanoi, Vietnam",
    "No.7, Lane 65 GuoYong Road, Fengshan District, Kaohsiung City, Taiwan",
  ],
  telephone: "Fax/Telephone",
};

let over_intro = document.querySelector(".over_intro");
let history_description_p = document.querySelectorAll(".history_description p");

let line1 = document.querySelectorAll(".line1 th");
let line2 = document.querySelectorAll(".line2 td");
let telephone_fax = document.querySelector(".telephone_fax");

let certificate_heading = document.querySelector(".certificate h1");
let certificate_overview = document.querySelector(".certificate h3");
let certificate_sub_heading = document.querySelectorAll(".certificate h2");

if (page_language == "ENG") {
  over_intro.innerText = about_us_eng.over_intro;
  for (let i = 0; i < about_us_eng.history_description.length; i++) {
    history_description_p[i].innerText = about_us_eng.history_description[i];
  }

  for (let i = 0; i < line1.length; i++) {
    line1[i].innerText = address_data.line1[i];
  }

  for (let i = 0; i < line2.length; i++) {
    line2[i].innerText = address_data.line2[i];
  }

  telephone_fax.innerText = address_data.telephone;

  certificate_heading.innerText = about_us_eng.certificate_heading;
  certificate_overview.innerText = about_us_eng.certificate_overview;
  certificate_sub_heading[0].innerText = about_us_eng.certificate_iso;
  certificate_sub_heading[1].innerText = about_us_eng.certificate_safe_food;
}
