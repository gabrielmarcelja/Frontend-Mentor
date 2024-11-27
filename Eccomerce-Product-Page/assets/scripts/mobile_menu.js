if(window.innerWidth < 810){
    let menu_cont = document.querySelector("div#menu_container");
    let menu_btn = document.querySelector("#menu_btn");
    menu_btn.addEventListener("click", function(){
        menu_cont.style.display = 'flex';
        document.querySelector("#cart_container").style.display = 'none';
    })
    document.querySelector("#menu_closebtn").addEventListener("click", function(){
        menu_cont.style.display = 'none';
    })
}