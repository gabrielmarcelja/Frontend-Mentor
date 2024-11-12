let clear_btn = document.querySelector("#clear_btn");
let iamount = document.querySelector("#iamount");
let iterm = document.querySelector("#iterm");
let irate = document.querySelector("#irate");
let inp_rapay = document.querySelector("#radio_rapay");
let inp_interest = document.querySelector("#radio_interest");

clear_btn.addEventListener("click", function(){
    // LIMPAR VALUE DOS INPUTS DE TEXT E NUMBER
    iamount.value = "";
    iterm.value = "";
    irate.value = "";
    // // LIMPAR INPUT RADIO
    inp_rapay.checked = false;
    inp_interest.checked = false;
    // GARANTIR BACKGROUND BRANCO NO INPUT
    document.querySelectorAll(".radiocont").forEach(element => {
        element.style.backgroundColor = 'white';
    });
    // ESCONDER DIV DO RESULTADO E MOSTRAR DIV INICIAL
    document.querySelector('.result_show').style.display = 'none';
    document.querySelector('.result_main').style.display = 'block';
    // mobile
    document.querySelector("#result_cont").style.display = 'flex';
})