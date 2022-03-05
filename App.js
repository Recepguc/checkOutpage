const taxRate = 0.18;
const shippingPrice =15.0;

window.addEventListener("load",()=>{
    localStorage.setItem("taxRate", taxRate);
    localStorage.setItem("shippingPrice", shippingPrice);

    sessionStorage.setItem("taxRate", taxRate);
    sessionStorage.setItem("shippingPrice", shippingPrice);
})
let productsDiv=document.querySelector(".products");
productsDiv.addEventListener("click",()=>{
    let quantityP=event.target.parentElement.parentElement.querySelector("#product-quantity");
    console.log(quantityP);
    if(event.target.classList.contains("fa-minus")||event.target==quantityP.parentElement.firstChildElement){ 
        console.log("minusbuton clicked");
    }

    else if(event.target.classList.contains("fa-plus")||event.target==quantityP.parentElement.lastChildElement){
        console.log("plus button clicked");
    }
    else if(event.target.classList.contains("remove-product")||event.target==quantityP.parentElement.firstChildElement){
        console.log("remove button clicked");
    }
})