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

    }else{
        cart_container.style.display = 'block';
        document.querySelector("div#cart_pdv").style.display = 'none';
        document.querySelector("div#cart_empty").style.display = 'flex';
        document.querySelector("#ccbtn").style.display = 'none';
    }
    if(cart_container.style.display == 'block'){
        document.querySelector("#main_sec").addEventListener("click", function(){
            cart_container.style.display = 'none';
        })
    }
}