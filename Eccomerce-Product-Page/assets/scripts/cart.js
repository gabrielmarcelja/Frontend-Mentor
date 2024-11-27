let cart_btn = document.querySelector("#cart_btn");
let cart_menu = document.querySelector("#cart_menu");
cart_btn.addEventListener("click", open_cart);
cart_menu.addEventListener("click", open_cart);
let cart_container = document.querySelector("#cart_container");

function open_cart(){
    let qtd_value = parseInt(document.querySelector("#qtd_value").innerHTML);
    if(qtd_value > 0){
        cart_container.style.display = 'block';
        document.querySelector("div#cart_pdv").style.display = 'flex';
        document.querySelector("div#cart_empty").style.display = 'none';
        document.querySelector("#ccbtn").style.display = 'block';
        document.querySelector("#pqtdv").innerHTML = qtd_value;
        document.querySelector("#cpv").innerHTML = "$" + qtd_value * 125 + ".00";
        document.querySelector("#cart_product-details_div").style.display = 'block';
        document.querySelector("#cart_shadow").style.display = 'block';

    }else{
        cart_container.style.display = 'block';
        document.querySelector("div#cart_pdv").style.display = 'none';
        document.querySelector("div#cart_empty").style.display = 'flex';
        document.querySelector("#ccbtn").style.display = 'none';
        document.querySelector("#cart_product-details_div").style.display = 'none';
        document.querySelector("#cart_shadow").style.display = 'block';
    }

}
    document.querySelector("div#cart_shadow").addEventListener("click", function(){
        document.querySelector("#cart_shadow").style.display = 'none';
        cart_container.style.display = 'none';
    })