import { setLocalStorage } from "./utils.mjs";
import ProductData from "./ProductData.mjs";

const dataSource = new ProductData("tents");

function addProductToCart(product) {
  let localcart = JSON.parse(localStorage.getItem("so-cart")) || [];
  if (!Array.isArray(localcart)) {
    localcart = [];
  }
  localcart.push(product);
  setLocalStorage("so-cart", localcart);
}
// add to cart button event handler
async function addToCartHandler(e) {
  const product = await dataSource.findProductById(e.target.dataset.id);
  addProductToCart(product);
}

// add listener to Add to Cart button
document
  .getElementById("addToCart")
  .addEventListener("click", addToCartHandler);
