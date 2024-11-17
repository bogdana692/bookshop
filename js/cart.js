let orderBtn = document.querySelector("#orderBtn");
let orderSection = document.querySelector(".order");

orderBtn.addEventListener("click", function (){
    orderBtn.computedStyleMap.display = "none";
    orderSection.computedStyleMap.display = "block";
});
