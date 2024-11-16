document.querySelector("#calc_btn").addEventListener("click", function(){
    let iamount_inp = parseInt(document.querySelector("#iamount").value);
    let iterm_inp = parseInt(document.querySelector("#iterm").value);
    let irate = parseFloat(document.querySelector("#irate").value);
    let totalpayment = 0;
    let monthlyPayment = 0;
    let typeradio = false;
    let totalMonths = 0;
    let done = false;
    if(document.querySelector("input[name='typeradio']:checked")){
        typeradio = document.querySelector("input[name='typeradio']:checked").value;
    }
    if(iamount_inp > 0 && iterm_inp > 0 && irate > 0 && typeradio){
        if(typeradio == "radio_interest"){
            irate = irate / 100;
            totalpayment = (iamount_inp * irate) * iterm_inp + iamount_inp;
            monthlyPayment = totalpayment / iterm_inp / 12;
            // FORMATANDO NUMEROS
            totalpayment = totalpayment.toLocaleString('eng', {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
            })
            monthlyPayment = monthlyPayment.toLocaleString('eng', {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
            })
            done = true;
        } else if (typeradio == "radio_rapay") {
            irate = irate / 100 / 12;
            totalMonths = iterm_inp * 12;
            monthlyPayment = iamount_inp * (irate * Math.pow(1 + irate, totalMonths)) / (Math.pow(1 + irate, totalMonths) - 1);
            totalpayment = monthlyPayment * totalMonths;
            // FORMATANDO NUMEROS
            totalpayment = totalpayment.toLocaleString('eng', {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
            })
            monthlyPayment = monthlyPayment.toLocaleString('eng', {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
            })
            done = true;
        }
        if(done){
            // ADICIONANDO VALORES NO HTML
            document.querySelector("p.result_value_num").innerHTML = '€' + monthlyPayment;
            document.querySelector("p.result_value_snum").innerHTML = '€' + totalpayment;
            // MOSTRANDO ARTICLE
            document.querySelector("article#result_cont").style.display = 'flex';
            document.querySelector("div.result_main").style.display = 'none';
            document.querySelector("div.result_show").style.display = 'unset';
        }
    }
    if(!iamount_inp){
        document.querySelector(".input_icon_first").style.background = `#D63326`;
        document.querySelector(".input_icon_first").style.color = `white`;
    }else{
        document.querySelector(".input_icon_first").style.background = `hsl(202, 86%, 94%)`;
        document.querySelector(".input_icon_first").style.color = `hsl(202, 55%, 16%)`;
    }

    if(!iterm_inp){
        document.querySelector("#input_iconfirst").style.background = `#D63326`;
        document.querySelector("#input_iconfirst").style.color = `white`;
    }else{
        document.querySelector("#input_iconfirst").style.background = `hsl(202, 86%, 94%)`;
        document.querySelector("#input_iconfirst").style.color = `hsl(202, 55%, 16%)`;
    }

    if(!irate){
        document.querySelector("#input_iconttr").style.background = `#D63326`;
        document.querySelector("#input_iconttr").style.color = `white`;
    }else{
        document.querySelector("#input_iconttr").style.background = `hsl(202, 86%, 94%)`;
        document.querySelector("#input_iconttr").style.color = `hsl(202, 55%, 16%)`;
    }

    if(!typeradio){
        // INPUT RADIO VAZIO
    }
})  