document.querySelector("#calc_btn").addEventListener("click", function(){
    let iamount_inp = parseInt(document.querySelector("#iamount").value);
    let iterm_inp = parseInt(document.querySelector("#iterm").value);
    let irate = parseInt(document.querySelector("#irate").value);
    let typeradio = document.querySelector("input[name='typeradio']:checked").value;
    console.log(typeradio);
    if(iamount_inp > 0 && iterm_inp > 0 && irate > 0 && typeradio){
        
    }else{
        
    }
})  