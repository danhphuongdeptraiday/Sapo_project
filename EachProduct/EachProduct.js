let current_product = JSON.parse(localStorage.getItem("current_product"));

let EachProduct_page_eng = {
  product_status: `<b>Status: </b>
  <span>Available</span>
  <br />
  <p><b>Code</b>: TH015</p>`,
  add_to_card_btn: "Add to card",
  amount: "Amount: ",
  buy_now: "Buy",
  tuong_lan_introduce_container:
    "TUONG LAN ARGEX CO., LTD would like to sincerely thank you for your interest and always welcome you to our company.",
};

let product_status = document.querySelector(".product_status div");
let add_to_card_btn = document.querySelector(".add_to_card_btn span");
let buy_now = document.querySelector(".buy_now");
let tuong_lan_introduce_container = document.querySelector(
  ".tuong_lan_introduce_container"
);

let amount = document.querySelector(".amount");

if (page_language == "ENG") {
  product_status.innerHTML = EachProduct_page_eng.product_status;
  add_to_card_btn.innerText = EachProduct_page_eng.add_to_card_btn;
  amount.innerText = EachProduct_page_eng.amount;
  buy_now.innerText = EachProduct_page_eng.buy_now;
  tuong_lan_introduce_container.innerText =
    EachProduct_page_eng.tuong_lan_introduce_container;
}

let product_name = document.getElementsByClassName("product_name");
for (let i = 0; i < product_name.length; i++) {
  product_name[i].innerText = current_product.product_name;
}
let main_pic = document.querySelector(".top_left_side img");
main_pic.src = current_product.product_img;

let bottom_left_side = document.querySelector(".bottom_left_side");

for (let i = 0; i < 4; i++) {
  let img = document.createElement("img");
  img.src = current_product.product_img;
  console.log(img);
  bottom_left_side.appendChild(img);
}

let expand_product = document.querySelector(".extend_product");
let temp = "";
for (let i = 0; i < 5; i++) {
  temp += `
    <div class="item">
          <div class="item_image">
            <img src="${current_product.product_img}" alt="" />
          </div>
          <div class="item_description">
            <b>${current_product.product_name}</b>
            <i>........</i>
          </div>
        </div>
    `;
}

expand_product.innerHTML = temp;
