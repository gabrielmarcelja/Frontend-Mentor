let minus_btn = document.querySelector("#minus_btn");
let max_btn = document.querySelector("#max_btn");

minus_btn.addEventListener("click", min_qtd);
max_btn.addEventListener("click", max_qtd);


function max_qtd(){
    let qtd = parseInt(document.querySelector("#qtd_value").innerHTML);
    if(qtd < 100){
        qtd ++;
        document.querySelector("#qtd_value").innerHTML = qtd;

    }
}

function min_qtd(){
    let qtd = parseInt(document.querySelector("#qtd_value").innerHTML);
    if(qtd > 0){
        qtd --;
        document.querySelector("#qtd_value").innerHTML = qtd;
    }
}

//mudar o span do icon do cart