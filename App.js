const taxRate = 0.18;
const shippingPrice = 15.0;
let sub1 = document.getElementById("subtotal");
let tax1 = document.getElementById("tax");
let shipping1 = document.getElementById("shipping");
let carttotal1 = document.getElementById("carttotal");

window.addEventListener("load", () => {
  localStorage.setItem("taxRate", taxRate);
  localStorage.setItem("shippingPrice", shippingPrice);

  sessionStorage.setItem("taxRate", taxRate);
  sessionStorage.setItem("shippingPrice", shippingPrice);
});
let productsDiv = document.querySelector(".products");
productsDiv.addEventListener("click", () => {
  let quantityP =
    event.target.parentElement.parentElement.querySelector("#product-quantity");
  console.log(quantityP);
  if (
    event.target.classList.contains("fa-minus") ||
    event.target == quantityP.parentElement.firstElementChild
  ) {
    // console.log("minusbuton clicked");
    if (quantityP.innerText > 1) {
      quantityP.innerText -= 1;
      calculateproducttotal(quantityP);
      calculatecarttotal(quantityP);
    } else {
      quantityP.innerText = 0;
    }
  } else if (
    event.target.classList.contains("fa-plus") ||
    event.target == quantityP.parentElement.lastElementChild
  ) {
    // console.log("plus button clicked");
    quantityP.innerText++;
    calculateproducttotal(quantityP);
    calculatecarttotal(quantityP);
  } else if (event.target.classList.contains("remove-product")) {
    // console.log("remove button clicked");
    quantityP.parentElement.parentElement.parentElement.remove();
  }
});
// function productpricetotal(quantityP){
//     let productprice=quantityP.parentElement.parentElement.querySelector("strong")
//     console.log(productprice);
// }
// productpricetotal()
const calculateproducttotal = (quantityP) => {
  let productprice =
    quantityP.parentElement.parentElement.querySelector("strong");
  let totalprice = quantityP.parentElement.parentElement.querySelector(
    ".product-line-price"
  );
  totalprice.innerText = productprice.innerText * quantityP.innerText;
};
const calculatecarttotal = () => {
  let produckttotalprices = document.querySelectorAll(".product-line-price");
  //console.log(produckttotalprices);
  let subtotal = 0;

  produckttotalprices.forEach((p) => {
    subtotal += parseFloat(p.innerText);
  });
  console.log(subtotal);
  let taxtprice = subtotal * localStorage.getItem("taxRate");
  console.log(taxtprice);
  let shipping = subtotal * localStorage.getItem("shippingPrice");
  console.log(shipping);
  let carttotal = shipping + taxtprice + subtotal;
  console.log(carttotal);

  sub1.innerText = subtotal.toFixed(2);
  tax1.innerText = taxtprice.toFixed(2);
  shipping1.innerText = taxtprice.toFixed(2);
  carttotal1.innerText = carttotal.toFixed(2);
};
