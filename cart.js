// Array of object
let product = [
  { id: 1, img: "/image/g27c4-500x500.jpg", title: "MSI Optix MAG241C", price: "30000tk" },
  { id: 2, img: "/image/g27c7-01-500x500.jpg", title: "MSI Optix 231GC", price: "425000tk" },
  { id: 3, img: "/image/modern-md271pw-01-500x500.jpg", title: "MSI GPRO 231", price: "30000tk" },
  { id: 4, img: "/image/ps321urv-01-500x500.jpg", title: "MSI MEGA ULTRON", price: "30000tk" },
  { id: 5, img: "/image/optix-g241v-e2-500x500.jpg", title: "MSI OPTIX ZOOM Ultra", price: "50000tk" },
  { id: 6, img: "/image/pro-mp221-500x500.jpg", title: "MSI Z Pro 165 Ultra", price: "120000tk" },
];

const productContainer = document.querySelector(".shop-product");

product.forEach((item) => {
  const productElement = document.createElement("div");
  productElement.classList.add("product");
  productElement.setAttribute("id", `product-${item.id}`);
  productElement.innerHTML = `
    <img class="product-image" src="${item.img}" alt="${item.title}">
    <h1 class="product-title">${item.title}</h1>
    <h1 class="product-price">${item.price}</h1>
    <select class="product-option">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
      <option value="5">5</option>
      <option value="6">6</option>
      <option value="7">7</option>
      <option value="8">8</option>
      <option value="9">9</option>
      <option value="10">10</option>
    </select>
    <button onClick="addToCart(${item.id})" class="product-button">Add to cart</button>
  `;
  productContainer.appendChild(productElement);
});

let addToCart = (id) => {
  const parentDiv = document.querySelector(".inside");
  const childElement = parentDiv.querySelector(`#product-${id}`);

  if (childElement) {
    const productDetails = document.getElementById(`product-${id}`);
    const option = productDetails.querySelector(".product-option").value;
    const price = productDetails
      .querySelector(".product-price")
      .textContent.replace("tk", "");

    let child = childElement.querySelector(".selected-div");
    let total = child.querySelector(".total").textContent;
    let newTotal = String(Number(total) + Number(option));
    child.querySelector(".total").textContent = newTotal;
    child.querySelector(".price").textContent =
      Number(price) * Number(newTotal);
    document.querySelector(`#product-${id} .increase-title`).textContent =
      newTotal;
  } else {
    const productDetails = document.getElementById(`product-${id}`);
    const image = productDetails.querySelector(".product-image").src;
    const title = productDetails.querySelector(".product-title").textContent;
    const price = productDetails
      .querySelector(".product-price")
      .textContent.replace("tk", "");
    const option = productDetails.querySelector(".product-option").value;

    const productContainer = document.querySelector(".inside");

    const productElement = document.createElement("div");
    productElement.classList.add("selected");
    productElement.setAttribute("id", `product-${id}`);
    productElement.innerHTML = `
      <img class="selected-image" src="${image}" alt="phone-${id}" />
      <div class = "selected-div">
        <h1>${title}</h1>
        <h1 >Price: <span class="price">${price * option}</span>tk</h1>
        <h1 >Total Product: <span class="total">${option}</span></h1>
      </div>
      <div class="remove">
      <button onClick="remove(${id})" class="selected-button">Remove</button>
      <div class="increase">
        <button class="increase-button" onClick="minus(${id})" >-</button>
        <h1 class="increase-title">${option}</h1>
        <button class="increase-button" onClick="plus(${id})" >+</button>
      </div>
      </div>
  `;
    productContainer.appendChild(productElement);
  }
};