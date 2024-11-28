if(window.innerWidth > 809){
let carrosel_img = document.querySelectorAll(".carrosel_img");
let dom_image = document.querySelector("#desktop_imgdom");

carrosel_img.forEach(img => {
    img.addEventListener("click", function(){
        dom_image.src = img.src;
    })
})
}