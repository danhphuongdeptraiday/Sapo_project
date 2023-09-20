let highlight_news = document.querySelector(".highlight_news");
let news_title = document.querySelector(".news_title");
let news_details = document.querySelector(".news_details");
let news_more_btn_banner = document.querySelector(".news_more_btn");
let news_more_btn = document.querySelector(".news_container_read_more_btn");
let news_card_title = document.querySelectorAll(".news_card_title");
let news_card_short_description = document.querySelectorAll(
  ".news_card_short_description"
);

let news_page_eng = {
  highlight_news: "FEATURED NEWS",
  news_title: "BRANDING FOR VIETNAMESE RICE",
  news_details:
    "The Prime Minister has just approved the Project to develop Vietnamese rice brands until 2020, with a vision to 2030 with the goal of improving the added value, market share and competitiveness of Vietnamese rice...",
  news_more_btn: "SEE MORE >",

  news_card_title:
    "SUMMER-AUTUMN RICE PRICES MAINTAIN STABLE AT A RELATIVELY HIGH LEVEL UNTIL THE END OF THE CAMPUS",
  news_card_short_description:
    "According to the Department of Agriculture and Rural Development of An Giang province, the whole province has basically completed harvesting the rice sowing area...",
};

if (page_language == "ENG") {
  highlight_news.innerText = news_page_eng.highlight_news;
  news_title.innerText = news_page_eng.news_title;
  news_details.innerText = news_page_eng.news_details;
  news_more_btn.innerText = news_page_eng.news_more_btn;
  news_more_btn_banner.innerText = news_page_eng.news_more_btn;
  for (let i = 0; i < news_card_title.length; i++) {
    news_card_title[i].innerText = news_page_eng.news_card_title;
    news_card_short_description[i].innerText =
      news_page_eng.news_card_short_description;
  }
}
