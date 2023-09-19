let current_product = JSON.parse(localStorage.getItem("current_product"));

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
