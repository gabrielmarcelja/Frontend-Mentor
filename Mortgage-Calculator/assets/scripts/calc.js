document.querySelector("#calc_btn").addEventListener("click", function(){
    let iamount_inp = parseInt(document.querySelector("#iamount").value);
    let iterm_inp = parseInt(document.querySelector("#iterm").value);
    let irate = parseFloat(document.querySelector("#irate").value);
    let totalpayment = 0;
    let monthlyPayment = 0;
    let typeradio = false;
    if(document.querySelector("input[name='typeradio']:checked")){
        typeradio = document.querySelector("input[name='typeradio']:checked").value;
    }
    if(iamount_inp > 0 && iterm_inp > 0 && irate > 0 && typeradio){
    //    FAZER CALCULO E MOSTRAR
        if(typeradio == "radio_interest"){
            // FOI SELECIONADO A OPÇÃO INTEREST ONLY
            irate = irate / 100;
            totalpayment = (iamount_inp * irate) * iterm_inp + iamount_inp;
            let monthlyPayment = totalpayment / iterm_inp / 12;
            console.log(monthlyPayment);
            console.log(totalpayment)
            // TOTALPAYMENT AGORA É O TOTAL A SE PAGAR
        } else if (typeradio == "radio_rapay") {
            // FOI SELECIONADO A OPÇÃO REPAYMENT
            irate = irate / 100 / 12;
            let totalMonths = iterm_inp * 12;
            monthlyPayment = iamount_inp * (irate * Math.pow(1 + irate, totalMonths)) / (Math.pow(1 + irate, totalMonths) - 1);
            totalpayment = monthlyPayment * totalMonths;
            console.log(monthlyPayment);

            console.log(totalpayment)
        }
    }else{
        console.log("n")
        // IDENTIFICAR ERRO E MOSTRAR
    }
})  