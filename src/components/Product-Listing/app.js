//Movement Animation to happen
const productCard = document.querySelector(".product");
const productContainer = document.querySelector(".productContainer");
//Items
const title = document.querySelector(".title");
const product = document.querySelector(".productImage img");

//Moving Animation Event
productContainer.addEventListener("mousemove", (e) => {
    let xAxis = (window.innerWidth / 2 - e.pageX) / 25;
    let yAxis = (window.innerHeight / 2 - e.pageY) / 25;
    productCard.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});
//Animate In
productContainer.addEventListener("mouseenter", (e) => {
    productCard.style.transition = "none";
    //Popout
    product.style.transform = "translateZ(200px)";
});
//Animate Out
productContainer.addEventListener("mouseleave", (e) => {
    productCard.style.transition = "all 0.5s ease";
    productCard.style.transform = `rotateY(0deg) rotateX(0deg)`;
    //Popback
    title.style.transform = "translateZ(0px)";
    product.style.transform = "translateZ(0px) rotateZ(0deg)";
});