let radio_rapay = document.querySelector('#radio_rapay');
let radio_interest = document.querySelector("#radio_interest");
let radio_repaydiv = document.querySelector('#radio_repaydiv');
let radio_interestdiv = document.querySelector('#radio_interestdiv');


radio_repaydiv.addEventListener("click", function(){
    // ALTERAR COR DA OUTRA DIV PARA PADRÃO:
    radio_interestdiv.style.backgroundColor = 'white';
    radio_interestdiv.style.border = '1px solid hsl(200, 24%, 40%)';
    // ALTERAR COR DA DIV QUE ESTA SENDO CLICADA
    radio_repaydiv.style.backgroundColor = '#FAFAE0';
    radio_rapay.checked = true;
    radio_repaydiv.style.border = '1px solid #a0a053';
})

radio_interestdiv.addEventListener("click", function(){
    // ALTERAR COR DA OUTRA DIV PARA PADRÃO:
    radio_repaydiv.style.backgroundColor = 'white';
    radio_repaydiv.style.border = '1px solid hsl(200, 24%, 40%)';
    // ALTERAR COR DA DIV QUE ESTA SENDO CLICADA
    radio_interestdiv.style.backgroundColor = '#FAFAE0';
    radio_interest.checked = true;
    radio_interestdiv.style.border = '1px solid #a0a053';
})