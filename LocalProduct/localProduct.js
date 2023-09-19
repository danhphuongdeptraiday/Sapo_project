window.addEventListener("load", init);
let list_product_in_LocalProduct_page = [
  {
    product_name: "Gạo huyết rồng",
    product_img: "../Images/Gao_huyet_rong.jpg",
  },

  {
    product_name: "Gạo 3 in 1",
    product_img: "../Images/Gao_3in1.jpg",
  },

  {
    product_name: "Gạo 504",
    product_img: "../Images/Gao_504.jpg",
  },

  {
    product_name: "Gạo Japonica",
    product_img: "../Images/Gao_japonica.jpg",
  },

  {
    product_name: "Gạo Jasmine",
    product_img: "../Images/Gao_jasmine.jpg",
  },

  {
    product_name: "Gạo Lứt",
    product_img: "../Images/Gao_lut.jpg",
  },

  {
    product_name: "Gạo nếp cái hoa vàng",
    product_img: "../Images/Gao_nep_cai_hoa_vang.jpg",
  },

  {
    product_name: "Gạo Nếp tím",
    product_img: "../Images/Gao_nep_tim.jpg",
  },

  {
    product_name: "Gạo ST25",
    product_img: "../Images/Gao_ST25.jpg",
  },

  {
    product_name: "Gạo tẻ hạt trung",
    product_img: "../Images/Gao_te_hat_trung.jpg",
  },

  {
    product_name: "Gạo KDM",
    product_img: "../Images/Gao_KDM.jpg",
  },

  {
    product_name: "Gạo Seng Cu",
    product_img: "../Images/Gao_Seng_Cu.jpg",
  },

  {
    product_name: "Gạo Lứt Japonica",
    product_img: "../Images/Gao_Lut_Japonica.jpg",
  },

  {
    product_name: "Gạo Lứ DT8",
    product_img: "../Images/Gao_Lut_DT8.jpg",
  },

  {
    product_name: "Gạo dẻo giống nhật...",
    product_img: "../Images/each_rice_product.jpg",
  },
];
function init() {
  let get_list_product_container = document.querySelector(
    ".list_products_container"
  );
  let temp_render = "";

  for (let i = 0; i < list_product_in_LocalProduct_page.length; i++) {
    temp_render += `
    <div eachProductId="${i}" class="product">
    <img src="${list_product_in_LocalProduct_page[i].product_img}" alt="" />
    <div class="product_details">
      <div class="product_name_price">
        <div onclick="moveToPage()" class="product_name">${list_product_in_LocalProduct_page[i].product_name}</div>
        <div class="product_price">24.000 vnd</div>
      </div>

      <div class="product_add_to_card">
        <i class="fa-solid fa-cart-shopping"></i>
      </div>
    </div>
  </div>
    `;
  }

  get_list_product_container.innerHTML = temp_render;
}

function moveToPage() {
  let id_of_product =
    this.event.target.parentElement.parentElement.parentElement.getAttribute(
      "eachProductId"
    );

  console.log(id_of_product);
  localStorage.setItem(
    "current_product",
    JSON.stringify(list_product_in_LocalProduct_page[id_of_product])
  );
  window.location.href = "../EachProduct/EachProduct.html";
}
