window.addEventListener("load", init);

var list_product_vie = [
  {
    product_name: "Gạo Nếp cái hoa vàng",
    product_image: "./Images/Gao_nep_cai_hoa_vang.jpg",
  },

  {
    product_name: "Gạo Tẻ hạt trung",
    product_image: "./Images/Gao_te_hat_trung.jpg",
  },

  {
    product_name: "Gạo ST25",
    product_image: "./Images/Gao_ST25.jpg",
  },

  {
    product_name: "Gạo Jasmine",
    product_image: "./Images/Gao_jasmine.jpg",
  },

  {
    product_name: "Gạo Lứt",
    product_image: "./Images/Gao_lut.jpg",
  },
];

function init() {
  let slideIndex = 1;
  showSlides(slideIndex);

  // Next/previous controls
  function plusSlides(n) {
    showSlides((slideIndex += n));
  }

  // Thumbnail image controls
  function currentSlide(n) {
    showSlides((slideIndex = n));
  }

  function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {
      slideIndex = 1;
    }
    if (n < 1) {
      slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    // dots[slideIndex - 1].className += " active";
  }

  setInterval(function () {
    plusSlides(1);
  }, 2000);

  let right_product_container = document.querySelector(
    ".right_product_container"
  );
  let temp_HTML_Render_Product = "";
  for (let i = 0; i < list_product_vie.length; i++) {
    temp_HTML_Render_Product += `
    <div productId="${i}" class="single_right_product_container">
    <div class="single_right_product_container_img">
    <img src="${list_product_vie[i].product_image}" alt="" />
    </div>
    
    <!-- single_right_product_container_details -->
    <div class="single_right_product_container_details">
    <!-- title -->
    <h3 class="product_title">${list_product_vie[i].product_name}</h3>
    
    <!-- price -->
    
    <!-- button_see_more_description -->
    <div onclick="getEle()" class="more_specific_product">
      <h2 class="detailsButton">Chi Tiết</h2>
      <i
        style="margin-left: 10px"
        class="fa-solid fa-arrow-right"
      ></i>
    </div>
    </div>
    </div>
    `;
  }

  let t = `
<!-- single_right_product_container -->
          <div class="single_right_product_container">
            <div class="four_img_container">
            <div class="each_four_img">
                <img src="./Images/Gao_huyet_rong.jpg" alt="" />
              </div>
              <div class="each_four_img">
              <img src="./Images/Gao_3in1.jpg" alt="" />
              </div>
              <div class="each_four_img">
              <img src="./Images/Gao_nep_tim.jpg" alt="" />
              </div>
              <div class="each_four_img">
              <img src="./Images/Gao_504.jpg" alt="" />
              </div>
              </div>
              
              <div class="more_specific_see_more_product">
              <h2>Xem thêm</h2>
              <i style="margin-left: 10px" class="fa-solid fa-arrow-right"></i>
              </div>
              </div>`;

  temp_HTML_Render_Product = temp_HTML_Render_Product + t;
  console.log(right_product_container);

  right_product_container.innerHTML = temp_HTML_Render_Product;
}

// console.log(list_product_vie);

function getEle() {
  let id_of_product =
    this.event.target.parentElement.parentElement.parentElement.getAttribute(
      "productid"
    );

  console.log(list_product_vie[id_of_product]);
  localStorage.setItem(
    "current_product",
    JSON.stringify(list_product_vie[id_of_product])
  );
  window.location.href = "./EachProduct/EachProduct.html";
}
