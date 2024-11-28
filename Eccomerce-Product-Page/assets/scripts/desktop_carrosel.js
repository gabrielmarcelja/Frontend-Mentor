if(window.innerWidth > 809){
let carrosel_img = document.querySelectorAll(".carrosel_img");
let dom_image = document.querySelector("#desktop_imgdom");

carrosel_img.forEach(img => {
    img.addEventListener("click", function(){
        carrosel_img.forEach(item => {item.classList.remove("carrosel_select")});
        dom_image.src = img.src;
        img.classList.add("carrosel_select");
    })
})
}