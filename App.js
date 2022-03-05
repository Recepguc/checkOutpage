const taxRate = 0.18;
const shippingPrice =15.0;

window.addEventListener("load",()=>{
    localStorage.setItem("taxRate", taxRate);
    localStorage.setItem("shippingPrice", shippingPrice);

    sessionStorage.setItem("taxRate", taxRate);
    sessionStorage.setItem("shippingPrice", shippingPrice);
})
